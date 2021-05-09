const router = require('express').Router();
const File = require('../models/file');
router.get('/:uuid',async (req,res)=>{
	const file = await File.findOne({uuid:req.params.uuid})
	if(!file){
		return res.render('download', { error: 'Link expired or incorrect URL' });
	};
	const filePath = `${__dirname}/..${file.path}`;
	res.download(filePath);
})
router.get('/',(req, res)=>{
	res.render('upload')
})

module.exports = router;