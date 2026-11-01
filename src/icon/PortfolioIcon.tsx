import React from 'react';
import { View } from 'react-native';
import Svg, { Circle, Line } from 'react-native-svg';

import { theme } from '../theme';

interface PortfolioIconProps {
  color?: string;
  size?: number;
}

const PortfolioIcon: React.FC<PortfolioIconProps> = ({
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
      <Circle
        cx={'8'}
        cy={'8'}
        r={'6'}
        stroke={color}
        strokeWidth={1.2}
        fill={'none'}
      />

      <Line
        x1={'8'}
        y1={'8'}
        x2={'8'}
        y2={'2'}
        stroke={color}
        strokeWidth={1.2}
        strokeLinecap={'round'}
      />

      <Line
        x1={'8'}
        y1={'8'}
        x2={'12.25'}
        y2={'4.25'}
        stroke={color}
        strokeWidth={1.2}
        strokeLinecap={'round'}
      />
    </Svg>
  </View>
);

export default PortfolioIcon;
