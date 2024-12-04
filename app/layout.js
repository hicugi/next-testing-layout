export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div>=== before layout ===</div>
        <main>{children}</main>
        <div>=== after layout ===</div>
      </body>
    </html>
  );
}
