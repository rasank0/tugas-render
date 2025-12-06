const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send(`
    <html>
      <head>
        <title>Tugas Komputasi Awan</title>
        <style>
          body {
            font-family: Arial, sans-serif;
            background: linear-gradient(135deg, #4f46e5, #9333ea);
            color: white;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            margin: 0;
          }
          .card {
            background: rgba(255, 255, 255, 0.15);
            padding: 30px 40px;
            border-radius: 15px;
            box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
            text-align: center;
            backdrop-filter: blur(8px);
          }
          h1 {
            font-size: 32px;
            margin-bottom: 10px;
          }
          h2 {
            font-size: 22px;
            margin-bottom: 25px;
          }
          p, li {
            font-size: 18px;
            line-height: 1.5;
          }
          ol {
            text-align: left;
            margin-left: 20px;
          }
          .done {
            margin-top: 15px;
            font-size: 20px;
            font-weight: bold;
            padding: 10px;
            background: #22c55e;
            color: white;
            border-radius: 8px;
            display: inline-block;
          }
        </style>
      </head>
      <body>
        <div class="card">
          <h1>Selamat Datang 👋</h1>
          <h2>TUGAS KOMPUTASI AWAN — WEEK 12</h2>

          <p><b>Nama Kelompok:</b><br>
          AWRA SANK RAMA<br>
          MUH AGGUM NIAS PUTRA</p>

          <h3>Tugas 12</h3>
          <ol>
            <li>Carilah penyedia PaaS yang free!</li>
            <li>Buatlah aplikasi sederhana menggunakan layanan PaaS tersebut!</li>
          </ol>

          <div class="done">DONE ✔</div>
        </div>
      </body>
    </html>
  `);
});

app.listen(port, () => {
  console.log(`App berjalan di port ${port}`);
});
