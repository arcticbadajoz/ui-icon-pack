import React from 'react';
import { View } from 'react-native';
import Svg, { Circle, Path } from 'react-native-svg';

import { theme } from '../theme';

interface MarketIconProps {
  color?: string;
  size?: number;
}

const MarketIcon: React.FC<MarketIconProps> = ({
  color = theme.colors.primary,
  size = 25,
}) => (
  <View
    style={{
      width: size,
      height: size,
      justifyContent: 'center',
      alignItems: 'center',
    }}>
    <Svg width={size} height={size} viewBox="0 0 24 24">
      {/* Cart */}
      <Path
        d="
          M3 4
          H5
          L6.8 16
          H18.5
          L21 7
          H6
        "
        fill="none"
        stroke={color}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Wheels */}
      <Circle cx="9" cy="20" r="1.5" fill={color} />
      <Circle cx="17" cy="20" r="1.5" fill={color} />
    </Svg>
  </View>
);

export default MarketIcon;
