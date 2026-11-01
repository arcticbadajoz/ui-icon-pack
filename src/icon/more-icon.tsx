import React from 'react';
import { View } from 'react-native';
import Svg, { Rect } from 'react-native-svg';

const MoreIcon = ({
  size,
  color,
  outline = false,
}: {
  size: number;
  color?: string;
  outline?: boolean;
}) => (
  <View
    style={{
      width: size,
      height: size,
      justifyContent: 'center',
      alignItems: 'center',
    }}>
    <Svg width={size * 1.2} height={size * 1.2} viewBox={'0 0 24 24'}>
      <Rect
        x={3.5}
        y={3.5}
        width={7}
        height={7}
        rx={1}
        fill={outline ? 'none' : color}
        stroke={outline ? color : undefined}
        strokeWidth={outline ? 1.2 : undefined}
      />

      <Rect
        x={13.5}
        y={3.5}
        width={7}
        height={7}
        rx={1}
        fill={outline ? 'none' : color}
        stroke={outline ? color : undefined}
        strokeWidth={outline ? 1.2 : undefined}
      />

      <Rect
        x={3.5}
        y={13.5}
        width={7}
        height={7}
        rx={1}
        fill={outline ? 'none' : color}
        stroke={outline ? color : undefined}
        strokeWidth={outline ? 1.2 : undefined}
      />

      <Rect
        x={13.5}
        y={13.5}
        width={7}
        height={7}
        rx={1}
        fill={outline ? 'none' : color}
        stroke={outline ? color : undefined}
        strokeWidth={outline ? 1.2 : undefined}
      />
    </Svg>
  </View>
);

export default MoreIcon;
