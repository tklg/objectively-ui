import { ClassAttributes, InputHTMLAttributes, Ref } from 'react'
import { CommonColor, CommonSize } from 'src/types/props'

type InputPropsType = ClassAttributes<HTMLInputElement> & InputHTMLAttributes<HTMLInputElement>

export interface SwitchProps extends Omit<InputPropsType, 'value' | 'size'> {
  label?: string;
  inputRef?: Ref<HTMLInputElement>;
  size?: CommonSize;
  color?: CommonColor;
}
