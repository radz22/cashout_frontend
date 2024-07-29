import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const updateUser = () => {
  const [updateLoading, setUpdateLoading] = useState<boolean>(false);
  const navigate = useNavigate();
  const handleUpdateUser = (id: string | null, password: string) => {
    setUpdateLoading(true);
    try {
      axios
        .put(`http://localhost:4000/userRoutes/updateaccount/${id}`, {
          password: password,
        })
        .then(() => {
          setUpdateLoading(false);
          sessionStorage.removeItem("recoverid");
          sessionStorage.removeItem("recoveryotp");
          sessionStorage.removeItem("recoveryusername");
          navigate("/");
        })
        .catch((error) => {
          setUpdateLoading(false);

          throw new Error(
            `status:${error.response.status} & response: ${error.response.data.error} `
          );
        });
    } catch (error: any) {
      `status:${error.response.status} & response: ${error.response.data.error} `;
      setUpdateLoading(false);
    }
  };

  return { handleUpdateUser, updateLoading };
};

export default updateUser;
