import { useState,useEffect,useRef } from "react";
import Loader from './loading';
import SnackBar from './snackBar';
import Card from './card';

const teamData =(props)=>{

    const [isLoading,setLoading] = useState(false)
    const [refreshData,setRefreshData] = useState(false)
    const [segmentData,setSegmentData]=useState([]);
    const [showSnack,setSnackView] = useState(false)
    const [snackMsg,setSnackMsg] = useState('');
    const [refreshState,setRefreshState] = useState({
        isSuccess:false,
        hasError: false,
        successMsg: '',
        erroMsg:''
    })
    const dataFetched = useRef(false);
    

    const getData = async()=>{
        try{
            setLoading(true)
            const response = await fetch('http://localhost:8000/api/v1/teams/')
            if(!response.status){
                throw new Error('Something went wrong')
            }
            const responseJson = await response.json();
            setSegmentData((prevState)=>{
                return responseJson.data
            });
            if(refreshState.isSuccess == true){
                setSnackMsg(refreshState.successMsg)
                setSnackView(true)
            }else if(refreshState.hasError == true){
                setSnackMsg(refreshState.erroMsg)
                setSnackView(true)
            }

        }
        catch{
        }
        setLoading(false)
    }; 

    useEffect(()=>{
        debugger
        if(dataFetched.current && refreshData == false && props.updateView == false)return;
        dataFetched.current = true;
        setRefreshData(false)
        getData()
    },[refreshData])


    const updateViewStatus=(state)=>{
        setRefreshData(true)
        setRefreshState(state)
    }

    return(
        <>
             {segmentData.length>0 && segmentData.map((segment=>{
                                return(
                                    <Card key={segment._id} id={segment._id} fields={...segment} segment='Team' refreshView={(state)=>{updateViewStatus(state)}}></Card>
                                )
             }))}
             {isLoading && <Loader classes=''></Loader>}
             {showSnack && <SnackBar onClose={() => setSnackView(false)} msg={snackMsg} classes='' timeout='3000'></SnackBar>}
        </>
    )

}

export default teamData;