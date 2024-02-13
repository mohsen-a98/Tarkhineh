import { useMutation, useQueryClient } from "@tanstack/react-query";
import { login as loginApi } from "../../services/axios/Requests/apiAuth";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { setUser } from "../user/userSlice";
import { login as loginAction } from "./authSlice";

export function useLogin(onCloseModal) {
  const queryClient = useQueryClient();
  const dispatch = useDispatch();
  const {
    mutate: login,
    isPending: isLoading,
    error,
  } = useMutation({
    mutationFn: loginApi,
    onSuccess: (user) => {
      dispatch(setUser(user));

      dispatch(loginAction());
      queryClient.setQueryData(["user"], user);
      localStorage.setItem("user", JSON.stringify(user));
      const expiration = new Date();
      expiration.setHours(expiration.getHours() + 1);
      localStorage.setItem("expiration", expiration.toISOString());
      toast.success("خوش آمدید");
      onCloseModal();
    },
    onError: (err) => {
      console.log(err);
      toast.error(err.message);
    },
  });

  return { login, isLoading, error };
}
