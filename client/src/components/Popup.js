import {useEffect, useRef} from "react";

export const Popup = ({title, head, msg, toggle}) => {

    //refs
    const first = useRef(true);

    //Close popup
    function closePopup() {
        document.getElementById("popup").classList.remove("active");
    }

    //Toggle popup
    useEffect(() => {
        let popup = document.getElementById("popup");
        if (first.current) {
            first.current = false;
        } else {
            if (!popup.classList.contains("active")) popup.classList.add("active");
        }
    }, [toggle])

    return (
        <>
            <div className="popup" id="popup">
                <div className="pop-container">
                    <div className="pop-header">
                        <span className={`head ${head}`}>{title}</span>
                        <i className="fa-solid fa-xmark click" onClick={closePopup}/>
                    </div>
                    <p className="pop-msg" id="msg">{msg}</p>
                </div>
            </div>
        </>
    )
}