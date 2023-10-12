import React, { useState } from 'react';


const Calculator = ()=>{   
    const [answer , setAnswer] = useState(' ');   
    function Setvalue(e){        
        
         setAnswer(answer + e.target.value);       
    }
    function Clear(e){
        setAnswer('');       
    }
    function Delete(e){
        setAnswer(answer.slice(0,-1));       
    }
    function Evaluate(e) {
        setAnswer(eval(answer));
    }
    return(<>
    <div className='container'>
    <div className='row rows'>        
        <input type='text' className='col-5 Btn border border-danger' id='txtAnswer' value={answer}/>       
        
    </div>

        <div className='row rows'>
            <Btn value={'7'} fun ={Setvalue} />
            <Btn value={'8'} fun ={Setvalue}/>
            <Btn value={'9'} fun ={Setvalue}/>
            <Btn value={'-'} fun ={Setvalue}/>
        </div>

        <div className='row rows'>
            <Btn value={'4'} fun ={Setvalue}/>
            <Btn value={'5'} fun ={Setvalue}/>
            <Btn value={'6'} fun ={Setvalue}/>
            <Btn value={'+'} fun ={Setvalue}/>
        </div>

        <div className='row rows'>
            <Btn value={'1'} fun ={Setvalue}/>
            <Btn value={'2'} fun ={Setvalue}/>
            <Btn value={'3'} fun ={Setvalue}/>
            <Btn value={'*'} fun ={Setvalue}/>
        </div>

        <div className='row rows'>
            <Btn value={'.'} fun ={Setvalue}/>
            <Btn value={'0'} fun ={Setvalue}/>
            <Btn value={'/'} fun ={Setvalue}/>
            <Btn value={'='} fun ={Evaluate}/>
        </div>

        <div className='row rows'>
            <Btn value={'Del'} fun ={Delete}/>
            <Btn value={'CE'} fun ={Clear}/>
            
        </div>
    </div>
    </>)
}

const Btn = (props)=>{
    return(<>
        <div className='col-1 ml-2 mt-2'>
            <input type='button' className='btn btn-outline-danger Btn' value={props.value} onClick={props.fun} onKeyDown={props.fun}/>
        </div>
    </>);
}


export default Calculator