import './globals.css';

export const metadata = {
  title: "My Portfolio",
  description: "Front-End Developer based in London",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-white text-black antialiased">{children}</body>
    </html>
  );
}
