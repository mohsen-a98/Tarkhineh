import { useQuery } from "@tanstack/react-query";
import { useSelector } from "react-redux";
import { getAddress } from "../../services/axios/Requests/apiAddress";

export function useAddress() {
  const userId = useSelector((state) => state.user.user.id);
  const {
    isLoading,
    data: address,
    error,
  } = useQuery({
    queryKey: ["address"],
    queryFn: () => getAddress(userId),
  });

  return { isLoading, address, error };
}
