import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import React from 'react';


const StudentDetail = () => {
    const navigate = useNavigate();
    const [data, setData] = useState({});
    const { id } = useParams();
    function myFun(){
        fetch('https://64ded5c171c3335b2581dc88.mockapi.io/Student/' + id).then((res) => res.json()).then((res) => setData(res))
    }
    useEffect(
        myFun
        , []
    );
    
    return (<>
        <div className="col-3 p-3">
            <div className="card">
                {/* <div className="card-img"> */}
                    <img src={data.StudentImage} className="img-fluid" alt="Faculty" />
                {/* </div>s */}
                <div className="card-title">
                    <h1>{data.StudentName}</h1>
                </div>
                <div className="card-body">
                    <p>Semester - 3</p>
                </div>
                <button className='btn btn-outline-danger'onClick={()=>{
                    fetch('https://64ded5c171c3335b2581dc88.mockapi.io/Student/'+id,{method:'DELETE'})
                    .then(res=>{
                        if(res.status == 404){
                            alert("not Found");
                            throw res
                        }
                        return res.json()})
                    .then(res=>{
                        console.log(res);return res})
                    .catch((e)=>{
                        console.log(e)
                    }).then(                    
                      
                        ()=>{navigate('/student')}
                        )
                }}>Delete</button>
                <button className='btn btn-outline-warning mt-2' onClick={()=>{ navigate('/student')}}>Back</button>
                <button className='btn btn-outline-success mt-2' onClick={()=>{ navigate('/student/detail/editstudent/'+ id)}}>Edit</button>
            </div>
        </div>

        
    </>);

}
export default StudentDetail;