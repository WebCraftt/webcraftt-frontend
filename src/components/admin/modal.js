import React from "react";
import ReactDOM from "react-dom";

const Modal = ({ onClose, children, title }) => {
    const handleCloseClick = (e) => {
        e.preventDefault();
        onClose();
    };

    const modalContent = (
        <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center bg-slate-300/50">
            <div className="w-2/3 h-2/3">
                <div className="h-full w-full bg-white	px-12 py-12 rounded-2xl	">
                    <div className="flex justify-end text-base">
                        <a href="#" onClick={handleCloseClick}>
                            x
                        </a>
                    </div>
                    <div>{children}</div>
                </div>
            </div>
        </div>
    );

    return ReactDOM.createPortal(
        modalContent,
        document.getElementById("modal-root")
    );
};

export default Modal