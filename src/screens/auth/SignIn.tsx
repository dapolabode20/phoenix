import Button from "@/components/Button";
import {
  Box,
  HStack,
  Image,
  Input,
  Link,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import logo from "@/assets/images/97dd1cf698224af98c971bb299cc287546ffa09e.png";

const SignIn = () => {
  return (
    <VStack width={"100%"} gapY={2}>
      <Image width={266} height={266} src={logo} alt="img" />
      <Text fontWeight={400} fontSize={"60px"}>
        Welcome to Pheonix Nest
      </Text>
      <VStack width={"80%"} gapY={6}>
        <Box width={"100%"} height={"56px"}>
          <Input
            border={"none"}
            borderBottom={"1px solid #D9D9D9"}
            borderRadius={"none"}
            width={"100%"}
            placeholder="Email"
          />
        </Box>
        <Box width={"100%"} height={"56px"}>
          <Input
            border={"none"}
            borderBottom={"1px solid #D9D9D9"}
            borderRadius={"none"}
            width={"100%"}
            placeholder="Password"
          />
        </Box>
        <Stack alignItems={'end'} width={'100%'}>
          <Link
            href="/reset-password"
            color="#13669D"
            fontSize={"20px"}
            fontWeight={500}
          >
            Forgot Your Password?
          </Link>
        </Stack>
      </VStack>
      <VStack >
        <Link href="/form">
        <Button
          paddingX={"100px"}
          paddingY={"20px"}
          label="SIGN IN"
          onClick={() => {}}
          variant="primary"
        />
        </Link>
        <HStack fontSize={20} fontWeight={400} alignItems={"center"}>
          <Text>Dont have an account? </Text>
          <Link color="#13669D">sign up now</Link>
        </HStack>
      </VStack>
    </VStack>
  );
};

export default SignIn;
