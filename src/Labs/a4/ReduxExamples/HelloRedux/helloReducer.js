import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  message: "Hello World",
};

const helloSlice = createSlice({
  name: "hello",
  initialState,
  reducers: {},
});

export default helloSlice.reducer;

// used to create reducer: createSlice
