import "./app.css";
import { Home } from "./Screens/Home";
import { ThemeProvider } from "@emotion/react";
import { theme } from "./theme/theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Home />
    </ThemeProvider>
  );
}

export default App;
