import React from 'react';
import { View } from 'react-native';
import Svg, { Path } from 'react-native-svg';
import type { IconProps } from '../types';

const DownloadIcon = ({ color, size = 25 }: IconProps) => (
  <View style={{ justifyContent: 'center', alignItems: 'center' }}>
    <Svg
      width={size * 1.3}
      height={size * 1.15}
      viewBox={'0 0 24 24'}
      fill={'none'}>
      <Path
        d={'M6 21H18M12 3V17M12 17L17 12M12 17L7 12'}
        stroke={color || '#000000'}
        strokeWidth={2}
        strokeLinecap={'round'}
        strokeLinejoin={'round'}
      />
    </Svg>
  </View>
);

export default DownloadIcon;
