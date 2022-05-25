import styled from 'styled-components/native';

export const SafeAreaView = styled.SafeAreaView`
  flex: 1;
  background-color: white;
`;

export const Container = styled.View`
  flex-direction: column;
  background-color: white;
`;

export const ClockContainer = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ContactsList = styled.FlatList`
  padding: 0 20px;
`;
