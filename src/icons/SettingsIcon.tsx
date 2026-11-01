import React from 'react';
import { View } from 'react-native';
import Svg, { Circle, Path } from 'react-native-svg';

import { theme } from '../theme';

interface SettingsIconProps {
  color?: string;
  size?: number;
}

const SettingsIcon: React.FC<SettingsIconProps> = ({
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
    <Svg width={size} height={size} viewBox={'0 0 16 16'}>
      <Path
        d={'M8 1.5 L13.6 4.75 V11.25 L8 14.5 L2.4 11.25 V4.75 Z'}
        stroke={color}
        strokeWidth={0.9}
        fill={'none'}
        strokeLinecap={'round'}
        strokeLinejoin={'round'}
      />

      <Circle
        cx={'8'}
        cy={'8'}
        r={'2.25'}
        stroke={color}
        strokeWidth={0.9}
        fill={'none'}
      />
    </Svg>
  </View>
);

export default SettingsIcon;
