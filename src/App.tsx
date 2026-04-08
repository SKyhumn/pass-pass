import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import LandingPage from "./pages/LandingPage";
import SignInPage from "./pages/AuthPage/SignInPage";
import SignUpPage from "./pages/AuthPage/SignUpPage";
import MainPage from "./pages/MainPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/welcome" replace/>}/>
          <Route path="/welcome" element={<LandingPage/>}/>
          <Route path="/sign-in" element={<SignInPage/>}/>
          <Route path="/sign-up" element={<SignUpPage/>}/>
          <Route path="/main" element={<MainPage/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
