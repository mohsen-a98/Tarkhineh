import { useMutation, useQueryClient } from "@tanstack/react-query";
import { editAddress as editAddressApi } from "../../services/axios/Requests/apiAddress";
import toast from "react-hot-toast";

export function useEditAddress() {
  const queryClient = useQueryClient();
  const { mutate: editAddress, isPending: isLoading } = useMutation({
    mutationFn: ({ addressId, address }) =>
      editAddressApi({ addressId, address }),
    onSuccess: () => {
      queryClient.invalidateQueries(["address"]);
      toast.success("آدرس با موفقیت ویرایش شد");
    },
    onError: (err) => {
      console.log(err);
      toast.error("خطا در ویرایش آدرس");
    },
  });
  return { editAddress, isLoading };
}
