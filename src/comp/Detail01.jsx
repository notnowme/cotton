import '../css/detail01.css';
import test from '../assets/csvjson.json';
const Detail = () => {
    return (
        <section id='detail01'>
            <div className="detail-nav">
                <p>
                   <span>카테고리</span> 
                </p>
                <ul>
                    <li>
                        <i className="fa-solid fa-futbol"></i>
                        <span>활동</span>
                    </li>
                    <li className='sel'>
                        <i className="fa-solid fa-star"></i>
                        <span>핫플</span>
                    </li>
                    <li>
                        <i className="fa-solid fa-utensils"></i>
                        <span>음식</span>
                    </li>
                    <li>
                        <i className="fa-solid fa-tree"></i>
                        <span>자연</span>
                    </li>
                    <li>
                        <i className="fa-solid fa-plane-departure"></i>
                        <span>여행</span>
                    </li>
                </ul>
            </div>
            <div className="detail-main">

            </div>
        </section>
    )
};

export default Detail;