'use client'
import { useForm} from 'react-hook-form';


const service =()=>{
    const {register,formState: { errors },handleSubmit} = useForm();
    const onSubmit = data=>{
        console.log(data)
    }

    return(
        <div>
            <div className='text-xl font-bold mb-16'>
                <span>Services</span>
            </div>
             <form onSubmit={handleSubmit(onSubmit)}>
                <div className='flex justify-evenly w-12/12'>
                    <div className='flex flex-col my-8 w-6/12'>
                        <label>Name</label>
                        <input type="text" className='rounded-t-lg rounded-b-lg h-10' {...register("serviceName",{required:true})}></input>
                    </div>
                    <div className='flex flex-col my-8 w-4/12'>
                        <label>Image</label>
                        <input type="file" className='rounded-t-lg rounded-b-lg h-10' {...register("serviceImg",{required:true})}></input>
                    </div>
                </div>
                <div className='flex justify-evenly w-full'>
                    <div className='flex flex-col w-4/12 my-8'>
                        <label>Details</label>
                        <input type="text" className='rounded-t-lg rounded-b-lg h-10' {...register("serviceDetails",{required:true})}></input>
                    </div>
                    <div className='flex flex-col w-3/12 my-8'>
                        <label>Discount</label>
                        <input type="number" className='rounded-t-lg rounded-b-lg h-10' {...register("serviceDiscount",{required:true})}></input>
                    </div>
                    <div className='flex flex-col w-3/12 my-8'>
                        <label>Price</label>
                        <input type="number" className='rounded-t-lg rounded-b-lg h-10' {...register("servicePrice",{required:true})}></input>
                    </div>
                </div>
                <button type='submit'>Add</button>
            </form>
        </div>
    )
}

export default service;