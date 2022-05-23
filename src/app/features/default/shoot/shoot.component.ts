import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shoot',
  templateUrl: './shoot.component.html',
  styleUrls: ['./shoot.component.scss']
})
export class ShootComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    // setInterval(() => {
    //   this.suffle();
    // }, 1000*29);
  }

  blocksArr = [
    {
      id: 1,
      top: '0px',
      delay: '1s;'
    },
    {
      id: 2,
      top: '110px',
      delay: '6s'
    },
    {
      id: 3,
      top: '220px',
      delay: '8s'
    },
    {
      id: 4,
      top: '330px',
      delay: '4s'
    },
    {
      id: 5,
      top: '440px',
      delay: '15s'
    },
    {
      id: 6,
      top: '550px',
      delay: '9s'
    },
    {
      id: 7,
      top: '660px',
      delay: '3s'
    },
    {
      id: 8,
      top: '110px',
      delay: '1s;'
    },
    {
      id: 9,
      top: '330px',
      delay: '17s'
    },
    {
      id: 10,
      top: '550px',
      delay: '24s'
    },
    {
      id: 11,
      top: '220px',
      delay: '23s'
    },
    {
      id: 12,
      top: '550px',
      delay: '22s'
    },
    {
      id: 13,
      top: '660px',
      delay: '25s'
    },
    {
      id: 14,
      top: '0px',
      delay: '27s'
    },
    {
      id: 15,
      top: '0px',
      delay: '27s'
    },
    {
      id: 16,
      top: '110px',
      delay: '27.2s'
    },
    {
      id: 17,
      top: '220px',
      delay: '27.4s'
    },
    {
      id: 18,
      top: '330px',
      delay: '27.6s'
    },
    {
      id: 19,
      top: '440px',
      delay: '27.8s'
    },
    {
      id: 20,
      top: '550px',
      delay: '28s'
    },
    {
      id: 21,
      top: '660px',
      delay: '28.2s'
    },
  ];

  snkLft = 1100;
  incBy = 81;

  snakeArr = [
    {
      id: 1,
      top: '300px',
      delay:'0.05s',
      left: '' + this.snkLft + 'px',
    },
    {
      id: 2,
      top: '300px',
      delay:'0.1s',
      left: + this.snkLft + this.incBy + 'px',
    },
    {
      id: 3,
      top: '300px',
      delay:'0.17s',
      left: + this.snkLft + this.incBy*2 + 'px',
    },
    {
      id: 4,
      top: '300px',
      delay:'0.24s',
      left: + this.snkLft + this.incBy*3 + 'px',
    },
    {
      id: 5,
      top: '300px',
      delay:'0.32s',
      left: + this.snkLft + this.incBy*4 + 'px',
    },
    {
      id: 6,
      top: '300px',
      delay:'0.42s',
      left: + this.snkLft + this.incBy*5 + 'px',
    },
    {
      id: 7,
      top: '300px',
      delay:'0.54s',
      left: + this.snkLft + this.incBy*6 + 'px',
    },
    {
      id: 8,
      top: '300px',
      delay:'0.68s',
      left: + this.snkLft + this.incBy*7 + 'px',
    },
    // {
    //   id: 9,
    //   top: '300px',
    //   delay:'0.45s',
    //   left: + this.snkLft + this.incBy*8 + 'px',
    // },
    // {
    //   id: 10,
    //   top: '300px',
    //   delay:'0.5s',
    //   left: + this.snkLft + this.incBy*9 + 'px',
    // }
  ];

  last = 300;
  move(event: any) {
    if (event.which == 1) {
    
      let top = event.clientY;
      top = (top > 70 && top < 752) ? top : (top <= 70) ? 70 : 752  ;

      let d = Math.abs(this.last - event.clientY);
      if (d > 50) {
        console.log("ff" + d);
      }else console.log("mm"+d)
      
      this.last = event.clientY;
      
      this.snakeArr.forEach(snake => {
        // if (d > 30 && d<40) snake.left = 1100+(74*(snake.id-1))+"px";
        // else if(d > 40 && d<50) {console.log(d); snake.left = 1100+(64*(snake.id-1))+"px";}
        // else if(d > 50  && d<70) {console.log(d); snake.left = 1100+(54*(snake.id-1))+"px";}
        // else if(d > 70  && d<100) {console.log(d); snake.left = 1100+(45*(snake.id-1))+"px";}
        // else if(d > 100 && d<130){console.log(d); snake.left = 1100+(37*(snake.id-1))+"px";}
        // else if(d > 130 && d<160){console.log(d); snake.left = 1100+(31*(snake.id-1))+"px";}
        // else if(d > 160){console.log(d); snake.left = 1100+(29*(snake.id-1))+"px";}
        // else {console.log(d); snake.left = 1100+(81*(snake.id-1))+"px";}
        snake.top = top-70 + "px";
      });
      // document.getEl ementById("b").innerHTML = "cordinates("+sn.clientX+","+sn.clientY+")";
    }
    
  }
  

  suffle() {
    let i = Math.floor(Math.random() * 7);
    for ( ;i>0 ;i--) {
      let a = this.blocksArr[i]
      this.blocksArr[i] = this.blocksArr[i-1];
      this.blocksArr[i - 1] = a;
    }
  }
}
