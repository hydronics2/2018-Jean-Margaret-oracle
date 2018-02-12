//adapted from here: https://codepen.io/danielgroen/pen/VeRPOq
//and here: https://css-tricks.com/snippets/css/typewriter-effect/
//this one is also very nice: https://codepen.io/thiagoteles/pen/ogoxLw
//ad

document.addEventListener('DOMContentLoaded',function(event){
  // array with texts to type in typewriter
  var dataText = [
    "Your senses are correct.",
    "Allow yourself to be in your power.",
    "Listen first.",
    "The appropriate answer will reveal itself.",
    "Keep what's true in front of you.",
    "You are the source of your wisdom",
    "Start at the beginning",
    "Recognize the opportunity laid in front of you.",
    "Opening doors reveals possibilities",
    "Your inner voice whispers the truth.",
    "Speak your truth even if your voice shakes.    Emma Goldman",
    "You own everything that happens to you.     Anne Lamontt",
    "Introduce yourself to those you find around you.",
    "You are enough",
    "Comparison kills creativity",
    "Listen to the truth within your heart.",
    "Being nice isn't the same as being sincere.",
    "Know your humanity to be a warrior in life.",
    "Acknowledgement is the sweetest, easiest gift to a friend.",
    "Even those who wait still serve",
    "Your key is made of stone and starlight",
    "Bitterness does not bare fruit",
    "If you chase two rabbits you will catch none",
    "Fear is the mindkiller.       Frank Herbert",
    "Feel fear and do it anyway",
    "Who would we be without our pain?",
    "Tell your story. ",
    "The oak does not compare itself to the bamboo nor the bamboo to the oak.",
    "Today is an opportunity to begin another adventure.",
    "Through pain, love is medicine.",
    "Each soul carries a universe inside of it. Discover yours.",
    "Breathe is the truth of this moment.",
    "Where ever you go, there you are.       Buckaroo Banzai",
    "Dance with the one who brung you.",
    "There is no try, only do.",
    "Don't bite the hand that feeds you.",
    "Delay is increasingly expensive.",
    "Yes is the world",
    "Yes is easy, but no is more defining.",
    "Saying no to one thing is saying yes to another.",
    "Embrace failure.",
    "Don't comment, create; don't describe, evoke; don't refer, be.",
    "Be yourself, unless you're a jerk.",
    "Stop shoulding all over yourself.",
    "It is clear you have given too many fucks about that.",
    "Dance like no on is watching.",
    "The only thing to fear is fear itself..... and zombies.",
    "We should consider every day lost on which we have not danced at least once.",
    "Stop asking screens for advice.",
    "What other people think of you is none of your business.",
    "Before you embark on a journey of revenge, dig two graves.     Confuscious",
    "If you point your finger, three fingers point back.         Confuscious",
    "The person who has no imagination has no wings.     Muhammad Ali",
    "Feet, what do I need them for when I have wings to fly.    Frida Kahlo",
    "Nah, try again.",
    "Yes.",
    "No.",
    "Yeah, well, like, that is just your opinion, man.    The Big Lebaowski",
    "Dreams are often most profound when they seem the most crazy.",
    "Intent and outcome are hardly coincidence.",
    "Hear what people say, listen to what people do.      Jean Margaret",
    "I don't think you mean what you think it means.",
    "Be the whiskey in the room full of wine.",
    "We learn most from our pain.",
    "Raise your words, not your voice. It is rain that grows flowers, not thunder.    Rumi",
    "Yesterday I was clever so I wanted to change the world. Today I am wise so I am changing myself.     Rumi",
    "Your path is for you too to walk.",
    "Choose a path where cobblestones are easily put in front of you.",
    "They place doubts about yourself along the path, but you need only walk past them as if they are fallen leaves.   Vernon Howard"

    ];

document.onkeypress=function(e){
    console.log("key pressed");
    //addNewComment();
    //var audioUrl = "audio/cash_register.mp3";
    //var audio = new Audio(audioUrl);
    //audio.play();
    var randomCommentNumber = Math.floor(Math.random() * 69);
    console.log(randomCommentNumber);
    StartTextAnimation(randomCommentNumber);
  }

  // type one text in the typwriter
  // keeps calling itself until the text is finished
  function typeWriter(text, i, fnCallback) {
    // chekc if text isn't finished yet
    if (i < (text.length)) {
      // add next character to h1
     document.querySelector("h1").innerHTML = text.substring(0, i+1) +'<span aria-hidden="true"></span>';

      // wait for a while and call this function again for next character
      setTimeout(function() {
        typeWriter(text, i + 1, fnCallback)
      }, 100);
    }
    // text finished, call callback if there is a callback function
    else if (typeof fnCallback == 'function') {
      // call callback after timeout
      setTimeout(fnCallback, 700);
    }
  }

  // start a typewriter animation for a text in the dataText array
   function StartTextAnimation(i) {

          typeWriter(dataText[i], 0, function(){
            // after callback (and whole text has been animated), start next text
            //StartTextAnimation(i + 1);
          });

     // if (typeof dataText[i] == 'undefined'){
     //    setTimeout(function() {
     //      StartTextAnimation(0);
     //    }, 2000);
     // }
     // check if dataText[i] exists
    // if (i < dataText[i].length) {
    //   // text exists! start typewriter animation
    //  typeWriter(dataText[i], 0, function(){
    //    // after callback (and whole text has been animated), start next text
    //    //StartTextAnimation(i + 1);
    //  });
    // }
  }
  // start the text animation
  //StartTextAnimation(0);
});
