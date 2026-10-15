
const API_URL = "https://script.google.com/macros/s/AKfycbzng32sPaj72WWV-obXVooMDV7AcNCv8Q7gy13IC3fcDFi-ysWndd7kz-Ylugho3gCkcQ/exec";

const BG_DI_GAMBAR = false;
const JUDUL_KARTU = "PESAN RAHASIA";
const AKUN = "";

async function api(body) {
  const res = await fetch(API_URL, {
    method: "POST",
    body: JSON.stringify(body)
  });

  return res.json();
}
