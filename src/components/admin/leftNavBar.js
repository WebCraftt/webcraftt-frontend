'use client'
import { useState } from "react"

const leftNavBar = (props)=>{

    const [segmentName,setSegment] = (useState('Team'))

    const links = [
        {title: 'Team',route:'/admin/team',icon:''},
        {title: 'Service',route:'/admin/service',icon:''},
        {title: 'Review',route:'/admin/review',icon:''},
        {title: 'Project',route:'/admin/project',icon:''},
    ]

    const segmentNameHandler =(segment)=>{
        props.changeSegment(segment)
        setSegment((prevState)=>{
            return segment;
        })
    }

    return(

        <div className="bg-gray-800 h-full px-6 py-12 relative">
            <div className="text-slate-200 text-lg pb-4 border-b-2">
                <span>Admin Panel</span>
            </div>
            {links.map((link)=>{
                return(
                    <div onClick={()=>segmentNameHandler(link.title)} key={link.title} className="h2 my-4 px-3 py-2 text-slate-200 rounded-md text-sm font-semibold cursor-pointer hover:bg-gray-200 hover:text-slate-600">
                        <a href="#">{link.title}</a>
                    </div>
                )
            })}

            <div className="absolute bottom-8 left-36">
                <img height="5rem" className="" src="./src/constants/Images/WebCraft.png"></img>
            </div>

        </div>

    )
}

export default leftNavBar;