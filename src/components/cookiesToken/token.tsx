import { useEffect, useState } from "react";
import getCookiesValue from "../../utils/cookiesStorage";
const Token = () => {
  const [token, setToken] = useState<string | undefined>(undefined);

  useEffect(() => {
    const cookieValue = getCookiesValue.get("token");
    setToken(cookieValue);
  }, [token]);
  return { token };
};

export default Token;
