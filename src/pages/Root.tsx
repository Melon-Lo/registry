import { Outlet } from "react-router-dom";
import Header from "../components/Header";

export default function Root() {
  return (
    <div className="container mx-auto px-20">
      {/* 大家都有的東西 */}
      <Header />
      {/* 不同頁面顯示不同的頁面 */}
      <Outlet />
    </div>
  );
}