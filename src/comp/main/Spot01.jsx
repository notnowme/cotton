import noImg from '../../assets/noImage.png';

const Spot01 = ({ data, setViewFeed, setInfoArr, favUser}) => {
    const test = async(code) => {
        setViewFeed(true);
        const getData = await fetch(`http://121.66.158.211:3001/detail?info=${code}`,{
            method: 'get',
            headers: {
                'Content-type':'application/json'
            }
        });
        const data = await getData.json();
        setInfoArr(prev => data[0]);
        console.log(favUser + '--------');
    }
    return (
        <div className="desc-item" onClick={()=>test(data.contentid)}>
            <div className="img">
                <img src={data.firstimage ? data.firstimage : noImg} alt="" />
            </div>
            <div className="desc-text">
                <i className='fa-regular fa-heart'></i>
                <span className='text'>{data.addr1}</span>
                <span className='text'>{data.title}</span>
            </div>
        </div>
    )
};

export default Spot01;