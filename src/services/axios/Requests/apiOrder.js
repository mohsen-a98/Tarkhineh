import apiRequest from "../Configs/config";
export async function addOrder(order) {
  const res = await apiRequest.post("/orders", order);
  const data = await res.data;
  return data;
}

export async function getOrders(userId) {
  const res = await apiRequest.get("/orders?userId=" + userId);
  const data = await res.data;
  return data;
}
