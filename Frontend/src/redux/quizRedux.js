// src/redux/quizRedux.js

import { createSlice } from "@reduxjs/toolkit";

const quizSlice = createSlice({
  name: "quiz",
  initialState: {
    skinType: null,
  },
  reducers: {
    setSkinType: (state, action) => {
      state.skinType = action.payload;
    },
    resetSkinType: (state) => {
      state.skinType = null;
    },
  },
});

export const { setSkinType, resetSkinType } = quizSlice.actions;
export default quizSlice.reducer;
