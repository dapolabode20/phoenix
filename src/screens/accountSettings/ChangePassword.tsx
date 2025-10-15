
import Button from "@/components/Button";
import { Box, HStack, Input, Stack, Text, VStack } from "@chakra-ui/react";


const ChangePassword = () => {
  return (
       <VStack>
      <HStack width={"full"} justifyContent={"space-between"}>
        <Text fontSize={"40px"} fontWeight={400}>
          Change Password
        </Text>
      </HStack>
      <VStack width={"100%"} alignItems={"start"} gapY={4}>
        <VStack width={"100%"} alignItems={"start"}>
          <Text fontSize={"20px"} fontWeight={700}>
           Passwords are case-sensitive and must be at least 6 characters long.
          </Text>
        </VStack>
        <VStack width={"100%"} alignItems={"start"}>
          <Text  fontSize={"20px"} fontWeight={500}>
            Current Password
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
          <Text  fontSize={"20px"} fontWeight={500}>
           New Password
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
          <Text  fontSize={"20px"} fontWeight={500}>
           Verify New Password
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
  )
}

export default ChangePassword