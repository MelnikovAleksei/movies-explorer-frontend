import React from 'react';

function InputField(props) {
  return (
    <input
      className={props.className}
      type={props.settings.type}
      id={props.settings.id}
      aria-label={props.settings.ariaLabel}
      placeholder={props.settings.placeholder}
      name={props.settings.name}
      required={props.required}
      minLength={props.settings.minLength}
      maxLength={props.settings.maxLength}
      onChange={props.onChange}
      value={props.value || ''}
    />
  )
}

export default InputField;
