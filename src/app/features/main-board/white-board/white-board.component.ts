import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-white-board',
  templateUrl: './white-board.component.html',
  styleUrls: ['./white-board.component.scss']
})
export class WhiteBoardComponent implements OnInit {

  bp: string = "../../.../../../../assets/black/blackpawn.jpg";
  bk: string = "../../.../../../../assets/black/blackking.jpg";
  bq: string = "../../.../../../../assets/black/blackqueen.jpg";
  bc: string = "../../.../../../../assets/black/blackcamel.jpg";
  bh: string = "../../.../../../../assets/black/blackhorse.jpg";
  be: string = "../../.../../../../assets/black/blackele.jpg";
  em: string = "";
  empObj   = { src: "", playerC: false, clipType: "noClip", addCls: "", imgT: "e" };
  queenObj = { src: this.bq, playerC: false, clipType: "clip-queen", addCls: "", imgT: "b" };
  disableBtn: any = true;
  turn: string = "w";
  nextTurn: string = "b";
  chngPawn = false;
  isKCheck = false;
  constructor() { }

  ngOnInit(): void {
  }

  Recover: any = {
    i: -1,
    j: -1,
    k: -1,
    l: -1,
    obj: { src: "", playerC: false, clipType: "", addCls: "", imgT: "" }
  };

  boardArray = [
    [
      { src: this.be, playerC: false, clipType: "clip-ele", addCls: "", imgT: "b" },
      { src: this.bh, playerC: false, clipType: "clip-horse", addCls: "", imgT: "b" },
      { src: this.bc, playerC: false, clipType: "clip-camel", addCls: "", imgT: "b" },
      { src: this.bq, playerC: false, clipType: "clip-queen", addCls: "", imgT: "b" },
      { src: this.bk, playerC: false, clipType: "clip-king", addCls: "", imgT: "b" },
      { src: this.bc, playerC: false, clipType: "clip-camel", addCls: "", imgT: "b" },
      { src: this.bh, playerC: false, clipType: "clip-horse", addCls: "", imgT: "b" },
      { src: this.be, playerC: false, clipType: "clip-ele", addCls: "", imgT: "b" },
    ],
    [
      { src: this.bp, playerC: false, clipType: "clip-pawn", addCls: "", imgT: "b" },
      { src: this.bp, playerC: false, clipType: "clip-pawn", addCls: "", imgT: "b" },
      { src: this.bp, playerC: false, clipType: "clip-pawn", addCls: "", imgT: "b" },
      { src: this.bp, playerC: false, clipType: "clip-pawn", addCls: "", imgT: "b" },
      { src: this.bp, playerC: false, clipType: "clip-pawn", addCls: "", imgT: "b" },
      { src: this.bp, playerC: false, clipType: "clip-pawn", addCls: "", imgT: "b" },
      { src: this.bp, playerC: false, clipType: "clip-pawn", addCls: "", imgT: "b" },
      { src: this.bp, playerC: false, clipType: "clip-pawn", addCls: "", imgT: "b" },
    ],
    [
      { src: "", playerC: false, clipType: "noClip", addCls: "", imgT: "e" },
      { src: "", playerC: false, clipType: "noClip", addCls: "", imgT: "e" },
      { src: "", playerC: false, clipType: "noClip", addCls: "", imgT: "e" },
      { src: "", playerC: false, clipType: "noClip", addCls: "", imgT: "e" },
      { src: "", playerC: false, clipType: "noClip", addCls: "", imgT: "e" },
      { src: "", playerC: false, clipType: "noClip", addCls: "", imgT: "e" },
      { src: "", playerC: false, clipType: "noClip", addCls: "", imgT: "e" },
      { src: "", playerC: false, clipType: "noClip", addCls: "", imgT: "e" },
    ],
    [
      { src: "", playerC: false, clipType: "noClip", addCls: "", imgT: "e" },
      { src: "", playerC: false, clipType: "noClip", addCls: "", imgT: "e" },
      { src: "", playerC: false, clipType: "noClip", addCls: "", imgT: "e" },
      { src: "", playerC: false, clipType: "noClip", addCls: "", imgT: "e" },
      { src: "", playerC: false, clipType: "noClip", addCls: "", imgT: "e" },
      { src: "", playerC: false, clipType: "noClip", addCls: "", imgT: "e" },
      { src: "", playerC: false, clipType: "noClip", addCls: "", imgT: "e" },
      { src: "", playerC: false, clipType: "noClip", addCls: "", imgT: "e" },
    ],
    [
      { src: "", playerC: false, clipType: "noClip", addCls: "", imgT: "e" },
      { src: "", playerC: false, clipType: "noClip", addCls: "", imgT: "e" },
      { src: "", playerC: false, clipType: "noClip", addCls: "", imgT: "e" },
      { src: "", playerC: false, clipType: "noClip", addCls: "", imgT: "e" },
      { src: "", playerC: false, clipType: "noClip", addCls: "", imgT: "e" },
      { src: "", playerC: false, clipType: "noClip", addCls: "", imgT: "e" },
      { src: "", playerC: false, clipType: "noClip", addCls: "", imgT: "e" },
      { src: "", playerC: false, clipType: "noClip", addCls: "", imgT: "e" },
    ],
    [
      { src: "", playerC: false, clipType: "noClip", addCls: "", imgT: "e" },
      { src: "", playerC: false, clipType: "noClip", addCls: "", imgT: "e" },
      { src: "", playerC: false, clipType: "noClip", addCls: "", imgT: "e" },
      { src: "", playerC: false, clipType: "noClip", addCls: "", imgT: "e" },
      { src: "", playerC: false, clipType: "noClip", addCls: "", imgT: "e" },
      { src: "", playerC: false, clipType: "noClip", addCls: "", imgT: "e" },
      { src: "", playerC: false, clipType: "noClip", addCls: "", imgT: "e" },
      { src: "", playerC: false, clipType: "noClip", addCls: "", imgT: "e" },
    ],
    [
      { src: this.bp, playerC: true, clipType: "clip-pawn", addCls: "", imgT: "w" },
      { src: this.bp, playerC: true, clipType: "clip-pawn", addCls: "", imgT: "w" },
      { src: this.bp, playerC: true, clipType: "clip-pawn", addCls: "", imgT: "w" },
      { src: this.bp, playerC: true, clipType: "clip-pawn", addCls: "", imgT: "w" },
      { src: this.bp, playerC: true, clipType: "clip-pawn", addCls: "", imgT: "w" },
      { src: this.bp, playerC: true, clipType: "clip-pawn", addCls: "", imgT: "w" },
      { src: this.bp, playerC: true, clipType: "clip-pawn", addCls: "", imgT: "w" },
      { src: this.bp, playerC: true, clipType: "clip-pawn", addCls: "", imgT: "w" },
    ],
    [
      { src: this.be, playerC: true, clipType: "clip-ele", addCls: "", imgT: "w" },
      { src: this.bh, playerC: true, clipType: "clip-horse", addCls: "", imgT: "w" },
      { src: this.bc, playerC: true, clipType: "clip-camel", addCls: "", imgT: "w" },
      { src: this.bk, playerC: true, clipType: "clip-king", addCls: "", imgT: "w" },
      { src: this.bq, playerC: true, clipType: "clip-queen", addCls: "", imgT: "w" },
      { src: this.bc, playerC: true, clipType: "clip-camel", addCls: "", imgT: "w" },
      { src: this.bh, playerC: true, clipType: "clip-horse", addCls: "", imgT: "w" },
      { src: this.be, playerC: true, clipType: "clip-ele", addCls: "", imgT: "w" },
    ]
  ];


  lstInd: any = [-1, 0];

  move(i: any, j: any): any {
    if (this.lstInd[0] == -1) {

      if (this.cond1(i, j)) {
        this.lstInd[0] = i;
        this.lstInd[1] = j;
        this.optionsFP(i, j);
        this.boardArray[i][j].addCls = "select";
        this.disableBtn = true;
      } else {
        return false;
      }

    }
    else {

      let k = this.lstInd[0];
      let l = this.lstInd[1];
      // alert(this.isKCheck);

      if (this.cond2(i, j, k, l)) {

        if ( this.boardArray[i][j].addCls == "moveOpt" ) {
          this.isKCheck = false;
          this.boardArray[i][j].addCls = "";
          this.boardArray[k][l].addCls = "";
          this.Recover.obj.src = this.boardArray[i][j].src;
          this.Recover.obj.playerC = this.boardArray[i][j].playerC;
          this.Recover.obj.imgT = this.boardArray[i][j].imgT;
          this.Recover.obj.clipType = this.boardArray[i][j].clipType;
          this.Recover.obj.addCls = this.boardArray[i][j].addCls;

          this.swip(i, j, k, l);

          if (this.chngPawn) {

            this.chngPawn = false;
            if (this.turn == "w") {
              let queen = { src: this.bq, playerC: true, clipType: "clip-queen", addCls: "", imgT: "w" };
              this.fill(i, j, queen);
            } else 
              this.fill(i, j, this.queenObj);

          }

          this.fill(k, l);
          // saving last positions
          this.Recover.i = i;
          this.Recover.j = j;
          this.Recover.k = k;
          this.Recover.l = l;
          this.lstInd[0] = -1;
          this.clearOpt("");
          this.disableBtn = false;
          this.turn = (this.turn == "w") ? "b" : "w";
          this.nextTurn = (this.nextTurn == "w") ? "b" : "w";
          this.findKIng();

        }
      }

    }
  }

  swip(i: any, j: any, k: any, l: any) {
    this.boardArray[i][j].src = this.boardArray[k][l].src;
    this.boardArray[i][j].playerC = this.boardArray[k][l].playerC;
    this.boardArray[i][j].imgT = this.boardArray[k][l].imgT;
    this.boardArray[i][j].clipType = this.boardArray[k][l].clipType;
    this.boardArray[i][j].addCls = this.boardArray[k][l].addCls;
  }

  fill(i: any, j: any, obj: any = this.empObj) {
    this.boardArray[i][j].src      = obj.src      ;
    this.boardArray[i][j].playerC  = obj.playerC  ;
    this.boardArray[i][j].imgT     = obj.imgT     ;
    this.boardArray[i][j].clipType = obj.clipType ;
    this.boardArray[i][j].addCls   = obj.addCls   ;
  }

  markKingChk(kingChk: any){
    for (let x = 0; x < 8; x++) {
      for (let y = 0; y < 8; y++) {
        if (this.boardArray[x][y].src == this.bk && this.boardArray[x][y].imgT == this.turn)
          if(kingChk)
          this.boardArray[x][y].addCls = "kingCheck";
      }
    }
  }

  findKIng() {
    let i=-1, j=-1;
    for (let x = 0; x < 8; x++) {
      for (let y = 0; y < 8; y++) {
        if (this.boardArray[x][y].src == this.bk && this.boardArray[x][y].imgT == this.turn)
        {
          i = x; j = y;
          break;
        }
      }
    }
    this.ckhKing(i, j, 1, 1, -1, this.bc, this.bq)
    if(this.boardArray[i][j].addCls != "kingCheck")
    this.ckhKing(i, j, 1, -1, -1, this.bc, this.bq);
    
    if(this.boardArray[i][j].addCls != "kingCheck")
    this.ckhKing(i, j, -1,  1, -1, this.bc, this.bq);
    if(this.boardArray[i][j].addCls != "kingCheck")
    this.ckhKing(i, j, -1, -1, -1, this.bc, this.bq);
    
    if (this.turn == 'w') { 
      if(this.boardArray[i][j].addCls != "kingCheck")
      this.ckhKing(i, j, -1,  1,  1, this.bp);
      if(this.boardArray[i][j].addCls != "kingCheck")
      this.ckhKing(i, j, -1, -1,  1, this.bp);
    } else {
      if(this.boardArray[i][j].addCls != "kingCheck")
      this.ckhKing(i, j,  1,  1,  1, this.bp);
      if(this.boardArray[i][j].addCls != "kingCheck")
      this.ckhKing(i, j,  1, -1,  1, this.bp);
    }
    
    if(this.boardArray[i][j].addCls != "kingCheck")
    this.ckhKing(i, j,  2,  1, 1, this.bh);
    if(this.boardArray[i][j].addCls != "kingCheck")
    this.ckhKing(i, j,  2, -1, 1, this.bh);
    if(this.boardArray[i][j].addCls != "kingCheck")
    this.ckhKing(i, j, -2, -1, 1, this.bh);
    if(this.boardArray[i][j].addCls != "kingCheck")
    this.ckhKing(i, j, -2,  1, 1, this.bh);
    if(this.boardArray[i][j].addCls != "kingCheck")
    this.ckhKing(i, j,  1,  2, 1, this.bh);
    if(this.boardArray[i][j].addCls != "kingCheck")
    this.ckhKing(i, j,  1, -2, 1, this.bh);
    if(this.boardArray[i][j].addCls != "kingCheck")
    this.ckhKing(i, j, -1, -2, 1, this.bh);
    if(this.boardArray[i][j].addCls != "kingCheck")
    this.ckhKing(i, j, -1,  2, 1, this.bh);
    
    if(this.boardArray[i][j].addCls != "kingCheck")
    this.ckhKing(i, j,  0, -1, -1, this.be, this.bq);
    if(this.boardArray[i][j].addCls != "kingCheck")
    this.ckhKing(i, j,  0,  1, -1, this.be, this.bq);
    if(this.boardArray[i][j].addCls != "kingCheck")
    this.ckhKing(i, j,  1,  0, -1, this.be, this.bq);
    if(this.boardArray[i][j].addCls != "kingCheck")
    this.ckhKing(i, j, -1,  0, -1, this.be, this.bq);
  } 

  ckhKing(i:any, j:any, stpI:any, stpJ:any, count:any, ...chkFor:any):any {
    let ind = 1;
    while (this.boardArray[i + (stpI * ind)]?.[j + (stpJ * ind)]?.imgT == "e" || this.boardArray[i + (stpI * ind)]?.[j + (stpJ * ind)]?.imgT == this.nextTurn)
    {
       if (this.boardArray[i + (stpI*ind)]?.[j + (stpJ*ind)]?.src == chkFor[0] || this.boardArray[i + (stpI*ind)]?.[j + (stpJ*ind)]?.src == chkFor?.[1]) {
         this.boardArray[i][j].addCls = "kingCheck"; this.isKCheck = true;
        } else if(!(this.boardArray[i + (stpI * ind)]?.[j + (stpJ * ind)]?.imgT == "e")) {
           break;
         }
      
      if (ind == count) {    
        break;
      }
      ind++;
    }
  }
  //conditions 1///
  cond1(i: any, j: any): any {
    if (this.turn == this.boardArray[i][j].imgT) {
      return true;
    } else {
      // alert(this.turn);
      return false;
    }
  }

  // 2
  cond2(i: any, j: any, k: any, l: any): any {
    if (this.boardArray[i][j].imgT == this.turn) {
      this.boardArray[k][l].addCls = "";
      this.boardArray[i][j].addCls = "select";
      this.lstInd[0] = i;
      this.lstInd[1] = j;
      this.optionsFP(i, j);
      this.markKingChk(this.isKCheck);
      return false;
    } else {
      return true
    }
  }
  // clesrrr
  clearOpt(remove:any = "kingCheck") {
    for (let i = 0; i < 8; i++) {
      for (let j = 0; j < 8; j++) {
        this.boardArray[i][j].addCls = (this.boardArray[i][j].addCls == "select"  || this.boardArray[i][j].addCls == remove) ? this.boardArray[i][j].addCls : "";
      }
    }
  }

  optionsFP(i: any, j: any) {
    this.clearOpt();
    if (this.boardArray[i][j].src == this.bp) {
      let steps = -1;
      if (this.boardArray[i][j].imgT == "b") {
        steps = 1;
      }
      if (this.boardArray[i + steps]?.[j]?.imgT == "e") {
        if (!this.dhundo((i + steps), (j), i, j)) { 
          this.boardArray[i + steps][j].addCls = "moveOpt";
          if (i + steps == 0 || i + steps == 7) { this.chngPawn = true; } else { this.chngPawn = false; } 
        }
        if ((i == 1 && this.turn == "b") || (i == 6 && this.turn == "w")) {
          if (this.boardArray[i + (steps * 2)][j].imgT == "e") {
            if (!this.dhundo((i + (steps * 2)), (j), i, j)) { 
              this.boardArray[i + (steps * 2)][j].addCls = "moveOpt";
            }
          }
        }
      }
      if (this.boardArray[i + steps]?.[j + 1]?.imgT == this.nextTurn) {
        if (!this.dhundo((i + steps), (j + 1), i, j)) {
          this.boardArray[i + steps][j + 1].addCls = "moveOpt";
          if (i + steps == 0 || i + steps == 7) { this.chngPawn = true; } else { this.chngPawn = false; }
        }
      }
      if (this.boardArray[i + steps]?.[j - 1]?.imgT == this.nextTurn) {
        if (!this.dhundo((i + steps), (j - 1), i, j)) {
          this.boardArray[i + steps][j - 1].addCls = "moveOpt";
          if (i + steps == 0 || i + steps == 7) { this.chngPawn = true; } else { this.chngPawn = false; }
        }
      }
    }
    else if (this.boardArray[i][j].src == this.bc) {
      this.chkOpt(i, j,  1,  1);
      this.chkOpt(i, j,  1, -1);
      this.chkOpt(i, j, -1, -1);
      this.chkOpt(i, j, -1,  1);
    }
    else if (this.boardArray[i][j].src == this.be) {
      this.chkOpt(i, j,  1,  0);
      this.chkOpt(i, j, -1,  0);
      this.chkOpt(i, j,  0, -1);
      this.chkOpt(i, j,  0,  1);
    }
    else if (this.boardArray[i][j].src == this.bq) {
      this.chkOpt(i, j,  1,  1);
      this.chkOpt(i, j,  1, -1);
      this.chkOpt(i, j, -1, -1);
      this.chkOpt(i, j, -1,  1);
      this.chkOpt(i, j,  1,  0);
      this.chkOpt(i, j, -1,  0);
      this.chkOpt(i, j,  0, -1);
      this.chkOpt(i, j,  0,  1);
    }
    else if (this.boardArray[i][j].src == this.bk) {
      this.chkOpt(i, j,  1,  1);
      this.chkOpt(i, j,  1, -1);
      this.chkOpt(i, j, -1, -1);
      this.chkOpt(i, j, -1,  1);
      this.chkOpt(i, j,  1,  0);
      this.chkOpt(i, j, -1,  0);
      this.chkOpt(i, j,  0, -1);
      this.chkOpt(i, j,  0,  1);
    }
    else if (this.boardArray[i][j].src == this.bh) {
      this.chkOpt(i, j,  2,  1);
      this.chkOpt(i, j,  2, -1);
      this.chkOpt(i, j, -2, -1);
      this.chkOpt(i, j, -2,  1);
      this.chkOpt(i, j,  1,  2);
      this.chkOpt(i, j,  1, -2);
      this.chkOpt(i, j, -1, -2);
      this.chkOpt(i, j, -1,  2);
    }
    else {
      alert("error error.......")
    }
  }

  // options for selected piece 
  chkOpt(i:any, j:any, stpI:any, stpJ:any) {
    let ind = 1;
    while (this.boardArray[i + (stpI*ind)]?.[j + (stpJ*ind)]?.imgT == "e" || this.boardArray[i + (stpI*ind)]?.[j + (stpJ*ind)]?.imgT == this.nextTurn) {
      if (this.boardArray[i + (stpI * ind)]?.[j + (stpJ * ind)]?.imgT == this.nextTurn) {
        if (!this.dhundo((i + (stpI * ind)), (j + (stpJ * ind)), i, j)) {
          // this.dhundo((i + (stpI * ind)), (j + (stpJ * ind)), i, j);
          this.boardArray[i + (stpI*ind)][j + (stpJ*ind)].addCls = "moveOpt";
          break;
        }
      } else {
        if (!this.dhundo((i + (stpI * ind)), (j + (stpJ * ind)), i, j)) {
          //  this.dhundo((i + (stpI * ind)), (j + (stpJ * ind)), i, j);
          this.boardArray[i + (stpI * ind)][j + (stpJ * ind)].addCls = "moveOpt";
        }
        }
      
      if (this.boardArray[i][j].src == this.bk || this.boardArray[i][j].src == this.bh) {    
        break;
      }
      ind++;
    }
  }

  dhundo(oi:any, oj:any, pi:any, pj:any):any {
    let i = -1, j = -1;
    if(this.boardArray[pi]?.[pj]?.src != this.bk){
    for (let x = 0; x < 8; x++) {
      for (let y = 0; y < 8; y++) {
        if (this.boardArray[x][y].src == this.bk && this.boardArray[x][y].imgT == this.turn) {
          i = x; j = y;
          break;
        }
        // console.log(x+""+y);
      }
     }
    } else {
      i = oi; j = oj;
         // cros  X straight combo////////////////////////////////////////////////////////////////////////////////////
      if(this.ckhCheck(i, j, -1,  1, oi, oj, pi, pj,  1, this.bk)) { console.log("ival"); return true; };
      if(this.ckhCheck(i, j,  1,  1, oi, oj, pi, pj,  1, this.bk)) { console.log("ival"); return true; };
      if(this.ckhCheck(i, j, -1, -1, oi, oj, pi, pj,  1, this.bk)) { console.log("ival"); return true; };
      if(this.ckhCheck(i, j,  1, -1, oi, oj, pi, pj,  1, this.bk)) { console.log("ival"); return true; };
      if(this.ckhCheck(i, j, -1,  0, oi, oj, pi, pj,  1, this.bk)) { console.log("ival"); return true; };
      if(this.ckhCheck(i, j,  0,  1, oi, oj, pi, pj,  1, this.bk)) { console.log("ival"); return true; };
      if(this.ckhCheck(i, j,  0, -1, oi, oj, pi, pj,  1, this.bk)) { console.log("ival"); return true; };
      if(this.ckhCheck(i, j,  1,  0, oi, oj, pi, pj,  1, this.bk)) { console.log("ival"); return true; };
    }

    // cross directions  ////////////////////////////////////////////////////////////////////////////////////////
    if(this.ckhCheck(i, j, -1,  1, oi, oj, pi, pj, -1, this.bc, this.bq)) { console.log("ival"); return true; };
    if(this.ckhCheck(i, j,  1,  1, oi, oj, pi, pj, -1, this.bc, this.bq)) { console.log("ival"); return true; };
    if(this.ckhCheck(i, j, -1, -1, oi, oj, pi, pj, -1, this.bc, this.bq)) { console.log("ival"); return true; };
    if (this.ckhCheck(i, j, 1, -1, oi, oj, pi, pj, -1, this.bc, this.bq)) { console.log("ival"); return true; };
    
    // straight directions //////////////////////////////////////////////////////////////////////////////////////
    if(this.ckhCheck(i, j, -1,  0, oi, oj, pi, pj, -1, this.be, this.bq)) { console.log("ival"); return true; };
    if(this.ckhCheck(i, j,  0,  1, oi, oj, pi, pj, -1, this.be, this.bq)) { console.log("ival"); return true; };
    if(this.ckhCheck(i, j,  0, -1, oi, oj, pi, pj, -1, this.be, this.bq)) { console.log("ival"); return true; };
    if(this.ckhCheck(i, j,  1,  0, oi, oj, pi, pj, -1, this.be, this.bq)) { console.log("ival"); return true; };
    
    // horse chk ////////////////////////////////////////////////////////////////////////////////////////////////
    if(this.ckhCheck(i, j,  2,  1, oi, oj, pi, pj, 1, this.bh)) { console.log("ival"); return true; };
    if(this.ckhCheck(i, j,  2, -1, oi, oj, pi, pj, 1, this.bh)) { console.log("ival"); return true; };
    if(this.ckhCheck(i, j, -2,  1, oi, oj, pi, pj, 1, this.bh)) { console.log("ival"); return true; };
    if(this.ckhCheck(i, j, -2, -1, oi, oj, pi, pj, 1, this.bh)) { console.log("ival"); return true; };
    if(this.ckhCheck(i, j,  1,  2, oi, oj, pi, pj, 1, this.bh)) { console.log("ival"); return true; };
    if(this.ckhCheck(i, j, -1,  2, oi, oj, pi, pj, 1, this.bh)) { console.log("ival"); return true; };
    if(this.ckhCheck(i, j,  1, -2, oi, oj, pi, pj, 1, this.bh)) { console.log("ival"); return true; };
    if(this.ckhCheck(i, j, -1, -2, oi, oj, pi, pj, 1, this.bh)) { console.log("ival"); return true; };
    // pyada /////////////////////////////////////////////////////////////////////////////////////
    if (this.turn == "w") {
      if(this.ckhCheck(i, j, -1,  1, oi, oj, pi, pj, 1, this.bp)) { console.log("ival"); return true; };
      if(this.ckhCheck(i, j, -1, -1, oi, oj, pi, pj, 1, this.bp)) { console.log("ival"); return true; };
    }
    if (this.turn == "b") {
      if(this.ckhCheck(i, j,  1,  1, oi, oj, pi, pj, 1, this.bp)) { console.log("ival"); return true; };
      if(this.ckhCheck(i, j,  1, -1, oi, oj, pi, pj, 1, this.bp)) { console.log("ival"); return true; };
    }
  }

  ckhCheck(i: any, j: any, stpI: any, stpJ: any,oi:any, oj:any, pi: any, pj: any, count: any, ...chkFor: any): any {
    // alert(pi + "p" + pj);
    // alert(oi + "p" + oj);
    let posVal = -1;
    let ind = 1;
    while (this.boardArray[i + (stpI * ind)]?.[j + (stpJ * ind)]?.imgT == "e" || this.boardArray[i + (stpI * ind)]?.[j + (stpJ * ind)]?.imgT == "w" || this.boardArray[i + (stpI * ind)]?.[j + (stpJ * ind)]?.imgT == "b")
    {
      if (this.boardArray[i + (stpI * ind)]?.[j + (stpJ * ind)]?.imgT == "e") {
        if ( (i + (stpI * ind)) == oi && (j + (stpJ * ind)) == oj ) {
          break;
        } else {
          console.log("con.."); if (ind == count) { break; } ind++; 
          continue;
        }
      }
      if (this.boardArray[i + (stpI * ind)]?.[j + (stpJ * ind)]?.imgT == this.turn) {
        if ( (i + (stpI * ind)) == pi && (j + (stpJ * ind)) == pj ) {
           if (ind == count) { break; }  ind++; continue;
        } else { break; }
      }
      if (this.boardArray[i + (stpI * ind)]?.[j + (stpJ * ind)]?.src == chkFor[0] || this.boardArray[i + (stpI * ind)]?.[j + (stpJ * ind)]?.src == chkFor[1] || this.boardArray[i + (stpI * ind)]?.[j + (stpJ * ind)]?.src == chkFor[2]) {
        if ((i + (stpI * ind)) == oi && (j + (stpJ * ind)) == oj) {
          break;
        } 
        return "invalid!!";
      } else {
        break;
      }

    }
  }

  /////undo//////
  undo() {

    this.clearOpt();
    this.swip(this.Recover.k, this.Recover.l, this.Recover.i, this.Recover.j);
    this.fill(this.Recover.i, this.Recover.j, this.Recover.obj);

    this.turn = (this.turn == "w") ? "b" : "w";
    this.nextTurn = (this.nextTurn == "w") ? "b" : "w";
    this.disableBtn = true;
    this.lstInd[0] = -1;
    this.findKIng();
  }
  tr: any = "transform : rotateX(-80deg)";
  
  rotX(ran:any,b:any) {
    console.log(ran.value);
    // b.style.transform = "rotateX(" +ran.value+"deg)";
    b.style.transform = "rotate3d(0,"+-ran.value+",1,180deg)";
    // b.style.transform = "rotate3d(0,1,1,180deg)";
    // console.log(b.style);
    // this.tr = "transform : rotateX("+-(ran.value)+"deg)";
  }
  rotY(ran:any,b:any) {
    console.log(ran.value);
    // b.style.transform = "rotateX(" +ran.value+"deg)";
    b.style.transform = "rotate3d(0,1,0," +ran.value+"deg)";
    // console.log(b.style);
  }
}
