import { useState, useEffect } from "react";
import axios from "axios";
import getCookiesValue from "../utils/cookiesStorage";
const userFetchingData = (token: string | undefined) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const userFetchData = async () => {
      try {
        axios
          .get(`http://localhost:4000/userRoutes/getUserData/${token}`)
          .then((res) => {
            getCookiesValue.set("username", res.data.username, { expires: 2 });
          })
          .catch((error) => {
            throw new Error(
              `status:${error.response.status} & response: ${error.response.data.error} `
            );
          });
      } catch (error: any) {
        `status:${error.response.status} & response: ${error.response.data.error} `;
      } finally {
        setLoading(false);
      }
    };

    if (token) {
      userFetchData();
    }
  }, [token]);

  return { loading };
};

export default userFetchingData;
