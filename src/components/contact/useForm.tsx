import { useState, ChangeEvent } from "react";

type FormValue<T> = Record<keyof T, any>;

export const useForm = <T extends FormValue<T>>(initialData: T) => {
  const [form, setForm] = useState<FormValue<T>>(initialData);

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setForm((prevForm) => ({ ...prevForm, [name]: value }));
  };
  return {
    form,
    handleChange,
  };
};
