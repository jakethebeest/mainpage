let can;
let sl;
let x=1;
let y=1;
let xsp;
let ysp;
function setup(){
	can=createCanvas(600,400);
	can.position(100,100);can.class("bdd");
	sl=createSlider(20,200,30);sl.position(100,50);
	sl.mousePressed(chgwidth);
	
}
function draw(){
	background(202,220,100);
ellipse(x,y,chgwidth(),chgwidth());
	setxysp();
	x+=xsp;
	y+=ysp;
	chbd();
	}
	function chgwidth(){
		z=0;
		return sl.value();
		
	}
	function chbd(){
		if(y<=0||y>=height)ysp*=-1;
		if(x<=0||x>=width)xsp*=-1;
	}
	function setxysp(){
		//if(mousePressed==true){
		if(z==0){
			if(xsp<0){
		j=sl.value();
		ysp=100/j;
		xsp=-100/j;
		z++;
			}
			if(xsp>0&&ysp>0){
		j=sl.value();
		ysp=100/j;
		xsp=100/j;
		z++;
			}
			if(ysp<0){
		j=sl.value();
		ysp=-100/j;
		xsp=100/j;
		z++;
			}
		}
		
	}