const spokenLanguages = require('../src/spoken-languages.json');

module.exports = (req, res) => {
  res.setHeader('Cache-Control', 'public, max-age=86400');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.status(200).json(spokenLanguages);
};
