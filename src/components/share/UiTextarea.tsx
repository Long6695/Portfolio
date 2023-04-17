import React, { InputHTMLAttributes } from "react";

interface Props extends InputHTMLAttributes<HTMLTextAreaElement> {}

const UiTextarea = (props: Props) => {
  return <textarea className="w-full" {...props} />;
};

export default UiTextarea;
