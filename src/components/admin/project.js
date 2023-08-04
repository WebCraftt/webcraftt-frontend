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
                <span>Project</span>
            </div>
             <form onSubmit={handleSubmit(onSubmit)}>
                <div className='flex justify-between w-full'>
                    <div className='flex flex-col w-5/12 my-8'>
                        <label>Name</label>
                        <input defaultValue={formVal.name?formVal.name:''} type="text" className='rounded-t-lg rounded-b-lg h-10 px-4 border-slate-400 border-2' {...register("name",{required:true})}></input>
                    </div>
                    <div className='flex flex-col w-5/12 my-8'>
                        <label>Profile</label>
                        <input defaultValue={formVal.profile?formVal.profile:''} type="text" className='rounded-t-lg rounded-b-lg h-10 px-4 border-slate-400 border-2' {...register("profile",{required:true})}></input>
                    </div>
                </div>
                <div className='flex justify-between w-full'>
                    <div className='flex flex-col w-5/12 my-8'>
                        <label>Details</label>
                        <input defaultValue={formVal.details?formVal.details:''} type="text" className='rounded-t-lg rounded-b-lg h-10 px-4 border-slate-400 border-2' {...register("details",{required:true})}></input>
                    </div>
                    <div className='flex flex-col w-5/12 my-8'>
                        <label>Url</label>
                        <input defaultValue={formVal.url?formVal.url:''} type="text" className='rounded-t-lg rounded-b-lg h-10 px-4 border-slate-400 border-2' {...register("url",{required:true})}></input>
                    </div>
                </div>
                <div className='flex justify-between w-full'>
                    <div className='flex flex-col w-5/12 my-8'>
                        <label>Client Reviews</label>
                        <input defaultValue={formVal.reviews?formVal.reviews:''} type="text" className='rounded-t-lg rounded-b-lg h-10 px-4 border-slate-400 border-2' {...register("reviews",{required:true})}></input>
                    </div>
                </div>
                <button className='w-1/6 h-8 bg-green-400 rounded-md float-right mt-6 shadow-md hover:bg-green-500 active:scale-95 active:shadow-sm' type='submit'>{props.btn}</button>
            </form>
        </div>
    )
}

export default team;