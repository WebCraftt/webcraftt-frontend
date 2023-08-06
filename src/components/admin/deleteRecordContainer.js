const deleteRecordContainer =(props)=>{

    const deleteRecord = (e)=>{
        props.presentState('Loading');
        setTimeout(()=>{
            props.presentState('Team');
        },1000)
    }

    const closeModal = (e)=>{
        e.preventDefault();
        props.stopDelete();
    }

    return(
        <div className="flex flex-col">
            <span className="">Are you sure you want to delete?</span>
            <div className="flex justify-end mt-8">
                <button className="w-1/6 h-8 bg-red-400 rounded-md mr-4 shadow-md hover:bg-red-500 active:scale-95 active:shadow-sm" onClick={(e)=>deleteRecord(e)}>Yes</button>
                <button className="w-1/6 h-8 bg-blue-400 rounded-md shadow-md hover:bg-blue-500 active:scale-95 active:shadow-sm" onClick={(e)=>closeModal(e)}>No</button>
            </div>
        </div>
    )
}

export default deleteRecordContainer;