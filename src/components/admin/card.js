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

    const editRecord=(event,id)=>{
        setShowModal((prevState)=>{
            return true
        })

    }

    const deleteRecord=(event,id)=>{
        debugger
        setDeleteShowModal((prevState)=>{
            return true
        })
    }

    return(
        <div className="rounded-3xl shadow-md px-8 py-8 bg-slate-100 hover:scale-105" key={props.id}>
            {Object.entries(cardObj).map((obj)=>{
                return (
                    <div key={obj[0]}>
                        <span>{obj[0]}</span>:<span>{obj[1]}</span>
                    </div>
                )           
            })}
            <div className="flex justify-end">
                <button className="w-1/6 h-8 bg-green-400 rounded-md mr-4 shadow-md hover:bg-green-500 active:scale-95 active:shadow-sm" onClick={(e)=>editRecord(e,props.id)}>Edit</button>
                <button className="w-1/6 h-8 bg-red-400 rounded-md shadow-md hover:bg-red-500 active:scale-95 active:shadow-sm" onClick={(e)=>deleteRecord(e,props.id)}>Delete</button>
            </div>
            {showModal && <Modal onClose={() => setShowModal(false)} classes=''>

                            {/* Edit modal */}
                            {selectedSegment == "Team" && <Team btn="Update" formVal={...cardObj}></Team>}
                            {selectedSegment == "Service" && <Service btn="Update" formVal={...cardObj}></Service>}
                            {selectedSegment == "Review" && <Review btn="Update" formVal={...cardObj}></Review>}
                            {selectedSegment == "Project" && <Project btn="Update" formVal={...cardObj}></Project>}
                        </Modal>
            }

            {showDeleteModal && <Modal onClose={() => setDeleteShowModal(false)} classes={{dimensionClass:'w-1/5 h-1/5'}}>
                                {/* Delete modal */}
                                {<DeleteRecord></DeleteRecord>}
                                </Modal>}
        </div>
    )
}

export default card;