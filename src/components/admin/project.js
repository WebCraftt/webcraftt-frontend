'use client'
import { useState,useEffect,useRef } from 'react';
import { useForm} from 'react-hook-form';
import Loader from './loading';
import SnackBar from './snackBar';

const project =(props)=>{
    const {register,reset,handleSubmit} = useForm({
        defaultValues:{
            "name":"",
            "image":"",
            "details":"",
            "url":"",
        }
    });
    const[projectImg,setProjectImg] = useState('')
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
            const response = await fetch(`http://localhost:8000/api/v1/projects/${props.id}`)
            if(!response.status){
                throw new Error('Something went wrong')
            }
            const responseJson = await response.json();

            const base64Img = responseJson.data.image?responseJson.data.image:''
            setProjectImg(base64Img);

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

    const saveImage = (e)=>{
        let reader = new FileReader() 
        reader.readAsDataURL(e.target.files[0])
        
        
        reader.onload = () => {      
            // setValue('image',reader.result)
            setProjectImg(reader.result)
        }

    }


    const onSubmit = async(data)=>{

        let payload = {
            "name":data.name,
            "details":data.details,
            "image":projectImg,
            "url":data.url,
        }

        let url = ''
        const requestOptions = {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload) 
        };

        if(props.btn == "Add"){
            url = "http://localhost:8000/api/v1/projects/create-project"
            requestOptions.method = 'POST'
        }else if(props.btn == "Update"){
            url = `http://localhost:8000/api/v1/projects/${props.id}`
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
                <span>Project</span>
            </div>
             <form onSubmit={handleSubmit(onSubmit)} className="relative">
                <div className='flex justify-between w-full'>
                    <div className='flex flex-col w-5/12 my-8'>
                        <label>Name</label>
                        <input type="text" className='rounded-t-lg rounded-b-lg h-10 px-4 border-slate-400 border-2' {...register("name",{required:true})}></input>
                    </div>
                    <div className='flex flex-col w-5/12 my-8'>
                        <label>Details</label>
                        <input type="text" className='rounded-t-lg rounded-b-lg h-10 px-4 border-slate-400 border-2' {...register("details")}></input>
                    </div>
                </div>
                <div className='flex justify-between w-full'>
                    <div className='flex flex-col w-5/12 my-8'>
                        <label>Url</label>
                        <input type="text" className='rounded-t-lg rounded-b-lg h-10 px-4 border-slate-400 border-2' {...register("url")}></input>
                    </div>
                    <div className='flex flex-col w-5/12 my-8'>
                        <label>Image</label>
                        <input type="file" accept='.png, .jpg' className='rounded-t-lg rounded-b-lg h-10' {...register("image")} onChange={saveImage}></input>
                    </div>
                </div>
                <div className='flex flex-col my-8 w-4/12'>
                        <img className='w-1/2' src={projectImg}></img>
                </div>
                <button className='absolute bottom-[5%] right-0 w-1/6 h-8 bg-green-400 rounded-md float-right mt-6 shadow-md hover:bg-green-500 active:scale-95 active:shadow-sm' type='submit'>{props.btn}</button>
            </form>
            {isLoading && <Loader classes=''></Loader>}
            {!isLoading && showSnack && <SnackBar onClose={() => setSnackView(false)} msg={snackMsg} classes='' timeout='3000'></SnackBar>}
        </div>
    )
}

export default project;


