import { useEffect, useState } from "react";
import Axios from "axios";

export const Api = () => {
  const [value, setValue] = useState();
  const [error, setError] = useState();

  const getData = async () => {
    Axios.get(
      "https://iitm1blt3l.execute-api.ap-southeast-1.amazonaws.com/dev/hosted-events?limit=5"
    )
      .then((res) => console.log(res))
      .catch((err) => console.log(err, "err"));
  };

  useEffect(() => {
    getData();
  }, []);
};
