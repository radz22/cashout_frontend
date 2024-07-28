import { useEffect, useState } from "react";
import getCookiesValue from "../../utils/cookiesStorage";

const Login = () => {
  const [value, setValue] = useState<string | undefined>(undefined);

  useEffect(() => {
    const cookieValue = getCookiesValue.get("login");
    setValue(cookieValue);
  }, []);
  return { value };
};

export default Login;
