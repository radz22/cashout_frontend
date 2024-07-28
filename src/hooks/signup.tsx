import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { signUpFormType } from "../types/signUpFormType";
import { SucessAlert, ErrorAlert } from "../components/alert/alert";
const signup = (url: string) => {
  const [buttonLoading, setButtonLoading] = useState<boolean>(false);
  const { handleSucessAlert } = SucessAlert();
  const { handleErrorAlert } = ErrorAlert();
  const navigate = useNavigate();

  const handleSignUp = (userinfo: signUpFormType | null) => {
    try {
      setButtonLoading(true);
      axios
        .post(url, userinfo)
        .then(() => {
          handleSucessAlert("Created");
          navigate("/");
          sessionStorage.removeItem("otp");
          sessionStorage.removeItem("user");
        })
        .catch((error) => {
          setButtonLoading(false);
          handleErrorAlert("Pls Check Email");
          throw new Error(
            `status:${error.response.status} & response: ${error.response.data.error} `
          );
        });
    } catch (error: any) {
      `status:${error.response.status} & response: ${error.response.data.error} `;
      setButtonLoading(false);
    }
  };

  return { handleSignUp, buttonLoading };
};

export default signup;
