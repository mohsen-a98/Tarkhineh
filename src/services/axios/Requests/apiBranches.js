import apiRequest from "../Configs/config.js";

export async function getBranches() {
  const response = await apiRequest.get("/branches");
  const data = response.data;
  return data;
}

export async function getBranchInfo(name) {
  const response = await apiRequest.get("/branches?name=" + name);
  const data = response.data;
  return data;
}
