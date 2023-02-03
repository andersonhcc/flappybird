import { View, Image, TouchableWithoutFeedback } from 'react-native';
import Logo from '../../../../assets/images/logo.png';
import Play from '../../../../assets/images/play.png';

import { styles } from './styles';

const Start = ({ handleOnStarGame }) => {
  return <View style={styles.container}>
    <Image source={Logo} style={styles.logo} />
    <TouchableWithoutFeedback onPress={handleOnStarGame}>
      <Image source={Play} style={styles.playButton} />
    </TouchableWithoutFeedback>
  </View>
};

export { Start };