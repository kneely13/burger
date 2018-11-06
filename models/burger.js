const orm = require('../config/orm.js');
const router = express.Router();
//create the code that will call the ORM functions using burger specific input for the ORM.


router.get("/", function (req, res) {
    orm.selectAll(function (err, burgers) {
        if (err){
            throw err
        }
        res.render("index", {burgers, style: 'index'});
    });
});

router.get("/all", function (req, res) {
    orm.selectAll(function (err, burgers) {
        if (err){
            throw err
        }
        res.render("index", {burgers, style: 'index'});
    });
});



router.post('/add', (req, res) => {
    const burgerName = req.body.burger_name;
});

router.post('/delete', (req, res) => {
    const burgerName = req.body.burger_name;
});

router.post('/all', (req, res) => {
    const burgerName = req.body.burgers;
});


//48:00 
//google example , type burger.js node.js
module.exports= router;

