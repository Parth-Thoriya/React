import { useState } from "react"
import { useNavigate } from "react-router-dom";
import React from 'react';
const AddStudent = () => {

    const [data, setData] = useState({});
    const navigate = useNavigate();

    

    return (<>
        <div className="container">
            <div className="row">
            <div className="col-4">
                    <label>Student Name : </label>
                </div>
                <div className="col-8">
                    <input type="text"  placeholder="Enter Name" onChange={(e)=>{
                        setData({...data,StudentName:e.target.value})
                    }} />
                </div>
            </div>
            <div className="row">
                <div className="col-4">
                    <label>URl of  Image  : </label>
                </div>
                <div className="col-8">
                    <input type="text" placeholder="Enter image url" onChange={(e)=>{
                        setData({...data,StudentImage:e.target.value})
                    }} />
                </div>
            </div>
            
            <div className="row">
                <div className="col-8">
                    <button className="btn btn-outline-success" onClick={()=>{
                        fetch('https://64ded5c171c3335b2581dc88.mockapi.io/Student',
                        {
                            method: 'POST',
                            body: JSON.stringify(data),
                            headers: { 'content-type': 'application/json' }
                        })
                        .then(res => { console.log('post res', res); return (res); })
                        .then(navigate('/student'))
                    }}> Submit</button>
                </div>
            </div>
        </div>
    </>)

}
export default AddStudent;