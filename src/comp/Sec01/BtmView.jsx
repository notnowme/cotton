import TAPE from '../../assets/tape.png';

const View = ({index, data}) => {
    console.log(data);
    return (
        <div className="view" key={index}>
            {/* <div className="tape">
                <img src={TAPE} />
            </div> */}
            <div className="img">
                <img src={data.firstimage} />
            </div>
            <div className="desc">
                <p>
                    {data.title}
                    <i className="fa-regular fa-heart"></i>
                </p>
                <span>{data.addr1}</span>
            </div>
        </div>
    )
};

export default View;