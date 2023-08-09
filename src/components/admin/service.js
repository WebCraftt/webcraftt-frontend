'use client'


'use client'
import { useState,useEffect,useRef } from 'react';
import { useForm} from 'react-hook-form';
import Loader from './loading';
import SnackBar from './snackBar';

const service =(props)=>{
    const {register,reset,handleSubmit} = useForm({
        defaultValues:{
            "name": "",
            "image": "",
            "details": "",
            "discount": "",
            "price": ""     
        }
    });

    const [isLoading,setLoading] = useState(false)
    let apiState = {
        isSuccess:false,
        hasError: false,
        successMsg: '',
        erroMsg:'',
    }
    const [showSnack,setSnackView] = useState(false)
    const [snackMsg,setSnackMsg] = useState('');
    const dataFetched = useRef(false);

    // Api call to set form data
    const getTeamData = async()=>{
        try{
            setLoading(true)
            setSnackView(false)
            const response = await fetch(`http://localhost:8000/api/v1/services/${props.id}`)
            if(!response.status){
                throw new Error('Something went wrong')
            }
            const responseJson = await response.json();

            reset(responseJson.data);
        }
        catch{
            setSnackMsg('Something went wrong');
            setSnackView(true)
        }
        setLoading(false)
    }; 

    useEffect(()=>{
        if(props.btn == "Update"){
            if(dataFetched.current)return;
            dataFetched.current = true;
            getTeamData();
        }
    },[])


    const onSubmit = async(data)=>{

        let payload = {

            "name": data.name,
            "image": "img.png",
            "details": data.details,
            "discount": data.discount,
            "price": data.price        
        }

        let url = ''
        const requestOptions = {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload) 
        };

        if(props.btn == "Add"){
            url = "http://localhost:8000/api/v1/services/create-service"
            requestOptions.method = 'POST'
        }else if(props.btn == "Update"){
            url = `http://localhost:8000/api/v1/services/${props.id}`
        }

        try{
            setLoading(true)
    
            const response = await fetch(url,requestOptions,)
            if(!response.status){
                throw new Error('Something went wrong')
            }
            const responseJson = await response.json();
            if(responseJson.success == true){
                apiState={
                    isSuccess: true,
                    hasError: false,
                    successMsg: props.btn == "Add"?'Added successfully':'Updated Successfully',
                    erroMsg: ''
                }    
            }else{
                apiState={
                    isSuccess: false,
                    hasError: true,
                    successMsg: '',
                    erroMsg: 'Something went wrong'
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
        props.apiStatus(apiState);

    }

    return(
        <div className='px-16'>
            <div className='text-xl font-bold'>
                <span>Service</span>
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className='flex justify-between w-full'>
                    <div className='flex flex-col w-5/12 my-8'>
                        <label>Name</label>
                        <input type="text" className='rounded-t-lg rounded-b-lg h-10 px-4 border-slate-400 border-2' {...register("name",{required:true})}></input>
                    </div>
                    <div className='flex flex-col w-5/12 my-8'>
                        <label>Details</label>
                        <input  type="text" className='rounded-t-lg rounded-b-lg h-10 px-4 border-slate-400 border-2' {...register("details",{required:true})}></input>
                    </div>
                </div>
                <div className='flex justify-between w-full'>
                    <div className='flex flex-col w-5/12 my-8'>
                        <label>Discount</label>
                        <input type="text" className='rounded-t-lg rounded-b-lg h-10 px-4 border-slate-400 border-2' {...register("discount",{required:true})}></input>
                    </div>
                    <div className='flex flex-col w-5/12 my-8'>
                        <label>Price</label>
                        <input type="text" className='rounded-t-lg rounded-b-lg h-10 px-4 border-slate-400 border-2' {...register("price",{required:true})}></input>
                    </div>
                </div>
                <div className='flex justify-start w-full'>
                    <div className='flex flex-col my-8 w-4/12'>
                        <label>Image</label>
                        <input type="file" className='rounded-t-lg rounded-b-lg h-10' {...register("image")}></input>
                    </div>
                </div>
                <button className='w-1/6 h-8 bg-green-400 rounded-md float-right shadow-md hover:bg-green-500 active:scale-95 active:shadow-sm' type='submit'>{props.btn}</button>
            </form>

            {isLoading && <Loader classes=''></Loader>}
            {!isLoading && showSnack && <SnackBar onClose={() => setSnackView(false)} msg={snackMsg} classes='' timeout='3000'></SnackBar>}
        </div>
    )
}

export default service;