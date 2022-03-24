import styled from 'styled-components/native';

type TWrapper = {
  marked: boolean;
};

export const Wrapper = styled.TouchableOpacity<TWrapper>`
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  padding: 10px 20px;
  background-color: ${({marked}) => (marked ? '#f5f7f7' : '#ffffff')};
  border-bottom-width: 1px;
  border-bottom-color: #f1f4f8;
`;

export const DateTime = styled.Text`
  width: 90px;
  font-weight: 300;
`;

export const Text = styled.Text`
  font-size: 12px;
  font-weight: 400;
  width: 33%;
`;
