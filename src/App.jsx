import { Suspense, lazy, useCallback, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import toast, { Toaster } from "react-hot-toast";
import AppLayout from "./ui/AppLayout";
import ProtectedRouteHelper from "./ui/ProtectedRouteHelper";
import ProtectedRoute from "./ui/ProtectedRoute";
import { logout } from "./features/authentication/authSlice";
import { getTokenDuration } from "./utils/helpers";
import GlobalStyles from "./styles/GlobalStyles";
import Spinner from "./ui/Spinner";

//pages
const Main = lazy(() => import("./pages/Main"));
const Branch = lazy(() => import("./pages/Branch"));
const Menu = lazy(() => import("./pages/Menu"));
const Franchise = lazy(() => import("./pages/Franchise"));
const AboutUs = lazy(() => import("./pages/AboutUs"));
const ContactUs = lazy(() => import("./pages/ContactUs"));
const FaqPage = lazy(() => import("./pages/FaqPage"));
const RulesPage = lazy(() => import("./pages/RulesPage"));
const PrivacyPage = lazy(() => import("./pages/PrivacyPage"));
const ShoppingCart = lazy(() => import("./pages/ShoppingCart"));
const CompletionOfInformationPage = lazy(() =>
  import("./pages/CompletionOfInformationPage")
);
const PaymentPage = lazy(() => import("./pages/PaymentPage"));
const SuccessfulPaymentPage = lazy(() =>
  import("./pages/SuccessfulPaymentPage")
);
const UnsuccessfulPaymentPage = lazy(() =>
  import("./pages/UnsuccessfulPaymentPage")
);
const ProfilePage = lazy(() => import("./pages/ProfilePage"));
const OrderTrackingPage = lazy(() => import("./pages/OrderTrackingPage"));
const FavoritePage = lazy(() => import("./pages/FavoritePage"));
const MyAddressesPage = lazy(() => import("./pages/MyAddressesPage"));
const PageNotFound = lazy(() => import("./pages/PageNotFound"));

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 0,
    },
  },
});

function App() {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const dispatch = useDispatch();

  const handleLogout = useCallback(() => {
    dispatch(logout());
    queryClient.removeQueries(["user"]);
    toast("دوباره وارد شوید", {
      icon: "⚠️",
      style: { direction: "ltr" },
    });
  }, [dispatch]);

  useEffect(() => {
    if (!isLoggedIn) return;
    const tokenDuration = getTokenDuration();
    if (tokenDuration < 0) {
      handleLogout();
      return;
    }

    const logoutTimeout = setTimeout(handleLogout, tokenDuration);

    return () => clearTimeout(logoutTimeout);
  }, [isLoggedIn, handleLogout]);

  return (
    <QueryClientProvider client={queryClient}>
      <div style={{ fontSize: "16px" }}>
        <ReactQueryDevtools initialIsOpen={false} />
      </div>
      <GlobalStyles />
      <BrowserRouter>
        <Suspense fallback={<Spinner />}>
          <Routes>
            <Route element={<AppLayout />}>
              <Route index element={<Main />} />
              <Route path="branch" element={<Branch />} />
              <Route path="menu" element={<Menu />} />
              <Route path="franchise" element={<Franchise />} />
              <Route path="aboutUs" element={<AboutUs />} />
              <Route path="contactUs" element={<ContactUs />} />
              <Route path="faq" element={<FaqPage />} />
              <Route path="rules" element={<RulesPage />} />
              <Route path="privacy" element={<PrivacyPage />} />
              <Route
                element={
                  <ProtectedRoute>
                    <ProtectedRouteHelper />
                  </ProtectedRoute>
                }
              >
                <Route path="shoppingCart" element={<ShoppingCart />} />
                <Route
                  path="completion-of-information"
                  element={<CompletionOfInformationPage />}
                />
                <Route path="payment" element={<PaymentPage />} />
                <Route
                  path="successful-payment"
                  element={<SuccessfulPaymentPage />}
                />
                <Route
                  path="unsuccessful-payment"
                  element={<UnsuccessfulPaymentPage />}
                />

                <Route path="profile" element={<ProfilePage />} />
                <Route path="order-tracking" element={<OrderTrackingPage />} />
                <Route path="favorites" element={<FavoritePage />} />
                <Route path="my-addresses" element={<MyAddressesPage />} />
              </Route>
            </Route>
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
      <Toaster
        position="top-center"
        gutter={12}
        toastOptions={{
          success: {
            duration: 3000,
          },
          error: {
            duration: 5000,
          },
          style: {
            fontSize: "16px",
            maxWidth: "500px",
            padding: "16px 24px",
          },
        }}
      />
    </QueryClientProvider>
  );
}

export default App;
