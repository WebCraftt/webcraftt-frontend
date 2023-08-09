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
import SnackBar from './snackBar';
import Loader from './loading';

const dataSegment = ({title})=>{

    const [selectedSegment,setSelectedSegment] = useState(title); 
    const [updateView,setUpdateView] = useState(false); 
    const [showModal,setShowModal] = useState(false);
    const [showSnack,setSnackView] = useState(false)
    const [snackMsg,setSnackMsg] = useState('');

    useEffect(()=>{
        setSelectedSegment(title)
    },[title,selectedSegment])


    const addService=()=>{
        setShowModal((prevState)=>{
            return true
        })
    }

    const setRefreshState=(state,segment)=>{
        debugger
        setShowModal(false);
        setSelectedSegment(segment)
        if(state.isSuccess == true){
            setUpdateView(true)
            setSnackMsg(state.successMsg)
            setSnackView(true)
        }else if(state.isSuccess == false){
            setUpdateView(false)
            setSnackMsg(state.erroMsg)
            setSnackView(false)
        }else{
            setUpdateView(false)
        }
    }

    return(
        <div className="flex flex-col rounded-2xl h-full">
            <div className="flex justify-between mb-4">
                <span className='text-xl font-semibold text-violet-800'>{selectedSegment}</span>
                <button className='w-1/6 h-8 bg-orange-400 rounded-md shadow-md hover:bg-orange-500 active:scale-95 active:shadow-sm' onClick={addService}>Add</button>    
            </div>
            {!showModal &&
                        <div className='grid gap-8 grid-rows-{n} px-8 py-8 overflow-y-auto scroll-smooth overflow-x-hidden grid-cols-[repeat(auto-fit,_minmax(350px,_1fr))]'>
                        {selectedSegment == "Team" && <TeamData updateView = {updateView}></TeamData>}
                        {selectedSegment == "Service" && <ServiceData updateView = {updateView}></ServiceData>}
                        {selectedSegment == "Review" && <ReviewData updateView = {updateView}></ReviewData>}
                        {selectedSegment == "Project" && <ProjectData updateView = {updateView}></ProjectData>}
                    </div>
            }
            {showModal && <Modal onClose={() => setShowModal(false)} classes=''>
                            {selectedSegment == "Team" && <Team btn="Add" apiStatus={(state)=>{setRefreshState(state,'Team')}}></Team>}
                            {selectedSegment == "Service" && <Service btn="Add" apiStatus={(state)=>{setRefreshState(state,'Service')}}></Service>}
                            {selectedSegment == "Review" && <Review btn="Add" apiStatus={(state)=>{setRefreshState(state,'Review')}}></Review>}
                            {selectedSegment == "Project" && <Project btn="Add" apiStatus={(state)=>{setRefreshState(state,'Project')}}></Project>}
                        </Modal>
            }
            {showSnack && <SnackBar onClose={() => setSnackView(false)} msg={snackMsg} classes='' timeout='3000'></SnackBar>}
        </div>
    )
}

export default dataSegment;