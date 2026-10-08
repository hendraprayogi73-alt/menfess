// Tempel URL Web App dari Apps Script (Deploy > Web app) di sini
const API_URL = "https://script.google.com/macros/s/AKfycbzng32sPaj72WWV-obXVooMDV7AcNCv8Q7gy13IC3fcDFi-ysWndd7kz-Ylugho3gCkcQ/exec";

// true = gambar pesan yang diunduh juga memakai background.jpg sebagai latar
const BG_DI_GAMBAR = false;

// Tanpa header Content-Type agar tidak memicu preflight CORS di Apps Script
async function api(body) {
  const res = await fetch(API_URL, { method: "POST", body: JSON.stringify(body) });
  return res.json();
}
