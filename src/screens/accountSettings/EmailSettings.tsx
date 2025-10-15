import { Box, Checkbox, HStack, Table, Text, VStack } from "@chakra-ui/react";
const EmailSettings = () => {
  return (
    <VStack>
      <HStack width={"full"} justifyContent={"space-between"}>
        <Text fontSize={"40px"} fontWeight={400}>
          Email Settings
        </Text>
      </HStack>
      <VStack width={"100%"} alignItems={"start"} gapY={6}>
        <Table.Root size="lg" showColumnBorder variant="outline">
          <Table.Header>
            <Table.Row>
              <Table.ColumnHeader>General Communications</Table.ColumnHeader>
              <Table.ColumnHeader>Email me</Table.ColumnHeader>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            <Table.Row>
              <Table.Cell>When an Investor messages me directly</Table.Cell>
              <Table.Cell colorPalette={'#D9433D'}>
                 <Checkbox.Root>
            <Checkbox.HiddenInput />
            <Checkbox.Control />
          </Checkbox.Root>
              </Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table.Root>
        <Table.Root size="lg" showColumnBorder variant="outline">
          <Table.Header>
            <Table.Row>
              <Table.ColumnHeader>Weekly/Monthly updates</Table.ColumnHeader>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            <Table.Row>
              <Table.Cell> <Checkbox.Root>
            <Checkbox.HiddenInput />
            <Checkbox.Control />
            <Checkbox.Label fontSize={"16px"} fontWeight={400}>
              People must enter my email address to send a connection request.
            </Checkbox.Label>
          </Checkbox.Root></Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table.Root>
        <Box width={"100%"}>
         
        </Box>
      </VStack>
    </VStack>
  );
};

export default EmailSettings;
