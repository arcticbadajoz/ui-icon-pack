import React from 'react';
import { View } from 'react-native';
import Svg, { Rect } from 'react-native-svg';

import { theme } from '../theme';

interface ChartIconProps {
  size?: number;
  color?: string;
}

const ChartIcon: React.FC<ChartIconProps> = ({
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
    <Svg width={size} height={size} viewBox="0 0 24 24">
      <Rect x="3" y="14" width="4.5" height="7" fill={color} />
      <Rect x="9.75" y="9" width="4.5" height="12" fill={color} />
      <Rect x="16.5" y="4" width="4.5" height="17" fill={color} />
    </Svg>
  </View>
);

export default ChartIcon;
