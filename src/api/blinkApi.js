import axios from 'axios';

const api = axios.create({
  baseURL: 'https://v3.football.api-sports.io',
  headers: {
    'x-apisports-key': 'e59ddf069ff421d5239ebfaeee30a464',
  },
});

// Busca os jogos do dia atual
export const getTodayMatches = async () => {
  const today = new Date().toISOString().split('T')[0];

  const res = await api.get(`/fixtures?date=${today}`);
  return res.data.response;
};
