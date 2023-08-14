import { useEffect } from "react";

const TTT = () => {
    const iframes = () => {
        return {
            __html: '<iframe src="/TmapDrive.html" width="100%" height="100%"></iframe>'
        };
    }
    return (
        <div
            dangerouslySetInnerHTML={iframes()}
            className="iframes"
        >
        </div>
    )
}
export default TTT;