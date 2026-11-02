import React from 'react';
import { View } from 'react-native';
import Svg, { Circle, Path, Polygon, G } from 'react-native-svg';
import type { IconProps } from '../types';

interface MarketIconProps extends IconProps {
  outline?: boolean;
}

const MarketIcon: React.FC<MarketIconProps> = ({
  color,
  size = 25,
  outline = false,
}) => (
  <View
    style={{
      width: size,
      height: size,
      justifyContent: 'center',
      alignItems: 'center',
    }}>
    <Svg width={size} height={size} viewBox="0 0 48 48">
      <Path d="M0 0h48v48H0z" fill="none" />
      <G id="Shopicon">
        <Polygon
          points="8.649,10.27 14.857,28.896 9.923,40 20,40 32,40 40,40 40,36 16.078,36 18.3,31 38.441,31 44.775,12 13.441,12 11.441,6 4,6 4,10 8.333,10"
          {...(outline
            ? {
                fill: 'none',
                stroke: color,
                strokeWidth: 2,
                strokeLinecap: 'round',
                strokeLinejoin: 'round',
              }
            : {
                fill: color,
              })}
        />
        <Circle cx="20" cy="42" r="2" fill={color} />
        <Circle cx="32" cy="42" r="2" fill={color} />
      </G>
    </Svg>
  </View>
);

export default MarketIcon;