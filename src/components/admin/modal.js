import React from "react";
import ReactDOM from "react-dom";

const Modal = ({ onClose, children, title,classes }) => {
    const handleCloseClick = (e) => {
        debugger
        e.preventDefault();
        onClose();
    };

    const containerClass = classes.containerClass?classes.containerClass:'absolute top-0 left-0 w-full h-full flex justify-center items-center bg-slate-300/50'
    const dimensionClass = classes.dimensionClass?classes.dimensionClass:'w-2/3 h-2/3'
    const wrapperClass = classes.wrapperClass?classes.wrapperClass:'h-full w-full bg-white px-12 pt-16 rounded-2xl relative'
    const layoutClass = classes.layoutClass?classes.layoutClass:'flex justify-end text-base' 
    const closeModalIconClass = classes.closeModaIconClass?classes.closeModaIconClass:'absolute top-5 right-10'
    const modalContent = (
        <div className={containerClass} onClick={handleCloseClick}>
            <div className={dimensionClass}>
                <div className={wrapperClass}>
                        <a href="#" className={closeModalIconClass} onClick={handleCloseClick}>
                            x
                        </a>
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