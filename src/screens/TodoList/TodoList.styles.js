import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
    background-color: #4a4a4a;
    flex: 1;
    align-items: stretch;
    justify-content: center;
`;

export const TextEmptyList = styled.Text`
    color: #ffffff;
    padding: 10px;
`;

export const OrderByContainer = styled.View`
    flex-direction: row;
    justify-content: flex-end;
`;

export const TextOrderBy = styled.Text`
    font-weight: bold;
    color: #3dcc8e;
    padding: 5px;
`;