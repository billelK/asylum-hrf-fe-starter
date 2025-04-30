import {Providers} from "./Providers"
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import "./globals.css"

export const metadata = {
  title: 'HRF | Grant Rate Tracker',
  description: 'Web site created with Next.js.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <Header /> {/* Header component */}
          {children} {/* All child components will have access to the app context */}
          <Footer /> {/* Footer component */}
        </Providers>
      </body>
    </html>
  );
}