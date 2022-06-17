import React, { useState } from 'react';
import PropTypes, { string } from 'prop-types';

interface InputProps {
  type: string;
  placeholder: string;
}

const BaseInput = ({type, placeholder}: InputProps) => {  
  var test = "123";
  
  return (
    <div>
      <i className="creditcard"></i>
      <input type={type} placeholder={placeholder} />  
    </div>
  );
};

BaseInput.propTypes = {
  type: PropTypes.string,
  placeholder: PropTypes.string,
}

export default BaseInput;