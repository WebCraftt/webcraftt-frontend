import { useState } from 'react';
import Modal from './modal';
import Team from './team';
import Service from './service';
import Review from './review';
import Project from './project';
import DeleteRecord from './deleteRecordContainer';

const card = (props)=>{

    const selectedSegment = props.segment;

    const cardObj ={...props.fields}

    const [showModal,setShowModal] = useState(false)
    const [showDeleteModal,setDeleteShowModal] = useState(false)

    const editRecord=()=>{
        setShowModal((prevState)=>{
            return true
        })

    }

    const deleteRecord=()=>{
        setDeleteShowModal((prevState)=>{
            return true
        })
    }

    const closeDeleteRecord=()=>{
        setDeleteShowModal((prevState)=>{
            return false
        })
    }

    const setApiStatus = (state)=>{
        setShowModal(false)
        props.refreshView(state)
    }

    const setDelStatus = (state)=>{
        debugger
        setDeleteShowModal((prevState)=>{
            return false
        })
        props.refreshView(state)
    }

    return(
        <div className="rounded-3xl shadow-md px-8 py-8 bg-white hover:scale-105">
                {Object.entries(cardObj).map((obj)=>{
                if(obj[0] == '_id' || obj[0] == '__v')
                return
                else
                return (
                    <div key={obj[0]}>
                        <span>{obj[0]}</span>:<span>{obj[1]}</span>
                    </div>
                )           
            })}
            <div className="flex justify-end">
                <button className="w-1/6 h-8 bg-green-400 rounded-md mr-4 shadow-md hover:bg-green-500 active:scale-95 active:shadow-sm" onClick={(e)=>editRecord()}>Edit</button>
                <button className="w-1/6 h-8 bg-red-400 rounded-md shadow-md hover:bg-red-500 active:scale-95 active:shadow-sm" onClick={(e)=>deleteRecord()}>Delete</button>
            </div>
            {showModal && <Modal onClose={() => setShowModal(false)} classes=''>

                            {/* Edit modal */}
                            {selectedSegment == "Team" && <Team btn="Update" id={props.id} apiStatus={(state)=>{setApiStatus(state)}}></Team>}
                            {selectedSegment == "Service" && <Service btn="Update" id={props.id} apiStatus={(state)=>{setApiStatus(state)}}></Service>}
                            {selectedSegment == "Review" && <Review btn="Update" id={props.id} apiStatus={(state)=>{setApiStatus(state)}}></Review>}
                            {selectedSegment == "Project" && <Project btn="Update" id={props.id} apiStatus={(state)=>{setApiStatus(state)}}></Project>}
                        </Modal>
            }

            {showDeleteModal && <Modal onClose={() => setDeleteShowModal(false)} classes={{dimensionClass:'w-1/5 h-1/5'}}>
                                {/* Delete modal */}
                                    {<DeleteRecord id={props.id} segment={selectedSegment} delStatus={(state)=>{setDelStatus(state)}} stopDelete={closeDeleteRecord}></DeleteRecord>}
                                </Modal>}
        </div>
    )
}

export default card;