const cardList = [{
    title: "Kitten 1",
    image: "/kitty1.png",
    link: "About Kitten 2",
    desciption: "Demo desciption about kitten 2"
},
{
    title: "Kitten 2",
    image: "/kitty2.png",
    link: "About Kitten 2",
    desciption: "Demo desciption about kitten 2"
},
{
    title: "Kitten 3",
    image: "/kitty3.png",
    link: "About Kitten 3",
    desciption: "Demo desciption about kitten 3"
}
];

let express = require('express');
let app = express();
let port = process.env.port || 3000;

app.use(express.static(__dirname + '/'));
app.set('view engine', 'ejs');

app.get('/', function (req,res) {
    res.render('pages/index', {cats: cardList});
});

app.listen(port, ()=>{
    console.log('express server started');
});