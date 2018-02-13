// $(document).ready(function() {
//     var chosenHero
//     var chosenEnemy
//     var isHeroChosen
//     var isEnemyChosen
//     var isHeroAlive
//     var isEnemyAlive
    
//     function initGame () {
//         isHeroChosen = false
//         isEnemyChosen = false
//         //generate characters
//     for ( var i = 0 ; i < charArr.length ; i++) {
//         var num = Math.floor(12 / charArr.length)
//            var charThing = $("<div class ='myChar col-md-"+num+"' value = '"+i+"'><img src='"+charArr[i].image+"' style='width:200px; height:200999870987890px'/></div>")
//         $("#characters").append(charThing)
//     } 
//     }
    
    
//     $(document).on("click", ".myChar", function() {
//     if (isHeroChosen === false) {
//     chosenHero = charArr[$(this).attr("value")]
//     console.log(chosenHero)
//     $(this).addClass("fader")
//     isHeroChosen = true
//     myHeroThing = $("<div id ='"+chosenHero.name+"'><img src ='"+chosenHero.image+"' style = 'width: 300px; height: 300px'/><p>"+chosenHero.name+"</p><h6>HP</h6><p id = 'heroHP'>"+chosenHero.hp+"</p></div>")
//     $("#myHero").html(myHeroThing)
//     }
    
    
//     else if(isEnemyChosen === false && chosenHero.name != charArr[$(this).attr("value")].name) {
//         chosenEnemy = charArr[$(this).attr("value")]
//         console.log(isEnemyChosen)
//         $(this).addClass("fader")
//         isEnemyChosen = true
//         myEnemyThing = $("<div id ='"+chosenEnemy.name+"'><img src ='"+chosenEnemy.image+"' style = 'width: 300px; height: 300px'/><p>"+chosenEnemy.name+"</p><h6>HP</h6><p id = 'enemyHP'>"+chosenEnemy.hp+"</p></div>")
//     $("#myEnemy").html(myEnemyThing)
//     }
//     })
//     $("#attackBTN").on("click", function() {
//         var num1 = Math.floor(Math.random() *20)
//         var num2 = Math.floor(Math.random() *20)
//         chosenEnemy.hp -=num1
//         $("#enemyHP").text(chosenEnemy.hp)
//         $(".myBattleRow").append("<p>" + chosenHero.name + " attacked " + chosenEnemy.name + " for " + num1 + " points!</p>")
//         chosenHero.hp -= num2
//         $("#heroHP").text(chosenHero.hp)
//         $(".myBattleRow").append("<p>" + chosenEnemy.name + " attacked " + chosenHero.name + " for " + num2 + " points!</p>")
//         if (chosenEnemy.hp <= 0) {
//             $(".myBattleRow").html("<h1>YOU WIN!</h1>")
//         }
    
     
//     })
    
//     // name, hp, strength, image
//     var charArr = [
//     {
//         name : "Obi Wan",
//         hp: 50,
//         strength: 50,
//         image: "assets/images/obi2.jpeg"
//     },
//     {
//         name : "Luke",
//         hp: 50,
//         strength: 10,
//         image: "assets/images/luke.jpeg"
//     },
//     {
//         name : "Maul",
//         hp: 50,
//         strength: 50,
//         image: "assets/images/maul.jpeg"
//     },
//     {
//         name : "vader",
//         hp: 50,
//         strength: 50,
//         image: "assets/images/vader.jpeg"
//     },
//     {
//         name : "hans solo",
//         hp: 30,
//         strength: 20,
//         image: "assets/images/hans.jpeg"
//     },
//     {
//         name : "leah",
//         hp: 25,
//         strength: 39,
//         image: "assets/images/leia.jpeg"
//     },
//     ]
//     initGame ()
//     })