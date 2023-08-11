const Seoul = ({data, index, detail, viewDetail, setDetail, setViewDetail,showDetail}) => {
    return (
        <div className="news-desc">
            <div className={detail === index ? 'news-item' : 'news-item close'}>
                <div className="title">
                    <span>{data.title}</span>
                    <i className="fa-solid fa-chevron-down"
                        onClick={() => showDetail(index)}
                    ></i>
                </div>
                <div className="desc">
                    <div className="img">
                        <img src={data.img} alt="" />
                    </div>
                    <div className="text">
                        <ul>
                            <li>
                                <strong>기간: </strong>
                                <span>{data.date}</span>
                            </li>
                            <li>
                                <strong>장소: </strong>
                                <span>{data.place}</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Seoul;