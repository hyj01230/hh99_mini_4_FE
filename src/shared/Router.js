import { BrowserRouter, Route, Routes } from "react-router-dom";
import Detail from "../pages/Detail";
import Error404 from "../pages/Error404";
import Join from "../pages/Join";
import Login from "../pages/Login";
import Main from "../pages/Main";
import MainLayout from "../pages/MainLayout";
import MyPage from "../pages/MyPage";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Main />} />
          <Route path="/:id" element={<Main />} />
          <Route path="/detail/:id" element={<Detail />} />
          <Route path="/mypage/:id" element={<MyPage />} />
        </Route>

        <Route path="/join" element={<Join />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="*"
          element={
            <>
              <Error404 />
            </>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
