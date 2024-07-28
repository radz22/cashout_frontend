import { useState, useEffect } from "react";

import { getSessionUserData } from "../../utils/sessionStorageUser";
import { signUpFormType } from "../../types/signUpFormType";
const sessionDataUser = () => {
  const [dataUser, setDataUser] = useState<signUpFormType | null>(null);

  useEffect(() => {
    const storedUser = getSessionUserData("user") as signUpFormType;
    setDataUser(storedUser);
  }, []);

  return { dataUser };
};

export default sessionDataUser;
