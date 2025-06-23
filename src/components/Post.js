import { View, Text, Image, TouchableOpacity } from 'react-native';
import tw from 'twrnc';
import { Feather, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { useDispatch } from 'react-redux';
import { likePost } from '../store/postsSlice';
import moment from 'moment';

export default function Post({ post }) {
  const dispatch = useDispatch();

  return (
    <View style={tw`mb-6`}>
      <View style={tw`flex-row items-center justify-between px-3 py-2`}>
        <View style={tw`flex-row items-center`}>
          <Image 
            source={{ uri: post.userImage }} 
            style={tw`w-8 h-8 rounded-full mr-2`} 
          />
          <Text style={tw`font-bold`}>{post.username}</Text>
        </View>
        <Feather name="more-vertical" size={18} />
      </View>
      
      <Image 
        source={{ uri: post.image }} 
        style={tw`w-full aspect-square`} 
      />
      
      <View style={tw`px-3 py-2`}>
        <View style={tw`flex-row justify-between mb-2`}>
          <View style={tw`flex-row`}>
            <TouchableOpacity onPress={() => dispatch(likePost(post.id))} style={tw`mr-4`}>
              <Ionicons 
                name={post.liked ? 'heart' : 'heart-outline'} 
                size={24} 
                color={post.liked ? tw.color('red-500') : tw.color('black dark:white')} 
              />
            </TouchableOpacity>
            <TouchableOpacity style={tw`mr-4`}>
              <Feather name="message-circle" size={24} />
            </TouchableOpacity>
            <TouchableOpacity>
              <Feather name="send" size={24} />
            </TouchableOpacity>
          </View>
          <TouchableOpacity>
            <MaterialCommunityIcons name="bookmark-outline" size={24} />
          </TouchableOpacity>
        </View>
        
        <Text style={tw`font-bold mb-1`}>{post.likes.toLocaleString()} likes</Text>
        <Text style={tw`mb-1`}>
          <Text style={tw`font-bold`}>{post.username}</Text> {post.caption}
        </Text>
        <TouchableOpacity>
          <Text style={tw`text-gray-500`}>View all {post.comments} comments</Text>
        </TouchableOpacity>
        <Text style={tw`text-gray-400 text-xs mt-1`}>
          {moment(post.timestamp).fromNow()}
        </Text>
      </View>
    </View>
  );
}