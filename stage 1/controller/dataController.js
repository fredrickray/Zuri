const getData = (req, res) => {
    const { slack_name, track } = req.query;
  
    
    const currentDay = new Date().toLocaleDateString('en-US', { weekday: 'long' });
    const utcTime = new Date().toISOString();
  
    
    const githubUsername = 'fredrickray';
    const githubRepo = 'https://github.com/fredrickray/Zuri.git';
    const githubFileUrl = `https://github.com/${githubUsername}/${githubRepo}/Zuri/main/${githubFileName}`;
    const githubRepoUrl = `https://github.com/${githubUsername}/${githubRepo}`;
  
    const responseData = {
      slack_name,
      current_day: currentDay,
      utc_time: utcTime,
      track,
      github_file_url: githubFileUrl,
      github_repo_url: githubRepoUrl,
      status_code: 200,
    };
  
    res.status(200).json(responseData);
};

module.exports = {
    getData
}