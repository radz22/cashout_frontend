import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignInPage from "./pages/signinPage";
import SignUpPage from "./pages/signupPage";
import HomePage from "./pages/homePage";
import Login from "./components/cookiesLogin/login";
import VerifyPage from "./pages/verifyPage";
import ProgressPage from "./pages/progressPage";
function App() {
  const { value } = Login();
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            index
            element={value == "true" ? <HomePage /> : <SignInPage />}
          />

          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/verify" element={<VerifyPage />} />
          <Route
            path="/progress"
            element={value == "true" ? <ProgressPage /> : <SignInPage />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
