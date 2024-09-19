import React from "react";
import { createContext, useState, useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { Navigation } from "./Navigation";
import { NavigationFooter } from "./NavigationFooter";
import { useToast } from "@chakra-ui/react";
import { API_URL } from "./UI/constants.js";

//creating context for data
const DataContext = createContext();

//manage and provide data
export const Root = ({ initialEvents, children }) => {
  const subHeaderText =
    "Events management application, where users can sign up to create, edit or delete events with their respective authentication and authorization. The Front-end of this project has been deployed with some limitations.  New events can be created without the need of user's authorization token to view its functionality however, in order to avoid modification to existing data, events can not be modified or deleted.  Lastly, please keep in mind the server will take a couple of minutes to fully load all items on the page.";

  const [eventsData, setEventsData] = useState([]);
  const [categories, setCategories] = useState([]);
  const [users, setUsers] = useState([]);
  const [description, setDescription] = useState([]);
  const [filteredEvents, setFilteredEvents] = useState([]);
  const [imgAnimation, setImgAnimation] = useState([]);
  // const [currentUser, setCurrentUser] = useState(null);
  const [header, setHeader] = useState("Events Management");
  const [subHeader, setSubHeader] = useState(subHeaderText);

  const toast = useToast();
  const location = useLocation();

  //filters events data based on search - to be called in SearchItem/EventsPage.
  const handleFilteredEvents = (searchValue) => {
    if (searchValue === "") {
      setFilteredEvents(eventsData);
    } else {
      const matchedEvents = eventsData.filter((event) => {
        const { location, title, categoryIds } = event;

        //Check if search value includes/matches loacation or title
        const matchesLocationOrTitle =
          location.toLowerCase().includes(searchValue.toLowerCase()) ||
          title.toLowerCase().includes(searchValue.toLowerCase());

        //Finds from categories and checks if search value includes/matches any category name
        const matchesCategory = categoryIds.some((categoryId) => {
          const category = categories.find(
            (category) => category.id === categoryId
          );
          return (
            category &&
            category.name.toLowerCase().includes(searchValue.toLowerCase())
          );
        });

        return matchesLocationOrTitle || matchesCategory;
      });
      setFilteredEvents(matchedEvents);
    }
  };

  //Global fetch for events/categories
  useEffect(() => {
    const fetchData = async () => {
      try {
        //Fetch events
        const eventsResponse = await fetch(`${API_URL}/events`);
        const eventsData = await eventsResponse.json();
        setEventsData(eventsData);
        //for filtering events - user input- search functionality
        setFilteredEvents(eventsData);

        //Fetch categories
        const categoriesResponse = await fetch(`${API_URL}/categories`);
        const categoriesData = await categoriesResponse.json();
        setCategories(categoriesData);

        // //Fetch users
        if (users) {
          const userResponse = await fetch(`${API_URL}/users`);
          const userData = await userResponse.json();
          setUsers(userData);
          // setCurrentUser(userData[0]);
        }

        //fetch imageAnimation
        const animatedImgResponse = await fetch(`${API_URL}/imgAnimation`);
        const animateData = await animatedImgResponse.json();
        setImgAnimation(animateData[0]);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  //handles event data when succesfully created on the server/ moved and modified the following piece of code from EventsPage.
  const handleEventAdded = async (NewEventData) => {
    try {
      //send POST
      const newEventResponse = await fetch(`${API_URL}/events`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(NewEventData),
      });

      if (newEventResponse.ok) {
        const updatedEventsResponse = await fetch(`${API_URL}/events`);
        const updatedEvents = await updatedEventsResponse.json();
        setEventsData(updatedEvents);

        setFilteredEvents((prevFilteredEvents) => [
          ...prevFilteredEvents,
          NewEventData,
        ]);

        toast({
          title: "Event Created",
          description: "Your event has been successfuly created!",
          status: "success",
          duration: 5000,
          isClosable: true,
        });
      } else {
        toast({
          title: "Error",
          description: "Failed to create new event. Please try again later",
          status: "error",
          duration: 5000,
          isClosable: true,
        });
      }
    } catch (error) {
      console.error("Error adding event:", error);
    }
  };

  //function to handle the new event getting automatically posted without refreshing page.
  const addEvent = (newEvent) => {
    setFilteredEvents((prevFilteredEvents) => [
      ...prevFilteredEvents,
      newEvent,
    ]);
  };

  //fucntion to Delete auto
  const deleteEvent = (eventId) => {
    setFilteredEvents((prevFilteredEvents) => [
      ...prevFilteredEvents.filter((e) => e.id !== eventId),
    ]);
  };

  //object to define the values for children components
  const contextValue = {
    events: eventsData,
    categories,
    users,
    // currentUser,
    // setCurrentUser,
    description,
    showToast: toast,
    handleFilteredEvents,
    handleEventAdded,
    filteredEvents,
    addEvent,
    deleteEvent,

    imgAnimation,
    header,
    subHeader,
  };

  return (
    <DataContext.Provider value={contextValue}>
      <Navigation />
      {/* {children} */}
      <Outlet />

      <NavigationFooter />
    </DataContext.Provider>
  );
};

export default DataContext;
