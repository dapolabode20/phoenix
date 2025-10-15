import Icon from "@/assets/Icon";

import { Box, HStack, Text, VStack } from "@chakra-ui/react";

const ManageCompanies = () => {
  return (
    <VStack gapY={10}>
      <HStack width={"full"} justifyContent={"space-between"}>
        <Text fontSize={"40px"} fontWeight={400}>
          Manage Companies
        </Text>
      </HStack>
      <Box width={"100%"}>
        <VStack width={"100%"} gap={16}>
          <HStack width={"100%"} height={"100%"} paddingX={"16px"} gap={"7"}>
            <Box
              width={79}
              height={79}
              display={"flex"}
              alignItems={"center"}
              justifyContent={"center"}
              bg={"#62AD9A"}
              color={"#fff"}
              fontWeight={"700"}
              fontSize={"20px"}
            >
              <Text>BA</Text>
            </Box>
            <VStack width={'80%'} alignItems={"start"} color={""}>
              <Text fontWeight={"700"} fontSize={"20px"}>
                Bode’s Startup
              </Text>
              <HStack width={'100%'} alignItems={'center'} justifyContent={'space-between'}>
                <Text fontWeight={"400"} fontSize={"20px"}>
                  Created on jun 30, 2025
                </Text>
                <HStack>
                    <Icon type="delete" />
                    <Text fontSize='20px' color={'#13669D'}>Delete Company</Text>
                </HStack>
              </HStack>
            </VStack>

            <Box marginLeft={"4"}>
              <Icon type="arrowdown" />
            </Box>
          </HStack>
        </VStack>
      </Box>
    </VStack>
  );
};

export default ManageCompanies;
