import '../../css/footer.css';
import LOGO from '../../assets/logo.png'
const Footer = () => {
    const iframes = (text) => {
        return {
          __html: `<iframe src="/footerLee.html" width="100%" height="100%"></iframe>`
        };
      }
    return (
        // <div id="footer">
        //     <div className="logo">
        //         <div className="img">
        //             <img src={LOGO} />
        //         </div>
        //     </div>
        //     <div className="desc">
        //         <div className="text">
        //             <span>ⓒ 2023 cotton candy </span>
        //         </div>
        //     </div>
        // </div>
        <div id="footer"
        dangerouslySetInnerHTML={iframes()}
      ></div>
    )
};

export default Footer;