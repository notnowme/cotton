import MainTop from './MainTop';
import '../css/section01.css';
import { useEffect, useState } from 'react';
import Sec01Main from './main/Sec01Main';
import Sec01News from './main/Sec01News';

const Index = () => {
    const [menu, setMenu] = useState(0);
    const [area, setArea] = useState(0);
    const [theme, setTheme] = useState(0);
    const [news, setNews] = useState(0);
    const [arr, setArr] = useState([]);
    const menuHandle = (n) => {
        setMenu(prev => n);
    };
    const areaHandle = (n) => {
        setArea(prev => n);
    };
    const themeHandle = (n) => {
        setTheme(prev => n);
    }
    const newsHandle = (n) => {
        setNews(prev => n);
    }
    const getAreaInfo = async(n = 1, code = 'areas') => {
        // 서울 1 - 0
        // 광주 39 - 4
        // 제주 5 - 15
        // 부산 6 - 5
        const getData = await fetch(`http://121.66.158.211:3001/${code}?info=${n}`,{
            method: 'get',
            headers: {
                'Content-type':'application/json'
            }
        });
        const data = await getData.json();
        setArr(prev => data);
    }
    useEffect(()=>{
        getAreaInfo();
        return () => {
            setArr([]);
        }
    },[]);

    useEffect(()=>{
        switch(menu) {
            case 0:
                setArea(prev => 0);
                getAreaInfo();
                break;
            case 1:
                setArea(prev => 0);
                setTheme(prev => 0);
                getThemeInfo();
                break;
        }
    },[menu])
    useEffect(()=>{
        if(menu === 1) return;
        switch(area) {
            case 0:
                getAreaInfo(1, 'areas');
                break;
            case 4:
                getAreaInfo(5, 'areas');
                break;
            case 15:
                getAreaInfo(39, 'areas');
                break;
            case 5:
                getAreaInfo(6, 'areas');
                break;
        }
    },[area]);
    useEffect(()=>{
        switch(theme) {
            case 0:
                getThemeInfo('A001');
                break;
            case 1:
                getThemeInfo('A002');
                break;
            case 2:
                getThemeInfo('A003');
                break;
            case 3:
                getThemeInfo('A004');
                break;
        }
    },[theme])
    const getThemeInfo = async(code = 'A001') => {
        const getData = await fetch(`http://121.66.158.211:3001/ranCos?info=${code}`,{
            method: 'get',
            headers: {
                'Content-type':'application/json'
            }
        });
        const data = await getData.json();
        setArr(prev => data);
    }
    return (
        <section id="sec01">
            <MainTop />
            <Sec01Main
                menu={menu}
                menuHandle={menuHandle}
                area={area}
                areaHandle={areaHandle}
                theme={theme}
                themeHandle={themeHandle}
                arr={arr}
            />
            {/* ------------------ */}
            <Sec01News
                news={news}
                newsHandle={newsHandle}
            />
        </section>
    )
};

export default Index;