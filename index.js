const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send(`
    <h1>Selamat Datang</h1>
    <h2>TUGAS KOMPUTASI AWAN WEEK 12</h2>

    <p><b>NAMA :</b><br>
    AWRA SANK RAMA <br>
    MUH AGGUM NIAS PUTRA</p>

    <h3>TUGAS 12</h3>
    <ol>
      <li>Carilah penyedia PaaS yang free!</li>
      <li>Buatlah aplikasi sederhana menggunakan layanan PaaS tersebut!</li>
    </ol>

    <p><b>DONE ✔</b></p>
  `);
});

app.listen(port, () => {
  console.log(`App berjalan di port ${port}`);
});
