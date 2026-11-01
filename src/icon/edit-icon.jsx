import { View } from 'react-native';
import Svg, { Path } from 'react-native-svg';

const EditIcon = ({ color, size = 25 }) => (
  <View
    style={{
      width: size,
      height: size,
      justifyContent: 'center',
      alignItems: 'center',
    }}>
    <Svg width={size * 1.3} height={size * 1.15} viewBox={'0 0 24 24'}>
      <Path
        d={
          'M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04a.996.996 0 000-1.41l-2.34-2.34a.996.996 0 00-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z'
        }
        fill={color}
      />
    </Svg>
  </View>
);

export default EditIcon;
