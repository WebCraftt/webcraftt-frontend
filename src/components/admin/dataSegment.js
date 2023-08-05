import { useState } from 'react';
import Card from './card.js'
import Modal from './modal';
import Team from './team';
import Service from './service';
import Review from './review';
import Project from './project';
import fetchApi from '../../services/api';

const dataSegment = (props)=>{

    const selectedSegment = props.title

    const [showModal,setShowModal] = useState(false)

    let url = ``

    if(selectedSegment == 'Team'){
        url = '/teams'
    }else if(selectedSegment == "Service"){
        url = '/services'
    }else if(selectedSegment == "Review"){
        url = '/reviews'
    }else if(selectedSegment == "Project"){
        url = '/projects'
    }

    // const segmentData = fetchApi(url)

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
        }
    ]

    const addService=()=>{
        setShowModal((prevState)=>{
            return true
        })
    }

    return(
        <div className="flex flex-col rounded-2xl h-full">
            <div className="flex justify-between mb-4">
                <span className='text-xl font-semibold text-violet-800'>{selectedSegment}</span>
                <button className='w-1/6 h-8 bg-orange-400 rounded-md shadow-md hover:bg-orange-500 active:scale-95 active:shadow-sm' onClick={addService}>Add</button>    
            </div>
            <div className='grid gap-8 grid-rows-{n} px-8 py-8 overflow-y-auto scroll-smooth overflow-x-hidden grid-cols-[repeat(auto-fit,_minmax(350px,_1fr))]'>
                {segmentData.map((segment=>{
                    return(
                        <Card key={segment.id} id={segment.id} fields={...segment.fields} segment={selectedSegment}></Card>
                    )
                }))}
            </div>
            {showModal && <Modal onClose={() => setShowModal(false)} classes=''>
                            {selectedSegment == "Team" && <Team btn="Add"></Team>}
                            {selectedSegment == "Service" && <Service btn="Add"></Service>}
                            {selectedSegment == "Review" && <Review btn="Add"></Review>}
                            {selectedSegment == "Project" && <Project btn="Add"></Project>}
                        </Modal>
            }
        </div>
    )
}

export default dataSegment;