import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteAddress as deleteAddressApi } from "../../services/axios/Requests/apiAddress";
import toast from "react-hot-toast";

export function useDeleteAddress() {
  const queryClient = useQueryClient();
  const { mutate: deleteAddress, isPending: isLoading } = useMutation({
    mutationFn: (addressId) => deleteAddressApi(addressId),
    onSuccess: () => {
      queryClient.invalidateQueries(["address"]);
      toast.success("آدرس با موفقیت حذف شد");
    },
    onError: (err) => {
      console.log(err);
      toast.error("خطا در حذف آدرس");
    },
  });
  return { deleteAddress, isLoading };
}
