import Button from "@/components/Button";
import {Link} from 'react-router-dom'
import {
  Box,
  HStack,
  Image,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import companyImg from "@/assets/images/Company-amico.png";
import com3 from "@/assets/images/community.png";
import com1 from "@/assets/images/community1.png";
import com2 from "@/assets/images/community2.png";
import com4 from "@/assets/images/community3.png";

interface navprops {
  title: string;
  path: string;
}

const OnBoarding = () => {
  const datalink: navprops[] = [
    {
      title: "Start your journey",
      path: "",
    },
    {
      title: "Accelerate your progress",
      path: "",
    },
    {
      title: "Raise Capital",
      path: "",
    },
    {
      title: "Get Incorporated",
      path: "",
    },
  ];

  const communityData = [
    {
      img: com1,
      text: "Lorem ipsum dolor sit amet, sea feugait placerat vituperatoribus no.",
    },
    {
      img: com2,
      text: "Lorem ipsum dolor sit amet, sea feugait placerat vituperatoribus no.",
    },
    {
      img: com3,
      text: "Lorem ipsum dolor sit amet, sea feugait placerat vituperatoribus no.",
    },
    {
      img: com4,
      text: "Lorem ipsum dolor sit amet, sea feugait placerat vituperatoribus no.",
    },
  ];
  return (
    <VStack width={"100%"} gap={20} paddingX={20}>
      <Stack
        flexDirection={"row"}
        justifyContent={"space-around"}
        width={"100%"}
        paddingY={7}
      >
        <HStack gap={10}>
          {datalink.map((data, i) => (
            <Link key={i} to={data.path}>
             <Text  fontSize={"20px"} fontWeight={700} cursor={"pointer"}>  {data.title}</Text>
            </Link>
          ))}
        </HStack>

        <HStack gap={10}>
          <Link to="/getstarted">
            <Button onClick={() => {}} label="Get Started" variant="outline" />
          </Link>
          <Link to={'sign-in'} >
          <Text fontSize={"20px"} fontWeight={700}>Login</Text>  
          </Link>
        </HStack>
      </Stack>

      <HStack
        border={"2px solid"}
        borderColor={"#D9D9D9"}
        borderRadius={"30px"}
        width={"100%"}
        justifyContent={"space-between"}
        marginTop={50}
        paddingX={10}
        paddingY={5}
      >
        <VStack gap={10} alignItems={"start"}>
          <Text fontSize={"70px"} fontWeight={800}>
            Startup Smarter
          </Text>
          <Text fontSize={"30px"} fontWeight={500}>
            The best place to start, grow and fund your website
          </Text>
          <HStack gap={5}>
          <Link to="create-account">   <Button label="GET STARTED" onClick={() => {}} variant="primary" />  </Link>         
              <Button
                label="GET INCORPORATED"
                onClick={() => {}}
                variant="outline"
              />
           
          </HStack>
        </VStack>

        <Box>
          <Image src={companyImg} />
        </Box>
      </HStack>

      <HStack
        bgColor={"#EBF4F2"}
        borderRadius={20}
        width={"100%"}
        padding={20}
        gap={10}
      >
        {communityData.map((data, i) => (
          <VStack key={i}>
            <Image src={data.img} />
            <Text fontSize={"20px"} fontWeight={500} textAlign={"center"}>
              {data.text}
            </Text>
          </VStack>
        ))}
      </HStack>

      <Box width={"100%"}>
        <Text fontSize={"70px"} fontWeight={800}>
          Start your <br /> journey
        </Text>
      </Box>
    </VStack>
  );
};

export default OnBoarding;
