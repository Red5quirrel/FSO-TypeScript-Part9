import axios from "axios";
import { Diaries, NewDiary } from "./types";

const baseUrl = "http://localhost:3000/api/diaries";

export const getAllDiaries = async () => {
  const response = await axios.get<Diaries[]>(baseUrl);
  return response.data;
};

export const createDiary = async (obj: NewDiary) => {
  try {
    const resp = await axios.post<Diaries>(baseUrl, obj);
    return { success: resp.data };
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error("AXIOS ERROR FROM ME", error);
      return { error: error.response?.data };
    } else {
      console.error("ERROR IN SERVICES", error);
    }
  }
};
