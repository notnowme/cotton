const Cmt = ({data}) => {
    return (
        <div className="cmt">
            <div className="user">
                <i className="fa-solid fa-user"></i>
            </div>
            <div className="item">
                <span className='nick'>코튼캔디</span>
                <span className="text">
                    {data.w_content}
                </span>
            </div>
        </div>
    )
};

export default Cmt;