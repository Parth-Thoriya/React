import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";


function EditFaculty(){
    const param = useParams();
    const [data,setData] = useState({});
    const navigate = useNavigate();
    useEffect(
        ()=>{
            fetch('https://64ded5c171c3335b2581dc88.mockapi.io/Faculty/' + param.id)
            .then((res) => res.json())
            .then((res) => setData(res))
        }
    ,[]);
    
    return (<>
        <div className="container">
            <div className="row">
            <div className="col-4">
                    <label>Faculty Name : </label>
                </div>
                <div className="col-8">
                    <input type="text" value={data.FacultyName} placeholder="Enter Name" onChange={(e)=>{
                        setData({...data,FacultyName:e.target.value})
                    }} />
                </div>
            </div>
            <div className="row">
                <div className="col-4">
                    <label>URl of  Image  : </label>
                </div>
                <div className="col-8">
                    <input type="text" value={data.FacultyImage} placeholder="Enter image url" onChange={(e)=>{
                        setData({...data,FacultyImage:e.target.value})
                    }} />
                </div>
            </div>
            <div className="row">
            <div className="col-4">
                    <label>Faculty Designation : </label>
                </div>
                <div className="col-8">
                    <input type="text" value={data.Designation} placeholder="Designation" onChange={(e)=>{
                        setData({...data,Designation:e.target.value})
                    }} />
                </div>
            </div>
            <div className="row">
                <div className="col-8">
                    <button className="btn btn-outline-success" onClick={()=>{
                        fetch('https://64ded5c171c3335b2581dc88.mockapi.io/Faculty/' + param.id,
                        {
                            method: 'PUT',
                            body: JSON.stringify(data),
                            headers: { 'content-type': 'application/json' }
                        })
                        .then(res => { console.log('put res', res); return (res); })
                        .then((res)=>{navigate('/')})
                    }}> Submit</button>
                </div>
            </div>
        </div>
    </>)
}

export default EditFaculty;