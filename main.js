var reason=["Dad",
           "Mom",
           "Imran"
          ];
var image=["https://us.123rf.com/450wm/yupiramos/yupiramos1804/yupiramos180402977/98700094-father-with-son-characters-vector-illustration-design-.jpg?ver=6", 
"https://us.123rf.com/450wm/yupiramos/yupiramos1904/yupiramos190411820/123548246-young-mother-with-little-son-characters-vector-illustration-design.jpg?ver=6",
"https://w7.pngwing.com/pngs/665/604/png-transparent-baby-boss-boy-character-illustration-the-boss-baby-brother-dreamworks-animation-film-the-boss-baby-child-toddler-boy.png"];
var i=0;
function nextslide(){
  if(i<3){
     document.getElementById("r1").innerHTML=reason[i];
  document.getElementById("album").src=image[i];
  i++;
  }
 
}