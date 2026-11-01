import { View } from 'react-native';
import Svg, { Path } from 'react-native-svg';

const ChevronIcon = ({ color = '#000000', size = 25 }) => (
  <View
    style={{
      width: size,
      height: size,
      justifyContent: 'center',
      alignItems: 'center',
    }}>
    <Svg width={size} height={size} viewBox={'0 0 24 24'} fill={'none'}>
      <Path
        d={'M6 9L12 15L18 9'}
        stroke={color}
        strokeWidth={2}
        strokeLinecap={'round'}
        strokeLinejoin={'round'}
      />
    </Svg>
  </View>
);

export default ChevronIcon;
