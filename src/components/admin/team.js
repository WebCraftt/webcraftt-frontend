'use client'
import { useState,useEffect,useRef } from 'react';
import { useForm} from 'react-hook-form';
import Loader from './loading';
import SnackBar from './snackBar';

const team =(props)=>{
    const {register,reset,handleSubmit} = useForm({
        defaultValues:{
            "name":"",
            "position":"",
            "profileImage":"",
            "linkedinProfile":"",
            "githubProfile":"",
            "twitterProfile":""
        }
    });

    const [isLoading,setLoading] = useState(false)
    let apiState = {
        isSuccess:false,
        hasError: false,
        successMsg: '',
        erroMsg:'',
    }
    const[teamImg,setTeamImg] = useState('')
    const [showSnack,setSnackView] = useState(false)
    const [snackMsg,setSnackMsg] = useState('');
    const dataFetched = useRef(false);

    // Api call to set form data
    const getTeamData = async()=>{
        try{
            setLoading(true)
            setSnackView(false)
            const response = await fetch(`http://localhost:8000/api/v1/teams/${props.id}`)
            if(!response.status){
                throw new Error('Something went wrong')
            }
            const responseJson = await response.json();

            const base64Img = responseJson.data.profileImage?responseJson.data.profileImage:''
            setTeamImg(base64Img);

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
            setTeamImg(reader.result)
        }

    }


    const onSubmit = async(data)=>{

        let payload = {
            "name":data.name,
            "position":data.position,
            "profileImage":teamImg,
            "linkedinProfile":data.linkedinProfile,
            "githubProfile":data.githubProfile,
            "twitterProfile":data.twitterProfile
        }

        let url = ''
        const requestOptions = {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload) 
        };

        if(props.btn == "Add"){
            url = "http://localhost:8000/api/v1/teams/create-team"
            requestOptions.method = 'POST'
        }else if(props.btn == "Update"){
            url = `http://localhost:8000/api/v1/teams/${props.id}`
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
                <span>Team</span>
            </div>
             <form onSubmit={handleSubmit(onSubmit)} className="relative">
                <div className='flex justify-between w-full'>
                    <div className='flex flex-col w-5/12 mt-6'>
                        <label>Name</label>
                        <input type="text" className='rounded-t-lg rounded-b-lg h-10 px-4 border-slate-400 border-2' {...register("name",{required:true})}></input>
                    </div>
                    <div className='flex flex-col w-5/12 mt-6'>
                        <label>Position</label>
                        <input type="text" className='rounded-t-lg rounded-b-lg h-10 px-4 border-slate-400 border-2' {...register("position",{required:true})}></input>
                    </div>
                </div>
                <div className='flex justify-between w-full'>
                    <div className='flex flex-col w-5/12 my-6'>
                        <label>LinkedIn Profile</label>
                        <input type="text" className='rounded-t-lg rounded-b-lg h-10 px-4 border-slate-400 border-2' {...register("linkedinProfile")}></input>
                    </div>
                    <div className='flex flex-col w-5/12 my-6'>
                        <label>GitHub Profile</label>
                        <input type="text" className='rounded-t-lg rounded-b-lg h-10 px-4 border-slate-400 border-2' {...register("githubProfile")}></input>
                    </div>
                </div>
                <div className='flex justify-between w-full'>
                    <div className='flex flex-col w-5/12 mb-6'>
                        <label>Twitter Profile</label>
                        <input type="text" className='rounded-t-lg rounded-b-lg h-10 px-4 border-slate-400 border-2' {...register("twitterProfile")}></input>
                    </div>
                    <div className='flex flex-col w-4/12 mb-6'>
                        <img className='w-1/2' src={teamImg}></img>
                    </div>
                </div>
                <div className='flex flex-col w-5/12'>
                        <label>Image</label>
                        <input type="file" accept='.png, .jpg' className='rounded-t-lg rounded-b-lg h-10' {...register("profileImage")} onChange={saveImage}></input>
                </div>
                <button className='absolute bottom-[5%] right-0 w-1/6 h-8 bg-green-400 rounded-md float-right mt-6 shadow-md hover:bg-green-500 active:scale-95 active:shadow-sm' type='submit'>{props.btn}</button>
            </form>
            {isLoading && <Loader classes=''></Loader>}
            {!isLoading && showSnack && <SnackBar onClose={() => setSnackView(false)} msg={snackMsg} classes='' timeout='3000'></SnackBar>}
        </div>
    )
}

export default team;