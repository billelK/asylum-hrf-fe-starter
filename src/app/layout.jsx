import {Providers} from "./Providers"
import "../index.css"

export const metadata = {
  title: 'HRF | Grant Rate Tracker',
  description: 'Web site created with Next.js.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          {children} {/* All child components will have access to the app context */}
        </Providers>
      </body>
    </html>
  );
}