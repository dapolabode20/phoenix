import { useState } from "react";
import Button from "@/components/Button";
import {
  Box,

  HStack,
  Input,
  Link,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";

interface TextProps {
  question: string;
  answer: { ans: string }[];
}

const GetStarted = () => {
  const testData: TextProps[] = [
    {
      question: "What’s the most important next step for your startup?",
      answer: [
        { ans: "Validate my idea" },
        {
          ans: "Find additional team members (co-founders, advisors, contractors)",
        },
        { ans: "Get my product in market" },
        { ans: "Raise funds" },
        { ans: "Other" },
      ],
    },
    {
      question: "How do you feel about taking your next step?",
      answer: [
        { ans: "Very confident / I know what I’m doing" },
        { ans: "Less confident / I could use some help" },
      ],
    },
    {
      question: "How is your company structured?",
      answer: [{ ans: "PLC" }, { ans: "LLC" }],
    },
  ];

  // 🧠 Track current step (0 = intro, 1..n = questions)
  const [currentStep, setCurrentStep] = useState(0);

  const handleNext = () => {
    if (currentStep < testData.length) {
      setCurrentStep(currentStep + 1);
    }
    else if (currentStep === 3){
     window.location.href = '/form'
    }
     else {
      console.log("SAVE & CONTINUE clicked");
    }
  };

  const handleBack = () => {
    if (currentStep > 0) setCurrentStep(currentStep - 1);
  };

  const handleRestart = () => {
    setCurrentStep(0);
  };

  const isLastStep = currentStep >= 1;
  const isIntro = currentStep === 0;

  return (
    <Box height="100vh" position="relative" overflowY="auto">
      <Stack
        position="fixed"
        top={0}
        bgColor="#D9433D"
        height="100px"
        width="100%"
        alignItems="center"
        justifyContent="center"
        zIndex={10}
      >
        <HStack fontSize="20px" fontWeight={700} gap={10} color="#DBCECE">
          <Text color="#ffffff">Your Startup</Text>
          <Text>{`>`}</Text>
          <Text>Personal Investment</Text>
          <Text>{`>`}</Text>
          <Text>Resources</Text>
        </HStack>
      </Stack>

      <Stack
        width="100%"
        height="100%"
        paddingTop="150px"
        paddingBottom="150px"
        alignItems="center"
        justifyContent="center"
      >
        {isIntro && (
          <VStack width="70%" textAlign="center" >
            <Text fontSize="60px" fontWeight={400}>
              Let’s get started.
            </Text>
            <Text fontSize="30px" fontWeight={400}>
              So we can best help you on your startup journey, please tell us a
              little more about your company, your personal investment into your
              venture, and your access to your resources. This should take no
              longer than 3 minutes.
            </Text>
          </VStack>
        )}

        {currentStep === 3 && (
          <VStack width={"70%"} alignItems={"start"} gap={6}>
            <Text fontSize={"30px"} fontWeight={400}>
              Tell us about your startup. Select all that apply.
            </Text>
            <VStack width={'100%'} alignItems={'start'}>
              <HStack gap={10}>
                <Input type="checkbox" width={10} />
                <Text fontSize={"30px"} fontWeight={400}>
                  I have already incorporated
                </Text>
              </HStack>
              <HStack gap={10}>
                <Input type="checkbox" width={10} />
                <Text fontSize={"30px"} fontWeight={400}>
                 I have co-founders / advisors
                </Text>
              </HStack>
              <HStack gap={10}>
                <Input type="checkbox" width={10} />
                <Text fontSize={"30px"} fontWeight={400}>
                  I have raised a previous funding round
                </Text>
              </HStack>
              
            </VStack>
          </VStack>
        )}
        {!isIntro && currentStep <= testData.length && (
          <VStack
            key={currentStep}
            width="70%"
            alignItems="start"
            gap={5}
            marginTop="50px"
            textAlign="left"
          >
            <Text fontSize="30px" fontWeight={400}>
              {testData[currentStep - 1].question}
            </Text>

            {testData[currentStep - 1].answer.map((ans, j) => (
              <HStack key={j} width="100%" cursor={"pointer"} gap={10}>
                <svg
                  width="36"
                  height="35"
                  viewBox="0 0 36 35"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="17.9999"
                    cy="17.4999"
                    r="10.5"
                    stroke="black"
                    stroke-width="0.42857"
                  />
                  <circle
                    cx="18"
                    cy="17.5"
                    r="16.0714"
                    stroke="black"
                    stroke-width="2.14285"
                  />
                </svg>
                <Text fontWeight={400} fontSize={"30px"}>
                  {ans.ans}
                </Text>
              </HStack>
            ))}
          </VStack>
        )}
      </Stack>

      <HStack
        position="fixed"
        bottom={0}
        left={0}
        height="100px"
        width="100%"
        justifyContent="space-between"
      >
        {!isIntro ? (
          <HStack gap={4} paddingLeft={'120px'} gapX={16}>
            <Box as={'button'}
              onClick={handleBack}
              height="50px"
              disable={currentStep === 1}
            >
              <Text fontSize={'20px'} fontWeight={700}>BACK</Text>
            </Box>
            <Box as={'button'}
              onClick={handleRestart}
            >
              <Text fontSize={'20px'} fontWeight={700}>RESTART</Text>
            </Box>
          </HStack>
        ) : (
          <Box />
        )}

        <HStack fontSize="18px" fontWeight={600}>
          <Text>Already have an account?</Text>
          <Link href="/sign-in" color="#13669D">
            Sign in
          </Link>
        </HStack>

        <Button
          onClick={handleNext}
          variant="primary"
          borderRadius="0px"
          height="100%"
          label={isLastStep ? "SAVE & CONTINUE" : "NEXT"}
          paddingX={16}
        />
      </HStack>
    </Box>
  );
};

export default GetStarted;
