import { View, Text, TouchableOpacity, Image } from 'react-native';
import tw from 'twrnc';
import { useDispatch } from 'react-redux';
import { viewStory } from '../store/storiesSlice';

export default function StoryCircle({ story, isFirst = false }) {
  const dispatch = useDispatch();
  
  return (
    <TouchableOpacity 
      style={tw`items-center mx-2`}
      onPress={() => dispatch(viewStory(story.id))}
    >
      <View style={[
        tw`rounded-full p-0.5`, 
        story.viewed ? tw`bg-gray-300 dark:bg-gray-600` : tw`bg-gradient-to-r from-yellow-400 to-pink-500`,
        isFirst && tw`border-2 border-white dark:border-black`
      ]}>
        <Image 
          source={{ uri: story.image }} 
          style={tw`w-16 h-16 rounded-full border-2 border-white dark:border-black`} 
        />
      </View>
      <Text 
        style={tw`mt-1 text-xs ${isFirst ? 'font-bold' : ''}`}
        numberOfLines={1}
        ellipsizeMode="tail"
      >
        {story.username}
      </Text>
    </TouchableOpacity>
  );
}