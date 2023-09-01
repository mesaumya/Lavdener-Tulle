/* .js files add interaction to your website */
// Javascript for button added by Sukanya. Please don't change anything
var factList = [
  "In South Asia, the Hijra community has a long history of gender variance and is considered one of the oldest recorded transgender communities in the world. Hijras are neither male nor female but are a third gender. They have been a part of Indian society for thousands of years and have even been mentioned in ancient Hindu texts like the Kama Sutra.",
  "In 2014, Taiwan’s LGBT community played a significant role in the Sunflower Movement, a student-led protest against a proposed trade agreement with China. The movement was successful in blocking the agreement and helped to bring attention to LGBT rights in Taiwan.",
  "Hau Dong is a religious ceremony practiced in Vietnam that involves spirit mediums who are often gay or transgender. During the ceremony, the mediums communicate with the spirit world and are believed to have special powers that can heal the sick and bring good luck.",
  "Waria is a term used in Indonesia to describe transgender women who are accepted as a third gender. They are an important part of Indonesian culture and are often seen as performers and entertainers. One of the most famous waria is Dorce Gamalama, a TV personality who has become a household name in Indonesia.."
  ];
  
// var fact = document.getElementById("fact");
var fact = $('.fact');
// var myButton = document.getElementById("myButton");
var myButton = $('.myButton')
var count = 0;

// myButton.addEventListener("click", displayFact);
myButton.on("click", displayFact)

function displayFact () {
  // fact.css("background-color", "lavender");
  fact.text(factList[count]);
  fact.css("display", "block");
  
 // fact.innerHTML = factList[count];
  count++;
  if (count == factList.length) {
    count = 0;
  }
  
}
//end of about button



var randomMessageButton = document.querySelector('#random-message-button');
var randomMessageDisplay = document.querySelector('#random-message-display');

        var messages = [
            "From a young age I was always experimenting with identity, but only at home – never outdoors. I used to make costumes out of anything I could find, and then in my late teens I felt a bit freer to experiment. My journey has been shaped and built by my own experiences. I feel as people we are not only one thing, there are many facets that help to build our unique experiences, and I definitely think that my own experiences have influenced and helped to shape the Saul Nash brand. - Saul Nash, Fashion Designer and LGBTQ+ icon",
            "Exploring my sexuality has been a huge part of my style. I’m a lesbian and the lesbian identity of ‘high femme’ was really important and helpful for me. The term ‘femme’ was this idea of being feminine outside of the male gaze and outside of traditional femininity, and that’s what I wanted. As I have gotten older, I’m also able to come into myself as a woman, and a queer woman and artist. And I’ve really realised that I can look however I want. My appearance is nobody’s business. - Hana Holquist, Fashion Designer",
            "As far back as I can remember I’ve always been aware of the fact that the self you present to the world is constructed, and could be deconstructed through exploring identity expression. I think my own personal journey moving through this world has governed everything that’s gone into my work and aesthetic. After years of searching, what I’ve discovered is that the self is not found, but created; that you are everything and nothing all at once and that this search only illuminates not a concrete self, but an ever-changing one. - Jawara Alleyne, Fashion Designer",
        ];
 randomMessageButton.addEventListener('click', function() {
   var randomIndex = Math.floor(Math.random() * messages.length);
   var randomMessage = messages[randomIndex];
   randomMessageDisplay.textContent = randomMessage;
        });

