/// Chapter 1 ////
document.write("<h1>Chapter 1</h1>");
// Q1
alert("Welecome To Our Page");

// Q2
alert("Error! Please enter a valid password");

// Q3
alert("Welcome to JSLand...\n\n Happy Coding");

// Q4
alert("Welcome to JSLand");
alert("Happy Coding\n Prevent this page from creating additional dialogs.");

// Q5
console.log(alert("Hello... I can run JS through my web browser console"));

// Q7
document.write("<br><br>Q7 Answer <br>d. Body (after your page’s HTML)<br>")


/// Chapter 2 ////
document.write("<br><h1>Chapter 2</h1>");

// Q1
var username;

// Q2
var myname = "Muhammad Naveed";

// Q3
var message;
message = "Hello World";
alert(message);

// Q4
var studentname = "John Doe";
var studentage = "15 Years Old"
var studentqualification = "Certified Mobile Application Development"
alert(studentname);
alert(studentage);
alert(studentqualification);

// Q5
alert("          PIZZA\n          PIZZ\n          PIZ\n          PI\n          P");

// Q6
var email="naveed.sakaria@gmail.com";
alert("My email address is "+email);

// Q7
var book = "A Samarter way to learn JavaScript";
alert("I am trying learn from the Book "+ book);

// Q8
document.write("<br>Yah! I can write HTML content throught JavaScript</br>");

// Q9
var symbole = "▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬";
alert(symbole);

// Chapter 3
document.write("</br><h1>Chapter 3 </h1></br>");

// Q1
var age;
age = 15;
alert('I am '+age + ' Years Old');

// Q2
var vister;
vister = 1;
alert('You have visited this site '+vister + ' times');

// Q3
var birthyear = 1985;
document.write("</br>My birth year is "+birthyear);

// Q4
var customername, product, qty;
customername= "John Doe";
product="T-Shirt";
qty=5;
document.write("</br>Q4) "+customername+" ordered "+qty+" "+product+"(s) on XYZ Clothing Store</br>");

// Chapter 4
document.write("</br><h1> Chapter 4 </h1></br>");

// Q1
var $abc, _abc, $1abc;

// Q2
// 5 Legal Variable
var $lgl, _lgl, lgl, abc_lgl, $abc_lgl;
// 5 ilLegal Variable
//var break,continue,if,else,1235;

// Q3
document.write("</br>Q3");
document.write('<h3>a) A heading stating "Rules for naming JS variables"<br /></h3>');
document.write('<h3>b) Variables names can only contain _______ , _______ , _______  and ________. For example: $my_1stVariable <br /></h3>');
document.write('<h3>c) Variables must begin with a _______, ________, or __________ For example: $name, _name or name. </h3>');
document.write('<h3>d) Variable name are case ___________<br /></h3>');
document.write('<h3>e) Variable name should not be JS ____________. <br /></h3>');


// Chapter 5
document.write("</br><h1>Chapter 5</h1></br>");

// Q1
var num1 = 3;
var num2 = 5;
var result;
result = num1 + num2;
document.write("<br/>Q1) Sum of "+num1 + " and "+num2 + " is "+result);

// Q2
result = num2 - num1;
document.write("<br/><br/>Q2) Subtraction of "+num2 + " and "+num1 + " is "+result);
result = num1 * num2;
document.write("<br/>Q2) Multiplication of "+num1 + " and "+num2 + " is "+result);
result = num2 / num1;
document.write("<br/>Q2) Division of "+num2 + " and "+num1 + " is "+result);
result = num2 % num1;
document.write("<br/>Q2) Modulus of "+num2 + " and "+num1 + " is "+result);


// Q3
var abca;
document.write('<br /><br />Q3) ' + 'Number = ', abca);
abca = '5';
document.write('<br />Q3) ' + 'Initial Value :  Number = ' + abca);
++abca;
document.write('<br />Q3) ' + 'After Increment :  Number = ' + abca);
abca += 7;
document.write('<br />Q3) ' + 'After Addition 7 :  Number = ' + abca);
--abca;
document.write('<br />Q3) ' + 'After Decrement :  Number = ' + abca);
abca %= 3;
document.write('<br />Q3) ' + 'The Reminder is :  Number = ' + abca);

// Q4
var price,ticket, cost;
price = 600;
ticket = 5;
cost = price * ticket;
document.write('</br></br> Q4) Total Cost to buy '+ticket+' tickets to movie is '+cost+' PKR</br>');

// Q5

var table = 4;
var tablelen = 10;
document.write('</br>Q5) Table of '+ table+'</br>');
for (i = 1; i <= tablelen; i++) {
    var results = table * i
    document.write(table + ' x ' + i + ' = ' + results + '<br />');
}

// Q6
var celsius = 25;
var f;
var far = 70;
var c;
document.write('</br>Q6) '+celsius+'<sup>o</sup>C is ',(celsius * 9 / 5) + 32 + '<sup>o</sup>F</br>');
document.write('Q6) '+far+'<sup>o</sup>F is ',(far - 32) * 5 / 9+'<sup>o</sup>C </br>');

// Q7
document.write('</br><h2>Shopping Cart</h2>');
var pitem1, pitem2, qty1, qty2, totalcost, shpping;
pitem1 = 650;
pitem2 = 100;
qty1 = 3;
qty2 = 7;
shpping = 100;
document.write('</br> Price of Item 1 is '+pitem1);
document.write('</br> Quantity of Item 1 is '+qty1);
document.write('</br> Price of Item 2 is '+pitem2);
document.write('</br> Quantity of Item 2 is '+qty2);
document.write('</br> Shipping Charges '+shpping);
totalcost = (pitem1*qty1)+(pitem2*qty2)+shpping
document.write('</br></br> Total Cost of Your Order is '+totalcost);


// Q8
document.write('<h2>Marks Sheet</h2>');
var marks =980;
var obtained = 804;
var percentage = obtained / marks * 100;
document.write('</br> Total Marks : '+marks);
document.write('</br> Marks Obtained : '+obtained);
document.write('</br> Percentage : '+percentage);

// Q9
var dollor =10;
var riyal = 25;
var currancy = (dollor * 104.80)+(riyal*28);
document.write('</br><h2>Currrncy in PKR</h2>');
document.write('</br> Total Currency in PKR: '+currancy);

// Q10
var anum = 2;
anum = (((anum+5)*10)/2);
document.write('</br></br>Q10) Intial Value 2 Add 5 Multiply 10 & divided by 2 '+anum);

// Q11
document.write('<h2>Age Calculator</h2>');
var cyear = 2020;
var byear = 1985;
var age = cyear - byear;
document.write('Current Year: '+cyear);
document.write('</br> Birth Year: '+byear);
document.write('</br> Your Age is: '+age);


// Q12
var radius = 20;
var circumference = Math.PI * 2*radius;
var area = Math.PI * radius*radius;
document.write('<h2>The Geometerize</h2>');
document.write('Radius of Circle: '+radius);
document.write('</br>The Circumference is: '+circumference);
document.write('</br>The area is: '+area)+'</br>';

document.write('<h2>The Lifetime Supply Calculator</h2>');

// Q13
var snack = "Chocolate Chip";
var cage1 = 15;
var eage1 = 65;
var snackperday = 3;
var tsnack = (((eage1-cage1)*12)*30) * snackperday;

document.write('Favourite Snack: '+snack);
document.write('</br>Current Age: '+cage1);
document.write('</br>Maximum Age: '+eage1);
document.write('</br>Amount of Snack Per day: '+snackperday);
document.write('</br>You Will Need '+tsnack+' Chocolate Chip to last you until the ripe old age of '+eage1);


// Chapter 6-9
document.write('<h1>Chapter 6-9</h1>');

// Q1
var a = 10;
document.write('</br> The Value of a is: '+a);

++a;
document.write('</br></br> The Value of ++a is: '+a);
document.write('</br> Now the value of a is: '+a);


document.write('</br></br> The Value of a++ is: '+a);
a++;
document.write('</br> Now the value of a is: '+a);

--a;
document.write('</br></br> The Value of --a is: '+a);
document.write('</br> Now the value of a is: '+a);

document.write('</br></br> The Value of a++ is: '+a);
a--;
document.write('</br> Now the value of a is: '+a);

// Q2
var a=2, b=1;
document.write('</br></br> a is: '+a);
document.write('</br> b is: '+b);
var result = --a - --b + ++b + b--;
document.write('</br> result is: '+result);

document.write('</br></br> Explain the output at each stage');
document.write('</br> result = --a - --b + ++b + b--');
document.write('</br> result = 1 - 0 + 1 + 1');

// Q3
var user = prompt('Enter Your Name ');
alert('Welcome '+user);

// Q4

// Q5
var atable = prompt('Enter Multiplication Table ');
var atablelen = 10;
document.write('</br></br>Q5) Table of '+ atable+'</br>');
if(atable ===""){
    atable = 5;
}
for (i = 1; i <= atablelen; i++) {
    var results = atable * i
    document.write(atable + ' x ' + i + ' = ' + results + '<br />');
}

// Q6
var eng = "English", urdu = "Urdu", math = "math";
var tmarks = 100;
var omark1, omark2, omark3;
var totalmars, obtmarks;

omark1 = +prompt('Enter Obatined Marks in English');
omark2 = +prompt('Enter Obatined Marks in Urdu');
omark3 = +prompt('Enter Obatined Marks in Math');
document.write('</br><table><tr><th>Subject</th><th>Total Marks</th><th>Obtained Marks</th><th>Percentage</th></tr><tr><td>'+eng +' </td><td>'+tmarks+ ' </td><td>'+omark1+ ' </td><td>'+(omark1/tmarks)*100+'% </td></tr><tr><td>'+urdu +' </td><td>'+tmarks+ ' </td><td>'+omark2+ ' </td><td>'+(omark2/tmarks)*100+'% </td></tr><tr><td>'+math +' </td><td>'+tmarks+ ' </td><td>'+omark3+ ' </td><td>'+(omark3/tmarks)*100+'% </td></tr> <tr><td></td><th>'+(totalmars = tmarks+tmarks+tmarks)+'</th><th>'+(obtmarks=omark1+omark2+omark3)+'</th><th>'+((obtmarks/totalmars)*100)+'% </tf></tr></table>');

// Chapter 9-11
document.write('<h1>Chapter 9-11</h1>');

// Q1
var city = prompt('Enter Your City Name');
if(city==="karachi"){
alert('Welcome to City of Lights ');
}

// Q2
var gender = prompt('Enter your Gender');
var msg;
if (gender === 'male') {
    msg = 'Good Morning Sir';
    alert(msg);
};
if (gender === 'female') {
    msg = "Good Morning Ma'am"
    alert(msg);
}

// Q3
var userL = prompt('Enter Color of Traffic Lights');
if (userL === 'red') {
    var msgL = 'Must Stop'
    alert(msgL);
} else if (userL === 'yellow') {
    var msgL = 'Ready to Move'
    alert(msgL);
} else if (userL === 'green') {
    var msgL = 'Move Now'
    alert(msgL);
};

// Q4
var fuel = +prompt('Enter Your Fuel Level in Numbers only');
if(fuel >= 0.25){
   
} else{ 
    var fmsg = "Please refill the fuel in your car";
    alert(fmsg);
}

// Q5
// a
var a = 4;
if (++a === 5){
alert("given condition for variable a is true");
}
document.write('<br /><br /> a) This Condition is True');

// b 
var b = 82;
if (b++ === 83){
alert("given condition for variable b is true");
}
document.write('<br /><br /> b) This Condition is Fasle');

// c 
var c = 12;
if (c++ === 13){
alert("condition 1 is true");
}
document.write('<br /><br /> c) This Condition 1 is Fasle');

if (c === 13){
    alert("condition 2 is true");
}
document.write('<br /><br /> c) This Condition 2 is True');

if (++c < 14){
    alert("condition 3 is true");
}
document.write('<br /><br /> c) This Condition 3 is Fasle');

if(c === 14){
    alert("condition 4 is true");
}
document.write('<br /><br /> c) This Condition 4 is True');

// d 
var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost){
    alert("The cost equals");
}
document.write('<br /><br /> d) This Condition is True');

// e 
if (true){
  alert("True");
}
document.write('<br /><br /> e) This Condition is True');

if (false){
  alert("False");
}
document.write('<br /><br /> e) This Condition is True');

// f 
if("car" < "cat"){
    alert("car is smaller than cat");
}
document.write('<br /><br /> f) This Condition is True');

// Q6 
document.write('<h2>Marks Sheet</h2>');
var engmarks = +prompt('Enter Your Obtained Marks in English ');
var urdumarks = +prompt('Enter Your Obtained Marks in Urdu ');
var mathmarks = +prompt('Enter Your Obtained Marks in Math ');
var marks_total = 300;
var t_mark = engmarks + urdumarks + mathmarks;
var percent = t_mark / marks_total*100;
var grade, remarks;

if (percent >=80){
    grade = "A-one";
    remarks ="Excellent";
    document.write('<br /> Total Marks : '+marks_total);
    document.write('<br /> Marks Obtained : '+t_mark);
    document.write('<br /> Percentage : '+percent + '%');
    document.write('<br /> Grade : '+grade);
    document.write('<br /> Remarks : '+remarks);
} else if (percent >=70){
    grade = "A";
    remarks ="Good";
    document.write('<br /> Total Marks : '+marks_total);
    document.write('<br /> Marks Obtained : '+t_mark);
    document.write('<br /> Percentage : '+percent + '%');
    document.write('<br /> Grade : '+grade);
    document.write('<br /> Remarks : '+remarks);
} else if (percent >=60){
    grade = "B";
    remarks ="You need to improve";
    document.write('<br /> Total Marks : '+marks_total);
    document.write('<br /> Marks Obtained : '+t_mark);
    document.write('<br /> Percentage : '+percent + '%');
    document.write('<br /> Grade : '+grade);
    document.write('<br /> Remarks : '+remarks);
} else if (percent < 60){
    grade = "Fail";
    remarks ="Sorry";
    document.write('<br /> Total Marks : '+marks_total);
    document.write('<br /> Marks Obtained : '+t_mark);
    document.write('<br /> Percentage : '+percent + '%');
    document.write('<br /> Grade : '+grade);
    document.write('<br /> Remarks : '+remarks);
}

// Q7
document.write('<h2>Guess Game</h2>');
var secret = 5;
var guess = +prompt('Guess The Secret Number Ranging 1 to 10');
if  (secret === guess){
    alert('"Bingo! Correct Answer"');
    document.write('<br /> "Bingo! Correct Answer"');
} else if (++secret === guess){
    alert('"Close enough to the correct answer"');
    document.write('<br /> "Close enough to the correct answer"');
}

// Q8
var dnum = +prompt('Enter Any Number for Checking is Divisiable or Not');
if(dnum % 3 == 0){
    alert('Yes Number is Divisible By 3');
}

// Q9
var cn = +prompt('Check Input Number is Even or Odd');
if(cn % 2 == 0){
    alert('Even Number');
} else{
    alert('odd Number');
}

// Q10
var temp = +prompt('Enter Current Temperature ');
if (temp > 40){
    alert('“It is too hot outside.”');
} else if (temp > 30){
    alert('“The Weather today is Normal.”');
} else if (temp > 20){
    alert('“Today’s Weather is cool.”');
} else if (temp > 10){
    alert('“OMG! Today’s weather is so Cool.”');
}

// Q11
var fnum = +prompt('Enter First Number for Calculation');
var snum = +prompt('Enter Second Number for Calculation');
var operator = prompt('Enter Operator for Calculation');
if(operator ==="+"){
    alert('Answer is : '+fnum+snum);
} else if(operator ==="-"){
    alert('Answer is : '+fnum-snum);
} else if(operator ==="*"){
    alert('Answer is : '+fnum*snum);
} else if(operator ==="/"){
    alert('Answer is : '+fnum/snum);
} else if(operator ==="%"){
    alert('Answer is : '+fnum%snum);
}

// Chapter 12-13
document.write('<h1>Chapter 12-13</h1>');

// Q1
var ch = +prompt('Enter Number Range 0 To 127');
if (ch>=65 && ch<=90){
        alert('Uppercase Letter');
        
}	else if (ch>=97 && ch<=122){
        alert('Lowercase Letter');

}	else if (ch>=48 && ch<=57){
        alert('Number');

}	else if ((ch>0 && ch<=47)||(ch>=58 && ch<=64)|| (ch>=91 && ch<=96)||(ch>=123 && ch<=127)){
        alert('Special Character');
}

// Q2
var num1, num2;
num1 = +prompt("Input the First integer");
num2 = +prompt("Input the second integer");
                                                 
if(num1 > num2){ 
  alert("The larger of "+ num1+ " and "+ num2+ " is "+ num1+ ".");

} else if(num2 > num1){
  alert("The larger of "+ num1+" and "+ num2+ " is "+ num2+ ".");

} else{
   alert("The values "+ num1+ " and "+num2+ " are equal.");
}

// Q3
var userz = prompt('Enter a Number');
if (userz > '0') {
    var msgz = 'Number is Positive'
} else if (userz < '0') {
    var msgz = 'Nubmer is Negative'
} else if (userz === '0') {
    var msgz = 'Nubmer is Zero'
} else {
    var msgz = 'Please Enter Nubmer 0 - 9'
};
alert(msgz);

// Q4
var userv = prompt('Enter Vowels Words Like A, E, I, O, U');
if (userv === 'a' || userv === 'e' || userv === 'i' || userv === 'o' || userv === 'u') {
    var vowels = 'It Is Vowel'
    alert(vowels)
} else {
    var vowels = 'It Is Not Vowel Character'
    alert(vowels)
};

// Q5
var pass = 'mughal';
var userpass = prompt('Enter Your Password');
if (userpass > '') {
    if (pass === userpass) {
        var passmsg = '"Correct!" The Password you entered matches the original Password'
    } else {
        var passmsg = 'InCorrect Password'
    }
} else {
    var passmsg = 'Please Enter your Password'
};
alert(passmsg);

// Q6
var greeting;
var hour = 13;
if (hour < 18) {
    greeting = "Good day";
} else{
    greeting = "Good evening";
}
alert(greeting);

// Q7
var utime = prompt('Enter Time 24 Hours Clock format Like : 1900 = 7pm');
if (utime >= '0000' && utime < 1200) {
    var timemsg = 'Good Morning'
} else if (utime >= '1200' && utime < 1700) {
    var timemsg = 'Good Afternoon'
} else if (utime >= '1700' && utime < 2100) {
    var timemsg = 'Good Evening'
} else if (utime >= '2100' && utime <= 2359) {
    var timemsg = 'Good Night'
} else {
    var timemsg = 'Please Enter Valid Time Format Like: 1900 = 7pm'
};
alert(timemsg);

// Chapter 14-16
document.write('<h1>Chapter 14-16</h1>');

// Q1
var student = [];

// Q2
var studenta = new Array();

// Q3
var sarr = ["a","b","c"];

// Q4
var narr =[1,2,3];

// Q5
var barr =["true","false"];

// Q6
var marr = ["a","b","c",1,2,3,"true","false"];

// Q7
var quali =['SSC', 'HSC', 'BCS','BS', 'BCOM', 'MS', 'M. Phil', 'PhD'];
for (var i=0; i < quali.length; i++){
    document.write((i+1)+') '+quali[i]+'<br />');
};

// Q8
document.write('<br />');
var arr = ['Micheal', 'John', 'Tony'];
var score = ['320', '230', '480'];
var perc = [];
for (i = 0; i < arr.length; i++) {
    var per = score[i] / 500 * 100
    perc.push(per + '% ');
};
for (j = 0; j < arr.length; j++) {
    document.write('Score of ' + arr[j] + ' is ' + score[j] + ' Percentage: ' + perc[j] + '<br />');
};

// Q9
var arrcolor = ['red', 'green', 'orange'];
document.write('<br /> Color: ', arrcolor, '<br /><br />');

var ucolor = prompt('Enter Color for Adding First Record');
arrcolor.unshift(ucolor);
document.write('a) Color: ', arrcolor, '<br /><br />');

var uecolor = prompt('Enter Color for Adding Last Record');
arrcolor.push(uecolor);
document.write('b) Color: ', arrcolor, '<br /><br />');

var uc1color = prompt('Enter First Color to Begning Array');
var uc2color = prompt('Enter Second Color to Begning Array');
arrcolor.unshift(uc1color, uc2color);
document.write('c) Color: ', arrcolor, '<br /><br />');

arrcolor.shift();
document.write('d) Color: ', arrcolor, '<br /><br />');

arrcolor.pop();
document.write('e) Color: ', arrcolor, '<br /><br />');

var ufcolor = prompt('Enter Index No of Array for ADD COLOR');
var uucolor = prompt('Enter COLOR Name');
arrcolor.splice(ufcolor, 0, uucolor);
document.write('f) Color: ', arrcolor, '<br /><br />');

var ug1 = prompt('Enter Index No to Start Delet Recored from array');
var ug2 = prompt('Enter Index No to End Delet Recored from array');
arrcolor.splice(ug1, ug2);
document.write('g) Color: ', arrcolor, '<br /><br />');

// Q10
var scores = [320,230,480,120];
document.write('<br /><br /> Scores of Students : '+scores);
document.write('<br />Ordered Scores of Students : '+scores.sort());

// Q11
var city = ['Karachi', 'Islamabad', 'Multan', 'Hyderabad', 'Rawalpindi', 'Lahore'];
document.write('<br /><br /> City List : ', city, '<br /><br />');
var icity = city.splice(2, 3);
var selectedcities = [];
selectedcities.push(icity);
document.write(' Selected Cities List : ', selectedcities, '<br /><br />');

// Q12
var arr = ['This', 'is', 'my', 'cat'];
document.write('Array : ', arr, '<br /><br />');
document.write('String : ');
for (i=0; i < arr.length; i++){
    document.write(arr[i], ' ');
}

document.write('<br /><br />');

// Q13
var devices = ["keyboard","mouse","printer","monitor"];
document.write('Devices : ',devices,'<br />');
for (i=0; i < devices.length; i++){
    document.write('Out : ', devices[i],'<br />');
}

document.write('<br /><br />');

// Q14
var devices = ["keyboard","mouse","printer","monitor"];
for (i = (devices.length-1); i >= 0; i--){
    document.write('Out : ', devices[i],'<br />');
}

// Q15
document.write('<br /><br />hone Manufactureres : <select name="phone"><option value="samsung">Samsung</option><option value="apple">Apple</option><option value="sony">Sony</option><option value="nokia">Nokia</option><option value="motorola">MotorolaSamsung</option></select>');

// Chapter 17-20
document.write('<h1>Chapter 17-20</h1>');

// Q1
var mult_arr = [[],[],[]];

// Q2
var arrmulti = [
    [0,1,2,3],[1,0,1,2],[2,1,0,1]
];
for (i=0; i < arrmulti.length; i++){
    document.write('<br />', arrmulti[i]);    
}

document.write('<br /><br />');

// Q3
var acount = 10;
for (i = 0+1; i <= acount; i++){
    document.write(i+'<br />');
}

// Q4
var table = +prompt('Enter a number to show its multiplication table ');
var tablelen = +prompt('Enter length multiplication table ');
document.write('</br>Multiplication Table of '+ table +' Length '+ tablelen +'</br>');
for (i = 1; i <= tablelen; i++) {
    var results = table * i
    document.write(table + ' x ' + i + ' = ' + results + '<br />');
}

// Q5
fruits = ['apple', 'banana', 'mango', 'orange','strawberry'];
for (i=0; i<fruits.length; i++){
    document.write('<br />', fruits[i]);
}
for (i=0; i<fruits.length; i++){
    document.write('<br />Elment at index ',i,' is ', fruits[i]);
}

document.write('<br /><br />');

// Q6
var counting = [];
for (i = 1; i <= 15; i++) {
    counting.push(i);
}
document.write('<br /> a) Counting : ' + counting + '<br />');

var rcounting = [];
for (i = 10; i > 0; i--) {
    rcounting.push(i);
}
document.write('<br /> b) Reverse Counting : ' + rcounting + '<br />');

var even = [];
for (i = 0; i <= 20; i++, i++) {
    even.push(i);
}
document.write('<br /> c) Even : ' + even + '<br />');

var odd = [];
for (i = 1; i <= 20; i++, i++) {
    odd.push(i);
}
document.write('<br /> d) Odd : ' + odd + '<br />');

var series = [];
for (i = 2; i <= 20; i++, i++) {
    series.push(i + 'k');
}
document.write('<br /> e) Series : ' + series + '<br />');

document.write('<br /><br />');

// Q7
var shop = ['cake', 'apple pie', 'cookie', 'chips', 'patties'];
var matchfound = 'no';
document.write(' Bakrey Items Available :  ', shop, '<br />');
var ushop = prompt('Enter Bakery Item for search in Shop Available or not');
for (i = 0; i < shop.length; i++) {
    if (ushop === shop[i]) {
        matchfound = 'yes';
        break;
    };
};
if (matchfound === 'no') {
    alert('Item Not Available in Shop');
    document.write('Item Not Available in Shop');
} else {
    alert(ushop, ' Available in Shop Thanks For Shopping');
    document.write(ushop, ' Available in Shop Thanks For Shopping');
};

document.write('<br /><br />');

// Q8
var a1 = [24, 53, 78, 91, 12];
var largest = 0;
for (i = 0; i < a1.length; i++) {
    if (a1[i] > largest) {
        largest = a1[i];
    };
}
document.write('Array Items : ',a1);
document.write('<br />The Largest Number is :  ', largest, '<br />');

document.write('<br /><br />');

// Q9
var a1 = [24, 53, 78, 91, 12];
var smallest = 0;
for (i = 0; i < a1.length; i++) {
    if (a1[i] < largest) {
        smallest = a1[i];
    };
}
document.write('Array Items : ',a1);
document.write('<br />The Smallest Number is :  ', smallest, '<br />');

document.write('<br /><br />');

// Q10
 for (i = 5; i <=100; i = i+5){
    document.write(  i + ", " )
}