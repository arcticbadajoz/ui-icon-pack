import React from 'react';
import { View } from 'react-native';
import Svg, { Path } from 'react-native-svg';

interface HomeIconProps {
  size?: number;
  color?: string;
}

const HomeIcon: React.FC<HomeIconProps> = ({ size = 20, color }) => (
  <View
    style={{
      width: size,
      height: size,
      justifyContent: 'center',
      alignItems: 'center',
    }}>
    <Svg width={size} height={size} viewBox="0 0 24 24">
      {/* House body with slightly extended roof */}
      <Path
        d="
          M12 3
          L2.2 10.4
          L2.8 11.3
          L3.5 10.8
          V19.5
          C3.5 20.33 4.17 21 5 21
          H9.5
          V14
          H14.5
          V21
          H19
          C19.83 21 20.5 20.33 20.5 19.5
          V10.8
          L21.2 11.3
          L21.8 10.4
          Z
        "
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />

      {/* Narrower door */}
      <Path
        d="
          M10 21
          V15
          H14
          V21
          Z
        "
      />
    </Svg>
  </View>
);

export default HomeIcon;
