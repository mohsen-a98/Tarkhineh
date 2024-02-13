import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addAddress as addAddressApi } from "../../services/axios/Requests/apiAddress";
import toast from "react-hot-toast";

export function useAddAddress() {
  const queryClient = useQueryClient();
  const { mutate: addAddress, isPending: isLoading } = useMutation({
    mutationFn: ({ id, address }) => addAddressApi({ id, address }),
    onSuccess: () => {
      queryClient.invalidateQueries(["address"]);
      toast.success("آدرس با موفقیت اضافه شد");
    },
    onError: (err) => {
      console.log(err);
      toast.error("خطا در اضافه کردن آدرس");
    },
  });

  return { addAddress, isLoading };
}
