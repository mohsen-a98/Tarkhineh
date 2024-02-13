import { useMutation } from "@tanstack/react-query";
import { addOrder as addOrderApi } from "../../services/axios/Requests/apiOrder";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export function useAddOrder() {
  const navigate = useNavigate();
  const {
    mutate: addOrder,
    isPending: isLoading,
    error,
  } = useMutation({
    mutationFn: (order) => addOrderApi(order),
    onSuccess: () => {
      toast.success("سفارش با موفقیت ثبت شد");
      navigate("/successful-payment");
    },
    onError: (err) => {
      console.log(err);
      toast.error("خطا در ثبت سفارش");
      navigate("/unsuccessful-payment");
    },
    retry: false,
  });

  return { addOrder, isLoading, error };
}
