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
        color={"0f0f0f"}
        width={{
          base: "15rem",
          sm: "25rem",
          md: "35rem",
          lg: "45rem",
          "2xl": "75rem",
        }}
        height={{ base: "40px", md: "50px" }}
        onChange={handleChange}
      />
    </div>
  );
};
