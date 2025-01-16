import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface MainLoginState {
  isLoginShow: boolean;
  isLogin: boolean;
}

const initialState: MainLoginState = {
 isLoginShow: false,
 isLogin: true
};
const mainLoginSlice = createSlice({
  name: 'mainLogin',
  initialState,
  reducers: {
    setIsLoginShow: (state, action: PayloadAction<boolean>) => {
      state.isLoginShow = action.payload
    },
    setIsLogin: (state, action: PayloadAction<boolean>) => {
      state.isLogin = action.payload
    }
}
});

export const { setIsLoginShow, setIsLogin  } = mainLoginSlice.actions;

export default mainLoginSlice.reducer;