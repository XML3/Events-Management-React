import { Input, Center } from "@chakra-ui/react";

export const TextInput = ({ changeFn, ...props }) => {
  return (
    <Center>
      <Input
        ml={3}
        variant="outline"
        borderColor={"#d5d1bf"}
        focusBorderColor="#610979"
        w={"23rem"}
        mt={"1rem"}
        onChange={changeFn}
        {...props}
      />
    </Center>
  );
};
