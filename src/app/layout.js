import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import { Container } from "./LayoutStyles";
import Theme from "@/styles/theme";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Tim's Portfolio",
  description: "EncodeDev | Frontend developer portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Theme>
          <Container>
            <Header />
            <main>{children}</main>
            <Footer />
          </Container>
        </Theme>
      </body>
    </html>
  );
}
