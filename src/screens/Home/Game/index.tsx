import { Start } from './Start';
import { useRef, useState, useEffect } from 'react';
import { GameEngine } from 'react-native-game-engine';
import entities from '../../../entities'; 
import { styles } from './styles';

const Game: React.FC = () => {
  const [running, isRunning] = useState(false);
  const gameEnigneRef = useRef();

  const handleOnStarGame = () => {

  }
  return <Start handleOnStarGame={handleOnStarGame}/>;

  return <GameEngine 
  ref={gameEnigneRef}
  entities={entities}
  style={styles.engineContainer}
   />;
};

export { Game };