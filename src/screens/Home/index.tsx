import { ImageBackground } from 'react-native';
import Background from '../../assets/images/background.png';
import { Game } from './Game';

import { styles } from './styles';

const Home: React.FC = () => {
  return (
    <ImageBackground source={Background} style={styles.container}>
      <Game />
    </ImageBackground>
  );

};

export { Home };