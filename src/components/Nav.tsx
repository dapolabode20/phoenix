import Icon from "@/assets/Icon";
import {
  Box,
  HStack,
  Link,
  Menu,
  Portal,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";

const Nav = () => {
  return (
    <Stack
      position="fixed"
      flexDirection={"row"}
      top={0}
      bgColor="#D9433D"
      height="100px"
      width="100%"
      paddingX={"150px"}
      alignItems="center"
      justifyContent="center"
      zIndex={10}
    >
      <Box width={"60%"}>
        <HStack
          width={"100%"}
          justifyContent={"space-between"}
          paddingX={"12px"}
        >
          <Text fontSize={"20px"} fontWeight={700} color={"#DBCECE"}>
            Bode’s Startup{" "}
          </Text>
          <HStack gap={6}>
            <Icon type="search" />
            <Icon type="notification" />
            <Icon type="message" />
          </HStack>
        </HStack>
      </Box>

      <Stack
        alignItems={"center"}
        justifyContent={"center"}
        borderLeft={"1px solid #D9D9D9"}
        height={"100%"}
      >
        <Menu.Root>
          <Menu.Trigger asChild>
            <Box _hover={{ bgColor: "transparent" }}>
              <HStack paddingX={"16px"} gap={"7"}>
                <Box
                  width={"79px"}
                  height={"79px"}
                  display={"flex"}
                  alignItems={"center"}
                  justifyContent={"center"}
                  borderRadius={"full"}
                  bg={"#62AD9A"}
                  color={"#fff"}
                  fontWeight={"700"}
                  fontSize={"20px"}
                >
                  <Text>BA</Text>
                </Box>
                <VStack alignItems={"start"} color={"#fff"}>
                  <Text fontWeight={"700"} fontSize={"20px"}>
                    Bode
                  </Text>
                  <Text fontWeight={"400"} fontSize={"20px"}>
                    Enterpreneur
                  </Text>
                </VStack>
                <Box marginLeft={"4"}>
                  <Icon type="arrowdown" />
                </Box>
              </HStack>
            </Box>
          </Menu.Trigger>
          <Portal>
            <Menu.Positioner bgColor={"#D9433D"} width={"350px"}>
              <Menu.Content bgColor={"#D9433D"} gapY={2}>
                <Menu.Item value="new-txt">
                  <Link
                    _hover={{ textDecoration: "none" }}
                    _focus={{ boxShadow: "none" }}
                    border="none"
                    outline="none"
                    width={"100%"}
                    href="account-setting"
                    fontSize={"20px"}
                    paddingY={"20px"}
                    color={"#fff"}
                  >
                    Account Settings
                  </Link>
                </Menu.Item>
                <Menu.Item
                  value="new-file"
                  fontSize={"20px"}
                  paddingY={"20px"}
                  color={"#fff"}
                >
                  Profile
                </Menu.Item>

                <Menu.Item value="export">
                  <Link
                    fontSize={"20px"}
                    paddingY={"20px"}
                    color={"#fff"}
                    href="/sign-in"
                    textDecoration={'none'}
                    outline={'none'}
                    width={'100%'}
                  >
                    Sign Out
                  </Link>
                </Menu.Item>
              </Menu.Content>
            </Menu.Positioner>
          </Portal>
        </Menu.Root>
      </Stack>
    </Stack>
  );
};

export default Nav;
