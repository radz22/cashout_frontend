import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { signUpFormType } from "../types/signUpFormType";
import { SucessAlert, ErrorAlert } from "../components/alert/alert";
const signupOtpEmail = (url: string) => {
  const [loading, setLoading] = useState<boolean>(false);
  const { handleSucessAlert } = SucessAlert();
  const { handleErrorAlert } = ErrorAlert();
  const navigate = useNavigate();

  const handleGetRandomOtp = (userinfo: signUpFormType | any) => {
    setLoading(true);
    try {
      axios
        .post(url, { email: userinfo.email, username: userinfo.username })
        .then((res) => {
          handleSucessAlert("Sucess to Send OTP");
          sessionStorage.setItem("otp", res.data.otp);
          sessionStorage.setItem("user", JSON.stringify(userinfo));
          setLoading(false);
          navigate("/verify");
        })
        .catch((error) => {
          setLoading(false);
          handleErrorAlert("Pls Check Email");
          throw new Error(
            `status:${error.response.status} & response: ${error.response.data.error} `
          );
        });
    } catch (error: any) {
      `status:${error.response.status} & response: ${error.response.data.error} `;
      setLoading(false);
    }
  };

  return { handleGetRandomOtp, loading };
};

export default signupOtpEmail;
