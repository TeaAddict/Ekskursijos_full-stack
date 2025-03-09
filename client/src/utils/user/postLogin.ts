import axios from "axios";

const postLogin = async (data: { username: string; password: string }) => {
  try {
    const url = import.meta.env.VITE_URL;

    const res = await axios.post(`${url + "/api/login"}`, data, {
      headers: { "Content-Type": "application/json" },
    });

    if (res.status == 201) {
      return res.data;
    }

    throw new Error(`${res.status}`);
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error("Axios Error:", error.response?.data || error.message);
    } else {
      console.error("Unexpected Error:", (error as Error).message);
    }
  }
};

export default postLogin;
