import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  username: 'janedoe',
  fullName: 'Jane Doe',
  bio: 'Digital creator | Photography enthusiast',
  profileImage: 'https://randomuser.me/api/portraits/women/44.jpg',
  followers: 1243,
  following: 567,
  posts: 42
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    updateProfile: (state, action) => {
      return { ...state, ...action.payload };
    }
  }
});

export const { updateProfile } = userSlice.actions;
export default userSlice.reducer;