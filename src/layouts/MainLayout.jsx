import Header from '../components/Header';

function MainLayout({ children }) {
  return (
    <div className="min-h-screen bg-[#F3F4F6] text-gray-800">
      <Header />
      <main className="p-4 max-w-7xl mx-auto">{children}</main>
    </div>
  );
}

export default MainLayout;
