import axios from "axios";
import { URL } from "./url";

export const getItems= async () => {
  try {
    const res = await axios({
      method: "get",
      url: `${URL}/BookModels`,
    });
    return res.data;
  } catch (error) {
    return error.response.data;
  }
};

export const postItems= async (form) => {
  try {
    const res = await axios({
      method: "post",
      data:form,
      url: `${URL}/BookModels`,
    });
    return res.data;
  } catch (error) {
    return error.response.data;
  }
};