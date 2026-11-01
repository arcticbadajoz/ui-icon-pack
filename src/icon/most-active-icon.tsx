import React from 'react';
import { View } from 'react-native';
import Svg, { Path, Rect } from 'react-native-svg';

const MostActiveIcon = ({
  size = 30,
  color,
}: {
  size?: number;
  color?: string;
}) => (
  <View
    style={{
      width: size,
      height: size,
      justifyContent: 'center',
      alignItems: 'center',
    }}>
    <Svg
      width={size * 1.3}
      height={size * 1.3}
      viewBox={'0 0 23 20'}
      style={{
        alignSelf: 'center',
      }}>
      {/* Bar Chart Columns */}
      <Rect x={5.5} y={12.5} width={2.4} height={4.5} rx={0.8} fill={color} />

      <Rect x={8.8} y={10.5} width={2.4} height={6.5} rx={0.8} fill={color} />

      <Rect x={12.1} y={12} width={2.4} height={5} rx={0.8} fill={color} />

      <Rect x={15.4} y={10.5} width={2.4} height={6.5} rx={0.8} fill={color} />

      {/* Trend Line & Arrow */}
      <Path
        d={`
          M6 9.5
          L10 5.5
          L13.3 8.5
          L17.8 4
          M14.8 4
          H17.8
          V7
        `}
        stroke={color}
        strokeWidth={1.6}
        strokeLinecap={'round'}
        strokeLinejoin={'round'}
        fill={'none'}
      />
    </Svg>
  </View>
);

export default MostActiveIcon;
