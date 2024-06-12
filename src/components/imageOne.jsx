import { Parallax } from 'react-parallax';
import space1 from '../../public/space1.jpg';

const imageOne = () => (
    <Parallax className='imageOne' bgImage={space1}  strength={400}>
        <div className='firstChild'>
            <span> A trip to space!</span>
        </div>
    </Parallax>
);

export default imageOne