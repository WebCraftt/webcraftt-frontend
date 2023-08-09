import React,{useEffect} from "react";
import ReactDOM from "react-dom";

const snackBar = ({onClose,msg,classes,timeout}) => {

    const handleCloseClick = (e) => {
        debugger
        e.preventDefault();
        onClose();
    };

    useEffect(()=>{
        debugger
        setTimeout(()=>{
            onClose();
        },timeout)
    })

    const containerClass = classes.containerClass?classes.containerClass:'absolute top-0 left-0 w-full h-full flex justify-end px-8 items-end'
    const dimensionClass = classes.dimensionClass?classes.dimensionClass:'w-2/3 h-2/3'
    const wrapperClass = classes.wrapperClass?classes.wrapperClass:'h-16 w-80 px-4 py-6 rounded-2xl relative mb-16 bg-slate-800/75 text-slate-200 text-md font-semibold '
    const layoutClass = classes.layoutClass?classes.layoutClass:'flex justify-end text-base' 
    const closeModalIconClass = classes.closeModaIconClass?classes.closeModaIconClass:'absolute top-5 right-5'
    const msgClass = classes.msgClass?classes.msgClass:'leading-4'
    const LoadingCContent = (
        <div className={containerClass}>
            <div className={wrapperClass}>
                <a href="#" className={closeModalIconClass} onClick={handleCloseClick}>
                                x
                </a>
                <div className={msgClass}>{msg}</div>
            </div>
        </div>
    );

    return ReactDOM.createPortal(
        LoadingCContent,
        document.getElementById("modal-root")
    );
};

export default snackBar;