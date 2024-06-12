import { Parallax } from 'react-parallax';
import space1 from '../../public/space1.jpg';

const imageComponent = ({img}) => (
    <Parallax className='imageOne' bgImage={img}  strength={400}>
        <div className='firstChild'>
            <span> A trip to space!</span>
        </div>
    </Parallax>
);

export default imageComponent