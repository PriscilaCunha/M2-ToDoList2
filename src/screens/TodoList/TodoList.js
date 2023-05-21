import { TouchableOpacity, FlatList } from "react-native";
import { Container, OrderByContainer, TextEmptyList, TextOrderBy } from "./TodoList.styles";
import AppItem from "../../components/AppItem/AppItem";

const TodoList = () => {
    return (
        <Container>
            <OrderByContainer>
                <TouchableOpacity>
                    <TextOrderBy>Order By ID</TextOrderBy>
                </TouchableOpacity>

                <TouchableOpacity>
                    <TextOrderBy>Order By Description</TextOrderBy>
                </TouchableOpacity>
            </OrderByContainer>

            <FlatList
                data={[{}, {}]}
                renderItem={({item}) => <AppItem></AppItem>}
                ListEmptyComponent={<TextEmptyList>0 tasks created.</TextEmptyList>}
            />
        </Container>
    )
}

export default TodoList;