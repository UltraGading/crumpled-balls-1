class Dustbin {
constructor(){
var options = {
'isStatic': true
}
this.body1 = Bodies.rectangle(680,650,132,12, options)
this.body2 = Bodies.rectangle(625,610,12,66, options)
this.body3 = Bodies.rectangle(735,610,12,66, options)
World.add(world, this.body1)
World.add(world, this.body2)
World.add(world, this.body3)
}
display(){
fill('#e3e3e3')
rectMode(CENTER)
rect(680,650,132,12)
rect(625,610,12,66)
rect(735,610,12,66)
}
}