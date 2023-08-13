import '../../css/footer.css';
import LOGO from '../../assets/logo.png'
const Footer = () => {
    return (
        <div id="footer">
            <div className="logo">
                <div className="img">
                    <img src={LOGO} />
                </div>
            </div>
            <div className="desc">
                <div className="text">
                    <span>ⓒ 2023 cotton candy </span>
                </div>
            </div>
        </div>
    )
};

export default Footer;