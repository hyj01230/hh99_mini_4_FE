import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "../pages/Main";
import Detail from "../pages/Detail";
import UserPage from "../pages/UserPage";
import Content from "../pages/Content";
import Join from "../pages/Join";
import Login from "../pages/Login";


const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/userinfo/:id" element={<UserPage />} />
        <Route path="/content/:id" element={<Content />} />
        <Route path="/join" element={<Join />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router;