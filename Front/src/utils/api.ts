import axios from "axios";

export const deviceData = async () => {
  const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/device`);
  return response.data;
};

export const genderData = async () => {
  const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/gender`);
  return response.data;
};

export const locationData = async () => {
  const response = await axios.get(
    `${process.env.NEXT_PUBLIC_API_URL}/location`
  );
  return response.data;
};

export const loginHour = async () => {
  const response = await axios.get(
    `${process.env.NEXT_PUBLIC_API_URL}/login-hour`
  );
  return response.data;
};
