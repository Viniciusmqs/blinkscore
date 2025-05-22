import SportsBar from './SportsBar';
import logo from '../assets/logo (3).png';

function Header() {
  return (
    <div className="shadow">
      <header className="bg-black text-white px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <img src={logo} alt="BlinkScore" className="h-8 w-auto" />
          <h1 className="text-2xl font-bold text-green-500">BlinkScore</h1>
        </div>
        <nav className="space-x-6 text-sm font-medium">
          <a href="/" className="hover:text-green-400">Dashboard</a>
          <a href="/ranking" className="hover:text-green-400">Ranking</a>
          <a href="/login" className="hover:text-green-400">Login</a>
        </nav>
      </header>
      <SportsBar />
    </div>
  );
}

export default Header;