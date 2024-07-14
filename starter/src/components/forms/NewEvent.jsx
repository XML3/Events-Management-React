import { useState, useRef, useContext, useEffect } from "react";
import { Form } from "react-router-dom";
import DataContext from "../Root";
import { API_URL } from "../UI/constants.js";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  FormControl,
  Input,
  FormLabel,
  Select,
  useToast,
} from "@chakra-ui/react";

const NewEvent = ({ isOpen, onClose, onEventAdded, categories }) => {
  const formRef = useRef(null);
  const toast = useToast();

  const { addEvent, users } = useContext(DataContext);

  const [formData, setFormData] = useState({
    title: "",
    image: "",
    lineup: "",
    description: "",
    categoryIds: "",
    startTime: "",
    endTime: "",
    location: "",
    createdBy: "",
  });

  useEffect(() => {
    if (!isOpen) {
      resetForm();
    }
  }, [isOpen]);

  const fetchUserId = async (userId) => {
    try {
      const response = await fetch(`${API_URL}/users/${userId}`);
      if (response.ok) {
        const userData = await response.json();
        //Update formData with user's image
        setFormData((previousData) => ({
          ...previousData,
          image: userData.image,
        }));
      } else {
        console.error("Failed to fetch user details");
      }
    } catch (error) {
      console.error("Error fetching user details:", error);
    }
  };
  // ********************************

  //image upload handler-change (updates state when selected in the form)
  //This function is only available when the image upload option is set in the return, this has been removed, but kept in the code for reference, so users do not overload my free image hosting site
  // const handleImageChange = (event) => {
  //   const imageFile = event.target.files[0]; //retrieves first file selected by user. [0] for single file
  //   setFormData((previousData) => ({
  //     ...previousData,
  //     image: imageFile,
  //     // userImage: imageFile,
  //   }));
  // };
  //********************************

  //input handler
  const handleInputChange = (event) => {
    const { name, value } = event.target;

    if (name === "categoryIds") {
      setFormData((previousData) => ({
        ...previousData,
        // categoryIds: [parseInt(value)],
        categoryIds: value ? [value] : [],
      }));
    } else if (name === "createdBy") {
      setFormData((previousData) => ({
        ...previousData,
        createdBy: value,
      }));
    } else {
      setFormData((previousData) => ({
        ...previousData,
        [name]: value,
      }));
    }
  };

  //action - POST / handle form Submit-Save /success-error message to user
  const takeAction = async () => {
    try {
      const response = await fetch(`${API_URL}/events`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const data = await response.json();
        addEvent({ ...formData, id: data.id });

        //notify the user
        toast({
          title: "Event Created",
          description: "Your event has been successfuly created!",
          status: "success",
          duration: 5000,
          isClosable: true,
        });

        return { status: 200, json: { success: true } };
      } else {
        toast({
          title: "Error",
          description: "An Error occurred while creting the event",
          status: "error",
          duration: 5000,
          isClosable: true,
        });
      }
    } catch (error) {
      return { status: 500, json: { error: "Internal Server Error" } };
    }
  };

  //handle Save - takeAction - reset data
  const handleSaveClick = async () => {
    //call takeAction to perform the POST request when Save is clicked
    const result = await takeAction();

    if (result.json.success) {
      onEventAdded();
      resetForm(); //clear form fields
      onClose();
    } else {
      console.error("Error submitting form:", result.json.error);
    }
  };

  //function to reset data
  const resetForm = () => {
    setFormData({
      title: "",
      image: "",
      lineup: "",
      description: "",
      category: "",
      startTime: "",
      endTime: "",
      location: "",
      createdBy: "",
      // userImage: "",
    });
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Create New Event</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <form id="new-form" ref={formRef}>
            <FormControl>
              <FormLabel>Title</FormLabel>
              <Input
                name="title"
                value={formData.title}
                onChange={handleInputChange}
              />
            </FormControl>
            <FormControl>
              <FormLabel>Image URL</FormLabel>
              {/* /Event Image upload / this section is commented out to avoid overloading my hosting site*/}
              {/* <Input
                name="image"
                type="file"
                accept="image/*"
                onChange={handleImageChange}
              /> */}

              {/* Image by URL / to avoid uploads to my hosting site from users */}
              <Input
                name="image"
                value={formData.image}
                onChange={handleInputChange}
              />
            </FormControl>
            <FormControl>
              <FormLabel>Artists</FormLabel>
              <Input
                name="lineup"
                value={formData.lineup}
                onChange={handleInputChange}
              />
            </FormControl>
            <FormControl>
              <FormLabel>Description</FormLabel>
              <Input
                name="description"
                value={formData.description}
                onChange={handleInputChange}
              />
            </FormControl>
            <FormControl>
              <FormLabel>Location</FormLabel>
              <Input
                name="location"
                value={formData.location}
                onChange={handleInputChange}
              />
            </FormControl>
            <FormControl>
              <FormLabel>Start Time</FormLabel>
              <Input
                name="startTime"
                type="text"
                placeholder="Start Time"
                value={formData.startTime}
                onChange={handleInputChange}
              />
            </FormControl>
            <FormControl>
              <FormLabel>End Time</FormLabel>
              <Input
                name="endTime"
                type="text"
                placeholder="End Time"
                value={formData.endTime}
                onChange={handleInputChange}
              />
            </FormControl>
            <FormControl>
              <FormLabel>Category</FormLabel>
              <Select
                //modified this section from "category in name and value of formData"
                name="categoryIds"
                value={formData.categoryIds}
                onChange={handleInputChange}
              >
                <option value="">Select a category</option>
                {categories.map((category) => (
                  <option key={category.id} value={category.id}>
                    {category.name}
                  </option>
                ))}
              </Select>
            </FormControl>
            <FormControl>
              {/* User information */}
              <FormLabel>User Name</FormLabel>
              {/* modified to map through users in a dropdown menu */}
              <Select
                name="createdBy"
                type="text"
                placeholder="User Name"
                value={formData.createdBy}
                onChange={handleInputChange}
              >
                <option value="">Select a user</option>
                {users.map((user) => (
                  <option key={user.id} value={user.id}>
                    {user.name}
                  </option>
                ))}
              </Select>
            </FormControl>
            {/* <FormControl> */}
            {/* /User Image */}
            {/* <FormLabel>User Image</FormLabel>
              <Input
                name="userImage"
                type="file"
                accept="image/*"
                onChange={handleImageChange}
              />
            </FormControl> */}
          </form>
        </ModalBody>

        <ModalFooter>
          {/* Additional modal footer actions  */}
          <Button
            form="new-form"
            colorScheme="blue"
            mr={3}
            onClick={handleSaveClick}
          >
            Save
          </Button>
          <Button onClick={onClose}>Close</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default NewEvent;
