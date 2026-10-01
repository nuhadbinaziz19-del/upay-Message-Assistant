import './globals.css';
export const metadata = { title: 'upay Message Assistant', description: 'Reads app messages, replies when safe, hands the rest to a person.' };
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link href="https://fonts.googleapis.com/css2?family=Hind+Siliguri:wght@400;600&family=Bricolage+Grotesque:wght@500;700&display=swap" rel="stylesheet" />
      </head>
      <body>{children}</body>
    </html>
  );
}
