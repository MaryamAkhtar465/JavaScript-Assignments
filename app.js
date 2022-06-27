// Chapter # 1
// Alerts

// Q1)
// alert("Assalam u alaikum")

// Q2)
// alert("Error! Please enter a valid password. ")

//Q3)
// alert("Welcome to JS Land... \n Happy Coding!")

// Q4)
// alert("Welcome to Js land...");
// alert("Happy Coding ! " + "\nPrevent this page from creating addtional dialouges ");

// Q5)
// alert("Hello...I can run JS through my web browser's console");

// Chapter # 2
//VARIABLES FOR STRINGS

// Q1)
//var username;

//Q2)
// var myName ="Maryam Akhtar";

// Q3)
// var message;
// message = "Hello World";
// alert(message);

//Q4)
// var studentName = "Maryam Akhtar";
// var studentAge ="15";
// var studentCertification = "Certified Mobile Application Development";
// alert(studentName);
// alert(studentAge + " years old");
// alert(studentCertification);

//Q5)
// var order = "PIZZA \n PIZZ \n PIZ \n PI \n P"
// alert(order);

//Q6)
// var email; 
// email = "maryamakhtar465@gmail.com";
// alert("My email address is " +email);

//Q7)
// var book = "A smarter \n way to learn JavaScript";
// alert("I am trying to learn from the book " +book);

//Q8)
// document.write("<h1>Yah! I can write HTML content through JavaScript</h1>");

//Q9)
// var pattern = "“▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬”";
// alert(pattern);
// document.write(pattern);

// Chapter # 3
//VARIABLES FOR NUMBERS

//Q1)
// var age;
// age = 22;
// alert("I am " + age + " years old");

//Q2)
// var noOfVisits = 14;
// alert("You have visited this site " + noOfVisits + " times");

//Q3)
// var birthYear = 1999;
// document.write("My birth year " + birthYear +  "<br/> Data type of my declared variable is number");

//Q4)
// var visitor_name = ("John Doe").bold();
// var product_title = ("T-Shirt").bold();
// var product_qty = ("5").bold();
// document.write(visitor_name + " ordered " + product_qty + " " + product_title + "(s) on XYZ Clothing store");

// Chapter # 4 
//VARIABLE NAMES: LEGAL & ILLEGAL

//Q1)
//var a, b, c;

//Q2)
//var a, b, c, d, e; //legal
//var 1a, ? b, !c, "d, -e;  //Illegal 

//Q3)
// var heading = ("Rules for naming JS variables").bold();
// document.write(heading);
// document.write("<br/>Variable names can only contain letters, numbers, $ and _. For example $my_1stVariable");
// document.write("<br/>Variables must begin with a letter, $, _. For example $name, _name or name");
// document.write("<br/>Variable names are case sensitive");
// document.write("<br/>Variables names should not be JS keywords");

// Chapter # 5 
//MATH EXPRESSIONS

//Q1)
// var num1, num2, sum;
// num1 = prompt("Enter First Number");
// num2 = prompt("Enter Second Number");
// sum = num1 + num2;
// document.write("Sum of " + num1 + " and " + num2 + " is " + sum);

//Q2) Subtraction
// var num1, num2, sub;
// num1 = prompt("Enter First Number");
// num2 = prompt("Enter Second Number");
// sub = num1 - num2;
// document.write("Sub of " + num1 + " and " + num2 + " is " + sub);

//Multiplication
// var num1, num2, mul;
// num1 = prompt("Enter First Number");
// num2 = prompt("Enter Second Number");
// mul = num1 * num2;
// document.write("Mul of " + num1 + " and " + num2 + " is " + mul);

//Division
// var num1, num2, div;
// num1 = prompt("Enter First Number");
// num2 = prompt("Enter Second Number");
// div = num1 / num2;
// document.write("Div of " + num1 + " and " + num2 + " is " + div);

//Modulus
// var num1, num2, mod;
// num1 = prompt("Enter First Number");
// num2 = prompt("Enter Second Number");
// mod = num1 % num2;
// document.write("Mod of " + num1 + " and " + num2 + " is " + mod);

//Q3)
// var myNum;
// document.write("Value after variable declaration is " + myNum + "<br/>");
// myNum = 8;
// document.write("Initial value: " + myNum + "<br/>");
// ++myNum;
// document.write("Value after increament is " + myNum + "<br/>");
// myNum = myNum + 7;
// document.write("Value after addition is " + myNum + "<br/>");
// --myNum;
// document.write("Value after decrement is " + myNum + "<br/>");
// var remainder = myNum % 3;
// document.write("The remainder is: " + remainder + "<br/>");

//Q4)
// var ticketPrice = 600;
// var ticketQty = 5;
// var cost = ticketPrice * ticketQty;
// document.write("Total cost to buy 5 tickets to a movie is " + cost + "PKR" + "<br/>");

//Q5)
//First Method
// document.write("Table of 4 " + "<br/>");
// table = 4;
// for (let i = 1; i <= 10; i++) {
//     var answer = table*i;
//     document.write(table+"x"+i+"="+answer+"<br>");
// }

//Second Method
// var tableNumber = +prompt("Enter Number of table you want to print");
// document.write(" <b> Table of "+ tableNumber + " </b> <br> <br>");
// for(let i = 1 ; i <= 10 ;i ++){
//     document.write( tableNumber + " x " + i + "   = "+ tableNumber*i +" <br>")
// }

//Q6)
// var celsiusTemperature = 25;
// var convertFerhenheit = (celsiusTemperature*9/5)+32;
// document.write(celsiusTemperature+"<sup>o</sup>C is "+convertFerhenheit+"<sup>o</sup>F<br>");
// var fahrenheitTemperature = 70;
// var convertCelcius = (fahrenheitTemperature - 32)*5/9;
// document.write(fahrenheitTemperature+"<sup>o</sup>F is "+convertCelcius+"<sup>o</sup>C");

//Q7)
// var priceItem1 = 650;
// var priceItem2 = 100;
// var qtyItem1 = 3;
// var qtyItem2 = 7;
// var shippingCharges = 100;
// var totalCost = (priceItem1*qtyItem1)+(priceItem2*qtyItem2)+shippingCharges;
// document.write("Price of item 1 is "+ priceItem1 + "<br/>");
// document.write("Quantity of item 1 is "+ qtyItem1 + "<br/>");
// document.write("Price of item 2 is "+ priceItem2 + "<br/>");
// document.write("Quantity of item 2 is "+ qtyItem2 + "<br/>");
// document.write("Shipping Charges "+ shippingCharges + "<br/><br/>");
// document.write("Total cost of your order is "+ totalCost);

//Q8)
// document.write("<h1>Mark Sheet</h1>");
// var totalMarks = 980;
// var marksObtained = 804;
// document.write("Total marks: "+ totalMarks + "<br/>");
// document.write("Marks obtained: "+ marksObtained + "<br/>");
// document.write("Percentage: "+ (marksObtained / totalMarks * 100) + "%");

//Q9)
// document.write("<h1>Currency in PKR</h1>"+"<br/>");
// var dollar = 10, saudiRiyals = 25;
// document.write("Total Currency in PKR: " + ((dollar * 104.80) + (saudiRiyals * 28)));

//Q10
// var number = 5;
// document.write(((number+5)*10)/2);

//Q11
// document.write("<h1>Age Calculator</h1>");
// var currentYear = 2022;
// var birthYear = 1999;
// document.write("Current Year: " + currentYear + "<br/>");
// document.write("Birth Year: " + birthYear + "<br/>");
// document.write("Your Age is : " + (currentYear - birthYear) + "<br/>");

//Q12)
// document.write("<h1>The Geometrizer</h1>");
// var radius = 20;
// document.write("Radius of a circle: " + radius +"<br/>");
// document.write("The circumference is: " + 2*(Math.PI*radius)  +"<br/>");
// document.write("The area is: " + (Math.PI*radius*radius));

//Q13)
// document.write("<br>" + "<br>" + "<h1>The Lifetime Supply Calculator</h1>" + "<br>")
// var snack = "Chocolate Chip";
// var age = 15;
// var maxage = 65;
// var estAmount = 3;
// document.write("<br>" + "Favourite Snack: " + snack);
// document.write("<br>" + "Current age: " + age);
// document.write("<br>" + "Estimated Maximum Age: " + maxage);
// document.write("<br>" + "Amount of snack per day: " + estAmount);
// document.write("<br>" + "You will need " + ((maxage - age) * estAmount) + " " + snack + " to last you until the ripe old age of " + maxage);














































