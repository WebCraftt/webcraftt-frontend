import { useState } from "react"
import Loader from './loading';

const deleteRecordContainer =(props)=>{

    const [isLoading,setLoading] = useState(false)
    let apiState = {
        isSuccess:false,
        hasError: false,
        successMsg: '',
        erroMsg:'',
    }

    let apiEndPoint = ""
    if(props.segment == "Team"){
        apiEndPoint = "teams"
    }else if(props.segment == "Service"){
        apiEndPoint = "services"
    }else if(props.segment == "Review"){
        apiEndPoint = "reviews"
    }else if(props.segment == "Project"){
        apiEndPoint = "projects"
    }

    const deleteData = async()=>{
        try{
            setLoading(true)
            const response = await fetch(`http://localhost:8000/api/v1/${apiEndPoint}/${props.id}`,{method:'DELETE'})
            if(!response.status){
                throw new Error('Something went wrong')
            }
            const responseJson = await response.json();

            if(responseJson.success == true){
                apiState={
                    isSuccess: true,
                    hasError: false,
                    successMsg: 'Data deleted',
                    erroMsg: ''
                }    
            }else{
                apiState={
                    isSuccess: false,
                    hasError: true,
                    successMsg: '',
                    erroMsg: 'Data not deleted'
                }    
            }
            
        }
        catch{
            apiState={
                isSuccess: false,
                hasError: true,
                successMsg: '',
                erroMsg: 'Something went wrong'
            }
        }
        setLoading(false)
        props.delStatus(apiState) 
    }

    const deleteRecord = (e)=>{
        deleteData();
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
            {isLoading && <Loader classes=''></Loader>}
        </div>
    )
}


export default deleteRecordContainer;