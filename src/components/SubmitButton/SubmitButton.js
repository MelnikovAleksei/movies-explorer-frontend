import React from 'react';

function SubmitButton(props) {

  return (
    <button
      className={props.className}
      disabled={props.disabled}
      type={props.settings.type}
    >
      {props.settings.title}
    </button>
  )
}

export default SubmitButton;
