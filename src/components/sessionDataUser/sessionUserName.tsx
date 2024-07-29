import { useState, useEffect } from "react";

import getSessionStorageValue from "../../utils/sessionStorage";
const sessionRecovery = () => {
  const [userName, setUserName] = useState<string | null>(null);
  const [id, setId] = useState<string | null>(null);
  const [otp, setOtp] = useState<string | null>(null);

  useEffect(() => {
    const otp = getSessionStorageValue("recoveryotp");
    setOtp(otp);
    const userName = getSessionStorageValue("recoveryusername");
    setUserName(userName);

    const id = getSessionStorageValue("recoverid");
    setId(id);
  }, []);

  return { userName, id, otp };
};

export default sessionRecovery;
