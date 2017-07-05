var Minerva = require('./Minerva.js');

var minerva = new Minerva('', ''); // or store 'em in environment MG_USER & MG_PASS


/* function sleep(s){
    return function(){
        return new Promise(function(resolve, reject){
            setTimeout(resolve,s*1000);
        });  
    }
} */

// console.log('login');
function getAndReg(){
    minerva.getCourses({
        dep: 'COMP',
        number: '551',
        season: 'w',
        year: '2018'
    }).then(function(courses) {
        console.log(courses);
        if (!courses.is_full){
            minerva.addCourses({
                year: 2018,
                crn: 17135,
                season: 'w'
            }).then(function(response) {
                console.log(response);
                clearInterval(id);
                return;
            });
        } 
    });
 
}


var id = setInterval(function(){getAndReg();},60000);
