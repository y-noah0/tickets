import TopNav from "@/components/TopNav";
import "./globals.css";

export const metadata = {
  title: "Tickets App",
  description: "A Next.js tickets app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-black min-h-screen">
        <TopNav />
        {children}
      </body>
    </html>
  );
}