// Checkbox.js

import React from 'react';

const Checkbox = ({ checked, onChange }) => {
  return (
    <input
      type="checkbox"
      checked={checked}
      onChange={onChange}
      className="form-checkbox rounded-full h-6 w-6 text-pink-500 hello"
    />
  );
};

export default Checkbox;
