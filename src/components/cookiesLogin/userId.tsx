import { useState, useEffect } from "react";
import getCookiesValue from "../../utils/cookiesStorage";
const UserId = () => {
  const [userId, setUserId] = useState<string | undefined>(undefined);
  useEffect(() => {
    const cookieValue = getCookiesValue.get("userid");
    setUserId(cookieValue);
  }, []);

  return { userId };
};

export default UserId;
