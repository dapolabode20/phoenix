import Button from "@/components/Button";
import { Box, Checkbox, HStack, Stack, Text, VStack } from "@chakra-ui/react";

const PrivacySettings = () => {
  return (
    <VStack>
      <HStack width={"full"} justifyContent={"space-between"}>
        <Text fontSize={"40px"} fontWeight={400}>
          Privacy Settings
        </Text>
      </HStack>
      <VStack width={"100%"} alignItems={"start"} gapY={4}>
        <VStack width={"100%"} alignItems={"start"}>
          <Text fontSize={"20px"} fontWeight={400}>
            Your privacy settings control how people can contact yoy and connect
            with you on Phoenix Nest. It;’s important to note that you are
            automatically connected to anyone affiliated to your company or
            organization.{" "}
          </Text>
        </VStack>
        <Box width={'100%'}>
          <Checkbox.Root>
            <Checkbox.HiddenInput />
            <Checkbox.Control />
            <Checkbox.Label fontSize={"25px"} fontWeight={400}>
              People must enter my email address to send a connection request.
            </Checkbox.Label>
          </Checkbox.Root>
        </Box>

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

export default PrivacySettings;
