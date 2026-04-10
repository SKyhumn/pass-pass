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

import NCSMajorPage from "./pages/ContentPage/NCSMajorSubject/NCSMajorPage";
import NCSMajorQuestionPage from "./pages/ContentPage/NCSMajorSubject/NCSMajorQuestionPage";

import NCSMockTestPage from "./pages/ContentPage/NCSMockTest/NCSMockTestPage";
import NCSMockTestQuestionPage from "./pages/ContentPage/NCSMockTest/NCSMockTestQuestionPage";

import CertificationPage from "./pages/ContentPage/CertificationPage";

import CertificationAccountingPage from "./pages/ContentPage/CertificationAccounting/CertificationAccountingPage";
import CertificationAccountingQuestionPage from "./pages/ContentPage/CertificationAccounting/CertificationAccountingQuestionPage";

import CertificationFinancePage from "./pages/ContentPage/CertificationFinance/CertificationFinancePage";
import CertificationFinanceQuestionPage from "./pages/ContentPage/CertificationFinance/CertificationFinanceQuestionPage";

import CertificationOfficerPage from "./pages/ContentPage/CertificationOfficer/CertificationOfficerPage";
import CertificationOfficerQuestionPage from "./pages/ContentPage/CertificationOfficer/CertificationOfficerQuestionPage";

import CertificationHrPage from "./pages/ContentPage/CertificationHr/CertificationHrPage";
import CertificationHrQuestionPage from "./pages/ContentPage/CertificationHr/CertificationHrQuestionPage";

import CertificationITPage from "./pages/ContentPage/CertificationIT/CertificationITPage";
import CertificationITQuestionPage from "./pages/ContentPage/CertificationIT/CertificationITQuestionPage";

import CertificationManufacturingPage from "./pages/ContentPage/CertificationManufacturing/CertificationManufacturingPage";
import CertificationManufacturingQuestionPage from "./pages/ContentPage/CertificationManufacturing/CertificationManufacturingQuestionPage";

import SchedulePage from "./pages/ContentPage/SchedulePage";

import ResultPage from "./pages/ContentPage/ResultPage";

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
            <Route path="/study-ncs/basic/:subjectId" element={<NCSBasicQuestionPage/>}/>

            <Route path="/study-ncs/major" element={<NCSMajorPage/>}/>
            <Route path="/study-ncs/major/:subjectId" element={<NCSMajorQuestionPage/>}/>

            <Route path="/study-ncs/mock-test" element={<NCSMockTestPage/>}/>
            <Route path="/study-ncs/mock-test/:subjectId" element={<NCSMockTestQuestionPage/>}/>

            <Route path="/study-ncs/basic/:subjectId/result" element={<ResultPage/>}/>
            <Route path="/study-ncs/major/:subjectId/result" element={<ResultPage/>}/>
            <Route path="/study-ncs/mock-test/:subjectId/result" element={<ResultPage/>}/>

            <Route path="/study-certification" element={<CertificationPage/>}/>

            <Route path="/study-certification/accounting" element={<CertificationAccountingPage/>}/>
            <Route path="/study-certification/accounting/:subjectId" element={<CertificationAccountingQuestionPage/>}/>

            <Route path="/study-certification/finance" element={<CertificationFinancePage/>}/>
            <Route path="/study-certification/finance/:subjectId" element={<CertificationFinanceQuestionPage/>}/>

            <Route path="/study-certification/officer" element={<CertificationOfficerPage/>}/>
            <Route path="/study-certification/officer/:subjectId" element={<CertificationOfficerQuestionPage/>}/>

            <Route path="/study-certification/hr" element={<CertificationHrPage/>}/>
            <Route path="/study-certification/hr/:subjectId" element={<CertificationHrQuestionPage/>}/>

            <Route path="/study-certification/it" element={<CertificationITPage/>}/>
            <Route path="/study-certification/it/:subjectId" element={<CertificationITQuestionPage/>}/>

            <Route path="/study-certification/manufacturing" element={<CertificationManufacturingPage/>}/>
            <Route path="/study-certification/manufacturing/:subjectId" element={<CertificationManufacturingQuestionPage/>}/>

            <Route path="/make-schedule" element={<SchedulePage/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
