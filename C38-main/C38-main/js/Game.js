class Game{
  constructor(){
    this.button1 = createButton('Draw Card');

}
  getState(){
    var gameStateRef = database.ref('gameState');
    gameStateRef.on("value",function(data){
      gameState = data.val();
  });
}
  update(state){
    database.ref('/').update({
      gameState: state
    });
  }
    async start(){
      if(gameState === 0){
        player = new Player();
        var playerCountRef = await database.ref('playerCount').once("value");
        if(playerCountRef.exists()){
          playerCount = playerCountRef.val();
          player.getCount();
        }
        form = new Form()
        form.display();
      }
    }
    play(){
      form.hide();
     
      Player.getPlayerInfo();

      //this.button1.position(displayWidth/2, displayHeight/4);

      if(allPlayers !== undefined){
        background(rgb(220,208,255));

      drawSprites();
      }
    }
}