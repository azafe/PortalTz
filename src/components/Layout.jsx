
function Layout({ children }) {
  return (
    <div className="app-root">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}

export default Layout;