import { AiOutlineTeam,AiFillProfile,AiFillLinkedin,AiFillGithub,AiOutlineTwitter } from "react-icons/ai";


const teamCard = (props)=>{
    return(
        <div className="flex">
            <div className="w-4/5 flex flex-col font-sans font-semibold">
                <div className="flex my-2">
                    <div className="flex item-center text-slate-400 items-center mr-1"><AiOutlineTeam></AiOutlineTeam></div>
                    <span>{props.name}</span>
                </div>
                <div className="flex my-2">
                    <div className="flex item-center text-slate-400 items-center mr-1"><AiFillProfile></AiFillProfile></div>
                    <span>{props.position}</span>
                </div>
                <div className="flex my-2">
                    <div className="flex item-center text-slate-400 items-center mr-1"><AiFillLinkedin></AiFillLinkedin></div>
                    <span className="font-semibold text-slate-950 text-base ml-1">
                        <a href="#">{props.linkedinProfile}</a> 
                    </span>
                </div>
                <div className="flex my-2">
                    <div className="flex item-center text-slate-400 items-center mr-1"><AiFillGithub></AiFillGithub></div>
                    <span className="font-semibold text-slate-950 text-base ml-1">
                        <a href="#">{props.githubProfile}</a> 
                    </span>
                </div>
                <div className="flex my-2">
                    <div className="flex item-center text-slate-400 items-center mr-1"><AiOutlineTwitter></AiOutlineTwitter></div>
                    <span className="font-semibold text-slate-950 text-base ml-1">
                        <a href="#">{props.twitterProfile}</a> 
                    </span>
                </div>
            </div>
            <div className="w-1/5 flex items-center">
                <img src={props.profileImage}></img>
            </div>
        </div>
    )
}

export default teamCard;