import React, { useEffect, useMemo, useState } from "react";
import { Title, Container } from "./styles";

import { Header } from "@/components/Header";
import { Search } from "@/components/Search";
import { List } from "@/components/List";
import { colors } from "@/styles/colors";

import type { Employee } from "@/service/getEmployees";
import { getEmployees } from "@/service/getEmployees";
import { normalizeText } from "@/utils/normalizeText";

export default function Home() {
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [searchText, setSearchText] = useState<string>("");

  const handleSearch = (text: string) => {
    setSearchText(text);
  };

  const filteredEmployees = useMemo(() => {
    const searchLower = normalizeText(searchText).trim();

    return employees.filter((employee) => {
      const fullName = normalizeText(employee.name);
      const job = normalizeText(employee.job);
      const phone = employee.phone.toLowerCase();

      return (
        fullName.includes(searchLower) ||
        job.includes(searchLower) ||
        phone.includes(searchLower)
      );
    });
  }, [employees, searchText]);

  async function getEmployeesData() {
    const data = await getEmployees();
    setEmployees(data);
  }

  useEffect(() => {
    getEmployeesData();
  }, []);

  return (
    <>
      <Header />
      <Title>Funcionários</Title>
      <Container>
        <Search
          placeholder="Pesquisar"
          placeholderTextColor={colors.gray[600]}
          onSearch={handleSearch}
          autoCorrect={false}
        />
        <List employees={filteredEmployees} />
      </Container>
    </>
  );
}
