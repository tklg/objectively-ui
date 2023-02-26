import { ClassAttributes, InputHTMLAttributes, Ref } from 'react'
import { CommonColor, CommonSize } from 'src/types/props'

type InputPropsType = ClassAttributes<HTMLInputElement> & InputHTMLAttributes<HTMLInputElement>

export interface SwitchProps extends Omit<InputPropsType, 'value' | 'defaultValue' | 'size' | 'onChange'> {
  label?: string;
  inputRef?: Ref<HTMLInputElement>;
  size?: CommonSize;
  color?: CommonColor;
  inputProps?: object;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>, checked: boolean) => void;
}
