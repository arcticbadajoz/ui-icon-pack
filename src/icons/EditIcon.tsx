import React from 'react';
import { View } from 'react-native';
import Svg, { Path } from 'react-native-svg';

import { theme } from '../theme';

interface EditIconProps {
  size?: number;
  color?: string;
}

const EditIcon: React.FC<EditIconProps> = ({
  size = 20,
  color = theme.colors.primary,
}) => (
  <View
    style={{
      width: size,
      height: size,
      justifyContent: 'center',
      alignItems: 'center',
    }}>
    <Svg width={size} height={size} viewBox="0 0 24 24">
      <Path
        d="
          M4 17.5
          L3 21
          L6.5 20
          L18.5 8
          L16 5.5
          Z

          M17.25 4.25
          L19.75 6.75
          L20.5 6
          C21.2 5.3 21.2 4.2 20.5 3.5
          L20.25 3.25
          C19.55 2.55 18.45 2.55 17.75 3.25
          Z
        "
        fill={color}
        fillRule="evenodd"
      />
    </Svg>
  </View>
);

export default EditIcon;
