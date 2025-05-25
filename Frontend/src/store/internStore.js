import { create } from "zustand";
import axios from "axios";

const API_URL =
  //&locahost for development and main + default url for production
  import.meta.env.MODE === "development"
    ? "http://localhost:3000/api/data"
    : "/api/data";

axios.defaults.withCredentials = true;

export const useInternStore = create((set) => ({
  postsLoading: false,

  fetchData: async () => {
    postsLoading(true);
    setError(null);

    // * NOTE THIS ONLY LETS YOU QUERY 6 TIMES EACH HOUR!!!
    try {
      const response = await axios.get(`${API_URL}/posts`, {});

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const result = await response.json();

      setData(result);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  },
}));
