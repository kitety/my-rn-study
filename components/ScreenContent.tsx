import { useReactive } from 'ahooks';
import {
  ActivityIndicator,
  Alert,
  Button,
  Image,
  ImageBackground,
  Modal,
  PixelRatio,
  Pressable,
  ScrollView,
  Text,
  useWindowDimensions,
  View,
} from 'react-native';

import Greet from './Greet';

type ScreenContentProps = {
  title: string;
  path: string;
  children?: React.ReactNode;
};

export const ScreenContent = ({ title, path, children }: ScreenContentProps) => {
  const state = useReactive({
    modalVisible: true,
  });
  const { width, height } = useWindowDimensions();
  const pixelRatio = PixelRatio.get();
  console.log({ title, path, children, width, height, pixelRatio });
  return (
    <View className="flex-1  bg-pink-200 py-14">
      <ScrollView showsVerticalScrollIndicator={false}>
        <Greet />
        <Button title="Click me" onPress={() => alert('Button pressed')} color="midnightblue" />
        <Pressable onPress={() => (state.modalVisible = true)}>
          <View className="h-[200px] w-[200px] bg-red-500">
            <Text>Open Modal</Text>
          </View>
        </Pressable>
        <ActivityIndicator size="large" color="red" />
        <Button title="Alert" onPress={() => Alert.alert('Alert', 'This is an alert')} />
        <Modal
          visible={state.modalVisible}
          onRequestClose={() => {
            state.modalVisible = false;
          }}
          animationType="slide"
          presentationStyle="pageSheet">
          <View className="flex-1 bg-blue-300 p-14">
            <Text>text content</Text>
            <Button
              title="Close modal"
              onPress={() => {
                state.modalVisible = false;
              }}
            />
          </View>
        </Modal>
        <View className="h-[200px] w-[200px] bg-green-500" />
        <Text>
          123 <Text className="text-red-700">123</Text>
        </Text>
        <Image source={require('../assets/adaptive-icon.png')} className="h-[300px] w-[300px]" />
        <Image
          source={{
            uri: 'https://picsum.photos/seed/picsum/300/300',
          }}
          className="h-[300px] w-[300px]"
        />
        <ImageBackground source={require('../assets/adaptive-icon.png')} className="flex-1">
          <Text>123</Text>
          <Text>123</Text>
          <Text>123</Text>
        </ImageBackground>
      </ScrollView>
    </View>
  );
};
