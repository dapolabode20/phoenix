import Icon from "@/assets/Icon";
import Button from "@/components/Button";
import { Box, HStack, Input, Stack, Text, VStack } from "@chakra-ui/react";

const ContactInfo = () => {
  return (
    <VStack>
      <HStack width={"full"} justifyContent={"space-between"}>
        <Text fontSize={"40px"} fontWeight={400}>
          Contact Information
        </Text>
        <Box>
          <Stack
            alignItems={"center"}
            justifyContent={"center"}
            width={"70px"}
            height={70}
            border={"1px solid #DF8F8C"}
          >
            <Icon type="edit" />
          </Stack>
        </Box>
      </HStack>

      {/* <VStack width={'100%'} alignItems={'start'}>
          <VStack width={'100%'} alignItems={'start'}>
             <Text fontSize={'20px'} fontWeight={700}>Email Address</Text>
             <Box border={'1px solid #000000'} width={'100%'} padding={4}>
                <Text fontSize={'20px'} fontWeight={700}>bodeolajuwon@gmail.com</Text>
             </Box>
          </VStack>
          <VStack width={'100%'} alignItems={'start'}>
             <Text fontSize={'20px'} fontWeight={700}>Primary Address</Text>
             <Text fontSize={'20px'} fontWeight={700}>Lagos, Nigeria</Text>
          </VStack>
           
        </VStack> */}

      <VStack width={"100%"} alignItems={"start"} gapY={4}>
        <VStack width={"100%"} alignItems={"start"}>
          <Text fontSize={"20px"} fontWeight={700}>
            Email Address
          </Text>
          <Text fontSize={"20px"} fontWeight={700}>
            bodeolajuwon@gmail.com pending primary (unconfirmed) Resend
            Confrimation
          </Text>
        </VStack>
        <VStack width={"100%"} alignItems={"start"}>
          <Text color="#13669D" fontSize={"20px"} fontWeight={700}>
            Add Email Address
          </Text>
          <Box width={"100%"}>
            <Input
              borderRadius={"none"}
              width={"100%"}
              height={"48px"}
              border={"1px solid #000000"}
              outline={"none"}
            />
          </Box>
        </VStack>

        <VStack width={"100%"} alignItems={"start"}>
          <Text color="#13669D" fontSize={"20px"} fontWeight={700}>
            Add Phone Number
          </Text>
          <Box width={"100%"}>
            <Input
              borderRadius={"none"}
              width={"100%"}
              height={"48px"}
              border={"1px solid #000000"}
              outline={"none"}
            />
          </Box>
        </VStack>
        <VStack width={"100%"} alignItems={"start"}>
          <Text fontSize={"20px"} fontWeight={700}>
            Add Phone Number
          </Text>
          <VStack gapY={4} width={"100%"}>
            <Input
              borderRadius={"none"}
              width={"100%"}
              height={"48px"}
              border={"1px solid #000000"}
              outline={"none"}
            />
            <Input
              borderRadius={"none"}
              width={"100%"}
              height={"48px"}
              border={"1px solid #000000"}
              outline={"none"}
            />
          </VStack>
        </VStack>
        <VStack width={"100%"} alignItems={"start"}>
          <Text fontSize={"20px"} fontWeight={700}>
            City, State, Country
          </Text>
          <VStack gapY={4} width={"100%"}>
            <Input
              borderRadius={"none"}
              width={"100%"}
              height={"48px"}
              border={"1px solid #000000"}
              outline={"none"}
            />
          </VStack>
        </VStack>
        <Stack width={"100%"} display={"flex"} alignItems={"end"}>
          <HStack>
            <Button
              onClick={() => {}}
              variant="cancel"
              height={"39px"}
              label="CANCEL"
              fontWeight={500}
              fontSize={"16px"}
            />
            <Button
              onClick={() => {}}
              variant="primary"
              height={"39px"}
              label="SAVE"
              fontSize={"16px"}
              fontWeight={500}
            />
          </HStack>
        </Stack>
      </VStack>
    </VStack>
  );
};

export default ContactInfo;
