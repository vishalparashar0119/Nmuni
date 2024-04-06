import { Route, Routes } from "react-router";
// pages of project
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage"; 
import SignUpPage from "./pages/SignUpPage";
import { AuthContextProvider } from "./context/AuthContext";
import Protected from "./pages/Protected";


function App() {
  return (
    <AuthContextProvider>
    <Routes>
      <Route path="/" element = {<LoginPage/>}/>
      <Route path="/signup" element = {<SignUpPage/>}/>
      <Route path="/home" element = { <Protected><HomePage/></Protected>  }/>
    </Routes>
    </AuthContextProvider>
  );
}

export default App;
