const numToWord = require('../controllers/numToWord');

const getPhoneWords = async (req, res) => {
  try {
    const { numbercombination } = req.params;
    // console.log(params);
    const phoneWords = numToWord(numbercombination);
    console.log(phoneWords);
    res.status(200).send(phoneWords);
  } catch (err) {
    console.log(err)
    res.status(400).send('unable to retrieve letters')
  }
}


module.exports = { getPhoneWords };