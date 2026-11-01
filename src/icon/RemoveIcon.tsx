import React from 'react';
import { View } from 'react-native';
import Svg, { Path } from 'react-native-svg';

import { theme } from '../theme';

interface RemoveIconProps {
  size?: number;
  color?: string;
}

const RemoveIcon: React.FC<RemoveIconProps> = ({
  size = 25,
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
      {/* Lid */}
      <Path
        d="
          M6 6
          H18
          V7
          H6
          Z
        "
        fill={color}
      />

      {/* Handle */}
      <Path
        d="
          M9 4
          H15
          C15.55 4 16 4.45 16 5
          V6
          H8
          V5
          C8 4.45 8.45 4 9 4
          Z
        "
        fill={color}
      />

      {/* Bin */}
      <Path
        d="
          M7 8
          H17
          L16.2 20
          C16.15 20.55 15.7 21 15.15 21
          H8.85
          C8.3 21 7.85 20.55 7.8 20
          Z
        "
        fill={color}
      />
    </Svg>
  </View>
);

export default RemoveIcon;
