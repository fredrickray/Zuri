const getData = (req, res) => {
    const { slack_name, track } = req.query;  
    const currentDay = new Date().toLocaleDateString('en-US', { weekday: 'long' });
    const utcTime = new Date().toISOString();
    const githubFileUrl = "https://github.com/fredrickray/Zuri/blob/main/stage%201/app.js";
    const githubRepoUrl = "https://github.com/fredrickray/Zuri";
  
   try {
        if(!slack_name || !track) {
            throw ({Error: "Invalid query key"})
        }
        else{
            res.status(200).json(
                {
                    slack_name,
                    current_day: currentDay,
                    utc_time: utcTime,
                    track,
                    github_file_url: githubFileUrl,
                    github_repo_url: githubRepoUrl,
                    status_code: 200,
                  }
            );
        }
   } 
   catch (error) {
        res.status(500).send(error)
   }
  
    
};

module.exports = {
    getData
}