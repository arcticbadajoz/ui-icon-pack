import React from 'react';
import { View } from 'react-native';
import Svg, { Path } from 'react-native-svg';
import type { IconProps } from './types';

const BackIcon = ({
  size = 30,
  color = '#000',
  style,
}: IconProps) => (
  <View
    style={[
      {
        width: size,
        height: size,
        justifyContent: 'center',
        alignItems: 'center',
      },
      style,
    ]}>
    <Svg width={size * 1.3} height={size * 1.3} viewBox={'0 0 24 24'}>
      {/* Shorter arrowhead and thicker arrow body */}
      <Path
        d={'M19 12 H5 M9.5 7.5 L5 12 L9.5 16.5'}
        fill={'none'}
        stroke={color}
        strokeWidth={2}
        strokeLinecap={'round'}
        strokeLinejoin={'round'}
      />
    </Svg>
  </View>
);

export default BackIcon;
