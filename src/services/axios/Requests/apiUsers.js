import apiRequest from "../Configs/config";
export async function getUsers() {
  const res = await apiRequest.get("/users");
  const data = res.data;
  return data;
}

export async function addUser(user) {
  const res = await apiRequest.post("/users", user);
  const data = res.data;
  return data;
}

export async function editUser({ id, editUser }) {
  const res = await apiRequest.patch("/users/" + id, editUser);
  const data = res.data;
  return data;
}
