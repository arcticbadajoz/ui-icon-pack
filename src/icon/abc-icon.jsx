import React from 'react';
import { View } from 'react-native';
import Svg, { ClipPath, Defs, G, Path, Rect } from 'react-native-svg';

const AbcIcon = ({ color = '#1C274C', size = 25 }) => (
  <View
    style={{
      width: size,
      height: size,
      justifyContent: 'center',
      alignItems: 'center',
    }}>
    <Svg width={size * 1.65} height={size} viewBox={'0 0 52 32'} fill={'none'}>
      <Defs>
        {/* Trims every stroke flat at the top and bottom of the letters */}
        <ClipPath id={'letterBounds'}>
          <Rect x={'0'} y={'8'} width={'52'} height={'16'} />
        </ClipPath>
      </Defs>

      <G
        clipPath={'url(#letterBounds)'}
        stroke={color}
        strokeWidth={3}
        strokeLinecap={'butt'}
        strokeLinejoin={'miter'}
        fill={'none'}>
        {/* Letter A: outer x 6 → 20 */}
        <Path d={'M7 26L13 10L19 26M10 19.5H16'} />

        {/* Letter B: outer x 23 → 33.5 */}
        <Path
          d={
            'M24.5 8V24M24.5 9.5H28.75A3.25 3.25 0 0 1 28.75 16H24.5M24.5 16H28.75A3.25 3.25 0 0 1 28.75 22.5H24.5'
          }
        />

        {/* Letter C: outer x 36.5 → ~46.5 */}
        <Path d={'M45.4 11A4.5 6.5 0 1 0 45.4 21'} />
      </G>
    </Svg>
  </View>
);

export default AbcIcon;
