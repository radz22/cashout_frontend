import axios from "axios";
import { useState } from "react";
import Cookies from "js-cookie";
import { SucessAlert } from "../components/alert/alert";
import { ErrorAlert } from "../components/alert/alert";
const createUser = () => {
  const [createLoading, setCreateLoading] = useState<boolean>(false);
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear().toString();
  const currentMonth = currentDate.toLocaleString("default", { month: "long" });
  const id = Cookies.get("userid");
  const { handleSucessAlert } = SucessAlert();
  const { handleErrorAlert } = ErrorAlert();
  const handleCreate = async (
    amount: number,
    referrence: string,
    date: string
  ) => {
    try {
      setCreateLoading(true);
      await axios
        .post("http://localhost:4000/dataUserRoutes/create", {
          userid: id,
          date: date,
          amount: amount,
          referrence: referrence,
          month: currentMonth,
          year: currentYear,
        })
        .then(() => {
          handleSucessAlert("Sucess");
          setCreateLoading(false);
        })
        .catch((error) => {
          handleErrorAlert("Referrence Exist");
          setCreateLoading(false);
          throw new Error(
            `status:${error.response.status} & response: ${error.response.data.error} `
          );
        });
    } catch (error: any) {
      `status:${error.response.status} & response: ${error.response.data.error} `;
    }
  };

  return { handleCreate, createLoading };
};

export default createUser;
