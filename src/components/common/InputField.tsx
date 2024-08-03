import React from 'react';

interface InputFieldProps {
  label: string;
  type: string;
  name: string;
  id: string;
  placeholder: string;
  className?: string;
}

const InputField: React.FC<InputFieldProps> = ({
  label,
  type,
  name,
  id,
  placeholder,
  className,
  ...rest
}) => {
  return (
    <div className={`flex flex-col pt-2 px-3 space-y-1 ${className}`}>
      <label htmlFor={id}>{label}</label>
      <input
        type={type}
        name={name}
        id={id}
        placeholder={placeholder}
        className="p-2 border border-slate-300 rounded-md placeholder:text-xs"
        {...rest}
      />
    </div>
  );
};

export default InputField;