import Nav from "@/components/Nav";
import { Box, HStack, Text, VStack } from "@chakra-ui/react";
import { useState } from "react";
import ContactInfo from "./ContactInfo";
import ChangePassword from "./ChangePassword";
import PrivacySettings from "./PrivacySettings";
import DeleteAccount from "./DeleteAccount";
import ManageCompanies from "./ManageCompanies";
import EmailSettings from "./EmailSettings";

const AccountSetting = () => {
  const sidebar = [
    { key: "contact-info", title: "Contact Information" },
    { key: "password", title: "Password" },
    { key: "manage-companies", title: "Manage Companies" },
    { key: "privacy-setting", title: "Privacy Settings" },
    { key: "email-settings", title: "Email Settings" },
    { key: "delete-account", title: "Delete Account" },
  ];

  const [active, setActive] = useState("contact-info");

  const renderContent = () => {
    switch (active) {
      case "contact-info":
        return <ContactInfo/>
      case "password":
        return <ChangePassword />
      case "manage-companies":
        return <ManageCompanies/>
      case "privacy-setting":
        return <PrivacySettings/>
      case "email-settings":
        return <EmailSettings/>
      case "delete-account":
        return <DeleteAccount/>
      default:
        return null;
    }
  };

  return (
    <Box mt="150px">
      <Nav />

      <HStack alignItems="flex-start" justifyContent="space-between" px={8} py={6} paddingX={'100px'}>
        {/* Sidebar */}
        <VStack width="20%" align="stretch" gap={2}>
          <Text fontSize="xl" fontWeight="bold" mb={4}>
            Account Settings
          </Text>

          <VStack align="stretch" gap={2}>
            {sidebar.map((item) => (
              <Box
                key={item.key}
                cursor="pointer"
                borderLeftWidth="4px"
                borderLeftColor={active === item.key ? "red.500" : "transparent"}
                fontWeight={active === item.key ? "600" : "400"}
                color={active === item.key ? "red.600" : "gray.700"}
                px={4}
                py={2}
                transition="all 0.2s ease"
                _hover={{
                  borderLeftColor: "red.400",
                  color: "red.500",
                }}
                onClick={() => setActive(item.key)}
              >
                {item.title}
              </Box>
            ))}
          </VStack>
        </VStack>

        {/* Main Content */}
        <Box width="78%">{renderContent()}</Box>
      </HStack>
    </Box>
  );
};

export default AccountSetting;
