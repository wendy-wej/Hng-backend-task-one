const express = require('express');
const app = express();
const port = process.env.PORT || 3000; 

// Handle GET requests to the /api endpoint
app.get('/api', (req, res) => {
 
  const slackName = req.query.slack_name;
  const track = req.query.track;

  // Get the current date and time
  const currentDate = new Date();
  const currentDay = currentDate.toLocaleDateString('en-US', { weekday: 'long' });
  const utcTime = currentDate.toISOString();

  // Construct the JSON response
  const response = {
    slack_name: slackName,
    current_day: currentDay,
    utc_time: utcTime,
    track: track,
    github_file_url: 'https://github.com/username/repo/blob/main/file_name.ext',
    github_repo_url: 'https://github.com/username/repo',
    status_code: 200,
  };

  // Send the JSON response
  res.json(response);
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
