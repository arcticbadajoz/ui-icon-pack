import React from 'react';
import Svg, { Path, Rect } from 'react-native-svg';
import type { IconProps } from './types';

const SummaryIcon = ({
  color,
  size = 25,
}: IconProps) => (
  <Svg
    width={size * 1.3}
    height={size * 1.15}
    viewBox={'0 0 24 24'}
    fill={'none'}
    stroke={color}
    strokeWidth={1.5}
    strokeLinecap={'round'}
    strokeLinejoin={'round'}>
    <Path
      d={
        'M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2'
      }
    />

    {/* Information lines */}
    <Path
      d={`
          M8 11 H16
          M8 14 H16
          M8 17 H16
        `}
      fill={'none'}
      stroke={color}
      strokeWidth={1.5}
      strokeLinecap={'round'}
    />
    <Rect x={'8'} y={'2'} width={'8'} height={'4'} rx={'1'} ry={'1'} />
  </Svg>
);

export default SummaryIcon;
