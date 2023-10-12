import { useState } from "react"
import { useNavigate } from "react-router-dom";
import React from 'react';
const Add = () => {

    const [data, setData] = useState({});
    const navigate = useNavigate();

    

    return (<>
        <div className="container">
            <div className="row">
            <div className="col-4">
                    <label>Faculty Name : </label>
                </div>
                <div className="col-8">
                    <input type="text"  placeholder="Enter Name" onChange={(e)=>{
                        setData({...data,FacultyName:e.target.value})
                    }} />
                </div>
            </div>
            <div className="row">
                <div className="col-4">
                    <label>URl of  Image  : </label>
                </div>
                <div className="col-8">
                    <input type="text" placeholder="Enter image url" onChange={(e)=>{
                        setData({...data,FacultyImage:e.target.value})
                    }} />
                </div>
            </div>
            <div className="row">
            <div className="col-4">
                    <label>Faculty Designation : </label>
                </div>
                <div className="col-8">
                    <input type="text" placeholder="Designation" onChange={(e)=>{
                        setData({...data,Designation:e.target.value})
                    }} />
                </div>
            </div>
            <div className="row">
                <div className="col-8">
                    <button className="btn btn-outline-success" onClick={()=>{
                        fetch('https://64ded5c171c3335b2581dc88.mockapi.io/Faculty',
                        {
                            method: 'POST',
                            body: JSON.stringify(data),
                            headers: { 'content-type': 'application/json' }
                        })
                        .then(res => { console.log('post res', res); return (res); })
                        .then(navigate('/'))
                    }}> Submit</button>
                </div>
            </div>
        </div>
    </>)

}
export default Add;