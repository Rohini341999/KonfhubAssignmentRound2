import { useEffect, useState } from "react";
import Axios from "axios";

export const Api = () => {
  const [value, setValue] = useState();
  useEffect(() => {
    Axios.get(
      "https://iitm1blt3l.execute-api.ap-southeast-1.amazonaws.com/dev/hosted-events"
    )
      .then((response) => response.json())
      .then((data) => setValue(data));
  }, []);
  console.log(value, "value");
};
