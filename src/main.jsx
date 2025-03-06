import "./index.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./store/store";
import { NavigationProvider } from "./context/navigation";
import App from "./App";

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <Provider store={store}>
            <NavigationProvider>
                <App />
            </NavigationProvider>
        </Provider>
    </StrictMode>
);