var average_times   = new Array() ;
var average_runners = new Array() ;
for(var j=0 ; j<teams[0].runners.length ; j++){
  average_times.push(0) ;
  for(var i=0 ; i<teams.length ; i++){
    average_times[j] += teams[i].runners[j].seconds_total ;
  }
  average_times[j] /= teams.length ;
  var hours   = Math.floor(average_times[j]/3600) ;
  var minutes = Math.floor((average_times[j]-3600*hours)/60) ;
  var seconds = Math.floor(average_times[j]%60) ;
  average_runners.push(new runner_object('Average runner '+(j+1), j+1, hours, minutes, seconds)) ;
}
var average_team = new team_object('Average team',average_runners) ;
teams.push(average_team) ;

for(var i=0 ; i<teams.length ; i++){
  teams[i].seconds_total = 3600*teams[i].hours + 60*teams[i].minutes + teams[i].seconds ;
  var cumulative_time = 0 ;
  for(var j=0 ; j<teams[i].runners.length ; j++){
    teams[i].runners[j].start_time = cumulative_time ;
    cumulative_time += teams[i].runners[j].seconds_total ;
    teams[i].runners[j].end_time = cumulative_time ;
  }
}

// Find out the latest time a leg starts to make plots prettier
var latest_leg_starts = new Array() ;
for(var j=0 ; j<teams[0].runners.length ; j++){ latest_leg_starts.push(0) ; }
for(var j=0 ; j<teams[0].runners.length ; j++){
  for(var i=0 ; i<teams.length ; i++){
    if(teams[i].runners[j].start_time>latest_leg_starts[j]) latest_leg_starts[j] = teams[i].runners[j].start_time ;
  }
}
// Find the latest possible end after sorting by leg
var latest_possible_end = 0 ;
for(var j=0 ; j<teams[0].runners.length ; j++){
  for(var i=0 ; i<teams.length ; i++){
    var latest_time = teams[i].seconds_total-teams[i].runners[j].start_time+latest_leg_starts[j] ;
    if(latest_time>latest_possible_end) latest_possible_end = latest_time ;
  }
}

// Rank teams and runners
teams.sort( function(a,b){ return (a.seconds_total - b.seconds_total) ; } ) ;
for(var i=0 ; i<teams.length ; i++){ teams[i].rank = i+1 ; }
for(var j=0 ; j<teams[0].runners.length ; j++){
  teams.sort( function(a,b){ return (a.runners[j].seconds_total - b.runners[j].seconds_total) ; } ) ;
  for(var i=0 ; i<teams.length ; i++){ teams[i].runners[j].rank = i+1 ; }
}

// Work out how many times runners are overtaken
for(var i=0 ; i<teams.length ; i++){
  for(var j=0 ; j<teams[i].runners.length ; j++){
    var r1 = teams[i].runners[j] ;
    r1.overtook  = 0 ;
    r1.overtaken = 0 ;
    for(var k=0 ; k<teams.length ; k++){
      if(i==k) continue ;
      if(teams[k].name=='Average team') continue ;
      var r2 = teams[k].runners[j] ;
      if(j==0){
        if     (r1.end_time<r2.end_time){ r1.overtook++  ; }
        else if(r1.end_time>r2.end_time){ r1.overtaken++ ; }
      }
      else{
        if     (r1.start_time>r2.start_time && r1.end_time<r2.end_time){ r1.overtook++  ; }
        else if(r1.start_time<r2.start_time && r1.end_time>r2.end_time){ r1.overtaken++ ; }
      }
    }
  }
}

var cw           = 750 ;
var margin       =  10 ;
var spacer_y     =   5 ;
var entry_height =  15 ;
var yaxis_width  = 225 ;
var title_height =  50 ;
var title_size   =  40 ;
var text_dy      =   3 ;
var ch = margin + title_height + (spacer_y+entry_height)*teams.length + spacer_y + margin ;
var rx = (cw-2*margin-yaxis_width)/latest_possible_end ;
var histograms = new Array() ;

var canvas  = 0 ;
var context = 0 ;

var field     = 'total_time' ;
var dir       = 'asc' ;
var double_leg_index = -1 ;

var           colors = new Array() ;
var highlight_colors = new Array() ;
highlight_colors[0] = '#ff2222' ; colors[0] = '#cc6666' ;
highlight_colors[1] = '#ffff22' ; colors[1] = '#cccc66' ;
highlight_colors[2] = '#22ff22' ; colors[2] = '#66cc66' ;
highlight_colors[3] = '#2222ff' ; colors[3] = '#6666cc' ;
highlight_colors[4] = '#ff22ff' ; colors[4] = '#cc66cc' ;
highlight_colors[5] = '#22ffff' ; colors[5] = '#66cccc' ;

function start(){
  canvas  = document.getElementById("canvas_graph") ;
  context = canvas.getContext('2d') ;

  teams.sort(function(a,b) { if(a.name<b.name) return -1 ; if(a.name>b.name) return 1 ; return 0 ; } ) ;
  var select = document.getElementById('select_team') ;
  for(var i=0 ; i<teams.length ; i++){
    if(teams[i].name=='Average team') continue ;
    var option = document.createElement('option') ;
    option.value     = teams[i].name ;
    option.innerHTML = teams[i].name ;
    select.appendChild(option) ;
  }
  histograms.push(new histogram_object('total_time','Total time [s]')) ;
  histograms.push(new histogram_object('leg_1','leg 1 time [s]')) ;
  histograms.push(new histogram_object('leg_2','leg 2 time [s]')) ;
  histograms.push(new histogram_object('leg_3','leg 3 time [s]')) ;
  histograms.push(new histogram_object('leg_4','leg 4 time [s]')) ;
  histograms.push(new histogram_object('leg_5','leg 5 time [s]')) ;
  histograms.push(new histogram_object('leg_6','leg 6 time [s]')) ;

  update_sort() ;
  update_highlight_info() ;
  draw_all() ;
}

function draw_all(){
  context.fillStyle = 'white' ;
  context.fillRect(0,0,cw,ch) ;
  context.fill() ;
  draw_title() ;
  draw_barchart() ;
  for(var i=0 ; i<histograms.length ; i++){
    histograms[i].draw() ;
  }
}

function draw_barchart(){
  context.font = 0.75*entry_height + 'px arial' ;

  var x = margin + yaxis_width ;
  for(var i=0 ; i<teams.length ; i++){
    var y = margin + title_height + spacer_y + i*(spacer_y+entry_height) + 0.5*entry_height ;

    var field_value = 0 ;
    var leg = 0 ;
    switch(field){
      case 'total_time': field_value = teams[i].seconds_total            ; leg = 0 ; break ;
      case 'leg_1'     : field_value = teams[i].runners[0].seconds_total ; leg = 0 ; break ;
      case 'leg_2'     : field_value = teams[i].runners[1].seconds_total ; leg = 1 ; break ;
      case 'leg_3'     : field_value = teams[i].runners[2].seconds_total ; leg = 2 ; break ;
      case 'leg_4'     : field_value = teams[i].runners[3].seconds_total ; leg = 3 ; break ;
      case 'leg_5'     : field_value = teams[i].runners[4].seconds_total ; leg = 4 ; break ;
      case 'leg_6'     : field_value = teams[i].runners[5].seconds_total ; leg = 5 ; break ;
    }

    var cumulative_time = latest_leg_starts[leg]-teams[i].runners[leg].start_time ;
    if(teams[i].name==highlight){
        context.fillStyle = '#dddddd' ;
        context.fillRect(margin,y-0.7*entry_height,cw-2*margin,1.4*entry_height) ;
    }
    for(var j=0 ; j<teams[i].runners.length ; j++){
      var x_runner = x + rx*cumulative_time ;
      cumulative_time += teams[i].runners[j].seconds_total ;
      context.fillStyle = colors[j] ;
      if(teams[i].name==highlight) context.fillStyle = highlight_colors[j] ;
      context.fillRect(x_runner, y-0.5*entry_height, rx*teams[i].runners[j].seconds_total, entry_height ) ;
      context.fill() ;
    }

    // Labels
    context.fillStyle = 'black' ;
    context.textAlign = 'left' ;
    context.fillText(i+1,margin,y+text_dy) ;
    context.textAlign = 'right' ;

    var h = Math.floor(field_value/3600) ;
    var m = Math.floor((field_value-3600*h)/60) ;
    var s = field_value%60 ;
    if(m<10) m = '0' + m ;
    if(s<10) s = '0' + s ;
    context.fillText(teams[i].name + ' (' + h+':'+m+':'+s + ')',x,y+text_dy) ;
    context.fill() ;
  }
}
function draw_title(){
  var x = 0.5*cw ;
  var y = title_height ;
  context.textAlign = 'center' ;
  context.font = title_size + 'px arial' ;
  context.fillStyle = 'black' ;
  context.fillText('Geneva Relay Marathon 2013',x,y) ;
  context.fill() ;
}
function update_sort(){
  field = document.getElementById('select_field').value ;
  dir   = document.getElementById('select_dir'  ).value ;
  var m = (dir=='asc') ? 1 : -1 ;
  if(field=='total_time') teams.sort( function(a,b){ return (m*a.seconds_total            - m*b.seconds_total           ) ; } ) ;
  else if(field=='leg_1') teams.sort( function(a,b){ return (m*a.runners[0].seconds_total - m*b.runners[0].seconds_total) ; } ) ;
  else if(field=='leg_2') teams.sort( function(a,b){ return (m*a.runners[1].seconds_total - m*b.runners[1].seconds_total) ; } ) ;
  else if(field=='leg_3') teams.sort( function(a,b){ return (m*a.runners[2].seconds_total - m*b.runners[2].seconds_total) ; } ) ;
  else if(field=='leg_4') teams.sort( function(a,b){ return (m*a.runners[3].seconds_total - m*b.runners[3].seconds_total) ; } ) ;
  else if(field=='leg_5') teams.sort( function(a,b){ return (m*a.runners[4].seconds_total - m*b.runners[4].seconds_total) ; } ) ;
  else if(field=='leg_6') teams.sort( function(a,b){ return (m*a.runners[5].seconds_total - m*b.runners[5].seconds_total) ; } ) ;
  else{
    teams.sort( function(a,b){ return (a.seconds_total- m*b.seconds_total) ; } ) ;
  }
  draw_all() ;
}
function update_highlight(){
  highlight = document.getElementById('select_team').value ;
  update_sort() ;
  draw_all() ;
  update_highlight_info() ;
}
function update_highlight_info(){
  for(var i=0 ; i<teams.length ; i++){
    if(teams[i].name==highlight){
      var team = teams[i] ;
      var h = Math.floor(team.seconds_total/3600) ;
      var m = Math.floor((team.seconds_total-3600*h)/60) ;
      var s = team.seconds_total%60 ;
      if(m<10) m = '0' + m ;
      if(s<10) s = '0' + s ;
      document.getElementById('td_team_name').innerHTML = team.name ;
      document.getElementById('td_team_time').innerHTML = h+':'+m+':'+s ;
      document.getElementById('td_team_rank').innerHTML = team.rank + '/' + teams.length ;
      for(var j=0 ; j<team.runners.length ; j++){
        h = Math.floor(team.runners[j].seconds_total/3600) ;
        m = Math.floor((team.runners[j].seconds_total-3600*h)/60) ;
        s = team.runners[j].seconds_total%60 ;
        if(m<10) m = '0' + m ;
        if(s<10) s = '0' + s ;
        document.getElementById('td_leg'+(j+1)+'_name').innerHTML = team.runners[j].name ;
        document.getElementById('td_leg'+(j+1)+'_time').innerHTML = h+':'+m+':'+s ;
        document.getElementById('td_leg'+(j+1)+'_rank').innerHTML = team.runners[j].rank + '/' + teams.length ;
        document.getElementById('td_leg'+(j+1)+'_overtook' ).innerHTML = team.runners[j].overtook ;
        document.getElementById('td_leg'+(j+1)+'_overtaken').innerHTML = team.runners[j].overtaken ;
      }
      break ;
    }
  }
}
function find_double_legs(){
  for(var i=0 ; i<teams.length ; i++){
    for(var j=0 ; j<teams[i].runners.length-1 ; j++){
      if(double_leg_index>0 && double_leg_index!=j+1) continue ;
      if(teams[i].runners[j].name==teams[i].runners[j+1].name){
        var time = teams[i].runners[j].seconds_total + teams[i].runners[j+1].seconds_total ;
        var text = 'Team '+teams[i].name+' has the runner '+teams[i].runners[j].name+' running legs '+(j+1)+' and '+(j+2) + ' (' + time + ')<br />' ;
        document.getElementById('div_double_legs').innerHTML += text ;
      }
    }
  }
}