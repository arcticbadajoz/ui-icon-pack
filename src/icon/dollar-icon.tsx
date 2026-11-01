import React from 'react';
import { View, type ViewStyle } from 'react-native';
import Svg, { Path } from 'react-native-svg';

const DollarIcon = ({
  size,
  color,
  style,
}: {
  size: number;
  color?: string;
  style?: ViewStyle;
}) => (
  <View
    style={[
      {
        width: size,
        height: size,
        justifyContent: 'center',
        alignItems: 'center',
      },
      style,
    ]}>
    <Svg width={size * 1.3} height={size * 1.3} viewBox={'0 0 24 24'}>
      {/* Vertical line - upper section */}
      <Path
        d={'M12 3 V5.5'}
        fill={'none'}
        stroke={color}
        strokeWidth={1.6}
        strokeLinecap={'round'}
      />

      {/* Vertical line - lower section */}
      <Path
        d={'M12 18.5 V21'}
        fill={'none'}
        stroke={color}
        strokeWidth={1.6}
        strokeLinecap={'round'}
      />

      {/* Dollar S */}
      <Path
        d={
          'M16 7.5 C15.2 6.3 13.8 5.5 12 5.5 C9.8 5.5 8 6.7 8 8.5 C8 10.5 9.8 11.2 12 12 C14.2 12.8 16 13.5 16 15.5 C16 17.3 14.2 18.5 12 18.5 C10.2 18.5 8.8 17.7 8 16.5'
        }
        fill={'none'}
        stroke={color}
        strokeWidth={2}
        strokeLinecap={'round'}
        strokeLinejoin={'round'}
      />
    </Svg>
  </View>
);

export default DollarIcon;
