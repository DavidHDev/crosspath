import { Image } from 'antd';
import './life.scss';
import { Fade } from 'react-reveal';

const Life = () => {
    return (
        <section className="life">
            <Fade bottom>
                <div className="life-card">
                    <h2 className='life-title'>Explore Life @ Crosspath</h2>
                    <div className='gallery'>
                        <Image.PreviewGroup>
                            <Image placeholder={true} className='g-image' src="https://images.unsplash.com/photo-1594732832278-abd644401426?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80" />
                            <Image placeholder={true} className='g-image' src="https://images.unsplash.com/photo-1558403299-52a71df71bcf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80" />
                            <Image placeholder={true} className='g-image' src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80" />
                            <Image placeholder={true} className='g-image' src="https://images.unsplash.com/photo-1516062423079-7ca13cdc7f5a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2366&q=80" />
                            <Image placeholder={true} className='g-image' src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80" />
                            <Image placeholder={true} className='g-image' src="https://images.unsplash.com/photo-1507209696998-3c532be9b2b5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80" />
                        </Image.PreviewGroup>
                    </div>
                </div>
            </Fade>
        </section>
    );
}

export default Life;