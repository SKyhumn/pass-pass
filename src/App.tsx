import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import LandingPage from "./pages/LandingPage";
import SignInPage from "./pages/AuthPage/SignInPage";
import SignUpPage from "./pages/AuthPage/SignUpPage";
import EmailVerify from "./pages/AuthPage/EmailVerify";

import MainLayout from "./pages/MainLayout";
import MainPage from "./pages/ContentPage/HomePage";
import NCSPage from "./pages/ContentPage/NCSPage";
import NCSBasicPage from "./pages/ContentPage/NCSBasicSubject/NCSBasicPage";
import NCSBasicQuestionPage from "./pages/ContentPage/NCSBasicSubject/NCSBasicQuestionPage";
import CertificationPage from "./pages/ContentPage/CertificationPage";
import SchedulePage from "./pages/ContentPage/SchedulePage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/welcome" replace/>}/>
          <Route path="/welcome" element={<LandingPage/>}/>
          <Route path="/sign-in" element={<SignInPage/>}/>
          <Route path="/sign-up" element={<SignUpPage/>}/>
          <Route path="/email-verify" element={<EmailVerify/>}/>

          <Route element={<MainLayout />}>
            <Route path="/main" element={<MainPage/>}/>
            <Route path="/study-ncs" element={<NCSPage/>}/>
            <Route path="/study-ncs/basic" element={<NCSBasicPage/>}/>
            <Route path="/study-ncs/basic/:subjectId" element={<NCSBasicQuestionPage />} />
            <Route path="/study-certification" element={<CertificationPage/>}/>
            <Route path="/make-schedule" element={<SchedulePage/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
