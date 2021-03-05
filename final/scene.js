

// =============================================================
// =                         BEGIN SCENES                      =
// =============================================================

function help()
{
  this.setup = function() {

  }
  this.draw = function()
  {
      background(helpscreen);
}

this.mousePressed = function()
{
    this.sceneManager.showNextScene();
}
}




///////////////////////////////////////////////////


function part1()
{
  this.setup = function() {
  }

  this.enter = function() {
    clickhome = new Clickable();
    clickhome.locate(width/2, height/2 + 260);
    clickhome.width = 60;
    clickhome.height = 60;
    clickhome.onPress = function()
     {
        mgr.showScene( part2 );
     }

  click = new Clickable();
  click.locate(10,10 );
  click.color = "#fff41c";       //Background color of the clickable (hex number as a string)
click.cornerRadius = 10;       //Corner radius of the clickable (float)
click.strokeWeight = 2;        //Stroke width of the clickable (float)
click.stroke = "#fff41c";      //Border color of the clickable (hex number as a string)       //Text of the clickable (string)
click.textColor = "#000000";
click.text = "Press '1' for help";     //Color of the text (hex number as a string)
click.textSize = 20;           //Size of the text (integer)
  click.width = 200;
  click.height = 60;
}


  this.draw = function()
  {
      background(lock);


      push();
      translate(width/2 - 60, height/2 - 150); //w = 80
      scale(6.0);
      fill(0);
      let h = hour();
      let m = minute();
      fill('white');
      text(h + ":"+ m, 0,0);
      pop();

      push();
      translate(width/2 - 140 , height/2 - 80);
      scale(4.0);
      fill('white');
      text("Friday, May 28",0,0,);
      pop();

      clickhome.draw();
      click.draw();
      image(app1, width/2 -10, height/2 + 250, 75,75);
      image(app2, width/2 + 230, height/2 - 236, 30,88);
  }

}




///////////////////////////////////////////////////


function part2()
{
  this.setup = function() {
  }

  this.enter = function() {

    clicklock = new Clickable();
    clicklock.locate(width/2 + 232, height/2 - 233);
    clicklock.width = 25;
    clicklock.height = 80;
    clicklock.onPress = function()
     {
        mgr.showScene( part1 );
     }

     clickgoogle = new Clickable();
     clickgoogle.locate(width/2 - 140, height/2 - 120);
     clickgoogle.width = 80;
     clickgoogle.height = 70;
     clickgoogle.onPress = function()
      {
         mgr.showScene( part3 );
      }

    clickcal = new Clickable();
    clickcal.locate(width/2 - 140, height/2 - 245);
    clickcal.width = 80;
    clickcal.height = 70;
    clickcal.onPress = function()
     {
        mgr.showScene( part4 );
     }

    clickcam = new Clickable();
    clickcam.locate(width/2 - 15, height/2 - 245);
    clickcam.width = 80;
    clickcam.height = 70;
    clickcam.onPress = function()
    {
       mgr.showScene( part5 );
      }

      clickclock = new Clickable();
      clickclock.locate(width/2 + 110, height/2 - 245);
      clickclock.width = 80;
      clickclock.height = 70;
      clickclock.onPress = function()
       {
          mgr.showScene( part6 );
       }
       clickinsta = new Clickable();
       clickinsta.locate(width/2 - 15, height/2 - 120);
       clickinsta.width = 80;
       clickinsta.height = 70;
       clickinsta.onPress = function()
        {
           mgr.showScene( part7 );
        }
      clickmusic = new Clickable();
      clickmusic.locate(width/2 + 110, height/2 - 120);
      clickmusic.width = 80;
      clickmusic.height = 70;
      clickmusic.onPress = function()
       {
          myMusic.stop();
          song.loop();
          mgr.showScene( part8 );
       }

      clickphone = new Clickable();
      clickphone.locate(width/2 - 140, height/2 + 5);
      clickphone.width = 80;
      clickphone.height = 70;
      clickphone.onPress = function()
      {
         mgr.showScene( part9 );
        }

        clicktwit = new Clickable();
        clicktwit.locate(width/2 - 15, height/2 + 5);
        clicktwit.width = 80;
        clicktwit.height = 70;
        clicktwit.onPress = function()
         {
            mgr.showScene( part10 );
         }

          clicktext = new Clickable();
          clicktext.locate(width/2 - 15, height/2 + 130);
          clicktext.width = 80;
          clicktext.height = 70;
          clicktext.onPress = function()
           {
              mgr.showScene( scene1 );
           }
           clickgal = new Clickable();
           clickgal.locate(width/2 - 140, height/2 + 130);
           clickgal.width = 80;
           clickgal.height = 70;
           clickgal.onPress = function()
            {
               mgr.showScene( part12 );
            }

            clicknote = new Clickable();
            clicknote.locate(width/2 + 110, height/2 + 5);
            clicknote.width = 80;
            clicknote.height = 70;
            clicknote.onPress = function()
             {
                mgr.showScene( part11 );
             }
  }

  this.draw = function()
  {
      background(home);

      push();
      translate(width/2 - 160, height/2 - 290);
      scale(1.5);
      fill(0);
      let h = hour();
      let m = minute();
      fill('white');
      text(h + ":"+ m, 0,0);
      pop();

      clickhome.draw();
      clicklock.draw();
      clickcal.draw();
      clickcam.draw();
      clickclock.draw();
      clickgoogle.draw();
      clickinsta.draw();
      clickmusic.draw();
      clickphone.draw();
      clicktwit.draw();
      clicktext.draw();
      clickgal.draw();
      clicknote.draw();

      image(app1, width/2 -10, height/2 + 250, 75,75);
      image(app2, width/2 + 230, height/2 - 236, 30,88);
      image(app3, width/2 - 150, height/2 - 250, 100,100);
      image(app4, width/2 - 25, height/2 - 250, 100,100);
      image(app5, width/2 + 100, height/2 - 250, 100,100);
      image(app6, width/2 - 150, height/2 - 125, 100,100);
      image(app7, width/2 - 25, height/2 - 125, 100,100);
      image(app8, width/2 + 100, height/2 - 125, 100,100);
      image(app9, width/2 - 150, height/2 + 0, 100,100);
      image(app10, width/2 - 25, height/2 + 0, 100,100);
      image(app11, width/2 + 100, height/2 + 0, 100,100);
      image(app12, width/2 - 150, height/2 + 125, 100,100);
      image(app13, width/2 - 25, height/2 + 125, 100,100);
  }
}


// When defining scenes, you can also
// put the setup, draw, etc. methods on prototype


///////////////////////////////////////////////////////////


function part3( )
{
  var textX;
  var textY;


  // enter() will be executed each time the SceneManager switches
  // to this animation
  // Note: Animation1() doesn't have setup() or draw()

  this.setup = function() {
    google.position.x++;
  }

  this.enter = function()
  {
      clicklock = new Clickable();
      clicklock.locate(width/2 + 232, height/2 - 233);
      clicklock.width = 25;
      clicklock.height = 80;
      clicklock.onPress = function()
       {
          mgr.showScene( part1 );
       }

       clickhome = new Clickable();
       clickhome.locate(width/2, height/2 + 260);
       clickhome.width = 60;
       clickhome.height = 60;
       clickhome.onPress = function()
        {
           mgr.showScene( part2 );
        }

    google.changeAnimation("on");
    google.position.x = width/2 + 577 ;
    google.position.y = height/2 + 427;
  }
    this.draw = function()
    {
        background(home);

        push();
        scale(0.61,0.5);
        drawSprites();
        pop();


                push();
                translate(width/2 - 160, height/2 - 290);
                scale(1.5);
                fill(0);
                let h = hour();
                let m = minute();
                fill('white');
                text(h + ":"+ m, 0,0);
                pop();

  clicklock.draw();
  clickhome.draw();
                image(app1, width/2 -10, height/2 + 260, 75,75);
                image(app2, width/2 + 230, height/2 - 236, 30,88);
    }
}


///////////////////////////////////////////////////



function part4( )
{
  this.setup = function() {
  }

  this.enter = function()
  {
      clicklock = new Clickable();
      clicklock.locate(width/2 + 232, height/2 - 233);
      clicklock.width = 25;
      clicklock.height = 80;
      clicklock.onPress = function()
       {
          mgr.showScene( part1 );
       }

       clickhome = new Clickable();
       clickhome.locate(width/2, height/2 + 260);
       clickhome.width = 60;
       clickhome.height = 60;
       clickhome.onPress = function()
        {
           mgr.showScene( part2 );
        }
}

    this.draw = function()
    {
        background(calender);

        push();
        translate(width/2 - 160, height/2 - 290);
        scale(1.5);
        fill(0);
        let h = hour();
        let m = minute();
        fill('white');
        text(h + ":"+ m, 0,0);
        pop();
        clicklock.draw();
        clickhome.draw();
        image(app1, width/2 -10, height/2 + 250, 75,75);
        image(app2, width/2 + 230, height/2 - 236, 30,88);
    }
}


///////////////////////////////////////////////////

function part5( )
{
  this.setup = function() {
  }

  this.enter = function()
  {
      clicklock = new Clickable();
      clicklock.locate(width/2 + 232, height/2 - 233);
      clicklock.width = 25;
      clicklock.height = 80;
      clicklock.onPress = function()
       {
          mgr.showScene( part1 );
       }

       clickhome = new Clickable();
       clickhome.locate(width/2, height/2 + 260);
       clickhome.width = 60;
       clickhome.height = 60;
       clickhome.onPress = function()
        {
           mgr.showScene( part2 );
        }
  }

    this.draw = function()
    {
        background(camera);

        push();
        translate(width/2 - 160, height/2 - 290);
        scale(1.5);
        fill(0);
        let h = hour();
        let m = minute();
        fill('white');
        text(h + ":"+ m, 0,0);
        pop();
        clicklock.draw();
        clickhome.draw();
        image(app1, width/2 -10, height/2 + 250, 75,75);
        image(app2, width/2 + 230, height/2 - 236, 30,88);
    }
}


///////////////////////////////////////////////////

function part6( )
{
  this.setup = function() {
  }

  this.enter = function()
  {
      clicklock = new Clickable();
      clicklock.locate(width/2 + 232, height/2 - 233);
      clicklock.width = 25;
      clicklock.height = 80;
      clicklock.onPress = function()
       {
          mgr.showScene( part1 );
       }

       clickhome = new Clickable();
       clickhome.locate(width/2, height/2 + 260);
       clickhome.width = 60;
       clickhome.height = 60;
       clickhome.onPress = function()
        {
           mgr.showScene( part2 );
        }
  }

    this.draw = function()
    {
        background(clock);

        push();
        translate(width/2 - 160, height/2 - 290);
        scale(1.5);
        fill(0);
        let h = hour();
        let m = minute();
        fill('white');
        text(h + ":"+ m, 0,0);
        pop();
        clicklock.draw();
        clickhome.draw();
        image(app1, width/2 -10, height/2 + 250, 75,75);
        image(app2, width/2 + 230, height/2 - 236, 30,88);
    }
}


///////////////////////////////////////////////////

function part7( )
{
  this.setup = function() {
  }

  this.enter = function()
  {
      clicklock = new Clickable();
      clicklock.locate(width/2 + 232, height/2 - 233);
      clicklock.width = 25;
      clicklock.height = 80;
      clicklock.onPress = function()
       {
          mgr.showScene( part1 );
       }

       clickhome = new Clickable();
       clickhome.locate(width/2, height/2 + 260);
       clickhome.width = 60;
       clickhome.height = 60;
       clickhome.onPress = function()
        {
           mgr.showScene( part2 );
        }
  }

    this.draw = function()
    {
        background(insta);

        push();
        translate(width/2 - 160, height/2 - 290);
        scale(1.5);
        fill(0);
        let h = hour();
        let m = minute();
        fill('white');
        text(h + ":"+ m, 0,0);
        pop();
        clicklock.draw();
        clickhome.draw();
        image(app1, width/2 -10, height/2 + 250, 75,75);
        image(app2, width/2 + 230, height/2 - 236, 30,88);
    }
}


///////////////////////////////////////////////////

function part8( )
{
  this.setup = function() {

  }

  this.enter = function()
  {
      clicklock = new Clickable();
      clicklock.locate(width/2 + 232, height/2 - 233);
      clicklock.width = 25;
      clicklock.height = 80;
      clicklock.onPress = function()
       {
          song.stop();
           myMusic.loop();
          mgr.showScene( part1 );
       }

       clickhome = new Clickable();
       clickhome.locate(width/2, height/2 + 260);
       clickhome.width = 60;
       clickhome.height = 60;
       clickhome.onPress = function()
        {
          song.stop();
            myMusic.loop();
           mgr.showScene( part2 );
        }
  }

    this.draw = function()
    {
        background(music);

        push();
        translate(width/2 - 160, height/2 - 290);
        scale(1.5);
        fill(0);
        let h = hour();
        let m = minute();
        fill('white');
        text(h + ":"+ m, 0,0);
        pop();
        clicklock.draw();
        clickhome.draw();
        image(app1, width/2 -10, height/2 + 250, 75,75);
        image(app2, width/2 + 230, height/2 - 236, 30,88);
    }
}


///////////////////////////////////////////////////

function part9( )
{
  this.setup = function() {
  }

  this.enter = function()
  {
      clicklock = new Clickable();
      clicklock.locate(width/2 + 232, height/2 - 233);
      clicklock.width = 25;
      clicklock.height = 80;
      clicklock.onPress = function()
       {
          mgr.showScene( part1 );
       }

       clickhome = new Clickable();
       clickhome.locate(width/2, height/2 + 260);
       clickhome.width = 60;
       clickhome.height = 60;
       clickhome.onPress = function()
        {
           mgr.showScene( part2 );
        }
  }

    this.draw = function()
    {
        background(phone);

        push();
        translate(width/2 - 160, height/2 - 290);
        scale(1.5);
        fill(0);
        let h = hour();
        let m = minute();
        fill('white');
        text(h + ":"+ m, 0,0);
        pop();
        clicklock.draw();
        clickhome.draw();
        image(app1, width/2 -10, height/2 + 250, 75,75);
        image(app2, width/2 + 230, height/2 - 236, 30,88);
    }
}


///////////////////////////////////////////////////

function part10( )
{
  this.setup = function() {
  }

  this.enter = function()
  {
      clicklock = new Clickable();
      clicklock.locate(width/2 + 232, height/2 - 233);
      clicklock.width = 25;
      clicklock.height = 80;
      clicklock.onPress = function()
       {
          mgr.showScene( part1 );
       }

       clickhome = new Clickable();
       clickhome.locate(width/2, height/2 + 260);
       clickhome.width = 60;
       clickhome.height = 60;
       clickhome.onPress = function()
        {
           mgr.showScene( part2 );
        }
  }

    this.draw = function()
    {
        background(twit);

        push();
        translate(width/2 - 160, height/2 - 290);
        scale(1.5);
        fill(0);
        let h = hour();
        let m = minute();
        fill('white');
        text(h + ":"+ m, 0,0);
        pop();
        clicklock.draw();
        clickhome.draw();
        image(app1, width/2 -10, height/2 + 250, 75,75);
        image(app2, width/2 + 230, height/2 - 236, 30,88);
    }
}
///////////////////////////////////////////////////

function part11( )
{
  this.setup = function() {
  }

  this.enter = function()
  {
      clicklock = new Clickable();
      clicklock.locate(width/2 + 232, height/2 - 233);
      clicklock.width = 25;
      clicklock.height = 80;
      clicklock.onPress = function()
       {
          mgr.showScene( part1 );
       }

       clickhome = new Clickable();
       clickhome.locate(width/2, height/2 + 260);
       clickhome.width = 60;
       clickhome.height = 60;
       clickhome.onPress = function()
        {
           mgr.showScene( part2 );
        }
  }

    this.draw = function()
    {
        background(notes);

        push();
        translate(width/2 - 160, height/2 - 290);
        scale(1.5);
        fill(0);
        let h = hour();
        let m = minute();
        fill('white');
        text(h + ":"+ m, 0,0);
        pop();
        clicklock.draw();
        clickhome.draw();
        image(app1, width/2 -10, height/2 + 250, 75,75);
        image(app2, width/2 + 230, height/2 - 236, 30,88);
    }
}
///////////////////////////////////////////////////

function part12( )
{
  this.setup = function() {
  }

  this.enter = function()
  {
      clicklock = new Clickable();
      clicklock.locate(width/2 + 232, height/2 - 233);
      clicklock.width = 25;
      clicklock.height = 80;
      clicklock.onPress = function()
       {
          mgr.showScene( part1 );
       }

       clickhome = new Clickable();
       clickhome.locate(width/2, height/2 + 260);
       clickhome.width = 60;
       clickhome.height = 60;
       clickhome.onPress = function()
        {
           mgr.showScene( part2 );
        }
  }

    this.draw = function()
    {
        background(gallery);

        push();
        translate(width/2 - 160, height/2 - 290);
        scale(1.5);
        fill(0);
        let h = hour();
        let m = minute();
        fill('white');
        text(h + ":"+ m, 0,0);
        pop();
        clicklock.draw();
        clickhome.draw();
        image(app1, width/2 -10, height/2 + 250, 75,75);
        image(app2, width/2 + 230, height/2 - 236, 30,88);
    }
}

// =============================================================
// =                         text SCENES                      =
// =============================================================


function scene1( )
{
  this.setup = function() {
  }

  this.enter = function()
  {
    clicklock = new Clickable();
    clicklock.locate(width/2 + 232, height/2 - 233);
    clicklock.width = 25;
    clicklock.height = 80;
    clicklock.onPress = function()
     {
        mgr.showScene( part1 );
     }

     clickhome = new Clickable();
     clickhome.locate(width/2, height/2 + 260);
     clickhome.width = 60;
     clickhome.height = 60;
     clickhome.onPress = function()
      {
         mgr.showScene( part2 );
      }

        click = new Clickable();
        click.locate(width/2 - 178,height/2+130);
        click.color = "#0079fe";       //Background color of the clickable (hex number as a string)
      click.cornerRadius = 0;       //Corner radius of the clickable (float)
      click.strokeWeight = 2;        //Stroke width of the clickable (float)
      click.stroke = "#0079fe";      //Border color of the clickable (hex number as a string)
      click.text = "yea hello?";       //Text of the clickable (string)
      click.textColor = "white";   //Color of the text (hex number as a string)
      click.textSize = 20;           //Size of the text (integer)
        click.width = 395;
        click.height = 60;
        click.onPress = function()
         {
            mgr.showScene( scene2part1 );
         }

        click1 = new Clickable();
        click1.locate(width/2 - 178,height/2+ 190);
        click1.color = "#0079fe";       //Background color of the clickable (hex number as a string)
        click1.cornerRadius = 0;       //Corner radius of the clickable (float)
        click1.strokeWeight = 2;        //Stroke width of the clickable (float)
        click1.stroke = "black";      //Border color of the clickable (hex number as a string)
        click1.text = "strange thing to say to a rando";       //Text of the clickable (string)
        click1.textColor = "white";   //Color of the text (hex number as a string)
        click1.textSize = 20;           //Size of the text (integer)
        click1.width = 395;
        click1.height = 60;
        click1.onPress = function()
         {
            mgr.showScene( scene2part2 );
         }
  }

    this.draw = function()
    {
        background(text1);

        push();
        translate(width/2 - 160, height/2 - 290);
        scale(1.5);
        fill(0);
        let h = hour();
        let m = minute();
        fill('white');
        text(h + ":"+ m, 0,0);
        pop();
        clicklock.draw();
        clickhome.draw();
        click.draw();
        click1.draw();
        image(app1, width/2 -10, height/2 + 250, 75,75);
        image(app2, width/2 + 230, height/2 - 236, 30,88);
    }
}

////////////////////////////////////////////////////////////////////////////////

function scene2part1( )
{
  this.setup = function() {
  }

  this.enter = function()
  {
    clicklock = new Clickable();
    clicklock.locate(width/2 + 232, height/2 - 233);
    clicklock.width = 25;
    clicklock.height = 80;
    clicklock.onPress = function()
     {
        mgr.showScene( part1 );
     }

     clickhome = new Clickable();
     clickhome.locate(width/2, height/2 + 260);
     clickhome.width = 60;
     clickhome.height = 60;
     clickhome.onPress = function()
      {
         mgr.showScene( part2 );
      }

        click = new Clickable();
        click.locate(width/2 - 178,height/2+130);
        click.color = "#0079fe";       //Background color of the clickable (hex number as a string)
      click.cornerRadius = 0;       //Corner radius of the clickable (float)
      click.strokeWeight = 2;        //Stroke width of the clickable (float)
      click.stroke = "#0079fe";      //Border color of the clickable (hex number as a string)
      click.text = "left-click for next scene";       //Text of the clickable (string)
      click.textColor = "white";   //Color of the text (hex number as a string)
      click.textSize = 20;           //Size of the text (integer)
        click.width = 395;
        click.height = 60;
        click.onPress = function()
         {
            mgr.showScene( scene3 );
         }

        click1 = new Clickable();
        click1.locate(width/2 - 178,height/2+ 190);
        click1.color = "#0079fe";       //Background color of the clickable (hex number as a string)
        click1.cornerRadius = 0;       //Corner radius of the clickable (float)
        click1.strokeWeight = 2;        //Stroke width of the clickable (float)
        click1.stroke = "black";      //Border color of the clickable (hex number as a string)
        click1.text = " ";       //Text of the clickable (string)
        click1.textColor = "white";   //Color of the text (hex number as a string)
        click1.textSize = 20;           //Size of the text (integer)
        click1.width = 395;
        click1.height = 60;
  }

    this.draw = function()
    {
        background(text2part1);

        push();
        translate(width/2 - 160, height/2 - 290);
        scale(1.5);
        fill(0);
        let h = hour();
        let m = minute();
        fill('white');
        text(h + ":"+ m, 0,0);
        pop();
        clicklock.draw();
        clickhome.draw();
        click.draw();
        click1.draw();
        image(app1, width/2 -10, height/2 + 250, 75,75);
        image(app2, width/2 + 230, height/2 - 236, 30,88);
    }
}

////////////////////////////////////////////////////////////////////////////////

function scene2part2( )
{
  this.setup = function() {
  }

  this.enter = function()
  {
    clicklock = new Clickable();
    clicklock.locate(width/2 + 232, height/2 - 233);
    clicklock.width = 25;
    clicklock.height = 80;
    clicklock.onPress = function()
     {
        mgr.showScene( part1 );
     }

     clickhome = new Clickable();
     clickhome.locate(width/2, height/2 + 260);
     clickhome.width = 60;
     clickhome.height = 60;
     clickhome.onPress = function()
      {
         mgr.showScene( part2 );
      }

        click = new Clickable();
        click.locate(width/2 - 178,height/2+130);
        click.color = "#0079fe";       //Background color of the clickable (hex number as a string)
      click.cornerRadius = 0;       //Corner radius of the clickable (float)
      click.strokeWeight = 2;        //Stroke width of the clickable (float)
      click.stroke = "#0079fe";      //Border color of the clickable (hex number as a string)
      click.text = "left-click for next scene";       //Text of the clickable (string)
      click.textColor = "white";   //Color of the text (hex number as a string)
      click.textSize = 20;           //Size of the text (integer)
        click.width = 395;
        click.height = 60;
        click.onPress = function()
         {
            mgr.showScene( scene3 );
         }

        click1 = new Clickable();
        click1.locate(width/2 - 178,height/2+ 190);
        click1.color = "#0079fe";       //Background color of the clickable (hex number as a string)
        click1.cornerRadius = 0;       //Corner radius of the clickable (float)
        click1.strokeWeight = 2;        //Stroke width of the clickable (float)
        click1.stroke = "black";      //Border color of the clickable (hex number as a string)
        click1.text = " ";       //Text of the clickable (string)
        click1.textColor = "white";   //Color of the text (hex number as a string)
        click1.textSize = 20;           //Size of the text (integer)
        click1.width = 395;
        click1.height = 60;
  }

    this.draw = function()
    {
        background(text2part2);

        push();
        translate(width/2 - 160, height/2 - 290);
        scale(1.5);
        fill(0);
        let h = hour();
        let m = minute();
        fill('white');
        text(h + ":"+ m, 0,0);
        pop();
        clicklock.draw();
        clickhome.draw();
        click.draw();
        click1.draw();
        image(app1, width/2 -10, height/2 + 250, 75,75);
        image(app2, width/2 + 230, height/2 - 236, 30,88);
    }
}

// ////////////////////////////////////////////////////////////////////////

function scene3( )
{
  this.setup = function() {
  }

  this.enter = function()
  {
    clicklock = new Clickable();
    clicklock.locate(width/2 + 232, height/2 - 233);
    clicklock.width = 25;
    clicklock.height = 80;
    clicklock.onPress = function()
     {
        mgr.showScene( part1 );
     }

     clickhome = new Clickable();
     clickhome.locate(width/2, height/2 + 260);
     clickhome.width = 60;
     clickhome.height = 60;
     clickhome.onPress = function()
      {
         mgr.showScene( part2 );
      }

       clickhome = new Clickable();
       clickhome.locate(width/2, height/2 + 260);
       clickhome.width = 60;
       clickhome.height = 60;
       clickhome.onPress = function()
        {
           mgr.showScene( Animation2 );
        }

        click = new Clickable();
        click.locate(width/2 - 178,height/2+130);
        click.color = "#0079fe";       //Background color of the clickable (hex number as a string)
      click.cornerRadius = 0;       //Corner radius of the clickable (float)
      click.strokeWeight = 2;        //Stroke width of the clickable (float)
      click.stroke = "#0079fe";      //Border color of the clickable (hex number as a string)
      click.text = "lol that’s pretty rude";       //Text of the clickable (string)
      click.textColor = "white";   //Color of the text (hex number as a string)
      click.textSize = 20;           //Size of the text (integer)
        click.width = 395;
        click.height = 60;
        click.onPress = function()
         {
            mgr.showScene( scene4part1 );
         }

        click1 = new Clickable();
        click1.locate(width/2 - 178,height/2+ 190);
        click1.color = "#0079fe";       //Background color of the clickable (hex number as a string)
        click1.cornerRadius = 0;       //Corner radius of the clickable (float)
        click1.strokeWeight = 2;        //Stroke width of the clickable (float)
        click1.stroke = "black";      //Border color of the clickable (hex number as a string)
        click1.text = "uh excuse me?";       //Text of the clickable (string)
        click1.textColor = "white";   //Color of the text (hex number as a string)
        click1.textSize = 20;           //Size of the text (integer)
        click1.width = 395;
        click1.height = 60;
        click1.onPress = function()
         {
            mgr.showScene( scene4part2 );
         }
  }

    this.draw = function()
    {
        background(text3);

        push();
        translate(width/2 - 160, height/2 - 290);
        scale(1.5);
        fill(0);
        let h = hour();
        let m = minute();
        fill('white');
        text(h + ":"+ m, 0,0);
        pop();
        clicklock.draw();
        clickhome.draw();
        click.draw();
        click1.draw();
        image(app1, width/2 -10, height/2 + 250, 75,75);
        image(app2, width/2 + 230, height/2 - 236, 30,88);
    }
}

////////////////////////////////////////////////////////////////////////////////

function scene4part1( )
{
  this.setup = function() {
  }

  this.enter = function()
  {
    clicklock = new Clickable();
    clicklock.locate(width/2 + 232, height/2 - 233);
    clicklock.width = 25;
    clicklock.height = 80;
    clicklock.onPress = function()
     {
        mgr.showScene( part1 );
     }

     clickhome = new Clickable();
     clickhome.locate(width/2, height/2 + 260);
     clickhome.width = 60;
     clickhome.height = 60;
     clickhome.onPress = function()
      {
         mgr.showScene( part2 );
      }

        click = new Clickable();
        click.locate(width/2 - 178,height/2+130);
        click.color = "#0079fe";       //Background color of the clickable (hex number as a string)
      click.cornerRadius = 0;       //Corner radius of the clickable (float)
      click.strokeWeight = 2;        //Stroke width of the clickable (float)
      click.stroke = "#0079fe";      //Border color of the clickable (hex number as a string)
      click.text = "left-click for next scene";       //Text of the clickable (string)
      click.textColor = "white";   //Color of the text (hex number as a string)
      click.textSize = 20;           //Size of the text (integer)
        click.width = 395;
        click.height = 60;
        click.onPress = function()
         {
            mgr.showScene( scene5 );
         }

        click1 = new Clickable();
        click1.locate(width/2 - 178,height/2+ 190);
        click1.color = "#0079fe";       //Background color of the clickable (hex number as a string)
        click1.cornerRadius = 0;       //Corner radius of the clickable (float)
        click1.strokeWeight = 2;        //Stroke width of the clickable (float)
        click1.stroke = "black";      //Border color of the clickable (hex number as a string)
        click1.text = " ";       //Text of the clickable (string)
        click1.textColor = "white";   //Color of the text (hex number as a string)
        click1.textSize = 20;           //Size of the text (integer)
        click1.width = 395;
        click1.height = 60;
  }

    this.draw = function()
    {
        background(text4part1);

        push();
        translate(width/2 - 160, height/2 - 290);
        scale(1.5);
        fill(0);
        let h = hour();
        let m = minute();
        fill('white');
        text(h + ":"+ m, 0,0);
        pop();
        clicklock.draw();
        clickhome.draw();
        click.draw();
        click1.draw();
        image(app1, width/2 -10, height/2 + 250, 75,75);
        image(app2, width/2 + 230, height/2 - 236, 30,88);
    }
}

////////////////////////////////////////////////////////////////////////////////

function scene4part2( )
{
  this.setup = function() {
  }

  this.enter = function()
  {
    clicklock = new Clickable();
    clicklock.locate(width/2 + 232, height/2 - 233);
    clicklock.width = 25;
    clicklock.height = 80;
    clicklock.onPress = function()
     {
        mgr.showScene( part1 );
     }

     clickhome = new Clickable();
     clickhome.locate(width/2, height/2 + 260);
     clickhome.width = 60;
     clickhome.height = 60;
     clickhome.onPress = function()
      {
         mgr.showScene( part2 );
      }

        click = new Clickable();
        click.locate(width/2 - 178,height/2+130);
        click.color = "#0079fe";       //Background color of the clickable (hex number as a string)
      click.cornerRadius = 0;       //Corner radius of the clickable (float)
      click.strokeWeight = 2;        //Stroke width of the clickable (float)
      click.stroke = "#0079fe";      //Border color of the clickable (hex number as a string)
      click.text = "left-click for next scene";       //Text of the clickable (string)
      click.textColor = "white";   //Color of the text (hex number as a string)
      click.textSize = 20;           //Size of the text (integer)
        click.width = 395;
        click.height = 60;
        click.onPress = function()
         {
            mgr.showScene( scene5 );
         }

        click1 = new Clickable();
        click1.locate(width/2 - 178,height/2+ 190);
        click1.color = "#0079fe";       //Background color of the clickable (hex number as a string)
        click1.cornerRadius = 0;       //Corner radius of the clickable (float)
        click1.strokeWeight = 2;        //Stroke width of the clickable (float)
        click1.stroke = "black";      //Border color of the clickable (hex number as a string)
        click1.text = " ";       //Text of the clickable (string)
        click1.textColor = "white";   //Color of the text (hex number as a string)
        click1.textSize = 20;           //Size of the text (integer)
        click1.width = 395;
        click1.height = 60;
  }

    this.draw = function()
    {
        background(text4part2);

        push();
        translate(width/2 - 160, height/2 - 290);
        scale(1.5);
        fill(0);
        let h = hour();
        let m = minute();
        fill('white');
        text(h + ":"+ m, 0,0);
        pop();
        clicklock.draw();
        clickhome.draw();
        click.draw();
        click1.draw();
        image(app1, width/2 -10, height/2 + 250, 75,75);
        image(app2, width/2 + 230, height/2 - 236, 30,88);
    }
}

////////////////////////////////////////////////////////////////////////////////

function scene5( )
{
  this.setup = function() {
  }

  this.enter = function()
  {
    clicklock = new Clickable();
    clicklock.locate(width/2 + 232, height/2 - 233);
    clicklock.width = 25;
    clicklock.height = 80;
    clicklock.onPress = function()
     {
        mgr.showScene( part1 );
     }

     clickhome = new Clickable();
     clickhome.locate(width/2, height/2 + 260);
     clickhome.width = 60;
     clickhome.height = 60;
     clickhome.onPress = function()
      {
         mgr.showScene( part2 );
      }

        click = new Clickable();
        click.locate(width/2 - 178,height/2+130);
        click.color = "#0079fe";       //Background color of the clickable (hex number as a string)
      click.cornerRadius = 0;       //Corner radius of the clickable (float)
      click.strokeWeight = 2;        //Stroke width of the clickable (float)
      click.stroke = "#0079fe";      //Border color of the clickable (hex number as a string)
      click.text = "sry but how do I kno I can trust you";       //Text of the clickable (string)
      click.textColor = "white";   //Color of the text (hex number as a string)
      click.textSize = 20;           //Size of the text (integer)
        click.width = 395;
        click.height = 60;
        click.onPress = function()
         {
            mgr.showScene( scene6 );
         }

        click1 = new Clickable();
        click1.locate(width/2 - 178,height/2+ 190);
        click1.color = "#0079fe";       //Background color of the clickable (hex number as a string)
        click1.cornerRadius = 0;       //Corner radius of the clickable (float)
        click1.strokeWeight = 2;        //Stroke width of the clickable (float)
        click1.stroke = "black";      //Border color of the clickable (hex number as a string)
        click1.text = " ";       //Text of the clickable (string)
        click1.textColor = "white";   //Color of the text (hex number as a string)
        click1.textSize = 20;           //Size of the text (integer)
        click1.width = 395;
        click1.height = 60;
  }

    this.draw = function()
    {
        background(text5);

        push();
        translate(width/2 - 160, height/2 - 290);
        scale(1.5);
        fill(0);
        let h = hour();
        let m = minute();
        fill('white');
        text(h + ":"+ m, 0,0);
        pop();
        clicklock.draw();
        clickhome.draw();
        click.draw();
        click1.draw();
        image(app1, width/2 -10, height/2 + 250, 75,75);
        image(app2, width/2 + 230, height/2 - 236, 30,88);
    }
}

/////////////////////////////////////////////////////////////////////////////////////////////

function scene6( )
{
  this.setup = function() {
  }

  this.enter = function()
  {
    clicklock = new Clickable();
    clicklock.locate(width/2 + 232, height/2 - 233);
    clicklock.width = 25;
    clicklock.height = 80;
    clicklock.onPress = function()
     {
        mgr.showScene( part1 );
     }

     clickhome = new Clickable();
     clickhome.locate(width/2, height/2 + 260);
     clickhome.width = 60;
     clickhome.height = 60;
     clickhome.onPress = function()
      {
         mgr.showScene( part2 );
      }

        click = new Clickable();
        click.locate(width/2 - 178,height/2+130);
        click.color = "#0079fe";       //Background color of the clickable (hex number as a string)
      click.cornerRadius = 0;       //Corner radius of the clickable (float)
      click.strokeWeight = 2;        //Stroke width of the clickable (float)
      click.stroke = "#0079fe";      //Border color of the clickable (hex number as a string)
      click.text = "left-click for next scene";       //Text of the clickable (string)
      click.textColor = "white";   //Color of the text (hex number as a string)
      click.textSize = 20;           //Size of the text (integer)
        click.width = 395;
        click.height = 60;
        click.onPress = function()
         {
            mgr.showScene( scene7 );
         }

        click1 = new Clickable();
        click1.locate(width/2 - 178,height/2+ 190);
        click1.color = "#0079fe";       //Background color of the clickable (hex number as a string)
        click1.cornerRadius = 0;       //Corner radius of the clickable (float)
        click1.strokeWeight = 2;        //Stroke width of the clickable (float)
        click1.stroke = "black";      //Border color of the clickable (hex number as a string)
        click1.text = " ";       //Text of the clickable (string)
        click1.textColor = "white";   //Color of the text (hex number as a string)
        click1.textSize = 20;           //Size of the text (integer)
        click1.width = 395;
        click1.height = 60;
  }

    this.draw = function()
    {
        background(text6);

        push();
        translate(width/2 - 160, height/2 - 290);
        scale(1.5);
        fill(0);
        let h = hour();
        let m = minute();
        fill('white');
        text(h + ":"+ m, 0,0);
        pop();
        clicklock.draw();
        clickhome.draw();
        click.draw();
        click1.draw();
        image(app1, width/2 -10, height/2 + 250, 75,75);
        image(app2, width/2 + 230, height/2 - 236, 30,88);
    }
}

/////////////////////////////////////////////////////////////////////////////////////////////

function scene7( )
{
  this.setup = function() {
  }

  this.enter = function()
  {
    clicklock = new Clickable();
    clicklock.locate(width/2 + 232, height/2 - 233);
    clicklock.width = 25;
    clicklock.height = 80;
    clicklock.onPress = function()
     {
        mgr.showScene( part1 );
     }

     clickhome = new Clickable();
     clickhome.locate(width/2, height/2 + 260);
     clickhome.width = 60;
     clickhome.height = 60;
     clickhome.onPress = function()
      {
         mgr.showScene( part2 );
      }

        click = new Clickable();
        click.locate(width/2 - 178,height/2+130);
        click.color = "#0079fe";       //Background color of the clickable (hex number as a string)
      click.cornerRadius = 0;       //Corner radius of the clickable (float)
      click.strokeWeight = 2;        //Stroke width of the clickable (float)
      click.stroke = "#0079fe";      //Border color of the clickable (hex number as a string)
      click.text = "left-click for next scene";       //Text of the clickable (string)
      click.textColor = "white";   //Color of the text (hex number as a string)
      click.textSize = 20;           //Size of the text (integer)
        click.width = 395;
        click.height = 60;
        click.onPress = function()
         {
            mgr.showScene( scene8 );
         }

        click1 = new Clickable();
        click1.locate(width/2 - 178,height/2+ 190);
        click1.color = "#0079fe";       //Background color of the clickable (hex number as a string)
        click1.cornerRadius = 0;       //Corner radius of the clickable (float)
        click1.strokeWeight = 2;        //Stroke width of the clickable (float)
        click1.stroke = "black";      //Border color of the clickable (hex number as a string)
        click1.text = " ";       //Text of the clickable (string)
        click1.textColor = "white";   //Color of the text (hex number as a string)
        click1.textSize = 20;           //Size of the text (integer)
        click1.width = 395;
        click1.height = 60;
  }

    this.draw = function()
    {
        background(text7);

        push();
        translate(width/2 - 160, height/2 - 290);
        scale(1.5);
        fill(0);
        let h = hour();
        let m = minute();
        fill('white');
        text(h + ":"+ m, 0,0);
        pop();
        clicklock.draw();
        clickhome.draw();
        click.draw();
        click1.draw();
        image(app1, width/2 -10, height/2 + 250, 75,75);
        image(app2, width/2 + 230, height/2 - 236, 30,88);
    }
}

/////////////////////////////////////////////////////////////////////////////////////////////


function scene8( )
{
  this.setup = function() {
  }

  this.enter = function()
  {
    clicklock = new Clickable();
    clicklock.locate(width/2 + 232, height/2 - 233);
    clicklock.width = 25;
    clicklock.height = 80;
    clicklock.onPress = function()
     {
        mgr.showScene( part1 );
     }

     clickhome = new Clickable();
     clickhome.locate(width/2, height/2 + 260);
     clickhome.width = 60;
     clickhome.height = 60;
     clickhome.onPress = function()
      {
         mgr.showScene( part2 );
      }

        click = new Clickable();
        click.locate(width/2 - 178,height/2+130);
        click.color = "#0079fe";       //Background color of the clickable (hex number as a string)
      click.cornerRadius = 0;       //Corner radius of the clickable (float)
      click.strokeWeight = 2;        //Stroke width of the clickable (float)
      click.stroke = "#0079fe";      //Border color of the clickable (hex number as a string)
      click.text = "ok wow that’s kinda creepy. You know a lot of this person";       //Text of the clickable (string)
      click.textColor = "white";   //Color of the text (hex number as a string)
      click.textSize = 20;           //Size of the text (integer)
        click.width = 395;
        click.height = 60;
        click.onPress = function()
         {
            mgr.showScene( scene9part1 );
         }

        click1 = new Clickable();
        click1.locate(width/2 - 178,height/2+ 190);
        click1.color = "#0079fe";       //Background color of the clickable (hex number as a string)
        click1.cornerRadius = 0;       //Corner radius of the clickable (float)
        click1.strokeWeight = 2;        //Stroke width of the clickable (float)
        click1.stroke = "black";      //Border color of the clickable (hex number as a string)
        click1.text = "hmm ok I can trust you. The info you said was pretty accurate ";       //Text of the clickable (string)
        click1.textColor = "white";   //Color of the text (hex number as a string)
        click1.textSize = 20;           //Size of the text (integer)
        click1.width = 395;
        click1.height = 60;
        click1.onPress = function()
         {
            mgr.showScene( scene9part2 );
         }
  }

    this.draw = function()
    {
        background(text8);

        push();
        translate(width/2 - 160, height/2 - 290);
        scale(1.5);
        fill(0);
        let h = hour();
        let m = minute();
        fill('white');
        text(h + ":"+ m, 0,0);
        pop();
        clicklock.draw();
        clickhome.draw();
        click.draw();
        click1.draw();
        image(app1, width/2 -10, height/2 + 250, 75,75);
        image(app2, width/2 + 230, height/2 - 236, 30,88);
    }
}

/////////////////////////////////////////////////////////////////////////////////////////////


function scene9part1( )
{
  this.setup = function() {
  }

  this.enter = function()
  {
    clicklock = new Clickable();
    clicklock.locate(width/2 + 232, height/2 - 233);
    clicklock.width = 25;
    clicklock.height = 80;
    clicklock.onPress = function()
     {
        mgr.showScene( part1 );
     }

     clickhome = new Clickable();
     clickhome.locate(width/2, height/2 + 260);
     clickhome.width = 60;
     clickhome.height = 60;
     clickhome.onPress = function()
      {
         mgr.showScene( part2 );
      }

        click = new Clickable();
        click.locate(width/2 - 178,height/2+130);
        click.color = "#0079fe";       //Background color of the clickable (hex number as a string)
      click.cornerRadius = 0;       //Corner radius of the clickable (float)
      click.strokeWeight = 2;        //Stroke width of the clickable (float)
      click.stroke = "#0079fe";      //Border color of the clickable (hex number as a string)
      click.text = "left-click for next scene";       //Text of the clickable (string)
      click.textColor = "white";   //Color of the text (hex number as a string)
      click.textSize = 20;           //Size of the text (integer)
        click.width = 395;
        click.height = 60;
        click.onPress = function()
         {
            mgr.showScene( scene10 );
         }

        click1 = new Clickable();
        click1.locate(width/2 - 178,height/2+ 190);
        click1.color = "#0079fe";       //Background color of the clickable (hex number as a string)
        click1.cornerRadius = 0;       //Corner radius of the clickable (float)
        click1.strokeWeight = 2;        //Stroke width of the clickable (float)
        click1.stroke = "black";      //Border color of the clickable (hex number as a string)
        click1.text = " ";       //Text of the clickable (string)
        click1.textColor = "white";   //Color of the text (hex number as a string)
        click1.textSize = 20;           //Size of the text (integer)
        click1.width = 395;
        click1.height = 60;
  }

    this.draw = function()
    {
        background(text9part1);

        push();
        translate(width/2 - 160, height/2 - 290);
        scale(1.5);
        fill(0);
        let h = hour();
        let m = minute();
        fill('white');
        text(h + ":"+ m, 0,0);
        pop();
        clicklock.draw();
        clickhome.draw();
        click.draw();
        click1.draw();
        image(app1, width/2 -10, height/2 + 250, 75,75);
        image(app2, width/2 + 230, height/2 - 236, 30,88);
    }
}

////////////////////////////////////////////////////////////////////////////////

function scene9part2( )
{
  this.setup = function() {
  }

  this.enter = function()
  {
    clicklock = new Clickable();
    clicklock.locate(width/2 + 232, height/2 - 233);
    clicklock.width = 25;
    clicklock.height = 80;
    clicklock.onPress = function()
     {
        mgr.showScene( part1 );
     }

     clickhome = new Clickable();
     clickhome.locate(width/2, height/2 + 260);
     clickhome.width = 60;
     clickhome.height = 60;
     clickhome.onPress = function()
      {
         mgr.showScene( part2 );
      }

        click = new Clickable();
        click.locate(width/2 - 178,height/2+130);
        click.color = "#0079fe";       //Background color of the clickable (hex number as a string)
      click.cornerRadius = 0;       //Corner radius of the clickable (float)
      click.strokeWeight = 2;        //Stroke width of the clickable (float)
      click.stroke = "#0079fe";      //Border color of the clickable (hex number as a string)
      click.text = "left-click for next scene";       //Text of the clickable (string)
      click.textColor = "white";   //Color of the text (hex number as a string)
      click.textSize = 20;           //Size of the text (integer)
        click.width = 395;
        click.height = 60;
        click.onPress = function()
         {
            mgr.showScene( scene11 );
         }

        click1 = new Clickable();
        click1.locate(width/2 - 178,height/2+ 190);
        click1.color = "#0079fe";       //Background color of the clickable (hex number as a string)
        click1.cornerRadius = 0;       //Corner radius of the clickable (float)
        click1.strokeWeight = 2;        //Stroke width of the clickable (float)
        click1.stroke = "black";      //Border color of the clickable (hex number as a string)
        click1.text = " ";       //Text of the clickable (string)
        click1.textColor = "white";   //Color of the text (hex number as a string)
        click1.textSize = 20;           //Size of the text (integer)
        click1.width = 395;
        click1.height = 60;
  }

    this.draw = function()
    {
        background(text9part2);

        push();
        translate(width/2 - 160, height/2 - 290);
        scale(1.5);
        fill(0);
        let h = hour();
        let m = minute();
        fill('white');
        text(h + ":"+ m, 0,0);
        pop();
        clicklock.draw();
        clickhome.draw();
        click.draw();
        click1.draw();
        image(app1, width/2 -10, height/2 + 250, 75,75);
        image(app2, width/2 + 230, height/2 - 236, 30,88);
    }
}

/////////////////////////////////////////////////////////////////////////////////////////////

function scene10( )
{
  this.setup = function() {
  }

  this.enter = function()
  {
    clicklock = new Clickable();
    clicklock.locate(width/2 + 232, height/2 - 233);
    clicklock.width = 25;
    clicklock.height = 80;
    clicklock.onPress = function()
     {
        mgr.showScene( part1 );
     }

     clickhome = new Clickable();
     clickhome.locate(width/2, height/2 + 260);
     clickhome.width = 60;
     clickhome.height = 60;
     clickhome.onPress = function()
      {
         mgr.showScene( part2 );
      }

        click = new Clickable();
        click.locate(width/2 - 178,height/2+130);
        click.color = "#0079fe";       //Background color of the clickable (hex number as a string)
      click.cornerRadius = 0;       //Corner radius of the clickable (float)
      click.strokeWeight = 2;        //Stroke width of the clickable (float)
      click.stroke = "#0079fe";      //Border color of the clickable (hex number as a string)
      click.text = "Ok, ok. You caught me red handed lol";       //Text of the clickable (string)
      click.textColor = "white";   //Color of the text (hex number as a string)
      click.textSize = 20;           //Size of the text (integer)
        click.width = 395;
        click.height = 60;
        click.onPress = function()
         {
            mgr.showScene( scene11 );
         }

        click1 = new Clickable();
        click1.locate(width/2 - 178,height/2+ 190);
        click1.color = "#0079fe";       //Background color of the clickable (hex number as a string)
        click1.cornerRadius = 0;       //Corner radius of the clickable (float)
        click1.strokeWeight = 2;        //Stroke width of the clickable (float)
        click1.stroke = "black";      //Border color of the clickable (hex number as a string)
        click1.text = " ";       //Text of the clickable (string)
        click1.textColor = "white";   //Color of the text (hex number as a string)
        click1.textSize = 20;           //Size of the text (integer)
        click1.width = 395;
        click1.height = 60;
  }

    this.draw = function()
    {
        background(text10);

        push();
        translate(width/2 - 160, height/2 - 290);
        scale(1.5);
        fill(0);
        let h = hour();
        let m = minute();
        fill('white');
        text(h + ":"+ m, 0,0);
        pop();
        clicklock.draw();
        clickhome.draw();
        click.draw();
        click1.draw();
        image(app1, width/2 -10, height/2 + 250, 75,75);
        image(app2, width/2 + 230, height/2 - 236, 30,88);
    }
}

/////////////////////////////////////////////////////////////////////////////////////////////


function scene11( )
{
  this.setup = function() {
  }

  this.enter = function()
  {
    clicklock = new Clickable();
    clicklock.locate(width/2 + 232, height/2 - 233);
    clicklock.width = 25;
    clicklock.height = 80;
    clicklock.onPress = function()
     {
        mgr.showScene( part1 );
     }

     clickhome = new Clickable();
     clickhome.locate(width/2, height/2 + 260);
     clickhome.width = 60;
     clickhome.height = 60;
     clickhome.onPress = function()
      {
         mgr.showScene( part2 );
      }

        click = new Clickable();
        click.locate(width/2 - 178,height/2+130);
        click.color = "#0079fe";       //Background color of the clickable (hex number as a string)
      click.cornerRadius = 0;       //Corner radius of the clickable (float)
      click.strokeWeight = 2;        //Stroke width of the clickable (float)
      click.stroke = "#0079fe";      //Border color of the clickable (hex number as a string)
      click.text = "left-click for next scene";       //Text of the clickable (string)
      click.textColor = "white";   //Color of the text (hex number as a string)
      click.textSize = 20;           //Size of the text (integer)
        click.width = 395;
        click.height = 60;
        click.onPress = function()
         {
            mgr.showScene( scene12 );
         }

        click1 = new Clickable();
        click1.locate(width/2 - 178,height/2+ 190);
        click1.color = "#0079fe";       //Background color of the clickable (hex number as a string)
        click1.cornerRadius = 0;       //Corner radius of the clickable (float)
        click1.strokeWeight = 2;        //Stroke width of the clickable (float)
        click1.stroke = "black";      //Border color of the clickable (hex number as a string)
        click1.text = " ";       //Text of the clickable (string)
        click1.textColor = "white";   //Color of the text (hex number as a string)
        click1.textSize = 20;           //Size of the text (integer)
        click1.width = 395;
        click1.height = 60;
  }

    this.draw = function()
    {
        background(text11);

        push();
        translate(width/2 - 160, height/2 - 290);
        scale(1.5);
        fill(0);
        let h = hour();
        let m = minute();
        fill('white');
        text(h + ":"+ m, 0,0);
        pop();
        clicklock.draw();
        clickhome.draw();
        click.draw();
        click1.draw();
        image(app1, width/2 -10, height/2 + 250, 75,75);
        image(app2, width/2 + 230, height/2 - 236, 30,88);
    }
}

/////////////////////////////////////////////////////////////////////////////////////////////

function scene12( )
{
  this.setup = function() {
  }

  this.enter = function()
  {
    clicklock = new Clickable();
    clicklock.locate(width/2 + 232, height/2 - 233);
    clicklock.width = 25;
    clicklock.height = 80;
    clicklock.onPress = function()
     {
        mgr.showScene( part1 );
     }

     clickhome = new Clickable();
     clickhome.locate(width/2, height/2 + 260);
     clickhome.width = 60;
     clickhome.height = 60;
     clickhome.onPress = function()
      {
         mgr.showScene( part2 );
      }

        click = new Clickable();
        click.locate(width/2 - 178,height/2+130);
        click.color = "#0079fe";       //Background color of the clickable (hex number as a string)
      click.cornerRadius = 0;       //Corner radius of the clickable (float)
      click.strokeWeight = 2;        //Stroke width of the clickable (float)
      click.stroke = "#0079fe";      //Border color of the clickable (hex number as a string)
      click.text = " haha I figured! Im at the venue, ill meet u outside ";       //Text of the clickable (string)
      click.textColor = "white";   //Color of the text (hex number as a string)
      click.textSize = 20;           //Size of the text (integer)
        click.width = 395;
        click.height = 60;
        click.onPress = function()
         {
            mgr.showScene( scene13part1 );
         }

        click1 = new Clickable();
        click1.locate(width/2 - 178,height/2+ 190);
        click1.color = "#0079fe";       //Background color of the clickable (hex number as a string)
        click1.cornerRadius = 0;       //Corner radius of the clickable (float)
        click1.strokeWeight = 2;        //Stroke width of the clickable (float)
        click1.stroke = "black";      //Border color of the clickable (hex number as a string)
        click1.text = " oh wow! I’m a big fan! Hey, im still at the venue, lets talk somtime??";       //Text of the clickable (string)
        click1.textColor = "white";   //Color of the text (hex number as a string)
        click1.textSize = 20;           //Size of the text (integer)
        click1.width = 395;
        click1.height = 60;
        click1.onPress = function()
         {
            mgr.showScene( scene13part2 );
         }
  }

    this.draw = function()
    {
        background(text12);

        push();
        translate(width/2 - 160, height/2 - 290);
        scale(1.5);
        fill(0);
        let h = hour();
        let m = minute();
        fill('white');
        text(h + ":"+ m, 0,0);
        pop();
        clicklock.draw();
        clickhome.draw();
        click.draw();
        click1.draw();
        image(app1, width/2 -10, height/2 + 250, 75,75);
        image(app2, width/2 + 230, height/2 - 236, 30,88);
    }
}

/////////////////////////////////////////////////////////////////////////////////////////////


function scene13part1( )
{
  this.setup = function() {
  }

  this.enter = function()
  {
    clicklock = new Clickable();
    clicklock.locate(width/2 + 232, height/2 - 233);
    clicklock.width = 25;
    clicklock.height = 80;
    clicklock.onPress = function()
     {
        mgr.showScene( part1 );
     }

     clickhome = new Clickable();
     clickhome.locate(width/2, height/2 + 260);
     clickhome.width = 60;
     clickhome.height = 60;
     clickhome.onPress = function()
      {
         mgr.showScene( part2 );
      }

       clickhome = new Clickable();
       clickhome.locate(width/2, height/2 + 260);
       clickhome.width = 60;
       clickhome.height = 60;
       clickhome.onPress = function()
        {
           mgr.showScene( Animation2 );
        }

        click = new Clickable();
        click.locate(width/2 - 178,height/2+130);
        click.color = "#0079fe";       //Background color of the clickable (hex number as a string)
      click.cornerRadius = 0;       //Corner radius of the clickable (float)
      click.strokeWeight = 2;        //Stroke width of the clickable (float)
      click.stroke = "#0079fe";      //Border color of the clickable (hex number as a string)
      click.text = "left-click for next scene";       //Text of the clickable (string)
      click.textColor = "white";   //Color of the text (hex number as a string)
      click.textSize = 20;           //Size of the text (integer)
        click.width = 395;
        click.height = 60;
        click.onPress = function()
         {
            mgr.showScene( scene14 );
         }

        click1 = new Clickable();
        click1.locate(width/2 - 178,height/2+ 190);
        click1.color = "#0079fe";       //Background color of the clickable (hex number as a string)
        click1.cornerRadius = 0;       //Corner radius of the clickable (float)
        click1.strokeWeight = 2;        //Stroke width of the clickable (float)
        click1.stroke = "black";      //Border color of the clickable (hex number as a string)
        click1.text = " ";       //Text of the clickable (string)
        click1.textColor = "white";   //Color of the text (hex number as a string)
        click1.textSize = 20;           //Size of the text (integer)
        click1.width = 395;
        click1.height = 60;
  }

    this.draw = function()
    {
        background(text13part1);

        push();
        translate(width/2 - 160, height/2 - 290);
        scale(1.5);
        fill(0);
        let h = hour();
        let m = minute();
        fill('white');
        text(h + ":"+ m, 0,0);
        pop();
        clicklock.draw();
        clickhome.draw();
        click.draw();
        click1.draw();
        image(app1, width/2 -10, height/2 + 250, 75,75);
        image(app2, width/2 + 230, height/2 - 236, 30,88);
    }
}

////////////////////////////////////////////////////////////////////////////////
function scene13part2( )
{
  this.setup = function() {
  }

  this.enter = function()
  {
    clicklock = new Clickable();
    clicklock.locate(width/2 + 232, height/2 - 233);
    clicklock.width = 25;
    clicklock.height = 80;
    clicklock.onPress = function()
     {
        mgr.showScene( part1 );
     }

     clickhome = new Clickable();
     clickhome.locate(width/2, height/2 + 260);
     clickhome.width = 60;
     clickhome.height = 60;
     clickhome.onPress = function()
      {
         mgr.showScene( part2 );
      }

        click = new Clickable();
        click.locate(width/2 - 178,height/2+130);
        click.color = "#0079fe";       //Background color of the clickable (hex number as a string)
      click.cornerRadius = 0;       //Corner radius of the clickable (float)
      click.strokeWeight = 2;        //Stroke width of the clickable (float)
      click.stroke = "#0079fe";      //Border color of the clickable (hex number as a string)
      click.text = "left-click for next scene";       //Text of the clickable (string)
      click.textColor = "white";   //Color of the text (hex number as a string)
      click.textSize = 20;           //Size of the text (integer)
        click.width = 395;
        click.height = 60;
        click.onPress = function()
         {
            mgr.showScene( scene14 );
         }

        click1 = new Clickable();
        click1.locate(width/2 - 178,height/2+ 190);
        click1.color = "#0079fe";       //Background color of the clickable (hex number as a string)
        click1.cornerRadius = 0;       //Corner radius of the clickable (float)
        click1.strokeWeight = 2;        //Stroke width of the clickable (float)
        click1.stroke = "black";      //Border color of the clickable (hex number as a string)
        click1.text = " ";       //Text of the clickable (string)
        click1.textColor = "white";   //Color of the text (hex number as a string)
        click1.textSize = 20;           //Size of the text (integer)
        click1.width = 395;
        click1.height = 60;
  }

    this.draw = function()
    {
        background(text13part2);

        push();
        translate(width/2 - 160, height/2 - 290);
        scale(1.5);
        fill(0);
        let h = hour();
        let m = minute();
        fill('white');
        text(h + ":"+ m, 0,0);
        pop();
        clicklock.draw();
        clickhome.draw();
        click.draw();
        click1.draw();
        image(app1, width/2 -10, height/2 + 250, 75,75);
        image(app2, width/2 + 230, height/2 - 236, 30,88);
    }
}

////////////////////////////////////////////////////////////////////////////////

function scene14( )
{
  this.setup = function() {
  }

  this.enter = function()
  {
    clicklock = new Clickable();
    clicklock.locate(width/2 + 232, height/2 - 233);
    clicklock.width = 25;
    clicklock.height = 80;
    clicklock.onPress = function()
     {
        mgr.showScene( part1 );
     }

     clickhome = new Clickable();
     clickhome.locate(width/2, height/2 + 260);
     clickhome.width = 60;
     clickhome.height = 60;
     clickhome.onPress = function()
      {
         mgr.showScene( part2 );
      }

        click = new Clickable();
        click.locate(width/2 - 178,height/2+130);
        click.color = "#0079fe";       //Background color of the clickable (hex number as a string)
      click.cornerRadius = 0;       //Corner radius of the clickable (float)
      click.strokeWeight = 2;        //Stroke width of the clickable (float)
      click.stroke = "#0079fe";      //Border color of the clickable (hex number as a string)
      click.text = "press home or lock to exit";       //Text of the clickable (string)
      click.textColor = "white";   //Color of the text (hex number as a string)
      click.textSize = 20;           //Size of the text (integer)
        click.width = 395;
        click.height = 60;
        click.onPress = function()
         {
            mgr.showScene( scene14 );
         }

        click1 = new Clickable();
        click1.locate(width/2 - 178,height/2+ 190);
        click1.color = "#0079fe";       //Background color of the clickable (hex number as a string)
        click1.cornerRadius = 0;       //Corner radius of the clickable (float)
        click1.strokeWeight = 2;        //Stroke width of the clickable (float)
        click1.stroke = "black";      //Border color of the clickable (hex number as a string)
        click1.text = " ";       //Text of the clickable (string)
        click1.textColor = "white";   //Color of the text (hex number as a string)
        click1.textSize = 20;           //Size of the text (integer)
        click1.width = 395;
        click1.height = 60;
  }

    this.draw = function()
    {
        background(text14);

        push();
        translate(width/2 - 160, height/2 - 290);
        scale(1.5);
        fill(0);
        let h = hour();
        let m = minute();
        fill('white');
        text(h + ":"+ m, 0,0);
        pop();
        clicklock.draw();
        clickhome.draw();
        click.draw();
        click1.draw();
        image(app1, width/2 -10, height/2 + 250, 75,75);
        image(app2, width/2 + 230, height/2 - 236, 30,88);
    }
}

////////////////////////////////////////////////////////////////////////////////
