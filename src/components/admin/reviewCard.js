import { AiFillProfile } from "react-icons/ai";
import { GoOrganization } from "react-icons/go";
import { MdPreview,} from "react-icons/md";

const reviewCard = (props)=>{
    return(
        <div className="flex">
            <div className="w-4/5 flex flex-col font-sans font-semibold">
                <div className="flex my-2">
                    <div className="flex item-center text-slate-400 items-center mr-1"><MdPreview></MdPreview></div>
                    <span>{props.name}</span>
                </div>
                <div className="flex my-2">
                    <div className="flex item-center text-slate-400 items-center mr-1"><AiFillProfile></AiFillProfile></div>
                    <span>{props.position}</span>
                </div>
                <div className="flex my-2">
                    <div className="flex item-center text-slate-400 items-center mr-1"><GoOrganization></GoOrganization></div>
                    <span>{props.company}</span>
                </div>
            </div>
            <div className="w-1/5 flex items-center">
                <img src={props.image}></img>
            </div>
        </div>
    )
}

export default reviewCard;