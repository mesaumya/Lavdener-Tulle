/* .js files add interaction to your website */
// Javascript for button added by Sukanya. Please don't change anything


var t = $('.who-we-are-text');
var btn = $('.bttn1');

btn.on('click', displayText);

function displayText() {
  t.text("We are four Kode with Klossy scholars (2023), who want to make a difference in this world by “ADVOCATING FOR FREEDOM OF EXPRESSION” for the LGBTQ+ community in the fashion industry, who are also Asians.Through are website we are trying to show the Asian LGBTQ+ representation in the fashion industry.");
}

var t = $('.who-we-are-text');
var btn = $('.bttn2');

btn.on('click', displayText2);

function displayText2() {
  t.text("Our mission is empowering Asian youths to dress freely and with confidence. We believe that everyone deserves the freedom and opportunity to express themselves through fashion, regardless of their gender or sexual orientation. This commitment reflects through our name: “Lavender” is the color symbolic of LGBTQ+ resistance and empowerment, and “Tulle” represents that fashion is the main source of inspiration for our project.");}

var t = $('.who-we-are-text');
var btn = $('.bttn3');

btn.on('click', displayText3);

function displayText3() {
  t.text("Our website’s focus is how the worlds of fashion and queer culture have been intertwined, in the asian community. We are hoping to reach out to the queer Generation Z, specifically the ones who are a part of the asian community and a part of the fashion industry or are hoping to go in it in future. Also, the people who are interested in learning about the people who are a part of the LGBTQ+ community and are in the fashion industry while being an asian, challenges/struggles the LGBTQ+ community members in the fashion industry face in the Asian community, also how they are rising while breaking the gender and conservative norms set by the countries. Making their voices are heard! ");
}

$(document).ready(function(){
$("bttn1").click(function(){
  $("img").append("<img src='https://i.pinimg.com/236x/83/7b/bf/837bbfd28575d1cad0408096ff6f7e4f.jpg' />");
});