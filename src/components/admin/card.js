import { useState } from 'react';
import Modal from './modal';

const card = (prop)=>{

    const cardObj ={...prop.fields}

    const [showModal,setShowModal] = useState(false)

    const editRecord=(event,id)=>{
        console.log(event)
        console.log(id)
        setShowModal((prevState)=>{
            return true
        })

    }

    const deleteRecord=(event,id)=>{
        console.log(event)
        console.log(id)
    }

    return(
        <div className="rounded-3xl shadow-md px-8 py-8 bg-slate-100 hover:scale-105" id={prop.id}>
            {Object.entries(cardObj).map((obj)=>{
                return (
                    <div key={obj[0]}>
                        <span>{obj[0]}</span>:<span>{obj[1]}</span>
                    </div>
                )           
            })}
            <div className="flex justify-end">
                <button className="w-1/6 h-8 bg-green-400 rounded-md mr-4 shadow-md hover:bg-green-500 active:scale-95 active:shadow-sm" onClick={(e)=>editRecord(e,prop.id)}>Edit</button>
                <button className="w-1/6 h-8 bg-red-400 rounded-md shadow-md hover:bg-red-500 active:scale-95 active:shadow-sm" onClick={(e)=>deleteRecord(e,prop.id)}>Delete</button>
            </div>
            {showModal && <Modal onClose={() => setShowModal(false)}>
                        </Modal>
            }
        </div>
    )
}

export default card;