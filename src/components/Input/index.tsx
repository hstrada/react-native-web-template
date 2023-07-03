import { TextInputProps } from 'react-native';
import { CustomInput } from './styles';

export const Input = (props: TextInputProps) => {
  return <CustomInput {...props} />;
};
