import Card from './card.js'

const service = (prop)=>{

    const segmentData = [
        {
            id: 1,
            fields:{
                name:'Service 1',
                image: '',
                details: '',
                discount: '',
                price:''
            }
        },
        {
            id: 2,
            fields:{
                name:'Service 2',
                image: '',
                details: '',
                discount: '',
                price:''
            }
        },
        {
            id: 3,
            fields:{
                name:'Service 3',
                image: '',
                details: '',
                discount: '',
                price:''
            }
        },
        {
            id: 4,
            fields:{
                name:'Service 4',
                image: '',
                details: '',
                discount: '',
                price:''
            }
        },
        {
            id: 5,
            fields:{
                name:'Service 5',
                image: '',
                details: '',
                discount: '',
                price:''
            }
        },
        {
            id: 6,
            fields:{
                name:'Service 1',
                image: '',
                details: '',
                discount: '',
                price:''
            }
        },
        {
            id: 7,
            fields:{
                name:'Service 2',
                image: '',
                details: '',
                discount: '',
                price:''
            }
        },
        {
            id: 8,
            fields:{
                name:'Service 3',
                image: '',
                details: '',
                discount: '',
                price:''
            }
        },
        {
            id: 9,
            fields:{
                name:'Service 4',
                image: '',
                details: '',
                discount: '',
                price:''
            }
        },
        {
            id: 10,
            fields:{
                name:'Service 5',
                image: '',
                details: '',
                discount: '',
                price:''
            }
        },
        {
            id: 11,
            fields:{
                name:'Service 1',
                image: '',
                details: '',
                discount: '',
                price:''
            }
        },
        {
            id: 12,
            fields:{
                name:'Service 2',
                image: '',
                details: '',
                discount: '',
                price:''
            }
        },
        {
            id: 13,
            fields:{
                name:'Service 3',
                image: '',
                details: '',
                discount: '',
                price:''
            }
        },
        {
            id: 14,
            fields:{
                name:'Service 4',
                image: '',
                details: '',
                discount: '',
                price:''
            }
        },
        {
            id: 15,
            fields:{
                name:'Service 5',
                image: '',
                details: '',
                discount: '',
                price:''
            }
        }
    ]

    const addService=()=>{

    }

    return(
        <div className="flex flex-col rounded-2xl h-full">
            <div className="flex justify-between mb-4">
                <span className='text-xl font-semibold text-violet-800'>{prop.title}</span>
                <button className='w-1/6 h-8 bg-orange-400 rounded-md shadow-md hover:bg-orange-500 active:scale-95 active:shadow-sm' onClick={addService}>Add</button>    
            </div>
            <div className='grid gap-8 grid-rows-{n} px-8 py-8 overflow-y-auto scroll-smooth overflow-x-hidden grid-cols-[repeat(auto-fit,_minmax(350px,_1fr))]'>
                {segmentData.map((segment=>{
                    return(
                        <Card key={segment.id} id={segment.id} fields={...segment.fields}></Card>
                    )
                }))}
            </div>
        </div>
    )
}

export default service;