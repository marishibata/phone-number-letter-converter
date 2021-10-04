const numToWord = require('../controllers/numToWord');

const getPhoneWords = async (req, res) => {
  try {
    const params = req.query;
    const phoneWords = await numToWord(params);
    console.log(phoneWords);
    res.status(200).send(phoneWords);
  } catch (err) {
    console.log(err)
    res.status(400).send('unable to retrieve letters')
  }
}


module.exports = { getPhoneWords };