import noImg from '../../assets/noImage.png';
const Spot01 = ({ data }) => {
    return (
        <div className="desc-item">
            <div className="img">
                <img src={data.firstimage ? data.firstimage : noImg} alt="" />
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