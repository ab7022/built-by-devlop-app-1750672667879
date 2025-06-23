import { View, ScrollView } from 'react-native';
import tw from 'twrnc';
import { useSelector } from 'react-redux';
import Post from '../components/Post';
import StoryCircle from '../components/StoryCircle';

export default function HomeScreen() {
  const stories = useSelector(state => state.stories.stories);
  const posts = useSelector(state => state.posts.posts);

  return (
    <ScrollView style={tw`bg-white dark:bg-black`}>
      <View style={tw`py-2`}>
        <ScrollView 
          horizontal 
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={tw`px-2`}
        >
          {stories.map((story, index) => (
            <StoryCircle 
              key={story.id} 
              story={story} 
              isFirst={index === 0} 
            />
          ))}
        </ScrollView>
      </View>
      
      <View style={tw`border-t border-gray-200 dark:border-gray-800`} />
      
      {posts.map(post => (
        <Post key={post.id} post={post} />
      ))}
    </ScrollView>
  );
}