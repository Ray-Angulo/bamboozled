class Form {

  constructor() {
    this.input = createInput("Name");
    this.button = createButton('Play');
    this.greeting = createElement('h2');
    this.title = createElement('h2');
    this.theme = createElement('h2')
    this.question = createElement('h2')
    this.timer = createElement('h2')
  }
  hide(){
    this.greeting.hide();
    this.button.hide();
    this.input.hide();
    this.title.hide();
    this.button1.hide();
    this.theme.hide();
    this.timer.hide();
    this.question.hide();
  }

  display(){
    this.title.html("Bamboozled!");
    this.title.position(displayWidth/2-50, 0);

    this.input.position(displayWidth/2-40, displayHeight/2-80);
    this.button.position(displayWidth/2+30, displayHeight/2);

    this.button.mousePressed(()=>{
      this.input.hide();
      this.button.hide();
      player.name = this.input.value();
      playerCount+=1;
      player.index = playerCount;
      player.update();
      player.updateCount(playerCount);
      this.greeting.html(player.name)
      this.greeting.position(displayWidth/12-100, displayHeight/12-100);
    });
      //this.button1.mousePressed(()=>{
    //});

  }
}
