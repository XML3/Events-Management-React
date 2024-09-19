import { TextInput } from "./UI/TextInput";

export const SearchItem = ({ handleFilteredEvents }) => {
  const handleChange = (e) => {
    const searchValue = e.target.value;
    //calls function from the Root component, passes search user input as argument.
    handleFilteredEvents(searchValue);
  };

  return (
    <div className="search item">
      <TextInput
        placeholder="Name, Location or Category"
        fontSize={{ base: "0.6rem", sm: "0.7rem", md: "0.7rem" }}
        color={"#d5d1bf"}
        mb={"3rem"}
        position={"relative"}
        left={{ base: 0, md: "1px" }}
        w={{ base: "12rem", sm: "15rem", md: "20rem" }}
        h={{ base: "40px", md: "50px" }}
        onChange={handleChange}
      />
    </div>
  );
};
