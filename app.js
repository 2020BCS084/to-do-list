// const express=require("express");
// const app=express();

// app.set("view engine", "ejs");

// app.get('/', function(req, res){

// // var date=new Date();
// // var day=date.getDay();
// var day=0;
// if((day==0) || (day==6)){
//     day="weekend";
// res.render("index", {day1:day});
// }else{
//     day="working day";
// res.render("index", {day1:day});
// } 
// });

// app.listen(3000, function(req, res){
//     console.log("running on port 3000");
// })












// const express=require("express");
// const app=express();

// app.set("view engine", "ejs");

// app.get('/', function(req, res){

// var date=new Date();
// // var day=date.getDay();
// // var day=0;                         
// //                                                      iiiimmmmmmmpppppppppppppppppppppppppppppppppppppppp



// var options={     // here, we can not change weekday, day nd month naming they are not var's they are constants
//   weekday: "long",         // weekday means day i.e sunday or  monday, or ....// here long is for character.
// day: "numeric",             // day is a date here.
// month: "long"             // here long is for character.
// };

// var day1=date.toLocaleDateString("en-US",options);     // if we dont use this fun'n then we will get in 1/4/2023 this format. now it is in Wednesday, January 4

 
// res.render("index", {day:day1});
// });

// app.listen(3000, function(req, res){
//     console.log("running on port 3000");
// });
















const express=require("express");
const bodyparser=require('body-parser');
const { urlencoded } = require("body-parser");
const app=express();

app.use(bodyparser.urlencoded({extended: true}));
app.use(express.static("public"));
app.set("view engine", "ejs");

var items=["buy food", "cook food", "eat food"];
var items2=[];
app.get('/', function(req, res){
  
    
var today=new Date();
//  var day=date.getDay();
// var day=0;                         
//                                                      iiiimmmmmmmpppppppppppppppppppppppppppppppppppppppp



var options={     // here, we can not change weekday, day nd month naming they are not var's they are constants
  weekday: "long",         // weekday means day i.e sunday or  monday, or ....// here long is for character.
day: "numeric",             // day is a date here.
month: "long"             // here long is for character.
};

var day=today.toLocaleDateString("en-US",options); 




res.render("index", {day1: day, ite : items});
});

app.post("/", function(req, res){
var item=req.body.addtask;

if(req.body.bttn=="Work"){
items2.push(item);
res.redirect("work");  
} 
else{
  items.push(item);
      res.redirect("/");

}

})

app.get("/work", function(req, res){
  console.log(req.body);
  res.render("index", {day1 : "Work",ite : items2});
})

app.listen(3000, function(req, res){
    console.log("running on port 3000");
});



// the concept behind above code is :
// when we do console.log(req.body);  we will get {newitem: newitementered, button_name: button_value}
// so using this fact we made logic, we replace button value with our page title i.e and our page title is different for different pages so from that we create this logic



// exporting functions :

// var ans= function(num){         // we can do like this to directly store return value of function into it.
//   return num*num;
// }
// we can export functions from other Files :
// module.exports.function_name=ans;

// and import in our file like function_name();

// and in our main file should import exporting file first like :
// const any_variable=require(__dirname, "/file_name");

// and much more read from code with harry's notes.
