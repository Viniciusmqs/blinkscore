import { useEffect, useState } from 'react';
import { getTodayMatches } from '../api/blinkApi';
import MatchCard from '../components/MatchCard';

function Home() {
  const [matches, setMatches] = useState([]);

  useEffect(() => {
    const load = async () => {
      const data = await getTodayMatches();
      setMatches(data);
    };
    load();
  }, []);

  return (
    <div className="mt-6 px-4">
      <h2 className="text-2xl font-bold mb-4">Jogos de Hoje</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {matches.length === 0 ? (
          <p className="text-gray-500">Carregando partidas...</p>
        ) : (
          matches.map(match => (
            <MatchCard key={match.fixture.id} match={match} />
          ))
        )}
      </div>
    </div>
  );
}

export default Home;