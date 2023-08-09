import { AiFillProject,AiOutlineLink } from "react-icons/ai";
import { MdDetails,} from "react-icons/md";

const projectCard = (props)=>{
    return(
        <div className="flex">
            <div className="w-4/5 flex flex-col font-sans font-semibold">
                <div className="flex my-2">
                    <div className="flex item-center text-slate-400 items-center mr-1"><AiFillProject></AiFillProject></div>
                    <span>{props.name}</span>
                </div>
                <div className="flex my-2">
                    <div className="flex item-center text-slate-400 items-center mr-1"><MdDetails></MdDetails></div>
                    <span>{props.details}</span>
                </div>
                <div className="flex my-2">
                    <div className="flex item-center text-slate-400 items-center mr-1"><AiOutlineLink></AiOutlineLink></div>
                    <span>
                        <a href="#">{props.url}</a>
                    </span>
                </div>
            </div>
            <div className="w-1/5 flex items-center">
                <img src={props.image}></img>
            </div>
        </div>
    )
}

export default projectCard;