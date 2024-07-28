import { useState, useEffect } from "react";
import getSessionStorageValue from "../../utils/sessionStorage";
const sessionOTP = () => {
  const [otp, setOtp] = useState<string | null>(null);

  useEffect(() => {
    const realtimeGetValue = () => {
      const sessionOTP = getSessionStorageValue("otp");
      setOtp(sessionOTP);
    };
    realtimeGetValue();
    const intervalId = setInterval(realtimeGetValue, 2000);

    // Clean up interval on component unmount
    return () => clearInterval(intervalId);
  }, [otp]);

  console.log(otp);
  return { otp };
};

export default sessionOTP;
