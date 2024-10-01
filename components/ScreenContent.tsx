import { PixelRatio, Text, useWindowDimensions, View } from 'react-native';

import { EditScreenInfo } from './EditScreenInfo';

type ScreenContentProps = {
  title: string;
  path: string;
  children?: React.ReactNode;
};

export const ScreenContent = ({ title, path, children }: ScreenContentProps) => {
  const { width, height } = useWindowDimensions();
  const pixelRatio = PixelRatio.get();
  console.log({ title, path, children, width, height, pixelRatio });
  return (
    <View className="flex-1  bg-pink-200 p-14">
      <View className="h-[200px] w-[200px] bg-red-500" />
      <View className="h-[200px] w-[200px] bg-green-500" />
      <Text>
        123 <Text className="text-red-700">123</Text>
      </Text>
    </View>
  );
};
