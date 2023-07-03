import { styled } from 'styled-components/native';

export const InputContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-bottom: 24px;
`;

export const Separator = styled.View`
  width: 90%;
  border-bottom-width: 1px;
  border-color: #ccc;
  align-self: center;
  margin-top: 10px;
`;

export const ContentContainer = styled.View<{ width: string; height: string }>`
  width: ${({ width }) => Number(width) + 20}px;
  height: ${({ height }) => Number(height) + 20}px;
  border-color: #ccc;
  border-width: 4px;
  border-radius: 10px;
  align-items: center;
  justify-content: center;
`;

export const Label = styled.Text`
  font-family: HelveticaNowDisplay-Regular;
  color: #6f7974;
`;
