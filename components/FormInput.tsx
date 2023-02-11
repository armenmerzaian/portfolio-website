import React from "react";

export default function FormInput({
  type,
  name,
  id,
  placeholder,
  className,
  required,
  minLength,
  pattern,
}: {
  type: React.HTMLInputTypeAttribute;
  name: string;
  id: string;
  placeholder: string;
  className?: string;
  required?: boolean;
  minLength?: number;
  pattern?: string;
}) {
  return (
    <input
      type={type}
      name={name}
      id={id}
      placeholder={placeholder}
      className={`py-3.5 px-4 bg-[#2A303C] rounded-md lg:rounded-lg text-[#C3C9D5] text-[14px] leading-[18px] lg:text-[18px] lg:leading-[20px] mt-2 ${className}`}
      required={required}
      pattern={pattern}
    />
  );
}

export function FormTextarea({name, className, placeholder, required, maxLength, minLength}: {name: string, className?: string, placeholder?: string, required?: boolean, maxLength?: number, minLength?: number}) {
  return (
    <textarea
      name={name}
      className={`py-3.5 px-4 bg-[#2A303C] rounded-md lg:rounded-lg text-[#C3C9D5] text-[14px] leading-[18px] lg:text-[18px] lg:leading-[20px] mt-2 resize-none h-[80px] lg:h-[100px]  ${className}`}
      placeholder={placeholder}
      required={required}
      maxLength={maxLength}
      minLength={minLength}
    />
  );
}



