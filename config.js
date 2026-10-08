// Tempel URL Web App dari Apps Script (Deploy > Web app) di sini
const API_URL = "https://script.google.com/macros/s/AKfycby0erB5Ac3OcGdTTed9NANB79Mq4ziXbQof5UHChoq2d3LkQAr5MTpfHqbj9tN3s5Jwdw/exec";

// Tanpa header Content-Type agar tidak memicu preflight CORS di Apps Script
async function api(body) {
  const res = await fetch(API_URL, { method: "POST", body: JSON.stringify(body) });
  return res.json();
}
