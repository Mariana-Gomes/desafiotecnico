import styled from "styled-components/native";
import { colors } from "@/styles/colors";

export const SearchContainer = styled.View`
  width: 100%;
  height: 48px;
  flex-direction: row;
  align-items: center;
  background-color: ${colors.gray[300]};
  border-radius: 50px;
  padding: 12px 16px;
  margin-bottom: 24px;
`;

export const SearchInput = styled.TextInput`
  color: ${colors.gray[600]};
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  flex: 1;
`;

export const IconSearch = styled.Image`
  width: 18px;
  height: 18px;
  margin-right: 4px;
`;
