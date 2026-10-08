// Tempel URL Web App dari Apps Script (Deploy > Web app) di sini
const API_URL = "https://script.google.com/macros/s/GANTI_DENGAN_ID_KAMU/exec";

// true = gambar pesan yang diunduh juga memakai background.jpg sebagai latar
const BG_DI_GAMBAR = false;

// Tanpa header Content-Type agar tidak memicu preflight CORS di Apps Script
async function api(body) {
  const res = await fetch(API_URL, { method: "POST", body: JSON.stringify(body) });
  return res.json();
}
