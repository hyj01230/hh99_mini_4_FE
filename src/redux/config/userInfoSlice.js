import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { getTokenFromCookie } from "../../auth/cookie";
import { serverUrl } from "../../common/common";

export const fetchUserInfo = createAsyncThunk(
  "userInfo/fetchUserInfo",
  async () => {
    try {
      const token = getTokenFromCookie();
      const response = await axios.get(`${serverUrl}/api/user/userInfo`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data.data[0];
    } catch (error) {
      throw error;
    }
  }
);

const userInfoSlice = createSlice({
  name: "userInfo",
  initialState: {
    userIntro: "",
    nickname: "",
    imageUrl: "",
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchUserInfo.fulfilled, (state, action) => {
      // 비동기 액션 성공 시 Redux 상태를 업데이트합니다.
      return { ...state, ...action.payload };
    });
  },
});

export const { setUserInfo } = userInfoSlice.actions;

export default userInfoSlice.reducer;
