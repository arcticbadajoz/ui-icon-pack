import React from 'react';
import { View } from 'react-native';
import Svg, { Circle, Text as SvgText } from 'react-native-svg';

interface BpiIconProps {
  size?: number;
}

const BpiIcon: React.FC<BpiIconProps> = ({ size = 40 }) => (
  <View
    style={{
      width: size,
      height: size,
      justifyContent: 'center',
      alignItems: 'center',
    }}>
    <Svg width={size} height={size} viewBox="0 0 2000 2000">
      <Circle cx="1000" cy="1000" r="1000" fill="#A32C30" />

      <SvgText
        x="1000"
        y="1000"
        textAnchor="middle"
        alignmentBaseline="central"
        fontFamily="Arial"
        fontSize="600"
        fontWeight="900"
        letterSpacing="-12"
        fill="#FFFFFF">
        BPI
      </SvgText>
    </Svg>
  </View>
);

export default BpiIcon;
