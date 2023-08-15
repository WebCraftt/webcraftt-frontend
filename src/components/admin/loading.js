import React from "react";
import ReactDOM from "react-dom";

const Loading = ({classes}) => {

    const containerClass = classes.containerClass?classes.containerClass:'absolute top-0 left-0 w-full h-full flex justify-center items-center bg-slate-300/50'
    const dimensionClass = classes.dimensionClass?classes.dimensionClass:'w-2/3 h-2/3'
    const wrapperClass = classes.wrapperClass?classes.wrapperClass:'h-full w-full bg-white px-12 pt-16 rounded-2xl relative'
    const layoutClass = classes.layoutClass?classes.layoutClass:'flex justify-end text-base' 
    const closeModalIconClass = classes.closeModaIconClass?classes.closeModaIconClass:'absolute top-5 right-10'
    const LoadingCContent = (
        <div className={containerClass}>
            <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] text-secondary motion-reduce:animate-[spin_1.5s_linear_infinite]"
            role="status">
            <span
                className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
                >Loading...</span>
            </div>
        </div>
    );

    return ReactDOM.createPortal(
        LoadingCContent,
        document.getElementById("modal-root")
    );
};

export default Loading