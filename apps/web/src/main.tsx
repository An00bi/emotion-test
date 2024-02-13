import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { ThemeProvider } from "@repo/ui";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <ThemeProvider
    theme={{
      color: {
        blue: "blue",
      },
    }}
  >
    <App />
  </ThemeProvider>
);
