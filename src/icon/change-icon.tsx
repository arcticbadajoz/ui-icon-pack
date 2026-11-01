import React from 'react';
import { View } from 'react-native';
import Svg, { Path } from 'react-native-svg';
import type { IconProps } from '../types';

const ChangeIcon = ({
  color,
  size = 25,
  strokeWidth = 1.8,
}: IconProps & {
  strokeWidth?: number;
}) => (
  <View style={{ justifyContent: 'center', alignItems: 'center' }}>
    <Svg
      width={size * 1.3}
      height={size * 1.15}
      viewBox={'0 0 24 24'}
      fill={'none'}>
      <Path
        d={'M11 7L8 4L5 7'}
        stroke={color || '#000000'}
        strokeWidth={strokeWidth}
        strokeLinecap={'round'}
        strokeLinejoin={'round'}
      />
      <Path
        d={'M13 17L16 20L19 17'}
        stroke={color || '#000000'}
        strokeWidth={strokeWidth}
        strokeLinecap={'round'}
        strokeLinejoin={'round'}
      />
      <Path
        d={'M8 20V4M16 4V20'}
        stroke={color || '#000000'}
        strokeWidth={strokeWidth}
        strokeLinecap={'round'}
        strokeLinejoin={'round'}
      />
    </Svg>
  </View>
);

export default ChangeIcon;
