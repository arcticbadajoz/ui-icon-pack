import React from 'react';
import { View } from 'react-native';
import Svg, { Circle, Polygon } from 'react-native-svg';

interface AlfmIconProps {
  size?: number;
}

const AlfmIcon: React.FC<AlfmIconProps> = ({ size = 40 }) => (
  <View
    style={{
      width: size,
      height: size,
      justifyContent: 'center',
      alignItems: 'center',
    }}>
    <Svg width={size} height={size} viewBox="0 0 1000 1000">
      {/* Dark Green Circular Background */}
      <Circle cx="500" cy="500" r="500" fill="#245135" />

      {/* Outer White Chevron / A-Shape */}
      <Polygon
        points="500,128 838,728 720,728 500,318 280,728 162,728"
        fill="#FFFFFF"
      />

      {/* Inner Light Green Triangle */}
      <Polygon points="500,478 638,728 362,728" fill="#9CD058" />
    </Svg>
  </View>
);

export default AlfmIcon;
