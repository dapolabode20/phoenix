import Icon from "@/assets/Icon";
import {Link} from 'react-router-dom'
import {
  Box,
  Checkbox,
  HStack,
  Stack,
  Text,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import Button from "@/components/Button";
import CustomInput from "@/components/input";
import Nav from "@/components/Nav";

const FormData = () => {
  return (
    <Box width={"100%"}>
      <Nav />
      <VStack width={"100%"} marginTop={"150px"} paddingX={"100px"} gapY={10}>
        <HStack width={"100%"} justifyContent={"space-between"}>
          <HStack
            width={"40%"}
            height={"100%"}
            paddingX={"16px"}
            gap={"7"}
            alignItems={"start"}
          >
            <Box
              width={119}
              height={119}
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
            <VStack alignItems={"start"} color={"#000"}>
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
          <Link to="/formdata-two">
            <Stack
              alignItems={"center"}
              justifyContent={"center"}
              width={"70px"}
              height={70}
              border={"1px solid #DF8F8C"}
            >
              <Icon type="edit" />
            </Stack>
          </Link>
        </HStack>
        {/* form */}
        <HStack
          alignItems={"start"}
          width={"100%"}
          justifyContent={"space-between"}
        >
          <VStack width={"58%"} gapY={"8"}>
            {/* biography */}
            <VStack
              padding={8}
              width={"100%"}
              gap={4}
              border={"2px solid #E3E3E3"}
            >
              <Box width={"100%"}>
                <VStack width={"100%"} alignItems={"start"}>
                  <Text fontSize={"20px"} fontWeight={700}>
                    Biography
                  </Text>
                  <Textarea
                    resize="none"
                    rows={12}
                    border={"1px solid #000000B2"}
                  />
                </VStack>
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
            {/* experience */}
            <VStack
              padding={8}
              width={"100%"}
              gap={4}
              border={"2px solid #E3E3E3"}
            >
              <Box width={"100%"}>
                <VStack width={"100%"} alignItems={"start"}>
                  <Text fontSize={"20px"} fontWeight={700}>
                    Experience
                  </Text>
                  <VStack width={"100%"} gapY={10}>
                    <CustomInput
                      name="company name"
                      label="Company Name"
                      onChange={() => {}}
                    />
                    <CustomInput
                      name="position"
                      label="Positiom"
                      onChange={() => {}}
                    />
                    <HStack width={"100%"} justifyContent={"space-between"}>
                      <Box width={"40%"}>
                        <CustomInput
                          name="start year"
                          label="Start Year"
                          onChange={() => {}}
                        />
                      </Box>
                      <Text mt={"20px"} fontSize={"20px"}>
                        to
                      </Text>
                      <Box width={"40%"}>
                        <CustomInput
                          name="end year"
                          label="End Year"
                          onChange={() => {}}
                        />
                      </Box>
                    </HStack>
                    <VStack width={"100%"} alignItems={"start"} gapY={2}>
                      <Checkbox.Root>
                        <Checkbox.HiddenInput />
                        <Checkbox.Control />
                        <Checkbox.Label fontSize={"25px"} fontWeight={400}>
                          Current Position
                        </Checkbox.Label>
                      </Checkbox.Root>
                      <Text>Remove</Text>
                    </VStack>
                  </VStack>
                </VStack>
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

            {/* Areas of experience */}
            <VStack
              padding={8}
              width={"100%"}
              gap={16}
              border={"2px solid #E3E3E3"}
            >
              <Box width={"100%"}>
                <VStack width={"100%"} alignItems={"start"}>
                  <Text fontSize={"20px"} fontWeight={700}>
                    Areas of Experience
                  </Text>
                  <VStack width={"100%"}>
                    <CustomInput
                      name="areas of experience"
                      label="Areas of Expertise"
                      onChange={() => {}}
                    />
                  </VStack>
                </VStack>
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
          <VStack width={"40%"} gapY={8}>
            <VStack
              padding={8}
              width={"100%"}
              gap={16}
              border={"2px solid #E3E3E3"}
            >
              <Box width={"100%"}>
                <VStack width={"100%"} alignItems={"start"}>
                  <Text fontSize={"20px"} fontWeight={700}>
                    Contact Information
                  </Text>
                  <VStack width={"100%"} gapY={10}>
                    <CustomInput
                      name="personal website"
                      label="Personal Website"
                      onChange={() => {}}
                    />
                    <CustomInput
                      name="phone number"
                      label="Phone Number"
                      onChange={() => {}}
                    />
                  </VStack>
                </VStack>
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

            <Box width={"100%"}>
              <Text fontSize={"20px"} fontWeight={700}>
                Companies
              </Text>
              <VStack
                padding={8}
                width={"100%"}
                gap={16}
                border={"2px solid #E3E3E3"}
              >
                <HStack
                  width={"100%"}
                  height={"100%"}
                  paddingX={"16px"}
                  gap={"7"}
                >
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
                  <VStack alignItems={"start"} color={""}>
                    <Text fontWeight={"700"} fontSize={"20px"}>
                      Bode’s Startup
                    </Text>
                    <Text fontWeight={"400"} fontSize={"20px"}>
                      jun 30, 2025
                    </Text>
                    <Text fontWeight={"400"} fontSize={"20px"}>
                      unpublished
                    </Text>
                  </VStack>

                  <Box marginLeft={"4"}>
                    <Icon type="arrowdown" />
                  </Box>
                </HStack>
              </VStack>
            </Box>
          </VStack>
        </HStack>
      </VStack>
    </Box>
  );
};

export default FormData;
