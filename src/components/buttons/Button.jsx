import React from 'react'
import './button.css'

const Button = ({istrue}) => {
  return (
    <>
        <button className={istrue? "btn-component" : 'btn2-component' }>help me</button>
    </>
  );
}

export default Button;
