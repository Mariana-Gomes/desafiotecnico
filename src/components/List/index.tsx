import React, { useCallback, useEffect, useState } from "react";
import {
  FlatList,
  LayoutAnimation,
  ListRenderItem,
  Platform,
  UIManager,
} from "react-native";

import {
  Container,
  HeaderList,
  PictureTitle,
  NameTitle,
  Dot,
  EmptyText,
} from "./styles";

import { ListItem } from "@/components/ListItem";
import type { Employee } from "@/service/getEmployees";

type ListProps = {
  employees: Employee[];
};

export function List({ employees }: ListProps) {
  const [expandedItems, setExpandedItems] = useState<number[]>([]);

  const handlePress = useCallback((id: number) => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);

    setExpandedItems((prev) => {
      if (!prev.includes(id)) return [...prev, id];
      return prev.filter((item) => item !== id);
    });
  }, []);

  useEffect(() => {
    if (Platform.OS === "android") {
      UIManager.setLayoutAnimationEnabledExperimental &&
        UIManager.setLayoutAnimationEnabledExperimental(true);
    }
  }, []);

  const renderItem: ListRenderItem<Employee> = ({ item }) => {
    return (
      <ListItem
        item={item}
        isExpanded={expandedItems.includes(item.id)}
        onPress={() => handlePress(item.id)}
      />
    );
  };

  const renderEmpty = () => {
    return (
      <EmptyText>
        Nenhum funcionário encontrado. Por favor, tente novamente.
      </EmptyText>
    );
  };

  return (
    <Container>
      <HeaderList>
        <PictureTitle>Foto</PictureTitle>
        <NameTitle>Nome</NameTitle>
        <Dot />
      </HeaderList>

      <FlatList
        data={employees}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={renderEmpty}
      />
    </Container>
  );
}
