"use client"; // Указывает, что это клиентский компонент

import { Provider } from "react-redux";
import { setupStore } from "../Redux/store";

const store = setupStore()

export function Providers({ children }: { children: React.ReactNode }) {
  return <Provider store={store}>{children}</Provider>;
}
