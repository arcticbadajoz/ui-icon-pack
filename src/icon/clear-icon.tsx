import React from 'react';
import { View } from 'react-native';
import Svg, { Path } from 'react-native-svg';

const ClearIcon = ({ color, size = 25 }: { color?: string; size?: number }) => (
  <View style={{ justifyContent: 'center', alignItems: 'center' }}>
    <Svg
      width={size * 1.3}
      height={size * 1.15}
      viewBox={'0 0 24 24'}
      fill={'none'}>
      <Path
        d={'M7 7L17 17M17 7L7 17'}
        stroke={color || '#000000'}
        strokeWidth={1.6}
        strokeLinecap={'round'}
        strokeLinejoin={'round'}
      />
    </Svg>
  </View>
);

export default ClearIcon;
