function MatchCard({ match }) {
  const home = match.teams.home;
  const away = match.teams.away;
  const time = match.fixture.date.split('T')[1].slice(0, 5);
  const status = match.fixture.status.short;

  return (
    <div className="bg-white rounded-xl shadow p-4 flex items-center justify-between hover:shadow-md transition border">
      <div className="flex items-center gap-2">
        <img src={home.logo} alt={home.name} className="w-6 h-6 object-contain" />
        <span className="text-sm font-medium">{home.name}</span>
      </div>
      <div className="text-xs text-gray-500">{status === 'NS' ? time : status}</div>
      <div className="flex items-center gap-2">
        <span className="text-sm font-medium">{away.name}</span>
        <img src={away.logo} alt={away.name} className="w-6 h-6 object-contain" />
      </div>
    </div>
  );
}

export default MatchCard;