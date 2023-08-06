import { useState,useEffect,useRef } from "react";
import Loader from './loading';
import SnackBar from './snackBar';
import Card from './card';

const reviewData =(props)=>{

    const [isLoading,setLoading] = useState(false)
    const [hasError,setHasError] = useState(false)
    const dataFetched = useRef(false);

    const getData = async()=>{
        try{
            setLoading(true)
            setHasError(false)
    
            const response = await fetch('https://api.coindesk.com/v1/bpi/currentprice.json')
            if(!response.status){
                setHasError(true)
                throw new Error('Something went wrong')
            }
            const jsonParse = await response.json();
            console.log(jsonParse)
        }
        catch{
            setHasError(true)
        }
        setLoading(false)
    }; 

    useEffect(()=>{
        if(dataFetched.current)return;
        dataFetched.current = true;
        getData()
    },[])


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

    const recordUpdateStatus=(segment)=>{
        props.presentState(segment)
    }


    return(
        <>
             {segmentData.map((segment=>{
                                return(
                                    <Card key={segment.id} id={segment.id} fields={...segment.fields} segment='Review' recordUpdated={(segment)=>{recordUpdateStatus(segment)}}></Card>
                                )
             }))}
             {isLoading && <Loader classes=''></Loader>}
            {!isLoading && hasError && <SnackBar onClose={() => setHasError(false)} msg='Something went wrong' classes='' timeout='300000'></SnackBar>}
        </>
    )

}

export default reviewData;