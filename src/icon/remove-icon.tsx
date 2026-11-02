import React from 'react';
import { View } from 'react-native';
import Svg, { Path } from 'react-native-svg';
import type { IconProps } from '../types';

const RemoveIcon = ({
  color,
  size = 25,
}: IconProps) => (
  <View style={{ justifyContent: 'center', alignItems: 'center' }}>
    <Svg
      width={size * 1.3}
      height={size * 1.15}
      viewBox={'0 0 24 24'}
      fill={'none'}>
      <Path
        d={
          'M8 12H16M12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21Z'
        }
        stroke={color || '#000000'}
        strokeWidth={1.4}
        strokeLinecap={'round'}
        strokeLinejoin={'round'}
      />
    </Svg>
  </View>
);

export default RemoveIcon;
