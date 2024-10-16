import styled from "styled-components/native";
import { colors } from "@/styles/colors";

export const Title = styled.Text`
  font-size: 20px;
  margin: 24px 18px 15px;
  font-weight: 500;
  line-height: 24px;
  color: ${colors.gray[600]};
`;

export const Container = styled.View`
  flex: 1;
  padding: 0px 20px 20px;
`;
