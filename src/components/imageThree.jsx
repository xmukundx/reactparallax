import { Parallax } from 'react-parallax';
import space3 from '../../public/space3.jpg';

const imageTwo = () => (
    <Parallax className='imageOne' bgImage={space3}  strength={400}>
        <div className='firstChild'>
            <span> A trip to space!</span>
        </div>
    </Parallax>
);

export default imageTwo