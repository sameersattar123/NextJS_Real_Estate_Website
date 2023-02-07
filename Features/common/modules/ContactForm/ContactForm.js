import React from "react";
import { useForm } from "react-hook-form";
import { Box, Checkbox,Button, FormControl, Input, Text } from "@chakra-ui/react";

const ContactForm = () => {
  const {
    register,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <Box
      width="100%"
      padding="2rem"
      borderRadius="sm"
      backgroundColor="white"
      color="gray.700"
    >
      <FormControl>
        <Input
          marginTop="1.3rem"
          id="name"
          type="text"
          placeholder="Name"
          {...register("name", { required: true })}
        />
        <Input
          marginTop="1.3rem"
          id="email"
          type="email"
          placeholder="Email"
          {...register("email", { required: true })}
        />
        <Input
          marginTop="1.3rem"
          id="phone"
          type="number"
          placeholder="Phone"
          {...register("phone", { required: true })}
        />
        <Checkbox
          marginTop="1.3rem"
          id="gdpr"
          type="checkbox"
          placeholder="GDPR"
          {...register("gdpr", { required: true })}
        >
        <Text>
          I consent to having this website store my submitted info
        </Text>
        </Checkbox>
      </FormControl>
        <Button
          type="submit"
          colorScheme="blue"
          marginTop="2rem"
          padding="2rem"
          fontSize="xl"
        >
      Send Message
        </Button>
    </Box>
  );
};

export default ContactForm;
