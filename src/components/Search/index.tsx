import { SearchContainer, SearchInput, IconSearch } from "./styles";
import SearchIcon from "@/assets/icons/search.png";
import { TextInputProps } from "react-native";

type SearchProps = TextInputProps & {
  onSearch: (text: string) => void;
};

export function Search({ onSearch, ...rest }: SearchProps) {
  return (
    <SearchContainer>
      <IconSearch source={SearchIcon} />
      <SearchInput {...rest} onChangeText={onSearch} />
    </SearchContainer>
  );
}
