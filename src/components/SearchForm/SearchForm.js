import React from "react";

import InputField from '../InputField/InputField';

import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

import SubmitButton from "../SubmitButton/SubmitButton";

import { ReactComponent as SearchFormIcon } from '../../images/SearchForm/search-form-icon.svg';

import useFormWithValidation from '../../hooks/useFormValidation';

function SearchForm({
  onSubmit,
}) {

  const {
    values,
    isValid,
    handleChange,
    resetForm
  } = useFormWithValidation({});

  const handleSubmit = (evt) => {
    evt.preventDefault();
    onSubmit(values);
    resetForm();
  };

  const SEARCH_FORM_STYLE_SETTINGS = {
    form: 'search-form',
    icon: 'search-form__icon',
    textInput: 'search-form__text-input',
    submitButton: 'search-form__submit-button',
    checkboxInput: 'search-form__checkbox-input',
    checkboxLabel: 'search-form__checkbox-label',
    checkboxSlider: 'search-form__checkbox-slider',
    checkboxOnFocus: 'search-form__checkbox-label_focus'
  };

  const SEARCH_TEXT_INPUT_SETTINGS = {
    type: 'text',
    id: 'search-text',
    ariaLabel: 'поиск фильма',
    placeholder: 'Фильм',
    name: 'search',
    maxLength: 30,
    required: false,
  };

  const SHORTFILM_FILTER_CHECKBOX_INPUT_SETTINGS = {
    type: 'checkbox',
    id: 'filter-shortfilm',
    label: 'Короткометражки',
    name: 'shortfilm',
    required: false,
  };

  const SUBMIT_BUTTON_SETTINGS = {
    className: '',
    type: 'submit',
    title: 'Найти',
  };

  return (
    <form
      className={SEARCH_FORM_STYLE_SETTINGS.form}
      onSubmit={handleSubmit}
    >
      <SearchFormIcon
        className={SEARCH_FORM_STYLE_SETTINGS.icon}
      />
      <InputField
        settings={SEARCH_TEXT_INPUT_SETTINGS}
        className={SEARCH_FORM_STYLE_SETTINGS.textInput}
        onChange={handleChange}
        value={values.search}
      />
      <FilterCheckbox
        inputClassName={SEARCH_FORM_STYLE_SETTINGS.checkboxInput}
        labelClassName={SEARCH_FORM_STYLE_SETTINGS.checkboxLabel}
        sliderClassName={SEARCH_FORM_STYLE_SETTINGS.checkboxSlider}
        onFocusClassName={SEARCH_FORM_STYLE_SETTINGS.checkboxOnFocus}
        settings={SHORTFILM_FILTER_CHECKBOX_INPUT_SETTINGS}
        onChange={handleChange}
        value={values.shortfilm}
      />
      <SubmitButton
        className={SEARCH_FORM_STYLE_SETTINGS.submitButton}
        settings={SUBMIT_BUTTON_SETTINGS}
      />
    </form>
  )
}

export default SearchForm;
