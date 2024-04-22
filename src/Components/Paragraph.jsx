import React from 'react';
import data from '../data.json';
import { useState } from 'react';
import './Paragraph.css';

export const Paragraph = () => {
    const [paraData,setParaData]=useState([]);

    function clickHandler(e){
        e.preventDefault();
        const countVaraible=document.getElementById("paracount")
        const paraData=data.paragraphs.slice(0,countVaraible.value);
        if(countVaraible.value>10){
            alert("The paragraph generator generates upto 10 para for now will upgrade soon!!")
        }
        setParaData(paraData);
        countVaraible.value="0";

    }
  return (
    <div className='container'>
        <h1>TIRED OF BORING LOREM IPSUM?</h1>
        <div className='parainside'>
            <label htmlFor="paracount">Paragraph: </label>
            <input type="number" name="" id="paracount" placeholder='Enter Count' min={0} max={8} defaultValue={0} />
            <button onClick={(e)=>{
                clickHandler(e);

            }}>Generate</button>
        </div>

        <div className='downSide'>
            {
                paraData.map((elem,index)=>{
                    return(
                        <p key={index} className='paragrap'>{elem.text}</p>
                    )
                })
            }
        </div>

    </div>
  )
}
