import { useQuery } from "@tanstack/react-query";
import { getUser as getUserApi } from "../../services/axios/Requests/apiUsers";

export function useUser() {
  const currentUserId = JSON.parse(localStorage.getItem("user"))?.id;
  const {
    isLoading,
    data: user,
    error,
  } = useQuery({
    queryKey: ["user"],
    queryFn: () => getUserApi(currentUserId),
  });

  return { isLoading, user, error };
}
