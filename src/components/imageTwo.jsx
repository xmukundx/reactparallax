import { Parallax } from 'react-parallax';
import space2 from '../../public/space2.jpg';

const imageTwo = () => (
    <Parallax className='imageOne' bgImage={space2}  strength={400}>
        <div className='firstChild'>
            <span> A trip to space!</span>
        </div>
    </Parallax>
);

export default imageTwo