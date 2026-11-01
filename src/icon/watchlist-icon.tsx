import React from 'react';
import { View } from 'react-native';
import Svg, { Path } from 'react-native-svg';
import type { IconProps } from './types';

const WatchlistIcon = ({
  size = 30,
  color = '#0095D9',
}: IconProps) => (
  <View
    style={{
      width: size,
      height: size,
      justifyContent: 'center',
      alignItems: 'center',
    }}>
    <Svg width={size * 1.2} height={size * 1.2} viewBox={'0 0 24 24'}>
      {/* Row 1 */}
      <Path
        d={'M5 7 H5.5 M8 7 H19'}
        fill={'none'}
        stroke={color}
        strokeWidth={1.2}
        strokeLinecap={'round'}
      />

      {/* Row 2 */}
      <Path
        d={'M5 12 H5.5 M8 12 H19'}
        fill={'none'}
        stroke={color}
        strokeWidth={1.2}
        strokeLinecap={'round'}
      />

      {/* Row 3 */}
      <Path
        d={'M5 17 H5.5 M8 17 H19'}
        fill={'none'}
        stroke={color}
        strokeWidth={1.2}
        strokeLinecap={'round'}
      />
    </Svg>
  </View>
);

export default WatchlistIcon;
