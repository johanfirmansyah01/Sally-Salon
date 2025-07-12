AOS.init();

function bukaUndangan() {
  document.getElementById("cover").style.display = "none";
  document.getElementById("mainContent").style.display = "block";
}

function redirectWhatsApp(event) {
  event.preventDefault();
  const nama = document.getElementById('nama').value;
  const jumlah = document.getElementById('jumlah').value;
  const tanggal = document.getElementById('tanggal').value;
  const catatan = document.getElementById('catatan').value;
  const pesan = `Halo, saya ingin reservasi Body Spa atas nama *${nama}* untuk *${jumlah} orang* pada *${tanggal}*.\nCatatan: ${catatan}`;
  window.open(`https://wa.me/6281805302279?text=${encodeURIComponent(pesan)}`);
}
