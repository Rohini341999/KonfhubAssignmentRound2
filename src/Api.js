import { useEffect, useState } from "react";
import Axios from "axios";

export const Api = () => {
  const [value, setValue] = useState();

  const getData = async () => {
    const res = await Axios(
      "https://iitm1blt3l.execute-api.ap-southeast-1.amazonaws.com/dev/hosted-events?limit=20"
    );
    return await res.json();
  };

  useEffect(() => {
    getData();
  }, []);
};
