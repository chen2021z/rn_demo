import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "todolist",
  initialState: {
    listItem: [
      {
        title: "看书",
        isCompleted: false,
      },
      {
        title: "写字",
        isCompleted: false,
      },
      {
        title: "玩游戏",
        isCompleted: true,
      },
    ],
  },
  reducers: {
    increment: (state, action) => {
      let arr = [...state.listItem];
      arr.push({
        title: action.payload,
        isCompleted: false,
      });
      state.listItem = arr;
    },
    changeCompleteStatus: (state, action) => {
      let arr = [...state.listItem];
      arr[action.payload].isCompleted = !arr[action.payload].isCompleted;
      state.listItem = arr;
    },
    decrement: (state,action) => {
      let arr = [...state.listItem];
      arr.splice(action.payload,1);
      state.listItem  =arr;
    },
  },
});

// Action creators are generated for each case reducer function
export const { increment, decrement, changeCompleteStatus } = counterSlice.actions;

export default counterSlice.reducer;