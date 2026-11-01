import { View } from 'react-native';
import Svg, { Circle, Path } from 'react-native-svg';

const InfoIcon = ({ size = 30, color }) => (
  <View
    style={{
      width: size,
      height: size,
      justifyContent: 'center',
      alignItems: 'center',
    }}>
    <Svg width={size} height={size} viewBox={'0 0 16 16'}>
      {/* Outer Enclosing Circle */}
      <Circle
        cx={8}
        cy={8}
        r={7.4}
        stroke={color}
        strokeWidth={1}
        fill={'none'}
      />

      {/* Dot of the 'i' */}
      <Circle cx={8} cy={4.8} r={0.9} fill={color} />

      {/* Stem of the 'i' */}
      <Path
        d={`
          M7.2 7.3
          H8.8
          V12.2
          H7.2
          Z
        `}
        fill={color}
      />
    </Svg>
  </View>
);

export default InfoIcon;
