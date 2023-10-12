import { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import React from 'react';

const FacultyDetail = () => {

    const [data, setData] = useState({});
    const { id } = useParams();
    const navigate = useNavigate();
    function myFun(){
        fetch('https://64ded5c171c3335b2581dc88.mockapi.io/Faculty/' + id).then((res) => res.json()).then((res) => setData(res))
    }
    useEffect(
        myFun
        , []
    );
    
    return (<>
        <div className="col-3 p-3">
            <div className="card">
                {/* <div className="card-img"> */}
                    <img src={data.FacultyImage} className="img-fluid" alt="Faculty" />
                {/* </div>s */}
                <div className="card-title">
                    <h1>{data.FacultyName}</h1>
                </div>
                <div className="card-body">
                    <p>{data.Designation}</p>
                </div>
                <button className='btn btn-outline-danger'onClick={()=>{
                    fetch('https://64ded5c171c3335b2581dc88.mockapi.io/Faculty/'+ id,{method:'DELETE'})
                    .then(res=>{
                        if(res.status == 404){
                            alert("not Found");
                            throw res
                        }
                        return res.json()})
                    .then(                    
                      
                        ()=>{navigate('/')}
                        )
                }}>Delete</button>
                {/* <Link to={'/'} className='btn btn-outline-danger'>Back</Link> */}
                <button className='btn btn-outline-warning mt-2' onClick={()=>{ navigate('/')}}>Back</button>
                <button className='btn btn-outline-success mt-2' onClick={()=>{ navigate('/detail/editfaculty/'+ id)}}>Edit</button>
            </div>
        </div>
    </>);

}
export default FacultyDetail