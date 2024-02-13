import { useMutation } from "@tanstack/react-query";
import { editUser as editUserApi } from "../../services/axios/Requests/apiUsers";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { setUser } from "./userSlice";

export function useEditUser() {
  const dispatch = useDispatch();
  const { mutate: editUser, isPending: isLoading } = useMutation({
    mutationFn: ({ id, editUser }) => editUserApi({ id, editUser }),
    onSuccess: (user) => {
      toast.success("اطلاعات با موفقیت ویرایش شد");
      localStorage.setItem("user", JSON.stringify(user));
      dispatch(setUser(user));
    },
    onError: (err) => {
      console.log(err);
      toast.error("خطا در ویرایش اطلاعات");
    },
  });
  return { editUser, isLoading };
}
