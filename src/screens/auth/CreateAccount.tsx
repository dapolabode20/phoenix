import Button from "@/components/Button";
import CustomInput from "@/components/input"; 
import {Link} from 'react-router-dom'
import { Box, HStack,  Stack, Text, VStack } from "@chakra-ui/react";
import { Checkbox } from "@chakra-ui/react";

const CreateAccount = () => {
  return (
    <Box height="100vh" position="relative" overflowY="auto">
      <Stack
        position="fixed"
        top={0}
        bgColor="#D9433D"
        height="100px"
        width="100%"
        alignItems="center"
        justifyContent="center"
        zIndex={10}
      >
        <HStack width={"80%"} justifyContent={"right"}>
          <HStack gapX={"20px"}>
            <Text fontSize={"20px"} fontWeight={700} color={"#DBCECE"}>
              Already have a Phoenix Account?
            </Text>
            <Link to="/sign-in">
            <Button
              onClick={() => {}}
              color="#DBCECE"
              borderColor={'#DBCECE'}
              label="SIGN IN"
              variant="white"
            />
            </Link>       
          </HStack>
        </HStack>
      </Stack>

      <Stack
        width="100%"
        height="100%"
        paddingTop={"100px"}
        alignItems="center"
      >
        <VStack width={"70%"}>
          <VStack>
            <Text fontSize={"60px"} fontWeight={400}>
              Create your account
            </Text>
            <Text fontSize={"30px"} textAlign={"center"} fontWeight={400}>
              A few last details and we’ll get to work helping you build an
              investable company!
            </Text>
          </VStack>
          <VStack width={"100%"} gapY={"16"}>
            <HStack width={"100%"} gapX={"20"}>
              <CustomInput
                name="firstName"
                label="First Name"
                placeholder="First Name"
                border="1px solid #D9D9D9"
                borderRadius="5px"
              />
              <CustomInput
                name="lastName"
                label="Last Name"
                placeholder="Last Name"
                border="1px solid #D9D9D9"
                borderRadius="5px"
              />
            </HStack>
            <CustomInput
              name="Email"
              label="Email"
              placeholder="Email"
              border="1px solid #D9D9D9"
              borderRadius="5px"
            />
            <CustomInput
              name="Password"
              label="Password"
              placeholder="Password"
              border="1px solid #D9D9D9"
              borderRadius="5px"
            />

            <VStack width={"100%"} alignItems={"start"} gapY={10}>
              <Checkbox.Root>
                <Checkbox.HiddenInput />
                <Checkbox.Control />
                <Checkbox.Label fontSize={"30px"} fontWeight={400}>
                  I accept the terms and conditions
                </Checkbox.Label>
              </Checkbox.Root>
              <Button onClick={() => {}} variant="primary" label="SIGN UP" />
            </VStack>
          </VStack>
        </VStack>
      </Stack>
    </Box>
  );
};

export default CreateAccount;
