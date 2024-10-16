import api from "./api";

export interface Employee {
  id: number;
  name: string;
  job: string;
  admission_date: string;
  phone: string;
  image: string;
}

export const getEmployees = async (): Promise<Employee[]> => {
  try {
    const response = await api.get<Employee[]>("/employees");
    return response.data;
  } catch (error) {
    console.error("Erro ao buscar informações dos funcionários:", error);
    throw error;
  }
};
