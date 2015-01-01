function histogram_object(xAxis, title){
  this.margin =  25 ;
  this.canvas = document.getElementById('canvas_'+xAxis) ;
  this.context = this.canvas.getContext('2d') ;
  this.context.translate(0.5,0.5) ;
  this.xMin  =  1e30 ;
  this.xMax  = -1e30 ;
  this.nBins =    20 ;
  this.y_increment = 1 ;
  this.title = title ;
  this.xAxis = xAxis ;

  var index = 0 ;
  this.color = '#dddddd' ;
  if(xAxis=='leg_1'){ index = 0 ; this.color = colors[0] ; }
  if(xAxis=='leg_2'){ index = 1 ; this.color = colors[1] ; }
  if(xAxis=='leg_3'){ index = 2 ; this.color = colors[2] ; }
  if(xAxis=='leg_4'){ index = 3 ; this.color = colors[3] ; }
  if(xAxis=='leg_5'){ index = 4 ; this.color = colors[4] ; }
  if(xAxis=='leg_6'){ index = 5 ; this.color = colors[5] ; }
  for(var i=0 ; i<teams.length ; i++){
    if(xAxis=='total_time'){
      if(teams[i].seconds_total<this.xMin) this.xMin = teams[i].seconds_total ;
      if(teams[i].seconds_total>this.xMax) this.xMax = teams[i].seconds_total ;
    }
    else{
      if(teams[i].runners[index].seconds_total<this.xMin) this.xMin = teams[i].runners[index].seconds_total ;
      if(teams[i].runners[index].seconds_total>this.xMax) this.xMax = teams[i].runners[index].seconds_total ;
    }
  }
  // Update xMin, xMax
  this.xMin = 100*(Math.floor(this.xMin/100)-1) ;
  this.xMax = 100*(Math.floor(this.xMax/100)+1) ;

  this.bins = new Array() ;
  for(var i=0 ; i<this.nBins ; i++){ this.bins.push(0) ; }
  for(var i=0 ; i<teams.length ; i++){
    if(xAxis=='total_time'){
      var b = Math.floor(this.nBins*(teams[i].seconds_total-this.xMin)/(this.xMax-this.xMin)) ;
      if(b>=0 && b<this.bins.length) this.bins[b]++ ;
    }
    else{
      var b = Math.floor(this.nBins*(teams[i].runners[index].seconds_total-this.xMin)/(this.xMax-this.xMin)) ;
      if(b>=0 && b<this.bins.length) this.bins[b]++ ;
    }
  }
  this.yMin = 0 ;
  this.yMax = 0 ;
  for(var i=0 ; i<this.nBins ; i++){
    if(this.bins[i]>this.yMax) this.yMax = this.bins[i] ;
  }

  // Update yMin, yMax
  this.yMax = 10*(Math.floor(this.yMax/10)+1) ;

  this.draw = function(){
    this.context.fillStyle = '#ffffff' ;
    this.context.fillRect(0,0,this.canvas.width,this.canvas.height) ;
    this.context.fill() ;

    // Bin contents
    this.binWidth = (this.canvas.width-2*this.margin)/this.nBins ;
    for(var i=0 ; i<this.nBins ; i++){
      this.context.fillStyle = this.color ;
      var x = this.margin+i*this.binWidth ;
      var y = this.canvas.height-this.margin ;
      var w = this.binWidth+1 ;
      var h = -(this.canvas.height-2*this.margin)*this.bins[i]/this.yMax ;
      this.context.fillRect(x,y,w,h) ;
      this.context.fill() ;
    }

    // Axes
    this.context.strokeStyle = '#000000' ;
    this.context.lineWidth = 1 ;
    this.context.strokeRect(this.margin,this.margin,this.canvas.width-2*this.margin,this.canvas.height-2*this.margin) ;
    this.context.stroke() ;

    // Ticks
    this.context.beginPath() ;
    this.context.strokeStyle = '#000000' ;
    this.tickLength = 10 ;
    for(var i=0 ; i<=this.nBins ; i++){
      var x  = this.margin+i*this.binWidth ;
      var y1 = this.canvas.height-this.margin ;
      var y2 = y1 - this.tickLength ;
      var y3 = this.margin ;
      var y4 = y3 + this.tickLength ;
      if(i%4==0){
        this.context.fillStyle = '#000000' ;
        this.context.textAlign = 'center' ;
        this.context.font = axis_label_size + 'px arial' ;
        var u = this.xMin + (this.xMax-this.xMin)*i/this.nBins ;
        this.context.fillText(u,x,y1+1*this.tickLength) ;
        this.context.fill() ;
        y2 = y1 - 2*this.tickLength ;
        y4 = y3 + 2*this.tickLength ;
      }
      this.context.moveTo(x,y1) ;
      this.context.lineTo(x,y2) ;
      this.context.moveTo(x,y3) ;
      this.context.lineTo(x,y4) ;
    }
    var y_value = 0 ;
    while(y_value<=this.yMax){
      var x1 = this.margin ;
      var x2 = x1 + this.tickLength ;
      var x3 = this.canvas.width-this.margin ;
      var x4 = x3 - this.tickLength ;
      var y  = this.canvas.height-this.margin-(this.canvas.height-2*this.margin)*y_value/this.yMax ;
      if(y_value%5==0){
        this.context.fillStyle = '#000000' ;
        this.context.textAlign = 'center' ;
        this.context.font = axis_label_size + 'px arial' ;
        this.context.fillText(y_value,x1-1*this.tickLength,y) ;
        this.context.fill() ;
        x2 = x1 + 2*this.tickLength ;
        x4 = x3 - 2*this.tickLength ;
      }
      this.context.moveTo(x1,y) ;
      this.context.lineTo(x2,y) ;
      this.context.moveTo(x3,y) ;
      this.context.lineTo(x4,y) ;
      y_value += this.y_increment ;
    }
    this.context.closePath() ;
    this.context.stroke() ;

    // Axis labels
    var x = 0.5*this.canvas.width ;
    var y = this.canvas.height - 0.25*this.margin ;
    this.context.fillStyle = '#000000' ;
    this.context.textAlign = 'center' ;
    this.context.font = 0.4*this.margin + 'px arial' ;
    this.context.fillText(this.title,x,y) ;
    this.context.fill() ;

    // Draw highlight
    for(var i=0 ; i<teams.length ; i++){
      if(teams[i].name==highlight){
        var team = teams[i] ;
        var time = 0 ;
        if(this.xAxis=='total_time') time = team.seconds_total ;
        if(this.xAxis=='leg_1'     ) time = team.runners[0].seconds_total ;
        if(this.xAxis=='leg_2'     ) time = team.runners[1].seconds_total ;
        if(this.xAxis=='leg_3'     ) time = team.runners[2].seconds_total ;
        if(this.xAxis=='leg_4'     ) time = team.runners[3].seconds_total ;
        if(this.xAxis=='leg_5'     ) time = team.runners[4].seconds_total ;
        if(this.xAxis=='leg_6'     ) time = team.runners[5].seconds_total ;
        var u = this.margin + (this.canvas.width-2*this.margin)*(time-this.xMin)/(this.xMax-this.xMin) ;
        var y1 = this.canvas.height - this.margin ;
        var y2 = this.margin ;
        this.context.strokeStyle = '#000000' ;
        this.context.lineWidth = 5 ;
        this.context.beginPath() ;
        this.context.moveTo(u,y1) ;
        this.context.lineTo(u,y2) ;
        this.context.stroke() ;
        this.context.beginPath() ;
        this.context.moveTo(u,y1) ;
        this.context.lineTo(u+10,y1-10) ;
        this.context.lineTo(u-10,y1-10) ;
        this.context.lineTo(u,y1) ;
        this.context.fill() ;
        break ;
      }
    }
  }
}
