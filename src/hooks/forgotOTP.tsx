import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { SucessAlert, ErrorAlert } from "../components/alert/alert";

const forgotOTP = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const navigate = useNavigate();
  const { handleSucessAlert } = SucessAlert();
  const { handleErrorAlert } = ErrorAlert();
  const handleSendOTP = (email: string) => {
    setLoading(true);
    try {
      axios
        .post(
          "https://cashout-backend-kjtw.onrender.com/userRoutes/forgotpasswordOtp",
          {
            email: email,
          }
        )
        .then((res) => {
          handleSucessAlert("Sucess to Send OTP");
          sessionStorage.setItem("recoveryotp", res.data.otp);
          sessionStorage.setItem("recoveryusername", res.data.username);
          sessionStorage.setItem("recoverid", res.data.recoverid);
          setLoading(false);
          navigate("/recoveryaccount");
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

  return { loading, handleSendOTP };
};

export default forgotOTP;
