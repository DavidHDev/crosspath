import { Image } from 'antd';
import './life.scss';
import { Fade } from 'react-reveal';
import img1 from '../../assets/img/img1.jpeg';
import img2 from '../../assets/img/img2.jpeg';
import img3 from '../../assets/img/img3.jpeg';
import img4 from '../../assets/img/img4.jpeg';
import img5 from '../../assets/img/img5.jpeg';
import img6 from '../../assets/img/img6.jpeg';

const Life = () => {
    return (
        <section className="life">
            <Fade bottom>
                <div className="life-card">
                    <h2 className='life-title'>Explore Life @ Crosspath</h2>
                    <div className='gallery'>
                        <Image.PreviewGroup>
                            <Image loading='lazy' placeholder={true} className='g-image' src={img1} />
                            <Image loading='lazy' placeholder={true} className='g-image' src={img2}/>
                            <Image loading='lazy' placeholder={true} className='g-image' src={img3} />
                            <Image loading='lazy' placeholder={true} className='g-image' src={img4} />
                            <Image loading='lazy' placeholder={true} className='g-image' src={img5} />
                            <Image loading='lazy' placeholder={true} className='g-image' src={img6} />
                        </Image.PreviewGroup>
                    </div>
                </div>
            </Fade>
        </section>
    );
}

export default Life;