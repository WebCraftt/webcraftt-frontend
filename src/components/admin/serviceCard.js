import { MdDiscount,MdPriceChange,MdMiscellaneousServices,MdDetails } from "react-icons/md";

const serviceCard = (props)=>{
    return(
        <div className="flex">
            <div className="w-4/5 flex flex-col font-sans font-semibold">
                <div className="flex">
                    <div className="flex item-center text-slate-400 items-center mr-1"><MdMiscellaneousServices></MdMiscellaneousServices></div>
                    <span className="my-2">{props.name}</span>
                </div>
                <div className="flex">
                    <div className="flex item-center text-slate-400 items-center mr-1"><MdDetails></MdDetails></div>
                    <span className="my-2">{props.details}</span>
                </div>
                <div className="flex my-2">
                    <div className="flex">
                        <div className="flex item-center text-slate-400 items-center mr-1"><MdDiscount></MdDiscount></div>
                        <span className="font-semibold text-slate-400 text-base">Discount:</span>
                        <span className="font-semibold text-slate-950 text-base ml-1">{props.discount}</span>
                    </div>
                    <div className="ml-8 flex">
                        <div className="flex item-center text-slate-400 items-center mr-1"><MdPriceChange></MdPriceChange></div>
                        <span className="font-semibold text-slate-400 text-base">Price:</span>
                        <span className="font-semibold text-slate-950 text-base ml-1">{props.price}</span>
                    </div>
                </div>
            </div>
            <div className="w-1/5 flex items-center">
                <img src={props.image}></img>
            </div>
        </div>
    )
}

export default serviceCard;