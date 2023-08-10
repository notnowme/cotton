import '../../css/search.css';

import SEOUL from '../../assets/bgSeoul.png';
import GJ from '../../assets/bgGj.png';
import BUSAN from '../../assets/bgBusan.png';
import JEJU from '../../assets/bgJeju.png';


const Search = () => {
    return (
        <>
        <div className="show-area">
            <img src={SEOUL} />
        </div>
        <div id='search'>
            <ul className="menu">
                <li className='sel'>테마1</li>
                <li>테마2</li>
                <li>테마3</li>
                <li>테마4</li>
            </ul>
            <div className="container">
                <div className="desc-item">
                    
                </div>
                <div className="desc-item">

                </div>
                <div className="desc-item">

                </div>
                <div className="desc-item">

                </div>
                <div className="desc-item">

                </div>
                <div className="desc-item">

                </div>
                <div className="desc-item">

                </div>
                <div className="desc-item">

                </div>
                <div className="desc-item">

                </div>
            </div>
        </div>
        </>
    )
};

export default Search;