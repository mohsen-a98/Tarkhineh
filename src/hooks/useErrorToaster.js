import { useEffect } from "react";
import toast from "react-hot-toast";

export function useErrorToaster(error) {
  useEffect(() => {
    if (error) toast.error(error.message);
  }, [error]);
}
