import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import SignInPage from "./pages/AuthPage/SignInPage";

import LandingPage from "./pages/LandingPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/welcome" replace/>}/>
          <Route path="/welcome" element={<LandingPage/>}/>
          <Route path="/sign-in" element={<SignInPage/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
