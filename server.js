const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(__dirname + '/dist/Deploy-git'));

// Link index.html of build folder with router.
app.get('/*', (req,res,next) => {
    res.sendFile(path.join(__dirname + '/dist/Deploy-git/index.html'));
});


app.listen(process.env.PORT || 8000);