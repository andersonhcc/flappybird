import { Image } from 'react-native';
import Matter from 'matter-js';
import { styles } from './styles';

import PipeGreen from '../../assets/images/pipe-green.png';
import PipeGreenInverted from '../../assets/images/pipe-green-inverted.png';

import PipeOrange from '../../assets/images/pipe-orange.png';
import PipeOrangeInverted from '../../assets/images/pipe-orange-inverted.png';


const Obstacle = (props) => {
  const widthBody = props.body.bounds.max.x - props.body.bounds.min.x;
  const heightBody = props.body.bounds.max.y - props.body.bounds.min.y;

  const xBody = props.body.position.x - widthBody / 2;
  const yBody = props.body.position.y - heightBody / 2;

  const color = props.color;
  
  return ( 
    <Image 
    source={
      color === 'green' ? !props.isTop ? PipeGreen : PipeGreenInverted : !props.isTop ? PipeOrange : PipeOrangeInverted
    }
    style={styles({
      widthBody,
      heightBody,
      xBody,
      yBody,
      color,
    }).obstacle}
    />
);
};

export default (world, label, isTop = false, color, pos, size) => {
  const initialObstacle = Matter.Bodies.rectangle(
    pos.x,
    pos.y,
    size.width,
    size.height,
    { label, isStatic: true }
  )

  Matter.World.add(world, [initialObstacle]);

  return {
    body: initialObstacle,
    color,
    pos,
    isTop,
    renderer: <Obstacle />
  }

}; 