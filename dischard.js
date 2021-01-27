const _ = require("lodash");

 var posts = [
  { title: 'Test', post: 'asdrasdrasdrasdr' },
  { title: 'Testando', post: 'scfasdfasdfasdfsdfsadfasd' }
]

var teste = 'test'

if (posts.some(elem => _.lowerCase(elem.title) == _.lowerCase(teste))) {
    console.log("Match found.");
  }
