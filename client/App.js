import { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TailwindProvider } from 'tailwindcss-react-native';
export default function App() {
  return (
    <TailwindProvider>
      <View className="flex-1 items-center justify-center bg-white">
        <Text>sssssssssssssss</Text>
      </View>
      </TailwindProvider>
  );
}


