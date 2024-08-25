"use client";

import { Provider } from "react-redux";
import store from "@/redux/store";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Provider store={store}>
      <html lang="en">
        <body style={{ margin: 0, padding: 0 }}>{children}</body>
      </html>
    </Provider>
  );
}
