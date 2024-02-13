import { useQuery } from "@tanstack/react-query";
import { getUsers } from "../../services/axios/Requests/apiUsers";

export function useUser() {
  const {
    isLoading,
    data: user,
    error,
  } = useQuery({
    queryKey: ["users"],
    queryFn: getUsers,
  });

  return { isLoading, user, error };
}
