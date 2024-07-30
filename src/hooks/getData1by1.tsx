import { useState } from "react";

import axios from "axios";
import { dashBoardDataType } from "../types/dashBoardDataType";

const getData1by1 = () => {
  const [dataOfOne, setDataOfOne] = useState<dashBoardDataType | null>();

  const handleDataOfOne = (id: string) => {
    try {
      axios
        .get(
          `https://cashout-backend-kjtw.onrender.com/dataUserRoutes/fetchdata1by1/${id}`
        )
        .then((res) => {
          setDataOfOne(res.data);
        })
        .catch((error) => {
          throw new Error(
            `status:${error.response.status} & response: ${error.response.data.error} `
          );
        });
    } catch (error: any) {
      `status:${error.response.status} & response: ${error.response.data.error} `;
    }
  };

  return { dataOfOne, handleDataOfOne };
};

export default getData1by1;
