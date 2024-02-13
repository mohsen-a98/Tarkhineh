import { Outlet } from "react-router-dom";

function ProtectedRouteHelper() {
  return (
    <>
      <Outlet />
    </>
  );
}

export default ProtectedRouteHelper;
