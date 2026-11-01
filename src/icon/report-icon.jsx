import { View } from 'react-native';
import Svg, { Path, Rect } from 'react-native-svg';

const IdIcon = ({ color, size = 25 }) => (
  <View
    style={{
      width: size * 1.15,
      height: size,
      justifyContent: 'center',
      alignItems: 'center',
    }}>
    <Svg width={size * 1.3} height={size * 1.15} viewBox={'0 0 30 24'}>
      {/* ID card border (width set to 26, sitting between original 24 and previous 28) */}
      <Rect
        x={'2'}
        y={'2.5'}
        width={'26'}
        height={'19'}
        rx={'2'}
        fill={'none'}
        stroke={color}
        strokeWidth={2}
        strokeLinejoin={'round'}
      />

      {/* Thicker top edge */}
      <Path
        d={'M3.5 2.5 H26.5'}
        fill={'none'}
        stroke={color}
        strokeWidth={2}
        strokeLinecap={'round'}
      />

      {/* Filled photo / person */}
      <Path
        d={`
    M9.5 6.5
    C8.3 6.5 7.5 7.6 7.5 9
    C7.5 10.4 8.3 11.5 9.5 11.5
    C10.7 11.5 11.5 10.4 11.5 9
    C11.5 7.6 10.7 6.5 9.5 6.5
    Z

    M6 17.5
    C6 14.7 7.5 12.5 9.5 12.5
    C11.5 12.5 13 14.7 13 17.5
    Z
  `}
        fill={color}
      />

      {/* Information lines */}
      <Path
        d={`
          M15 8.2 H23
          M15 12 H23
          M15 15.8 H23
        `}
        fill={'none'}
        stroke={color}
        strokeWidth={1.8}
        strokeLinecap={'round'}
      />
    </Svg>
  </View>
);

export default IdIcon;
