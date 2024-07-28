import { useState } from "react";
import axios from "axios";
import { SucessAlert, ErrorAlert } from "../components/alert/alert";
import getCookiesValue from "../utils/cookiesStorage";
import { signInFormType } from "../types/signInFormType";
const signinLogin = (url: string) => {
  const [loading, setLoading] = useState<boolean>(false);
  const { handleSucessAlert } = SucessAlert();
  const { handleErrorAlert } = ErrorAlert();
  const handleLogin = (userinfo: signInFormType) => {
    try {
      axios
        .post(url, userinfo)
        .then((res) => {
          handleSucessAlert("Sucess Login");
          setLoading(false);
          getCookiesValue.set("token", res.data.token, { expires: 2 });
          getCookiesValue.set("userid", res.data.userid, { expires: 2 });
          getCookiesValue.set("login", res.data.login, { expires: 2 });
          window.location.reload();
        })
        .catch((error) => {
          handleErrorAlert("Username or Password Invalid");
          setLoading(false);
          throw new Error(
            `status:${error.response.status} & response: ${error.response.data.error} `
          );
        });
    } catch (error) {
      throw new Error(`Unexpected error: ${error}`);
    }
  };

  return { loading, handleLogin };
};

export default signinLogin;
