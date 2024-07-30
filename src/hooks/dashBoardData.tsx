import { useState, useEffect } from "react";
import { dashBoardDataType } from "../types/dashBoardDataType";
import Cookies from "js-cookie";
import axios from "axios";
const DashBoardData = () => {
  const [data, setData] = useState<dashBoardDataType[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const id = Cookies.get("userid");
        if (id) {
          const response = await axios.get(
            `https://cashout-backend-kjtw.onrender.com/dataUserRoutes/fetchUserData/${id}`
          );
          setData(response.data);
        } else {
          console.log("No ID found in cookies");
        }
      } catch (err: any) {
        console.log(err.message);
      }
    };

    fetchData();
    const intervalId = setInterval(fetchData, 2000);

    return () => clearInterval(intervalId);
  }, []);

  return { data };
};

export default DashBoardData;
