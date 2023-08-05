'use client'
import { useForm} from 'react-hook-form';

const team =(props)=>{
    const formVal = {...props.formVal}
    const {register,handleSubmit} = useForm();
    const onSubmit = data=>{
        console.log(data)
    }

    return(
        <div className='px-16'>
            <div className='text-xl font-bold'>
                <span>Team</span>
            </div>
             <form onSubmit={handleSubmit(onSubmit)}>
                <div className='flex justify-between w-full'>
                    <div className='flex flex-col w-5/12 my-8'>
                        <label>Name</label>
                        <input defaultValue={formVal.name?formVal.name:''} type="text" className='rounded-t-lg rounded-b-lg h-10 px-4 border-slate-400 border-2' {...register("name",{required:true})}></input>
                    </div>
                    <div className='flex flex-col w-5/12 my-8'>
                        <label>Position</label>
                        <input defaultValue={formVal.position?formVal.position:''} type="text" className='rounded-t-lg rounded-b-lg h-10 px-4 border-slate-400 border-2' {...register("position",{required:true})}></input>
                    </div>
                </div>
                <div className='flex justify-between w-full'>
                    <div className='flex flex-col w-5/12 my-8'>
                        <label>Profile</label>
                        <input defaultValue={formVal.profile?formVal.profile:''} type="text" className='rounded-t-lg rounded-b-lg h-10 px-4 border-slate-400 border-2' {...register("profile",{required:true})}></input>
                    </div>
                    <div className='flex flex-col w-5/12 my-8'>
                        <label>LinkedIn Profile</label>
                        <input defaultValue={formVal.linkedIn?formVal.linkedIn:''} type="text" className='rounded-t-lg rounded-b-lg h-10 px-4 border-slate-400 border-2' {...register("linkedIn",{required:true})}></input>
                    </div>
                </div>
                <div className='flex justify-between w-full'>
                    <div className='flex flex-col w-5/12 my-8'>
                        <label>GitHub Profile</label>
                        <input defaultValue={formVal.gitHub?formVal.gitHub:''} type="text" className='rounded-t-lg rounded-b-lg h-10 px-4 border-slate-400 border-2' {...register("gitHub",{required:true})}></input>
                    </div>
                    <div className='flex flex-col w-5/12 my-8'>
                        <label>Twitter Profile</label>
                        <input defaultValue={formVal.twitter?formVal.twitter:''} type="text" className='rounded-t-lg rounded-b-lg h-10 px-4 border-slate-400 border-2' {...register("twitter",{required:true})}></input>
                    </div>
                </div>
                <button className='w-1/6 h-8 bg-green-400 rounded-md float-right mt-6 shadow-md hover:bg-green-500 active:scale-95 active:shadow-sm' type='submit'>{props.btn}</button>
            </form>
        </div>
    )
}

export default team;