import '../css/detail01.css';
import test from '../assets/csvjson.json';
import Card from './Detail01/Card';
const Detail = () => {
    return (
        <section id='detail01'>
            {/* <div className="detail-nav">
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
                     <i className="fa-solid fa-store"></i>
                        <span>쇼핑</span>
                    </li>
                </ul>
            </div>
            <div className="detail-main">
                <Card />
            </div> */}
            <Card />
        </section>
    )
};

export default Detail;