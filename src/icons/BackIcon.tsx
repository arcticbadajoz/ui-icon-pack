import React from 'react';
import { View } from 'react-native';
import Svg, { Path } from 'react-native-svg';

import { theme } from '../theme';

interface BackIconProps {
  size?: number;
  color?: string;
}

const BackIcon: React.FC<BackIconProps> = ({
  size = 20,
  color = theme.colors.primary,
}) => (
  <View
    style={{
      width: size,
      height: size,
      justifyContent: 'center',
      alignItems: 'center',
    }}>
    <Svg width={size} height={size} viewBox="0 0 16 16">
      <Path
        d="M7 3L3 8L7 13M3.5 8H13"
        stroke={color}
        strokeWidth={1.5}
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  </View>
);

export default BackIcon;
