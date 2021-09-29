const numToWord = require('../controllers/numToWord');

const getPhoneWords = async (req, res) => {
  console.log('before try');
  try {
    const params = req.query;
    const phoneWords = await numToWord(params);
    console.log(phoneWords);
    //const { phoneWords } = await numToWord(req.params.number);
    //console.log(phoneWords);
    res.status(201).send(phoneWords); // or 200?
  } catch (err) {
    console.log(err)
    res.status(400).send('unable to retrieve letters')
  }
}


module.exports = { getPhoneWords };