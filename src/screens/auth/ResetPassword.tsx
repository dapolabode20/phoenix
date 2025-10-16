import Button from "@/components/Button";
import {Link} from 'react-router-dom'
import {
  Box,
  HStack,
  Image,
  Input,
  Text,
  VStack,
} from "@chakra-ui/react";
import logo from "@/assets/images/97dd1cf698224af98c971bb299cc287546ffa09e.png";

const ResetPassword = () => {
  return (
     <VStack width={"100%"} gapY={2}>
      <Image width={266} height={266} src={logo} alt="img" />
      <Text fontWeight={400} fontSize={"60px"}>
         Reset Your Password
      </Text>
      <Text fontSize={'20px'} fontWeight={500}>Please enter the email address associated with your account.</Text>
      <VStack width={"80%"} gapY={6}>
       
        <Box width={"60%"} height={"56px"}>
          <Input
            border={"1px solid #D9D9D9"}
            borderRadius={"none"}
            width={"100%"}
            height={'48px'}
           
          />
        </Box>
         <HStack width={'60%'} justifyContent={'space-between'}>        
          <Link to="/sign-in" ><Text color="#13669D" fontSize={'25px'} fontWeight={500}>Return to sign in</Text></Link>
           <Link to="/form">
        <Button
          label="SEND"
          onClick={() => {}}
          variant="primary"
        />
        </Link> 
      </HStack>
      </VStack>
     
    </VStack>
  )
}

export default ResetPassword