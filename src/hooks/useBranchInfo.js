import { useQuery } from "@tanstack/react-query";
import { getBranchInfo as getBranchInfoApi } from "../services/axios/Requests/apiBranches";

export function useBranchInfo() {
  const {
    data: getBranchInfo,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["branch", "ekbatan"],
    queryFn: () => getBranchInfoApi("شعبه اکباتان"),
  });

  return { getBranchInfo, isLoading, error };
}
