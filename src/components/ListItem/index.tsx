import React from "react";

import {
  Container,
  ContainerAvatar,
  Avatar,
  UserName,
  IconArrow,
  InfoUser,
  InfoContainer,
} from "./styles";

import arrowDown from "@/assets/icons/arrowDown.png";
import arrowUp from "@/assets/icons/arrowUp.png";

import { InfoItem } from "@/components/InfoItem";
import type { Employee } from "@/service/getEmployees";

import { formatDateTime } from "@/utils/formatDate";
import { formatPhoneNumber } from "@/utils/formatPhone";

type ListItemProps = {
  item: Employee;
  isExpanded: boolean;
  onPress: (id: number) => void;
};

export function ListItem({ item, isExpanded, onPress }: ListItemProps) {
  return (
    <Container>
      <InfoUser onPress={() => onPress(item.id)}>
        <ContainerAvatar>
          <Avatar source={{ uri: item.image }} />
          <UserName>{item.name}</UserName>
        </ContainerAvatar>
        <IconArrow source={isExpanded ? arrowUp : arrowDown} />
      </InfoUser>

      {isExpanded && (
        <InfoContainer>
          <InfoItem title="Cargo" description={item.job} />
          <InfoItem
            title="Data de admissão"
            description={formatDateTime(item.admission_date)}
          />
          <InfoItem
            title="Telefone"
            description={formatPhoneNumber(item.phone)}
          />
        </InfoContainer>
      )}
    </Container>
  );
}
