import { FaFutbol, FaBasketballBall, FaTableTennis, FaVolleyballBall } from 'react-icons/fa';

const sports = [
  { name: 'Futebol', icon: <FaFutbol /> },
  { name: 'Basquete', icon: <FaBasketballBall /> },
  { name: 'Tênis', icon: <FaTableTennis /> },
  { name: 'Vôlei', icon: <FaVolleyballBall /> },
];

function SportsBar() {
  return (
    <div className="bg-gray-900 text-white flex gap-6 px-6 py-3 overflow-x-auto border-b border-gray-700">
      {sports.map((sport, i) => (
        <div key={i} className="flex items-center gap-2 text-sm cursor-pointer hover:text-green-400">
          <span className="text-lg">{sport.icon}</span>
          <span>{sport.name}</span>
        </div>
      ))}
    </div>
  );
}

export default SportsBar;