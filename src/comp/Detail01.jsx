import '../css/detail01.css'
import DetailTop from '../comp/Detail01/Detail01-top';
import DetailUl from '../comp/Detail01/Detail01-ul';
import img from '../assets/testImg.png';
import { useState } from 'react';
const Detail = () => {
    const [hover, setHover] = useState(false);

    const hoverHandle = (e) => {
        setHover(true);
        console.log(e.target)
        e.target.offsetParent.classList.add('sel');
    }
    const leaveHandle = (e) => {
        setHover(false);
        e.target.offsetParent.classList.remove('sel');
    }
    return (
        <section id="detail01">
            <div className="detail-top">
                <DetailTop />
                <DetailUl />
            </div>
            <div className="detail-main">
                <div className='detail-item sel' onMouseOver={(e)=>hoverHandle(e)} onMouseLeave={(e)=>leaveHandle(e)}>
                    <img src={img} />
                    <div className='desc'>
                        <p>
                            <span>서울숲</span>
                            <span className='icon'>
                                <i className="fa-regular fa-heart"></i>
                            </span>
                        </p>
                    </div>
                </div>
                <div className='detail-item sel' onMouseOver={(e)=>hoverHandle(e)} onMouseLeave={(e)=>leaveHandle(e)}>
                    <img src={img} />
                    <div className='desc'>
                        <p>
                            <span>서울숲</span>
                            <span className='icon'>
                                <i className="fa-regular fa-heart"></i>
                            </span>
                        </p>
                    </div>
                </div>
                <div className='detail-item sel' onMouseOver={(e)=>hoverHandle(e)} onMouseLeave={(e)=>leaveHandle(e)}>
                    <img src={img} />
                    <div className='desc'>
                        <p>
                            <span>서울숲</span>
                            <span className='icon'>
                                <i className="fa-regular fa-heart"></i>
                            </span>
                        </p>
                    </div>
                </div>
                <div className='detail-item sel' onMouseOver={(e)=>hoverHandle(e)} onMouseLeave={(e)=>leaveHandle(e)}>
                    <img src={img} />
                    <div className='desc'>
                        <p>
                            <span>서울숲</span>
                            <span className='icon'>
                                <i className="fa-regular fa-heart"></i>
                            </span>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
};

export default Detail;