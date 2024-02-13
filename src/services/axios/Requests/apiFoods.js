import apiRequest from "../Configs/config";

export async function getFoods() {
  const res = await apiRequest.get("/foods");
  const data = res.data;
  return data;
}
