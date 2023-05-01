import { createSlice } from "@reduxjs/toolkit";

const userList = [
	{
		name: "John",
		email: "aaa@aaa",
		id: 1,
	},
	{
		name: "Lisa",
		email: "bbb@bbb",
		id: 2,
	},
	{
		name: "Tom",
		email: "ccc@ccc",
		id: 3,
	},
];

const userSlice = createSlice({
	name: "users",
	initialState: userList,
	reducers: {
		addUser: (state, action) => {
			state.push(action.payload);
		},
		updateUser: (state, action) => {
      const { id, name, email } = action.payload;
      const userToUpdate = state.find((user) => user.id === id);
      if (userToUpdate && name !== "" && email !== "") {
      userToUpdate.name = name;
      userToUpdate.email = email;
      }
      },
		deleteUser: (state, action) => {
			const { id } = action.payload;
			const uu = state.find((user) => user.id == id);
			if (uu) {
				return state.filter((ele) => ele.id !== id);
			}
		},
	},
});

export const { addUser, updateUser, deleteUser } = userSlice.actions;
export default userSlice.reducer;
