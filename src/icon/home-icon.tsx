import React from 'react';
import { View } from 'react-native';
import Svg, { Path } from 'react-native-svg';
import type { IconProps } from './types';

const HomeIcon = ({
  size = 30,
  color,
  outline = false,
}: IconProps & {
  outline?: boolean;
}) => (
  <View
    style={{
      width: size,
      height: size,
      justifyContent: 'center',
      alignItems: 'center',
    }}>
    <Svg width={size} height={size} viewBox={'0 0 24 24'}>
      <Path
        d={`
          ${
            outline
              ? `
                M2.2 10.4
                L12 3
                L21.8 10.4
                L21.2 11.3
                L20.5 10.8
                V19.5
                C20.5 20.33 19.83 21 19 21
                H14
                V15
                H10
                V21
                H5
                C4.17 21 3.5 20.33 3.5 19.5
                V10.8
                L2.8 11.3
                Z
              `
              : `
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
              `
          }
        `}
        fill={outline ? 'none' : color}
        fillRule={outline ? undefined : 'evenodd'}
        clipRule={outline ? undefined : 'evenodd'}
        stroke={outline ? color : undefined}
        strokeWidth={outline ? 1.2 : undefined}
        strokeLinecap={outline ? 'round' : undefined}
        strokeLinejoin={outline ? 'round' : undefined}
      />

      {!outline && (
        <Path
          d={`
            M10 21
            V15
            H14
            V21
            Z
          `}
        />
      )}
    </Svg>
  </View>
);

export default HomeIcon;
