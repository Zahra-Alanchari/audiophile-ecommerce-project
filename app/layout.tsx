
"use client";
import { Provider } from "react-redux";
import store from "@/redux/store";
import Navbar from "./_Components/Navbar/Navbar";
import Footer from "./_Components/Footer/Footer";
import StyledComponentsRegistry from "./_lib/registery";
import "../style.css"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Provider store={store}>
      <html lang="en">
        <body style={{margin:"0", padding:"0"}}>
          <StyledComponentsRegistry>
            <Navbar />
            {children}
            <Footer />
          </StyledComponentsRegistry>
        </body>
      </html>
    </Provider>
  );
}