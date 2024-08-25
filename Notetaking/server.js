// server.js
const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3000;

app.use(cors());

app.get('/screenshot', async (req, res) => {
  const { videoId, timestamp } = req.query;

  // Validate input
  if (!videoId || !timestamp) {
    return res.status(400).send('Missing required parameters: videoId and timestamp');
  }

  try {
    // Replace this with your screenshot capture logic
    const screenshot = await captureScreenshot(videoId, timestamp);
    res.json({ screenshot });
  } catch (error) {
    console.error('Error capturing screenshot:', error);
    res.status(500).send('Failed to capture screenshot');
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// Dummy function for capturing screenshot
async function captureScreenshot(videoId, timestamp) {
  // Implement your screenshot logic here
  return `Screenshot of ${videoId} at ${timestamp}`;
}



  // In the code above, we have created an Express server that listens on port 3000. We have a single route  /screenshot  that takes two query parameters,  videoId  and  timestamp . The route uses Puppeteer to open a YouTube video URL with the specified video ID and timestamp, waits for the video to load, captures a screenshot, and sends the screenshot as a response. 
  // Step 3: Create a Frontend Application 
  // Next, we will create a frontend application that will allow users to enter a YouTube video ID and timestamp, and display the screenshot of the video at that timestamp. 
  // Create a new directory for the frontend application and navigate into it: 
  // mkdir youtube-screenshot-frontend