
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";


function EditStudent(){
    const param = useParams();
    const [data,setData] = useState({});
    const navigate = useNavigate();
    useEffect(
        ()=>{
            fetch('https://64ded5c171c3335b2581dc88.mockapi.io/Student/' + param.id)
            .then((res) => res.json())
            .then((res) => setData(res))
        }
    ,[]);
    
    return (<>
        <div className="container">
            <div className="row">
            <div className="col-4">
                    <label>Student Name : </label>
                </div>
                <div className="col-8">
                    <input type="text" value={data.StudentName} placeholder="Enter Name" onChange={(e)=>{
                        setData({...data,StudentName:e.target.value})
                    }} />
                </div>
            </div>
            <div className="row">
                <div className="col-4">
                    <label>URl of  Image  : </label>
                </div>
                <div className="col-8">
                    <input type="text" value={data.StudentImage} placeholder="Enter image url" onChange={(e)=>{
                        setData({...data,StudentImage:e.target.value})
                    }} />
                </div>
            </div>
           
            <div className="row">
                <div className="col-8">
                    <button className="btn btn-outline-success" onClick={()=>{
                        fetch('https://64ded5c171c3335b2581dc88.mockapi.io/Student/' + param.id,
                        {
                            method: 'PUT',
                            body: JSON.stringify(data),
                            headers: { 'content-type': 'application/json' }
                        })
                        .then(res => { console.log('put res', res); return (res); })
                        .then((res)=>{navigate('/student')})
                    }}> Submit</button>
                </div>
            </div>
        </div>
    </>)
}

export default EditStudent;