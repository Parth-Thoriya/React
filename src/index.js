import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {BrowserRouter,Routes,Route} from "react-router-dom";

import Layout from './Layout';
import StudentDetail from './StudentDetails';
import {FacCard , Stucard} from "./card";
// import {SearchFac ,SearchStu} from './searchFaculty';
import FacultyDetail from './FacultyDetails';

import Calculator from './Calculator';
import Add from './Add';
import EditFaculty from './EditFaculty';
import EditStudent from './EditStudent';
import AddStudent from './AddStudent';
const root = ReactDOM.createRoot(document.getElementById('root'));



root.render(
  <>
    <BrowserRouter>
     <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<FacCard />}/>
          <Route path='/' element={<FacCard />} />          
          <Route path='student' element={<Stucard/>} />      
          <Route path='/detail/:id' element={<FacultyDetail/>}/>
          <Route path='/student/detail/:id' element={<StudentDetail/>}/>
          {/* <Route path='/search' element={<SearchFac/>} />
          <Route path='/student/search' element={<SearchStu/>} /> */}
          
          <Route path='/add/faculty' element={<Add />} />
          <Route path='/add/student' element={<AddStudent />} />
          <Route path='/detail/editfaculty/:id' element={<EditFaculty />} />
          <Route path='/student/detail/editstudent/:id' element={<EditStudent />} />

          <Route path='/Calculator' element={<Calculator />} />  
                 
        </Route>
     </Routes>
    </BrowserRouter>
  </>
);

