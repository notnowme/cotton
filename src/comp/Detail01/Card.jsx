import '../../css/detail04.css'

const Card = () => {
    return (
        <section id="detail04">
            <div className="detail-left">
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
                <div className="right-top">
                    <div className="search">
                        <i className="fa-solid fa-magnifying-glass"></i>
                        <input type="text"
                            placeholder='도시 및 지역을 검색해 보세요.'
                        />
                    </div>
                </div>
                <div className="right-bottom">

                </div>
            </div>
        </section>
    )
};

export default Card;