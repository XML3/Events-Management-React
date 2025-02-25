import { Input, Center } from "@chakra-ui/react";

export const TextInput = ({ changeFn, ...props }) => {
  return (
    <Center>
      <Input
        ml={3}
        variant="outline"
        borderColor="rgba(213, 209, 191, 0.8)"
        focusBorderColor="#610979"
        w={"23rem"}
        mt={"1rem"}
        onChange={changeFn}
        {...props}
      />
    </Center>
  );
};
