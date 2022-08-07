import styled from "styled-components";

export const StyledParagraph = styled.p`
  display: ${(props) => props.display === true ? "flex" : "none"};
`