import {useEffect,useState } from 'react';
import Modal from './modal';
import TeamData from './teamData';
import ServiceData from './serviceData';
import ProjectData from './projectData';
import ReviewData from './reviewData';
import Team from './team';
import Service from './service';
import Review from './review';
import Project from './project';
import Loader from './loading';

const dataSegment = ({title})=>{

    const [selectedSegment,setSelectedSegment] = useState(title); 
    const [showModal,setShowModal] = useState(false);

    useEffect(()=>{
        setSelectedSegment(title)
    },[title,selectedSegment])


    const addService=()=>{
        setShowModal((prevState)=>{
            return true
        })
    }

    const updateSegmentState=(segment)=>{
        debugger
        setShowModal(false);
        setSelectedSegment(segment)
    }

    return(
        <div className="flex flex-col rounded-2xl h-full">
            <div className="flex justify-between mb-4">
                <span className='text-xl font-semibold text-violet-800'>{selectedSegment}</span>
                <button className='w-1/6 h-8 bg-orange-400 rounded-md shadow-md hover:bg-orange-500 active:scale-95 active:shadow-sm' onClick={addService}>Add</button>    
            </div>
         
            <div className='grid gap-8 grid-rows-{n} px-8 py-8 overflow-y-auto scroll-smooth overflow-x-hidden grid-cols-[repeat(auto-fit,_minmax(350px,_1fr))]'>
                {selectedSegment == "Team" && <TeamData presentState={(segment)=>updateSegmentState(segment)}></TeamData>}
                {selectedSegment == "Service" && <ServiceData></ServiceData>}
                {selectedSegment == "Review" && <ReviewData></ReviewData>}
                {selectedSegment == "Project" && <ProjectData></ProjectData>}
                {selectedSegment == "Loading" && <Loader classes=''></Loader>}
            </div>
            {showModal && <Modal onClose={() => setShowModal(false)} classes=''>
                            {selectedSegment == "Team" && <Team btn="Add" presentState={(segment)=>updateSegmentState(segment)}></Team>}
                            {selectedSegment == "Service" && <Service btn="Add"></Service>}
                            {selectedSegment == "Review" && <Review btn="Add"></Review>}
                            {selectedSegment == "Project" && <Project btn="Add"></Project>}
                        </Modal>
            }
        </div>
    )
}

export default dataSegment;