import SEOUL from '../../assets/bgSeoul.png';
import GJ from '../../assets/bgGj.png';
import BUSAN from '../../assets/bgBusan.png';
import JEJU from '../../assets/bgJeju.png';

import imgShop from '../../assets/shopping.png'
import imgForest from '../../assets/forest.png'
import imgAct from '../../assets/activity.png'
import imgFood from '../../assets/food.png'
import TAPE from '../../assets/tape.png';

import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

const Content02 = () => {
    const navigate = useNavigate();
    const location = useLocation();
    // url을 읽어오기 위한 기능.

    const searchParams = new URLSearchParams(location.search);
    // 쿼리 값을 찾아주는 기능.

    const areaCode = searchParams.get('area');
    // url?area=1 일 경우 1이란 값을 저장해줌.

    const [theme, setTheme] = useState(0);
    // 어느 테마를 보여주기 위한 변수 저장.

    const themeHandle = (n) => {
        setTheme(prev => n);
    }
    // 버튼을 누르면 테마의 값이 바뀜. 0,1,2,3

    const [theme0, setTheme0] = useState([]);
    const [theme1, setTheme1] = useState([]);
    const [theme2, setTheme2] = useState([]);
    const [theme3, setTheme3] = useState([]);

    const getAreaInfo0 = async() => {
        const getData = await fetch(`http://121.66.158.211:3001/ranCos?info=A001`,{
            method: 'get',
            headers: {
                'Content-type':'application/json'
            }
        });
        const data = await getData.json();
        setTheme0(data);
    };
    const getAreaInfo1 = async() => {
        const getData = await fetch(`http://121.66.158.211:3001/ranCos?info=A002`,{
            method: 'get',
            headers: {
                'Content-type':'application/json'
            }
        });
        const data = await getData.json();
        setTheme1(data);
    };
    const getAreaInfo2 = async() => {
        const getData = await fetch(`http://121.66.158.211:3001/ranCos?info=A003`,{
            method: 'get',
            headers: {
                'Content-type':'application/json'
            }
        });
        const data = await getData.json();
        setTheme2(data);
    };
    const getAreaInfo3 = async() => {
        const getData = await fetch(`http://121.66.158.211:3001/ranCos?info=A004`,{
            method: 'get',
            headers: {
                'Content-type':'application/json'
            }
        });
        const data = await getData.json();
        setTheme3(data);
    };

    useEffect(()=>{
        getAreaInfo0();
        getAreaInfo1();
        getAreaInfo2();
        getAreaInfo3();
    },[])

    return (
        <>
            <div className="show-area">
                {areaCode === '1' && <img src={SEOUL} />}
                {areaCode === '5' && <img src={GJ} />}
                {areaCode === '39' && <img src={JEJU} />}
                {areaCode === '6' && <img src={BUSAN} />}
            </div>
            <div id="search">
            <div className="container">
                <div className="course-item">
                    <div className="area">
                        <img src={imgShop} />
                        <span>쇼핑</span>
                    </div>
                    <div className="spot">
                            {
                                theme0.map((data, index) => (
                                    <div className="spot-item">
                                        <img src={TAPE} className='tape' />
                                        <div className="img">
                                            <img src={data.firstimage} alt="" />
                                        </div>
                                        <span>{data.title}</span>
                                    </div>
                                ))
                            }
                    </div>
                </div>
                <div className="course-item">
                    <div className="area">
                        <img src={imgForest} />
                        <span>자연</span>
                    </div>
                    <div className="spot">
                            {
                                theme1.map((data, index) => (
                                    <div className="spot-item">
                                        <img src={TAPE} className='tape' />
                                        <div className="img">
                                            <img src={data.firstimage} alt="" />
                                        </div>
                                        <span>{data.title}</span>
                                    </div>
                                ))
                            }
                    </div>
                </div>
                <div className="course-item">
                    <div className="area">
                        <img src={imgAct} />
                        <span>액티비티</span>
                    </div>
                    <div className="spot">
                            {
                                theme2.map((data, index) => (
                                    <div className="spot-item">
                                        <img src={TAPE} className='tape' />
                                        <div className="img">
                                            <img src={data.firstimage} alt="" />
                                        </div>
                                        <span>{data.title}</span>
                                    </div>
                                ))
                            }
                    </div>
                </div>
                <div className="course-item" onClick={()=>navigate('/course/content/2')}>
                    <div className="area">
                        <img src={imgFood} />
                        <span>맛집</span>
                    </div>
                    <div className="spot">
                            {
                                theme3.map((data, index) => (
                                    <div className="spot-item">
                                        <img src={TAPE} className='tape' />
                                        <div className="img">
                                            <img src={data.firstimage} alt="" />
                                        </div>
                                        <span>{data.title}</span>
                                    </div>
                                ))
                            }
                    </div>
                </div>
            </div>
            </div>
        </>
    )
};

export default Content02;
