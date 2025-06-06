import { Input, Center } from "@chakra-ui/react";

export const TextInput = ({ changeFn, ...props }) => {
  return (
    <Center>
      <Input
        ml={3}
        variant="outline"
        borderColor={"#0f0f0f"}
        focusBorderColor="#c50d34"
        w={"23rem"}
        mt={"1rem"}
        onChange={changeFn}
        {...props}
      />
    </Center>
  );
};
