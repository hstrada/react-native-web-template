import { v2 } from '@creditas/mobile-tokens';
import React from 'react';
import { StatusBar, View } from 'react-native-web';

const { colors } = v2;

export const MainScreen = ({
  loading,
  loadingElement,
  error,
  children,
  backgroundColor = colors.neutral[0],
}) => {
  if (error) {
    return <></>;
  }

  return (
    <View style={{ flex: 1, backgroundColor }}>
      <StatusBar barStyle="dark-content" backgroundColor={backgroundColor} />
      {loading ? loadingElement : children}
    </View>
  );
};
