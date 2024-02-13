import apiRequest from "../Configs/config.js";

export async function addAddress({ id, address }) {
  const res = await apiRequest.post(`/address`, {
    userId: id,
    address: address,
  });
  const data = res.data;
  return data;
}

export async function getAddress(userId) {
  const res = await apiRequest.get("/address?userId=" + userId);
  const data = res.data;
  return data;
}

export async function deleteAddress(addressId) {
  const res = await apiRequest.delete("/address/" + addressId);
  const data = res.data;
  return data;
}

export async function editAddress({ addressId, address }) {
  const res = await apiRequest.patch(`/address/${addressId}`, {
    address: address,
  });
  const data = res.data;
  return data;
}
