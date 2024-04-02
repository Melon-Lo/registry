import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./pages/Root";
import HomePage from "./pages/home/HomePage";
import { homeLoader } from "./pages/home/homeLoader";
import SearchPage from "./pages/search/SearchPage";
import { searchLoader } from "./pages/search/searchLoader";
import DetailsPage from "./pages/details/DetailsPage";
import { detailsLoader } from "./pages/details/detailsLoader";

const router = createBrowserRouter([
  {
    path: '/',
    // element 放大家都有的 root layout
    element: <Root />,
    // children 放想要轉跳的各個頁面
    children: [
      {
        // 如果下方的 path 都不合時，轉跳到 HomePage
        index: true,
        element: <HomePage />,
        loader: homeLoader,
      },
      {
        path: "/search",
        element: <SearchPage />,
        // 使用 loader 來 fetch data
        loader: searchLoader,
      },
      {
        path: '/packages/:name',
        element: <DetailsPage />,
        loader: detailsLoader,
      }
    ]
  }
])

function App() {
  return (
    // 用 RouterProvider 把整個 App 包起來
    <RouterProvider router={router} />
  );
}

export default App;
