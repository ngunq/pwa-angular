let express = require('express');
let app = express();
let port = process.env.PORT || 3000;

const posts = [
    {
        author: {
            name: "Angular",
            avt: "https://angular.io/assets/images/favicons/favicon.ico"
        },
        time: "23 mins",
        content: "Welcome to Angular! Angular helps you build modern applications for the web, mobile, or desktop.",
        reactions: [
            "React JS",
            "Bootstrap",
        ],
        comments: [
            {
                author: {
                    name: "React JS",
                    avt: "https://miro.medium.com/max/480/1*ypTuZbQNEV1oGkAfn85AUA.png"
                },
                time: "9 mins",
                content: "Awesome!"
            },
            
        ]
    },
    {
        author: {
            name: "React JS",
            avt: "https://miro.medium.com/max/480/1*ypTuZbQNEV1oGkAfn85AUA.png"
        },
        time: "12 hours",
        content: "React is a JavaScript library for building user interfaces. Learn what React is all about on our homepage or in the tutorial.",
        reactions: [
            "Angular",
            "Bootstrap",
        ],
        comments: [
            {
                author: {
                    name: "Angular",
                    avt: "https://angular.io/assets/images/favicons/favicon.ico"
                },
                time: "2 hours",
                content: "Amazing!"
            },
            {
                author: {
                    name: "Bootstrap",
                    avt: "https://getbootstrap.com/favicon.ico"
                },
                time: "just now",
                content: "Nice!"
            },
        ]
    },
    
]

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Origin, Cache-Control");
    // res.json({data: [1,2,3,4]})
    next()
  });

app.get('/posts', (req, res) => {
    res.send(posts)
});


app.listen(port);

console.log('RESTful API server started on: ' + port);