import styled from "styled-components";
import { categories } from "../data";
import { mobile } from "../responsive";
import CategoryItem from "./CategoryItem";

const Container = styled.div`
  display: flex;
  padding: 20px;
  justify-content: space-between;
  overflow: hidden;
  flex-wrap: wrap;
  ${mobile({ padding: "0px", flexDirection: "column" })}
`;

const Categories = () => {
    return <Container>
        {
            categories.map(item => {
                return <CategoryItem item={item} key={ item.id}/>
      })}
  </Container>;
};

export default Categories;
