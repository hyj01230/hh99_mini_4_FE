import { BrowserRouter, Route, Routes } from "react-router-dom";
import Detail2 from "../pages/Detail2";
import Error404 from "../pages/Error404";
import Join from "../pages/Join";
import Login from "../pages/Login";
import Main from "../pages/Main";
import MyPage from "../pages/MyPage";


const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/:id" element={<Main />} />
        <Route path="/detail/:id" element={<Detail2 />} />
        <Route path="/mypage/:id" element={<MyPage />} />
        <Route path="/join" element={<Join />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router;