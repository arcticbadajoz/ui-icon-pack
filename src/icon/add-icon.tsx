import React from 'react';
import { View } from 'react-native';
import Svg, { Path } from 'react-native-svg';

import type { IconProps } from '../types';

const AddIcon: React.FC<IconProps> = ({
  size = 25,
  color,
}) => (
  <View
    style={{
      width: size,
      height: size,
      justifyContent: 'center',
      alignItems: 'center',
    }}>
    <Svg width={size} height={size} viewBox={'0 0 16 16'}>
      <Path
        d={'M8 3V13M3 8H13'}
        stroke={color}
        strokeWidth={1.2}
        strokeLinecap={'round'}
      />
    </Svg>
  </View>
);

export default AddIcon;
