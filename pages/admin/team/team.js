'use client'
import { useState } from "react";

const team =()=>{

    // State update for the form fields
    const [fieldVal,setFieldVal] = useState({
        name:{
            isTouched: false,
            value:'',
            isValid: true,
        },
        position:{
            isTouched: false,
            value:'',
            isValid: true,
        },
        profile:{
            isTouched: false,
            value:'',
            isValid: true,
        },
        linkedIn:{
            isTouched: false,
            value:'',
            isValid: true,
        },
        gitHub:{
            isTouched: false,
            value:'',
            isValid: true,
        },
        twitter:{
            isTouched: false,
            value:'',
            isValid: true,
        },
    });    

    const nameHandler = (event)=>{

        let isValid = false;
        if(event.target.value.length > 3){
            isValid = true
        }

        setFieldVal((prevState)=>{
            return {
                ...prevState,
                name:{
                    isTouched: true,
                    value: event.target.value,
                    isValid: isValid
                }
            }
        })
    }

    const positionHandler = (event)=>{

        let isValid = false;
        if(event.target.value.length > 3){
            isValid = true
        }

        setFieldVal((prevState)=>{
            return {
                ...prevState,
                position:{
                    isTouched: true,
                    value: event.target.value,
                    isValid: isValid
                }
            }
        })
    }

    const profileHandler = (event)=>{
        debugger

        let isValid = false;
        if(event.target.value.length > 3){
            isValid = true
        }

        setFieldVal((prevState)=>{
            return {
                ...prevState,
                profile:{
                    isTouched: true,
                    value: event.target.value,
                    isValid: isValid
                }
            }
        })
    }


    const linkedInHandler = (event)=>{

        let isValid = false;
        if(event.target.value.length > 3){
            isValid = true
        }

        setFieldVal((prevState)=>{
            return {
                ...prevState,
                linkedIn:{
                    isTouched: true,
                    value: event.target.value,
                    isValid: isValid
                }
            }
        })
    }


    const gitHubHanlder = (event)=>{

        let isValid = false;
        if(event.target.value.length > 3){
            isValid = true
        }

        setFieldVal((prevState)=>{
            return {
                ...prevState,
                gitHub:{
                    isTouched: true,
                    value: event.target.value,
                    isValid: isValid
                }
            }
        })
    }


    const twitterHandler = (event)=>{

        let isValid = false;
        if(event.target.value.length > 3){
            isValid = true
        }

        setFieldVal((prevState)=>{
            return {
                ...prevState,
                twitter:{
                    isTouched: true,
                    value: event.target.value,
                    isValid: isValid
                }
            }
        })
    }

    // Form fields
    const formFields = [
        {   
            
            fieldName: fieldVal.name,
            wrapperClass:'',
            labelClass: '',
            inputClass:'',
            errorClass:'',
            errMsgClass: '',
            key:'Name',
            type: 'text',
            onClick: nameHandler,
            onChange: nameHandler,
            erroMsg: 'Name is required'            
        },
        {   
            fieldName: fieldVal.position,
            wrapperClass:'',
            labelClass: '',
            inputClass:'',
            errorClass:'',
            errMsgClass: '',
            key:'Position',
            type: 'text',
            onClick: positionHandler,
            onChange: positionHandler,
            erroMsg: 'Position is required'            
        },
        {   
            fieldName: fieldVal.profile,
            wrapperClass:'',
            labelClass: '',
            inputClass:'',
            errorClass:'',
            errMsgClass: '',
            key:'Profile',
            type: 'text',
            onClick: profileHandler,
            onChange: profileHandler,
            erroMsg: 'Profile is required'            
        },
        {   
            fieldName: fieldVal.linkedIn,
            wrapperClass:'',
            labelClass: '',
            inputClass:'',
            errorClass:'',
            errMsgClass: '',
            key:'LinkedIn Url',
            type: 'text',
            onClick: linkedInHandler,
            onChange: linkedInHandler,
            erroMsg: ''            
        },
        {   
            fieldName: fieldVal.gitHub,
            wrapperClass:'',
            labelClass: '',
            inputClass:'',
            errorClass:'',
            errMsgClass: '',
            key:'GitHub',
            type: 'text',
            onClick: gitHubHanlder,
            onChange: gitHubHanlder,
            erroMsg: ''            
        },
        {   
            fieldName: fieldVal.twitter,
            wrapperClass:'',
            labelClass: '',
            inputClass:'',
            errorClass:'',
            errMsgClass: '',
            key:'Twitter',
            type: 'text',
            onClick: twitterHandler,
            onChange: twitterHandler,
            erroMsg: ''            
        },
    ]


    // Form validation
    const submitTeams = (event)=>{
        event.preventDefault();
        let teamsForm = {
            name : fieldVal.name,
            position: fieldVal.position
        }
        console.log(teamsForm);
    }

    return(
        <div id="teams-container">
            <form id="teams-form" onSubmit={submitTeams}>
                {formFields.map((field)=>{
                    return (
                        <div className={field.wrapperClass} key={field.key}>
                            <label className={field.labelClass}>{field.key}</label>
                            <input type={field.type} onFocus={field.onClick} onChange={field.onChange}></input>
                            {field.fieldName.isTouched === true && field.fieldName.value === "" && <small>{field.erroMsg}</small>}
                            {/* {field.fieldName.isTouched === true && field.fieldName.value === "" && field.fieldName.isValid === false && <small>{field.erroMsg}</small>} */}
                        </div>
                    )
                })}
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default team;