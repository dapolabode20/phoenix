import Button from "@/components/Button";
import { Text, VStack } from "@chakra-ui/react";

const DeleteAccount = () => {
  return (
    <VStack>
        
          <VStack width={"100%"} alignItems={"start"} gapY={4}>
            <VStack width={"100%"} alignItems={"start"}>
              <Text fontSize={"20px"} fontWeight={400}>
                Your privacy settings control how people can contact yoy and connect
                with you on Phoenix Nest. It;’s important to note that you are
                automatically connected to anyone affiliated to your company or
                organization.{" "}
              </Text>
              <Text fontSize={"20px"} fontWeight={400}>
                This process is permanent and irreversible.
              </Text>

              <Button borderRadius={'none'} onClick={()=> {}} variant="cancel" label="DELETE MY ACCOUNT" />
            </VStack>

          </VStack>
        </VStack>
  )
}

export default DeleteAccount