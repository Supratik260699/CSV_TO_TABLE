const express = require('express');
const app = express();
app.set('view engine','ejs');
const PORT = process.env.PORT || 3400;
app.use(express.static('./assets'));
app.get('/',function(req,res){
    res.render('home');
});

app.listen(PORT,function(req,res){
    console.log(`Port is running on port ${PORT}`);
})