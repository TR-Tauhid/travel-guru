import { Outlet } from "react-router-dom";

const Root = () => {
  return (
    <div className="text-white">
      <Outlet></Outlet>
    </div>
  )
};

export default Root;