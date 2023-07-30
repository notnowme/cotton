const Top = ({tab, tapClick, KOR}) => {
    return (
        <ul>
            <li className={tab === 0 ? 'sel' : ''} onClick={() => tapClick(0)}>
                <div className='icon'>
                    <img src={KOR} className='img' />
                </div>
                <span>
                    대한민국 지역 인기 여행지
                    <i className="fa-solid fa-chevron-right"></i>
                </span>
            </li>
            <li className={tab === 1 ? 'sel' : ''} onClick={() => tapClick(1)}>
                <div className='icon'>
                    <i className="fa-solid fa-route"></i>
                </div>
                <span>
                    인기 여행 코스 추천
                    <i className="fa-solid fa-chevron-right"></i>
                </span>
            </li>
        </ul>
    )
};

export default Top;