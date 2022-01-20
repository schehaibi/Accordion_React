import React, { useState } from 'react';
import { AiFillCaretDown, AiFillCaretUp } from 'react-icons/ai';
const Question = ({title,info}) => {
 const [status,setstatus]=useState(false);
  return <article className='question'>
  <header>
    <h4>{title}</h4>
    <button className='btn' onClick={()=>setstatus(!status)}>
      {status ?  <AiFillCaretUp/>  : <AiFillCaretDown/>}    </button>
  </header>
  {status && <p>{info}</p>}
</article>
};

export default Question;
