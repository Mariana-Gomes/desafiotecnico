import styled from "styled-components/native";
import { colors } from "@/styles/colors";

export const Container = styled.SafeAreaView`
  flex: 1;
`;

export const HeaderList = styled.View`
  flex-direction: row;
  align-items: center;
  width: 100%;
  height: 48px;
  background-color: ${colors.blue[200]};
  padding: 15px;
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
  border: 1px solid ${colors.gray[400]};
`;

export const PictureTitle = styled.Text`
  font-size: 16px;
  font-weight: 700;
  margin-right: 28px;
  color: ${colors.gray[600]};
`;

export const NameTitle = styled.Text`
  flex: 1;
  font-size: 16px;
  font-weight: 700;
  color: ${colors.gray[600]};
`;

export const Dot = styled.View`
  width: 8px;
  height: 8px;
  border-radius: 4px;
  background-color: ${colors.gray[600]};
`;

export const EmptyText = styled.Text`
  font-size: 16px;
  font-weight: 500;
  color: ${colors.gray[600]};
  text-align: center;
  margin-top: 40px;
`;
