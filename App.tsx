import Home from "@/screen/Home";
import { StatusBar } from "react-native";

export default function App() {
  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="transparent" />
      <Home />
    </>
  );
}
