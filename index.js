   
     var magicPhraseDisplay = document.querySelector("#magic-phrase");


   export function makeSomeMagic(){
     var patient = confirm("Are you an impatient person?");
     var sports = confirm("Do you like or practice any sports?");
     var puzzles = confirm("Do you like puzzles?");
     var social = confirm("Do you have social skills?");
     var positive = confirm("Are you a positive person?");
     var knows = confirm("Do you know to use a computer?");
     var lector = confirm("Are you an active lector?");
     var artist = confirm("Do you like drawing?");
     var maths = confirm("Are you a mathematical person?");
     var details = confirm("Do you usually pay attention to details?");


     var count = 0;

    if(patient){
      count--;
    }
    if(sports){
     count++;
   }
   if(puzzles){
     count++;
   }
   if(social){
     count++;
   }
   if(positive){
     count++;
   }
   if(knows){
     count++;
   }
   if(lector){
     count++;
   }
   if(artist){
     count++;
   }
   if(maths){
     count++;
   }
   if(details){
     count++;
   }

  


     if (count === 10){
       return "Keep working! Your future brights just like the stars!✨¯\_(ツ)_/¯";
     }else if (count === 9){
      return "You can do it better c´mon! Keep going! You could soon achieve excellence ʕ•́ᴥ•̀ʔっ";
    }else if (count === 8){
      return "C´mon! You can  do it better! Keep going! But you are going in the right direction(っ＾▿＾)";
    }else if (count === 7){
      return "You are doing well but you can do it much better! Your future is soso, keep going!≧◉◡◉≦";
    }else if (count === 6){
      return "You can do it much, much, much better. You have to keep going but you are just beginning to grew";
    }else{
      return "Dude, c´mon you know you can do it a lot much better than this!! Just like one very wise ans successful man said: \" my back hurts in order to let my wings sprout. \" So, let your wings sprout and fill your future with success!!ᕙ(`▿´)ᕗ ";
    }

   }