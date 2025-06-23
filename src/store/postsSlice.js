import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  posts: [
    {
      id: '1',
      username: 'johndoe',
      userImage: 'https://randomuser.me/api/portraits/men/32.jpg',
      image: 'https://source.unsplash.com/random/500x500/?nature',
      caption: 'Beautiful day in the mountains! #nature #adventure',
      likes: 243,
      comments: 32,
      timestamp: '2023-05-15T14:30:00Z',
      liked: false
    },
    {
      id: '2',
      username: 'janedoe',
      userImage: 'https://randomuser.me/api/portraits/women/44.jpg',
      image: 'https://source.unsplash.com/random/500x500/?city',
      caption: 'City lights never get old 🌃 #urban #photography',
      likes: 189,
      comments: 14,
      timestamp: '2023-05-14T20:15:00Z',
      liked: true
    },
    {
      id: '3',
      username: 'traveler',
      userImage: 'https://randomuser.me/api/portraits/men/75.jpg',
      image: 'https://source.unsplash.com/random/500x500/?beach',
      caption: 'Beach vibes only 🏖️ #summer #vacation',
      likes: 421,
      comments: 28,
      timestamp: '2023-05-13T11:45:00Z',
      liked: false
    }
  ]
};

export const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    likePost: (state, action) => {
      const post = state.posts.find(post => post.id === action.payload);
      if (post) {
        post.liked = !post.liked;
        post.likes += post.liked ? 1 : -1;
      }
    },
    addComment: (state, action) => {
      const post = state.posts.find(post => post.id === action.payload.postId);
      if (post) {
        post.comments += 1;
      }
    },
    addPost: (state, action) => {
      state.posts.unshift(action.payload);
    }
  }
});

export const { likePost, addComment, addPost } = postsSlice.actions;
export default postsSlice.reducer;