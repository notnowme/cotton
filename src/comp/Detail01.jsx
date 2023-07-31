import '../css/detail01.css';
import test from '../assets/csvjson.json';
const Detail = () => {
    const aaa = test.filter(el => !el['업소명'].includes('맥도날드'))
    console.log(aaa);
    return (
        <section id='detail01'>
            {

            }
        </section>
    )
};

export default Detail;