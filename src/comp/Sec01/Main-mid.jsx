import date from '../../assets/date.png';
import pic from '../../assets/pic.png';
import act from '../../assets/act.png';
import camp from '../../assets/camp.png';
const MainMid = ({dragStartHandler, dragHandler, dragEndHandler, dragOverHandler, left, ulRef, tab}) => {
    
    const areaList = [
        '서울', '인천', '대전', '대구', '광주',
        '부산', '울산', '세종', '경기', '강원',
        '충북', '충남', '경북', '경남', '전북',
        '전남', '제주'
    ];
    
    const themeList = [
        {
            name: '연인',
            img: date
        },
        {
            name: '사진',
            img: pic
        },
        {
            name: '활동',
            img: act
        },
        {
            name: '캠핑',
            img: camp
        },
    ]
    
    return (
        <div className='main-mid'>
            <ul draggable={tab === 0 ? true : false}
                onDragStart={dragStartHandler}
                onDrag={dragHandler}
                onDragEnd={dragEndHandler}
                onDragOver={dragOverHandler}
                style={{ left: left }}
                ref={ulRef}
            >
                {
                    tab === 0 ?
                    areaList.map((data, index) => (
                        <li key={index} className={index === 0 ? 'area sel' : 'area'}>
                            <span>{data}</span>
                        </li>
                    ))
                        :
                    themeList.map((data, index) => (
                        <li key={index} className={index === 0 ? 'sel' : ''}>
                            <img src={data.img}/>
                            <span>{data.name}</span>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
};

export default MainMid;