import { useQuery } from "@tanstack/react-query";
import { getOrders as getOrdersApi } from "../../services/axios/Requests/apiOrder";
import { useSelector } from "react-redux";

export function useGetOrders() {
  const userId = useSelector((state) => state.user.user).id;
  const {
    isLoading,
    data: orders,
    error,
  } = useQuery({
    queryKey: ["orders"],
    queryFn: () => getOrdersApi(userId),
  });

  return { isLoading, orders, error };
}
