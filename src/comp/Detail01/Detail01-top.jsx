import { useState } from "react";

const DetailTop = () => {
    const [focus, setFocus] = useState(false);

    const inputFocus = () => {
        if(focus) {
            setFocus(false)
        } else {
            setFocus(true);
        }
    };
    return (
        <div className={focus ? 'search focus' : 'search'}>
            <i className="fa-solid fa-magnifying-glass"></i>
            <input type="text"
                placeholder='도시를 검색해 보세요.'
                onFocus={inputFocus}
                onBlur={inputFocus}
            />
        </div>
    )
};

export default DetailTop;