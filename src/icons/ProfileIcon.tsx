import React from 'react';
import { View } from 'react-native';
import Svg, { Path } from 'react-native-svg';

import { useTheme } from '../theme';

interface ProfileIconProps {
  color?: string;
  size?: number;
}

const ProfileIcon: React.FC<ProfileIconProps> = ({ color, size = 25 }) => {
  const { mode, theme } = useTheme();
  const iconColor =
    color ?? (mode === 'dark' ? theme.colors.text : theme.colors.black);

  return (
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
          M9 14
          C6.2386 14 4 16.2386 4 19
          C4 20.6569 5.3431 22 7 22
          H17
          C18.6569 22 20 20.6569 20 19
          C20 16.2386 17.7614 14 15 14
          Z
        "
          fill={iconColor}
        />

        <Path
          d="
          M12 2
          C9.2386 2 7 4.2386 7 7
          C7 9.7614 9.2386 12 12 12
          C14.7614 12 17 9.7614 17 7
          C17 4.2386 14.7614 2 12 2
          Z
        "
          fill={iconColor}
        />
      </Svg>
    </View>
  );
};

export default ProfileIcon;
