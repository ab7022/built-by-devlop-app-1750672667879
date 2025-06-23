import { View, Text, TextInput, ScrollView } from 'react-native';
import tw from 'twrnc';
import { Feather } from '@expo/vector-icons';

export default function SearchScreen() {
  return (
    <View style={tw`flex-1 bg-white dark:bg-black`}>
      <View style={tw`px-4 py-2`}>
        <View style={tw`bg-gray-100 dark:bg-gray-800 rounded-lg px-4 py-2 flex-row items-center`}>
          <Feather name="search" size={18} style={tw`text-gray-500 mr-2`} />
          <TextInput 
            placeholder="Search"
            placeholderTextColor={tw.color('gray-500')}
            style={tw`flex-1 text-black dark:text-white`}
          />
        </View>
      </View>
      
      <ScrollView contentContainerStyle={tw`flex-1 items-center justify-center`}>
        <Text style={tw`text-gray-500`}>Search for people and posts</Text>
      </ScrollView>
    </View>
  );
}