import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./theme/theme";
import SideBar from "./components/SideBar";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <SideBar />
    </ThemeProvider>
  );
}

export default App;
