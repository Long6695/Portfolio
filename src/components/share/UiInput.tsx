import React, { InputHTMLAttributes } from "react";

interface Props extends InputHTMLAttributes<HTMLInputElement> {}

const UiInput = (props: Props) => {
  return <input className="w-full" {...props} />;
};

export default UiInput;
