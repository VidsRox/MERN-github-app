export const explorePopularRepos = async (req, res) => {
    const {language} = req.params;
    
    try {
        const response = await fetch(`https://api.github.com/search/repositories?q=language:${language}+javascript&sort=stars&order=desc&per_page=20`, {
        headers:{
          Authorization: `token ${process.env.GITHUB_API_KEY}`
        }
      })
      const data  = await response.json();
      res.status(200).json({repos: data.items});
    
    } catch (error) {
        
    }
}