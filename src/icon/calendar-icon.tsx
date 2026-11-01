import React from 'react';
import { View } from 'react-native';
import Svg, { Path, Rect } from 'react-native-svg';

const CalendarIcon = ({
  size,
  color,
  height = 1.6,
}: {
  size: number;
  color?: string;
  height?: number;
}) => (
  <View
    style={{
      width: size,
      height: size,
      justifyContent: 'center',
      alignItems: 'center',
    }}>
    <Svg width={size * 1.4} height={size * 1.4} viewBox={'0 0 24 24'}>
      {/* Calendar body — side borders */}
      <Path
        d={`M5 4.5 H19 M19.5 5 V19 M19 19.5 H5 M4.5 19 V5`}
        fill={'none'}
        stroke={color}
        strokeWidth={1.2}
        strokeLinecap={'round'}
        strokeLinejoin={'round'}
      />

      {/* Three calendar bindings — thinner springs */}
      <Path
        d={'M8 3.5 V6 M12 3.5 V6 M16 3.5 V6'}
        fill={'none'}
        stroke={color}
        strokeWidth={1.4}
        strokeLinecap={'round'}
      />

      {/* Row 1 */}
      <Rect x={7.5} y={9} width={2} height={height} rx={0.2} fill={color} />
      <Rect x={11} y={9} width={2} height={height} rx={0.2} fill={color} />
      <Rect x={14.5} y={9} width={2} height={height} rx={0.2} fill={color} />

      {/* Row 2 */}
      <Rect x={7.5} y={12} width={2} height={height} rx={0.2} fill={color} />
      <Rect x={11} y={12} width={2} height={height} rx={0.2} fill={color} />
      <Rect x={14.5} y={12} width={2} height={height} rx={0.2} fill={color} />

      {/* Row 3 */}
      <Rect x={7.5} y={15} width={2} height={height} rx={0.2} fill={color} />
      <Rect x={11} y={15} width={2} height={height} rx={0.2} fill={color} />
      <Rect x={14.5} y={15} width={2} height={height} rx={0.2} fill={color} />
    </Svg>
  </View>
);

export default CalendarIcon;
