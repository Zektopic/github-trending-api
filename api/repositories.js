const { fetchRepositories } = require('../src/functions/utils/fetch');

module.exports = async (req, res) => {
  try {
    const { language, since, spoken_language_code: spokenLanguage } = req.query;
    const data = await fetchRepositories({ language, since, spokenLanguage });
    res.setHeader('Cache-Control', 'public, max-age=0');
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.status(200).json(data && data.length > 0 ? data : []);
  } catch (err) {
    console.error(err);
    res.setHeader('Cache-Control', 'public, max-age=0');
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.status(500).json({ error: err.message });
  }
};
