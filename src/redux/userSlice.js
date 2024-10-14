import { createSlice } from "@reduxjs/toolkit";


const userSlice = createSlice({
    name: "user",
    initialState: null,
    reducers: {
      addUser: (state, action) => {
        console.log("Adding user:");
        console.log(action.payload); // Now action.payload will be an object with uid, displayName, and email
        return action.payload; // Store user details in the state
      },
      removeUser: (state, action) => {
        return null; // Clear the user state when user logs out or is not authenticated
      },
    },
  });
  
  export const { addUser, removeUser } = userSlice.actions;
  export default userSlice.reducer;
 