'use client'
import { useForm} from 'react-hook-form';


const manage =(props)=>{
    const {register,handleSubmit} = useForm();
    const onSubmit = data=>{
        console.log(data)
    }

    return(
        <div className='px-16'>
            <div className='text-xl font-bold mb-8'>
                <span>Services</span>
            </div>
             <form onSubmit={handleSubmit(onSubmit)}>
                <div className='flex justify-between w-full'>
                    <div className='flex flex-col w-5/12 my-8'>
                        <label>Name</label>
                        <input type="text" className='rounded-t-lg rounded-b-lg h-10 px-4 border-slate-400 border-2' {...register("serviceName",{required:true})}></input>
                    </div>
                    <div className='flex flex-col w-5/12 my-8'>
                        <label>Details</label>
                        <input type="text" className='rounded-t-lg rounded-b-lg h-10 px-4 border-slate-400 border-2' {...register("serviceDetails",{required:true})}></input>
                    </div>
                </div>
                <div className='flex justify-between w-full'>
                    <div className='flex flex-col w-5/12 my-8'>
                        <label>Discount</label>
                        <input type="number" className='rounded-t-lg rounded-b-lg h-10 px-4 border-slate-400 border-2' {...register("serviceDiscount",{required:true})}></input>
                    </div>
                    <div className='flex flex-col w-5/12 my-8'>
                        <label>Price</label>
                        <input type="number" className='rounded-t-lg rounded-b-lg h-10 px-4 border-slate-400 border-2' {...register("servicePrice",{required:true})}></input>
                    </div>
                </div>
                <div className='flex justify-start w-full'>
                    <div className='flex flex-col my-8 w-4/12'>
                        <label>Image</label>
                        <input type="file" className='rounded-t-lg rounded-b-lg h-10' {...register("serviceImg",{required:true})}></input>
                    </div>
                </div>
                <button className='w-1/6 h-8 bg-green-400 rounded-md float-right shadow-md hover:bg-green-500 active:scale-95 active:shadow-sm' type='submit'>Add</button>
            </form>
        </div>
    )
}

export default manage;