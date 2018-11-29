import React from 'react';

function Field(props) {
  const { label, input, type, meta, name } = props;
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <div>
        <input {...input} type={type} />
        {meta.touched &&
          ((meta.error && <span>{meta.error}</span>) || (meta.warning && <span>{meta.warning}</span>))}
      </div>
    </div>
  );
}

export default Field;
