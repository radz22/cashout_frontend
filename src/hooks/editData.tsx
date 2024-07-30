import { useState } from "react";
import axios from "axios";
import { SucessAlert, ErrorAlert } from "../components/alert/alert";
import { dataEditType } from "../types/dataEditType";

const editData = () => {
  const [EditLoading, setEditLoading] = useState(false);
  const { handleSucessAlert } = SucessAlert();
  const { handleErrorAlert } = ErrorAlert();
  const handleEdit = (data: dataEditType) => {
    try {
      setEditLoading(true);
      axios
        .put(
          `https://cashout-backend-kjtw.onrender.com/dataUserRoutes/edit/${data.id}`,
          {
            amount: data.amount,
            referrence: data.referrence,
            date: data.date,
          }
        )
        .then(() => {
          handleSucessAlert("Edit Sucess");
          setEditLoading(false);
        })
        .catch((error) => {
          handleErrorAlert("error");
          setEditLoading(false);
          throw new Error(
            `status:${error.response.status} & response: ${error.response.data.error} `
          );
        });
    } catch (error: any) {
      `status:${error.response.status} & response: ${error.response.data.error} `;
      handleErrorAlert("error");
      setEditLoading(false);
    }
  };

  return { handleEdit, EditLoading };
};

export default editData;
