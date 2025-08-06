const express = require('express');
const path = require('path');
const audioDevices = require('audio-devices');

const app = express();
const PORT = 3000;

app.use(express.static(path.join(__dirname, '../public')));

app.post('/list-audio-devices', async (req, res) => {
  try {
    await audioDevices.getDevices(); // This opens the popup
    res.json({ message: 'A popup window should appear listing your audio devices.' });
  } catch (error) {
    res.status(500).json({ error: 'Error listing audio devices.' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
