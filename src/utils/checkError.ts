import axios from "axios";

export const checkErrors = (err: unknown) => {
  if (axios.isAxiosError(err) && process.env.ENVIRONMENT === "DEVELOPMENT") {
    console.error("Axios error:", err.message);
    if (err.response) {
      console.error("Response status:", err.response.status);
      console.error("Response data:", err.response.data);
      console.log(err);
    }
  } else {
    console.log("Something went Wrong, Please try again later.");
  }
};
