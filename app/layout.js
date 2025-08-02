import './globals.css';

export const metadata = {
  title: "My Portfolio",
  description: "Front-End Developer based in London",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className='scroll-smooth'>
      <body className="bg-white text-black antialiased leading-8 overflow-y-hidden">{children}</body>
    </html>
  );
}
