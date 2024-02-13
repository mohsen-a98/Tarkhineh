import { getUsers } from "./apiUsers";
import apiRequest from "../Configs/config.js";

export async function login(loginData) {
  const { name, phone } = loginData;
  const users = await getUsers();
  const user = users?.find((u) => u.phone === phone);
  if (!user) {
    const res = await apiRequest.post("/users", loginData);
    const data = res.data;
    return data;
  }

  if (user.name === name) {
    return user;
  } else {
    throw new Error("نام و نام خوانوادگی را درست وارد کنید");
  }
}
