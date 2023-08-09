const Spot01 = ({ data }) => {
    return (
        <div className="desc-item">
            <div className="img">
                <img src={data.firstimage} alt="" />
            </div>
            <div className="desc-text">
                <i className="fa-regular fa-heart"></i>
                <span className='text'>{data.addr1}</span>
                <span className='text'>{data.title}</span>
            </div>
        </div>
    )
};

export default Spot01;