const Spots = ({data, index, detail, showDetail}) => {

    const goPage = (url) => {
        const open = window.open('about:blank');
        open.location.href = url;
    };
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
                            <li>
                                <button onClick={()=>goPage(data.url)}>자세히 보기</button>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Spots;