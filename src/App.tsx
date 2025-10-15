import "./App.css";
import { Box } from "@chakra-ui/react";
import OnBoarding from "./screens/OnBoarding";
import { BrowserRouter, Routes, Route } from "react-router";
import GetStarted from "./screens/GetStarted";
import SignIn from "./screens/auth/SignIn";
import FormData from "./screens/FormData";
import CreateAccount from "./screens/auth/CreateAccount";
import FormdataTwo from "./screens/FormdataTwo";
import AccountSetting from "./screens/accountSettings/AccountSetting";
import ResetPassword from "./screens/auth/ResetPassword";

function App() {
  return (
    <Box>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<OnBoarding />} />
          <Route path="getstarted" element={<GetStarted />} />
          <Route path="sign-in" element={<SignIn/>} />
          <Route path="create-account" element={<CreateAccount/>} />
          <Route path="form" element={<FormData/>} />
          <Route path="formdata-two" element={<FormdataTwo/>} />
          <Route path='account-setting' element={<AccountSetting/>} />
          <Route path="reset-password" element={<ResetPassword/>} />
        </Routes>
      </BrowserRouter>
    </Box>
  );
}

export default App;
