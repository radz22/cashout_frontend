import axios from "axios";
import { SucessAlert, ErrorAlert } from "../components/alert/alert";
const deleteData = () => {
  const { handleSucessAlert } = SucessAlert();
  const { handleErrorAlert } = ErrorAlert();
  const handleDelete = (id: string | null) => {
    try {
      axios
        .delete(`http://localhost:4000/dataUserRoutes/delete/${id}`)
        .then(() => {
          handleSucessAlert("Deleted");
        })
        .catch((error) => {
          handleErrorAlert("error");
          throw new Error(
            `status:${error.response.status} & response: ${error.response.data.error} `
          );
        });
    } catch (error: any) {
      `status:${error.response.status} & response: ${error.response.data.error} `;
      handleErrorAlert("error");
    }
  };

  return { handleDelete };
};

export default deleteData;
