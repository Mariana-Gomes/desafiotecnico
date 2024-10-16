import styled from "styled-components/native";
import { colors } from "@/styles/colors";

export const Container = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
  border-bottom-width: 1px;
  border-color: ${colors.gray[400]};
  border-style: dashed;
  padding-top: 15px;
`;

export const Title = styled.Text`
  font-size: 16px;
  font-weight: 700;
`;

export const Description = styled.Text`
  font-size: 16px;
  color: ${colors.gray[600]};
  line-height: 19px;
`;
