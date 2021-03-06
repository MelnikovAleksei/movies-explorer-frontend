import React from 'react';

function FilterCheckbox(props) {

  const [onFocus, setOnFocus] = React.useState(false);

  const handleFocus = () => {
    setOnFocus(true);
  };

  const handleBlur = () => {
    setOnFocus(false);
  };

  return (
    <label
      className={onFocus ? `${props.labelClassName} ${props.onFocusClassName}` : props.labelClassName}
      onFocus={handleFocus}
      onBlur={handleBlur}
    >
      <input
        className={props.inputClassName}
        type={props.settings.type}
        id={props.settings.id}
        name={props.settings.name}
        required={props.settings.required}
        onChange={props.onChange}
        value={props.value}
        checked={props.value || ''}
      />
      <span
        className={props.sliderClassName}
      />
      {props.settings.label}
    </label>
  )
}

export default FilterCheckbox;
