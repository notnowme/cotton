import { useState } from 'react';
import '../../css/detail04.css'
import { useEffect } from 'react';
import { useRef } from 'react';
import IMG from '../../assets/testImg.png'
import IMG2 from '../../assets/testImg02.gif'

const Card = () => {
    const [focus, setFocus] = useState(false);
    const [scrollY, setScrollY] = useState(0);
    const [scrollActive, setScrollActive] = useState(false);
    const leftRef = useRef(null);
    const focusHandle = () => {
        if(focus) {
            setFocus(false);
        } else {
            setFocus(true);
        }
    }
    const test = () => {
        const a = leftRef.getBoundingRect();
        console.log(a);
    }
    const sendTest = async () => {
        const b = await fetch('http://192.168.20.8:4000/');
    }
    return (
        <section id="detail04">
            <div className="detail-left"
                onClick={test}
                ref={leftRef}
                >
                <ul>
                    <li>
                        <span className='first'>카테고리</span>
                    </li>
                    <li className='sel'>
                        <i className="fa-solid fa-tree"></i>
                        <span>자연</span>
                    </li>
                    <li>
                        <i className="fa-regular fa-futbol"></i>
                        <span>활동</span>
                    </li>
                    <li>
                        <i className="fa-solid fa-question"></i>
                        <span>몰루</span>
                    </li>
                    <li>
                        <i className="fa-solid fa-question"></i>
                        <span>몰루2</span>
                    </li>
                    <li>
                        <i className="fa-solid fa-question"></i>
                        <span>몰루3</span>
                    </li>
                </ul>
            </div>
            <div className="detail-right">
                <div className="right-banner">
                    <img src={IMG2} />
                </div>
                <div className="right-top">
                    <div className={focus ? 'search focus' : 'search'}>
                        <i className="fa-solid fa-magnifying-glass"></i>
                        <input type="text"
                            placeholder='도시 및 지역을 검색해 보세요.'
                            onFocus={focusHandle}
                            onBlur={focusHandle}
                        />
                    </div>
                </div>
                <div className="right-bottom">
                    <div className="detail-item">
                        <div className="item-img">
                            <img src={IMG} />
                        </div>
                        <div className="item-desc">
                            <div className="text">
                                <span>서울</span>
                                <span>서울숲</span>
                            </div>
                            <button>
                                자세히
                            </button>
                        </div>
                    </div>
                    <div className="detail-item">
                        <div className="item-img">
                            <img src={IMG} />
                        </div>
                        <div className="item-desc">
                            <div className="text">
                                <span>서울</span>
                                <span>서울숲</span>
                            </div>
                            <button>
                                자세히
                            </button>
                        </div>
                    </div>
                    <div className="detail-item">
                        <div className="item-img">
                            <img src={IMG} />
                        </div>
                        <div className="item-desc">
                            <div className="text">
                                <span>서울</span>
                                <span>서울숲</span>
                            </div>
                            <button>
                                자세히
                            </button>
                        </div>
                    </div>
                    <div className="detail-item">
                        <div className="item-img">
                            <img src={IMG} />
                        </div>
                        <div className="item-desc">
                            <div className="text">
                                <span>서울</span>
                                <span>서울숲</span>
                            </div>
                            <button>
                                자세히
                            </button>
                        </div>
                    </div>
                    <div className="detail-item">
                        <div className="item-img">
                            <img src={IMG} />
                        </div>
                        <div className="item-desc">
                            <div className="text">
                                <span>서울</span>
                                <span>서울숲</span>
                            </div>
                            <button>
                                자세히
                            </button>
                        </div>
                    </div>
                    <div className="detail-item">
                        <div className="item-img">
                            <img src={IMG} />
                        </div>
                        <div className="item-desc">
                            <div className="text">
                                <span>서울</span>
                                <span>서울숲</span>
                            </div>
                            <button>
                                자세히
                            </button>
                        </div>
                    </div>
                    <div className="detail-item">
                        <div className="item-img">
                            <img src={IMG} />
                        </div>
                        <div className="item-desc">
                            <div className="text">
                                <span>서울</span>
                                <span>서울숲</span>
                            </div>
                            <button>
                                자세히
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
};

export default Card;