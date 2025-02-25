import { DetailedHTMLProps, InputHTMLAttributes } from 'react';

interface FormInput
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {}

const FormInput = (props: FormInput) => {
  return <input {...props} />;
};

export default FormInput;
