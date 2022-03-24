import styled from 'styled-components/native';

type TWrapper = {
  marked: boolean;
};

export const Wrapper = styled.View<TWrapper>`
  flex-direction: column;
  padding: 10px 20px;
  background-color: ${({marked}) => (marked ? '#f5f7f7' : '#ffffff')};
  border-bottom-width: 1px;
  border-bottom-color: #f1f4f8;
`;

export const DateTime = styled.Text`
  margin: 20px auto;
  font-weight: 300;
`;

export const Subject = styled.Text`
  font-size: 14px;
  font-weight: 400;
  margin: 20px auto;
`;

export const Message = styled.Text`
  font-size: 12px;
  font-weight: 400;
  margin: 20px 15px;
`;
