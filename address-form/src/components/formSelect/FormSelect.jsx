import React from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';

const FormSelect = (props) => {
  const {
    data, label, selectOnChange, selectOption, placeHolder,
  } = props;
  return (
    <div className="form-group clearfix">
      <label htmlFor={label}>
        {label}
        {console.log('FROM FORM SELECT', selectOption)}
        {/* <select className={className} {...input} name={label} id={label}>
          {data.map(option => (
            <option key={option.label}>{option.label}</option>
          ))}
        </select> */}
        <Select
          name={label}
          placeholder={placeHolder}
          id={label}
          options={data}
          clearable={true}
          onChange={(option) => {
            selectOnChange(option.label);
          }}
          onInputChange={selectOption}
        />
      </label>
    </div>
  );
};

FormSelect.defaultProps = {
  data: [],
  className: '',
  label: '',
  input: [],
  meta: {},
  selectOnChange: () => false,
  selectOption: '',
  placeHolder: '',
};

FormSelect.propTypes = {
  data: PropTypes.instanceOf(Object),
  className: PropTypes.string,
  label: PropTypes.string,
  input: PropTypes.instanceOf(Object),
  meta: PropTypes.instanceOf(Object),
  selectOnChange: PropTypes.func,
  selectOption: PropTypes.string,
  placeHolder: PropTypes.string,
};

export default FormSelect;
