import React from 'react';
import { View, type ViewStyle } from 'react-native';
import Svg, { Circle, Path } from 'react-native-svg';

const SearchIcon = ({
  size,
  color,
  style,
}: {
  size: number;
  color?: string;
  style?: ViewStyle;
}) => (
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
      {/* Magnifying glass circle */}
      <Circle
        cx={9.5}
        cy={9.5}
        r={6}
        fill={'none'}
        stroke={color}
        strokeWidth={1.6}
      />

      {/* Handle with rounded end */}
      <Path
        d={'M14 14 L20 20'}
        fill={'none'}
        stroke={color}
        strokeWidth={1.6}
        strokeLinecap={'round'}
      />
    </Svg>
  </View>
);

export default SearchIcon;
