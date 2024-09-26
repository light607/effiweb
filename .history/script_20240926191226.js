const sparkle = document.querySelector(".sparkle");
var current_start_count=0;
const MAX_STARS =60;
const STAR_INTERVAL = 16;
const MAX_STAR_LIFE = 3;
const MIN_STAR_LIFE = 1;
const MAX_STAR_SIZE = 70;
const MIN_STAR_SIZE = 30;
const MIN_STAR_TRAVEL_X = 100;
const MIN_STAR_TRAVEL_Y = 100;
const Start =class{
    constructor(){
        this.size =this.random(MAX_STAR_SIZE,MIN_STAR_SIZE);
        this.x=this.random(sparkle.offsetWidth,)
    }
}