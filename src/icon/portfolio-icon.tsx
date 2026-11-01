import React from 'react';
import { View } from 'react-native';
import Svg, { G, Path } from 'react-native-svg';

const path1 =
  'M20.9,17c-0.1,0.6-0.4,1.2-0.7,1.8l6.4,6.4c1.9-2.2,3.2-5,3.4-8.2H20.9z';
const path2 =
  'M17,11.1c2,0.4,3.5,1.9,3.9,3.9h9.1C29.5,8.1,23.9,2.5,17,2.1V11.1z';
const path3 =
  'M18.8,20.2C18,20.7,17,21,16,21c-2.8,0-5-2.2-5-5c0-2.4,1.7-4.4,4-4.9V2.1C7.7,2.6,2,8.6,2,16c0,7.7,6.3,14,14,14c3.5,0,6.7-1.3,9.2-3.4L18.8,20.2z';

const PortfolioIcon = ({
  size = 30,
  color = '#000000',
  outline = false,
}: {
  size?: number;
  color?: string;
  outline?: boolean;
}) => (
  <View
    style={{
      width: size,
      height: size,
      justifyContent: 'center',
      alignItems: 'center',
    }}>
    <Svg width={size} height={size} viewBox={'0 0 32 32'}>
      <G>
        <Path
          d={path1}
          fill={outline ? 'none' : color}
          stroke={outline ? color : undefined}
          strokeWidth={outline ? 1.2 : undefined}
          strokeLinecap={outline ? 'round' : undefined}
          strokeLinejoin={outline ? 'round' : undefined}
        />
        <Path
          d={path2}
          fill={outline ? 'none' : color}
          stroke={outline ? color : undefined}
          strokeWidth={outline ? 1.2 : undefined}
          strokeLinecap={outline ? 'round' : undefined}
          strokeLinejoin={outline ? 'round' : undefined}
        />
        <Path
          d={path3}
          fill={outline ? 'none' : color}
          stroke={outline ? color : undefined}
          strokeWidth={outline ? 1.2 : undefined}
          strokeLinecap={outline ? 'round' : undefined}
          strokeLinejoin={outline ? 'round' : undefined}
        />
      </G>
    </Svg>
  </View>
);

export default PortfolioIcon;
