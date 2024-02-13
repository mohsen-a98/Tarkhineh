import { useQuery } from "@tanstack/react-query";
import { getBranches } from "../services/axios/Requests/apiBranches";

export function useBranches() {
  const {
    isLoading,
    data: branches,
    error,
  } = useQuery({
    queryKey: ["branches"],
    queryFn: getBranches,
    retry: 1,
  });

  return {
    isLoading,
    branches,
    error,
  };
}
