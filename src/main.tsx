/** @format */

import {createRoot} from "react-dom/client";
import {Provider} from "react-redux";
import App from "./App.tsx";
import "./index.css";
import {store} from "./app/store.ts";
import {StrictMode} from "react";

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<Provider store={store}>
			<App />
		</Provider>
	</StrictMode>,
);
