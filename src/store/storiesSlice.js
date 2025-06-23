import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  stories: [
    {
      id: '1',
      username: 'Your Story',
      image: 'https://randomuser.me/api/portraits/women/44.jpg',
      viewed: false
    },
    {
      id: '2',
      username: 'johndoe',
      image: 'https://randomuser.me/api/portraits/men/32.jpg',
      viewed: false
    },
    {
      id: '3',
      username: 'janedoe',
      image: 'https://randomuser.me/api/portraits/women/22.jpg',
      viewed: true
    },
    {
      id: '4',
      username: 'traveler',
      image: 'https://randomuser.me/api/portraits/men/75.jpg',
      viewed: false
    },
    {
      id: '5',
      username: 'foodie',
      image: 'https://randomuser.me/api/portraits/women/68.jpg',
      viewed: true
    },
    {
      id: '6',
      username: 'photographer',
      image: 'https://randomuser.me/api/portraits/men/90.jpg',
      viewed: false
    }
  ]
};

export const storiesSlice = createSlice({
  name: 'stories',
  initialState,
  reducers: {
    viewStory: (state, action) => {
      const story = state.stories.find(story => story.id === action.payload);
      if (story) {
        story.viewed = true;
      }
    }
  }
});

export const { viewStory } = storiesSlice.actions;
export default storiesSlice.reducer;