
runner_object = function(name,leg,hours,minutes,seconds){
  this.name    = name ;
  this.leg     = leg ;
  this.hours   = hours   ;
  this.minutes = minutes ;
  this.seconds = seconds ;
  this.seconds_total = (3600*hours) + (60*minutes) + seconds ;
}
team_object = function(name,runners){
  this.name    = name ;
  this.runners = runners ;
  this.seconds_total = 0 ;
  for(var i=0 ; i<runners.length ; i++){
    this.seconds_total += runners[i].seconds_total ;
  }
  this.hours   = Math.floor(this.seconds_total/3600) ;
  this.minutes = Math.floor((this.seconds_total-3600*this.hours)/60) ;
  this.seconds = this.seconds_total%60 ;
}
var teams = new Array() ;

var runners = new Array() ;
runners.push( new runner_object("Gauthier David", 0, 0, 31, 0) ) ;
runners.push( new runner_object("Duperrier Audr", 1, 0, 15, 26) ) ;
runners.push( new runner_object("Sage Johnny", 2, 0, 30, 11) ) ;
runners.push( new runner_object("Waroquier Paul", 3, 0, 31, 26) ) ;
runners.push( new runner_object("Koech William", 4, 0, 24, 18) ) ;
runners.push( new runner_object("Kipsang Susan", 5, 0, 20, 27) ) ;
teams.push( new team_object("Rocco Guerrazzi ASJ74", runners) )
var runners = new Array() ;
runners.push( new runner_object("Pusztaszeri Ma", 0, 0, 41, 7) ) ;
runners.push( new runner_object("Triponez Frede", 1, 0, 16, 13) ) ;
runners.push( new runner_object("Petignat Patri", 2, 0, 37, 35) ) ;
runners.push( new runner_object("Meyer Patrick", 3, 0, 34, 52) ) ;
runners.push( new runner_object("Meyer Patrick", 4, 0, 27, 15) ) ;
runners.push( new runner_object("Vees Hansjorg", 5, 0, 25, 42) ) ;
teams.push( new team_object("HUG Relais 2", runners) )
var runners = new Array() ;
runners.push( new runner_object("Lesueur Juliet", 0, 0, 44, 24) ) ;
runners.push( new runner_object("Hocquet Clemen", 1, 0, 15, 22) ) ;
runners.push( new runner_object("De Saint-Romai", 2, 0, 34, 6) ) ;
runners.push( new runner_object("Deschamps Matt", 3, 0, 36, 46) ) ;
runners.push( new runner_object("Gagnolet Arnau", 4, 0, 30, 0) ) ;
runners.push( new runner_object("Diagana Stepha", 5, 0, 26, 13) ) ;
teams.push( new team_object("Decathlon 5", runners) )
var runners = new Array() ;
runners.push( new runner_object("Terbois Philip", 0, 0, 44, 49) ) ;
runners.push( new runner_object("Williams Manon", 1, 0, 18, 19) ) ;
runners.push( new runner_object("Terbois David", 2, 0, 31, 27) ) ;
runners.push( new runner_object("Berman Rachel", 3, 0, 37, 55) ) ;
runners.push( new runner_object("Cabanel Louis", 4, 0, 29, 34) ) ;
runners.push( new runner_object("Umlas Elizabet", 5, 0, 29, 40) ) ;
teams.push( new team_object("Versoix Athletisme", runners) )
var runners = new Array() ;
runners.push( new runner_object("Andre Gregoire", 0, 0, 38, 34) ) ;
runners.push( new runner_object("Fetz Laetitia", 1, 0, 18, 55) ) ;
runners.push( new runner_object("Gervais Thibau", 2, 0, 30, 45) ) ;
runners.push( new runner_object("Gisel Antoine", 3, 0, 43, 49) ) ;
runners.push( new runner_object("Forgnone Jenni", 4, 0, 35, 45) ) ;
runners.push( new runner_object("Jeandet David", 5, 0, 25, 13) ) ;
teams.push( new team_object("ISMMS", runners) )
var runners = new Array() ;
runners.push( new runner_object("Chevance Yvan", 0, 0, 38, 0) ) ;
runners.push( new runner_object("Piers Thierry", 1, 0, 16, 57) ) ;
runners.push( new runner_object("Piers Thierry", 2, 0, 38, 30) ) ;
runners.push( new runner_object("Peyrard Lionel", 3, 0, 37, 20) ) ;
runners.push( new runner_object("Bromfield Niel", 4, 0, 31, 39) ) ;
runners.push( new runner_object("Berlinghi Patr", 5, 0, 30, 50) ) ;
teams.push( new team_object("Amicale pompiers du Cern", runners) )
var runners = new Array() ;
runners.push( new runner_object("Dorsch Roger", 0, 0, 40, 46) ) ;
runners.push( new runner_object("Dorsch Roger", 1, 0, 16, 37) ) ;
runners.push( new runner_object("Sandoval Javie", 2, 0, 33, 4) ) ;
runners.push( new runner_object("Beeby Mike", 3, 0, 41, 53) ) ;
runners.push( new runner_object("De Smit Philip", 4, 0, 33, 32) ) ;
runners.push( new runner_object("Kottenauer San", 5, 0, 28, 12) ) ;
teams.push( new team_object("P&G Wella", runners) )
var runners = new Array() ;
runners.push( new runner_object("Tavernier Greg", 0, 0, 37, 11) ) ;
runners.push( new runner_object("Miscioscia Nic", 1, 0, 15, 30) ) ;
runners.push( new runner_object("Arasteh Siavos", 2, 0, 36, 21) ) ;
runners.push( new runner_object("Maquaire Sebas", 3, 0, 48, 16) ) ;
runners.push( new runner_object("Dajani Zaki", 4, 0, 32, 2) ) ;
runners.push( new runner_object("Daumen Mathieu", 5, 0, 27, 39) ) ;
teams.push( new team_object("iChillage", runners) )
var runners = new Array() ;
runners.push( new runner_object("Baezner Marie", 0, 0, 41, 5) ) ;
runners.push( new runner_object("Weibel Florent", 1, 0, 14, 56) ) ;
runners.push( new runner_object("Wuethrich Simo", 2, 0, 32, 47) ) ;
runners.push( new runner_object("Emery Loic", 3, 0, 44, 7) ) ;
runners.push( new runner_object("Studer Nina", 4, 0, 36, 57) ) ;
runners.push( new runner_object("De Freitas Pau", 5, 0, 28, 5) ) ;
teams.push( new team_object("Bari Team", runners) )
var runners = new Array() ;
runners.push( new runner_object("Calonder Claud", 0, 0, 40, 58) ) ;
runners.push( new runner_object("Gilbart Yoann", 1, 0, 13, 14) ) ;
runners.push( new runner_object("Jones Stewart", 2, 0, 31, 51) ) ;
runners.push( new runner_object("Vostiar Igor", 3, 0, 41, 52) ) ;
runners.push( new runner_object("Delmotte Marie", 4, 0, 40, 13) ) ;
runners.push( new runner_object("Dudal Sherri", 5, 0, 31, 56) ) ;
teams.push( new team_object("The Biologics", runners) )
var runners = new Array() ;
runners.push( new runner_object("Bressi Damien", 0, 0, 38, 52) ) ;
runners.push( new runner_object("Guillet Luc An", 1, 0, 15, 20) ) ;
runners.push( new runner_object("Guillet Luc An", 2, 0, 33, 23) ) ;
runners.push( new runner_object("Guillet Anne", 3, 0, 51, 5) ) ;
runners.push( new runner_object("Meyer David", 4, 0, 30, 36) ) ;
runners.push( new runner_object("Naville Virgin", 5, 0, 31, 30) ) ;
teams.push( new team_object("Run Wild", runners) )
var runners = new Array() ;
runners.push( new runner_object("Borner Benoit", 0, 0, 43, 3) ) ;
runners.push( new runner_object("Emery Clea", 1, 0, 19, 37) ) ;
runners.push( new runner_object("Starkenmann Ol", 2, 0, 38, 11) ) ;
runners.push( new runner_object("Amsler Quentin", 3, 0, 41, 51) ) ;
runners.push( new runner_object("Chatelain Quen", 4, 0, 29, 43) ) ;
runners.push( new runner_object("Grange Julien", 5, 0, 28, 21) ) ;
teams.push( new team_object("Chicken Run", runners) )
var runners = new Array() ;
runners.push( new runner_object("Humbert-Droz H", 0, 0, 38, 43) ) ;
runners.push( new runner_object("Humbert-Droz H", 1, 0, 15, 56) ) ;
runners.push( new runner_object("Stotzer Alexan", 2, 0, 37, 20) ) ;
runners.push( new runner_object("Froidevaux Gil", 3, 0, 41, 26) ) ;
runners.push( new runner_object("Humbert-Droz N", 4, 0, 33, 6) ) ;
runners.push( new runner_object("Pouzerat Louis", 5, 0, 34, 29) ) ;
teams.push( new team_object("Sunday running team", runners) )
var runners = new Array() ;
runners.push( new runner_object("Fournier Karen", 0, 0, 46, 8) ) ;
runners.push( new runner_object("Zermatten Andr", 1, 0, 17, 4) ) ;
runners.push( new runner_object("Zermatten Andr", 2, 0, 38, 30) ) ;
runners.push( new runner_object("Barmaz Luc", 3, 0, 43, 27) ) ;
runners.push( new runner_object("Zermatten Maxi", 4, 0, 26, 17) ) ;
runners.push( new runner_object("Barmaz Colette", 5, 0, 29, 47) ) ;
teams.push( new team_object("les Callis Coureurs", runners) )
var runners = new Array() ;
runners.push( new runner_object("Parmentier Jer", 0, 0, 42, 30) ) ;
runners.push( new runner_object("Serediuk Steph", 1, 0, 19, 52) ) ;
runners.push( new runner_object("Wilson-Young I", 2, 0, 36, 55) ) ;
runners.push( new runner_object("Guy Andrew", 3, 0, 41, 26) ) ;
runners.push( new runner_object("Di Tullio Rafa", 4, 0, 31, 12) ) ;
runners.push( new runner_object("Bjerrum Rasmus", 5, 0, 30, 43) ) ;
teams.push( new team_object("Team B", runners) )
var runners = new Array() ;
runners.push( new runner_object("Magnin Noemie", 0, 0, 45, 26) ) ;
runners.push( new runner_object("Vagneux Mael", 1, 0, 17, 47) ) ;
runners.push( new runner_object("Magnin Chloe", 2, 0, 41, 23) ) ;
runners.push( new runner_object("Gramain Nicola", 3, 0, 43, 4) ) ;
runners.push( new runner_object("Jurgens Alexan", 4, 0, 33, 58) ) ;
runners.push( new runner_object("Salaun Bastien", 5, 0, 21, 33) ) ;
teams.push( new team_object("T'as une equipe et t'as p", runners) )
var runners = new Array() ;
runners.push( new runner_object("Sanna Manlio", 0, 0, 45, 13) ) ;
runners.push( new runner_object("Haitoglou Alex", 1, 0, 19, 2) ) ;
runners.push( new runner_object("Haitoglou Alex", 2, 0, 38, 18) ) ;
runners.push( new runner_object("Daoust Louis-F", 3, 0, 39, 18) ) ;
runners.push( new runner_object("Ekman Sara", 4, 0, 34, 15) ) ;
runners.push( new runner_object("Ekman Sara", 5, 0, 28, 5) ) ;
teams.push( new team_object("Fast and furious", runners) )
var runners = new Array() ;
runners.push( new runner_object("Gallay Bastien", 0, 0, 37, 36) ) ;
runners.push( new runner_object("Gallay Kathlee", 1, 0, 21, 24) ) ;
runners.push( new runner_object("Gallay Charles", 2, 0, 35, 11) ) ;
runners.push( new runner_object("Gallay Pierre", 3, 0, 42, 34) ) ;
runners.push( new runner_object("Gallay Aurelie", 4, 0, 34, 22) ) ;
runners.push( new runner_object("Gallay Birgit", 5, 0, 33, 15) ) ;
teams.push( new team_object("BNP PARIBASSPORT Relais", runners) )
var runners = new Array() ;
runners.push( new runner_object("Gilbert Elizab", 0, 0, 44, 52) ) ;
runners.push( new runner_object("Innes Ker Edwa", 1, 0, 16, 23) ) ;
runners.push( new runner_object("James Tom", 2, 0, 33, 34) ) ;
runners.push( new runner_object("Glanville-Wall", 3, 0, 49, 45) ) ;
runners.push( new runner_object("Stewart Sarah", 4, 0, 34, 14) ) ;
runners.push( new runner_object("Gilbert Adam", 5, 0, 27, 19) ) ;
teams.push( new team_object("Bluetik", runners) )
var runners = new Array() ;
runners.push( new runner_object("Rudaz Henri", 0, 0, 52, 27) ) ;
runners.push( new runner_object("Del Grosso Fra", 1, 0, 18, 47) ) ;
runners.push( new runner_object("Amar Jean-Mari", 2, 0, 35, 5) ) ;
runners.push( new runner_object("Bouvier Fabric", 3, 0, 38, 16) ) ;
runners.push( new runner_object("Wisard Nathali", 4, 0, 38, 59) ) ;
runners.push( new runner_object("Antonuccio All", 5, 0, 23, 8) ) ;
teams.push( new team_object("FER Geneve", runners) )
var runners = new Array() ;
runners.push( new runner_object("Terret Andrew", 0, 0, 48, 52) ) ;
runners.push( new runner_object("Diaz Yolanda", 1, 0, 18, 49) ) ;
runners.push( new runner_object("Aubert Gregory", 2, 0, 37, 17) ) ;
runners.push( new runner_object("Gaidier Thomas", 3, 0, 40, 37) ) ;
runners.push( new runner_object("Gartner Claes", 4, 0, 31, 43) ) ;
runners.push( new runner_object("Nordstrom Mart", 5, 0, 29, 50) ) ;
teams.push( new team_object("EA SPORTS", runners) )
var runners = new Array() ;
runners.push( new runner_object("Zmama Rachid", 0, 0, 40, 13) ) ;
runners.push( new runner_object("Wheeler Ben", 1, 0, 22, 52) ) ;
runners.push( new runner_object("Carleux Julien", 2, 0, 37, 29) ) ;
runners.push( new runner_object("Graham Callum", 3, 0, 40, 11) ) ;
runners.push( new runner_object("Lohez Yann", 4, 0, 37, 34) ) ;
runners.push( new runner_object("Fezai Billel", 5, 0, 29, 31) ) ;
teams.push( new team_object("Kempinski 2", runners) )
var runners = new Array() ;
runners.push( new runner_object("Rebetez Alexan", 0, 0, 41, 13) ) ;
runners.push( new runner_object("Veya Eliane", 1, 0, 20, 3) ) ;
runners.push( new runner_object("Veya Florent", 2, 0, 38, 12) ) ;
runners.push( new runner_object("Decrey Philipp", 3, 0, 44, 53) ) ;
runners.push( new runner_object("Iglesias Nadia", 4, 0, 34, 3) ) ;
runners.push( new runner_object("Decrey Wahida", 5, 0, 29, 53) ) ;
teams.push( new team_object("La Team des Rigolos", runners) )
var runners = new Array() ;
runners.push( new runner_object("Guilbert Benja", 0, 0, 43, 19) ) ;
runners.push( new runner_object("Mathez Emmanue", 1, 0, 17, 43) ) ;
runners.push( new runner_object("Rouget Pierre", 2, 0, 32, 32) ) ;
runners.push( new runner_object("Broger Annette", 3, 0, 52, 2) ) ;
runners.push( new runner_object("Zemrani Abdell", 4, 0, 33, 0) ) ;
runners.push( new runner_object("Faure Marine", 5, 0, 29, 49) ) ;
teams.push( new team_object("Visilab Relais", runners) )
var runners = new Array() ;
runners.push( new runner_object("Baptista Fabri", 0, 0, 42, 31) ) ;
runners.push( new runner_object("Genovese Anton", 1, 0, 18, 57) ) ;
runners.push( new runner_object("Gonzalez Adria", 2, 0, 37, 3) ) ;
runners.push( new runner_object("Manera Pietro", 3, 0, 37, 5) ) ;
runners.push( new runner_object("Angelucci Andr", 4, 0, 40, 11) ) ;
runners.push( new runner_object("Di Leo Alessan", 5, 0, 32, 45) ) ;
teams.push( new team_object("The Vs", runners) )
var runners = new Array() ;
runners.push( new runner_object("Gardet Joël", 0, 0, 43, 28) ) ;
runners.push( new runner_object("Gardet Philipp", 1, 0, 18, 26) ) ;
runners.push( new runner_object("Gardet Philip", 2, 0, 41, 17) ) ;
runners.push( new runner_object("Liand Frederi", 3, 0, 44, 27) ) ;
runners.push( new runner_object("Gautheron Jea", 4, 0, 33, 23) ) ;
runners.push( new runner_object("Liand Raphael", 5, 0, 28, 32) ) ;
teams.push( new team_object("Les Samirlogs", runners) )
var runners = new Array() ;
runners.push( new runner_object("Christie Ryan", 0, 0, 42, 22) ) ;
runners.push( new runner_object("Vnig Theo", 1, 0, 17, 15) ) ;
runners.push( new runner_object("Dar Javed", 2, 0, 35, 57) ) ;
runners.push( new runner_object("Legras Loris", 3, 0, 42, 43) ) ;
runners.push( new runner_object("Driebeek Jeann", 4, 0, 40, 11) ) ;
runners.push( new runner_object("Howsam Saskia", 5, 0, 31, 34) ) ;
teams.push( new team_object("Geneva Fitness I", runners) )
var runners = new Array() ;
runners.push( new runner_object("Abdalla Ali Aa", 0, 0, 42, 28) ) ;
runners.push( new runner_object("Ernst Christop", 1, 0, 17, 59) ) ;
runners.push( new runner_object("Ernst Christop", 2, 0, 38, 16) ) ;
runners.push( new runner_object("Xasan Cali Yuu", 3, 0, 46, 25) ) ;
runners.push( new runner_object("Leger Florian", 4, 0, 36, 15) ) ;
runners.push( new runner_object("Leger Florian", 5, 0, 28, 48) ) ;
teams.push( new team_object("ILO Running Dream Team", runners) )
var runners = new Array() ;
runners.push( new runner_object("Valdez Byron E", 0, 0, 49, 28) ) ;
runners.push( new runner_object("Abelairas Javi", 1, 0, 14, 51) ) ;
runners.push( new runner_object("Menendez Javie", 2, 0, 38, 24) ) ;
runners.push( new runner_object("Cantero Josu", 3, 0, 44, 32) ) ;
runners.push( new runner_object("Canovas Sophia", 4, 0, 35, 57) ) ;
runners.push( new runner_object("Tripiana Marti", 5, 0, 27, 32) ) ;
teams.push( new team_object("LeClub RoadRunners", runners) )
var runners = new Array() ;
runners.push( new runner_object("De Wolff Pierr", 0, 0, 43, 2) ) ;
runners.push( new runner_object("Bizzini Pamela", 1, 0, 22, 11) ) ;
runners.push( new runner_object("Probst Nicola", 2, 0, 41, 46) ) ;
runners.push( new runner_object("Gheller Samuel", 3, 0, 41, 18) ) ;
runners.push( new runner_object("Ceccarelli Car", 4, 0, 33, 38) ) ;
runners.push( new runner_object("Presas Vera", 5, 0, 29, 24) ) ;
teams.push( new team_object("Les Jedis et Nico", runners) )
var runners = new Array() ;
runners.push( new runner_object("Biskos Greg", 0, 0, 40, 15) ) ;
runners.push( new runner_object("Biskos Greg", 1, 0, 16, 58) ) ;
runners.push( new runner_object("Kristensen Nan", 2, 0, 44, 40) ) ;
runners.push( new runner_object("Hutter Biskos", 3, 0, 45, 16) ) ;
runners.push( new runner_object("Ellensohn Lars", 4, 0, 34, 43) ) ;
runners.push( new runner_object("Ellensohn Lars", 5, 0, 29, 30) ) ;
teams.push( new team_object("Last Minute", runners) )
var runners = new Array() ;
runners.push( new runner_object("Riondel Alain", 0, 0, 44, 44) ) ;
runners.push( new runner_object("Riondel Julie", 1, 0, 19, 42) ) ;
runners.push( new runner_object("Riondel Payne", 2, 0, 41, 50) ) ;
runners.push( new runner_object("Riondel Bellie", 3, 0, 43, 57) ) ;
runners.push( new runner_object("Bellier Jules", 4, 0, 33, 2) ) ;
runners.push( new runner_object("Riondel Bernar", 5, 0, 28, 27) ) ;
teams.push( new team_object("Les Riondel", runners) )
var runners = new Array() ;
runners.push( new runner_object("Jaquet Laurent", 0, 0, 42, 4) ) ;
runners.push( new runner_object("Mottet Marc", 1, 0, 16, 45) ) ;
runners.push( new runner_object("Mottet Marc", 2, 0, 38, 53) ) ;
runners.push( new runner_object("Lazarevic Nata", 3, 0, 48, 26) ) ;
runners.push( new runner_object("Ungar Christop", 4, 0, 31, 16) ) ;
runners.push( new runner_object("Hunecke Felici", 5, 0, 34, 25) ) ;
teams.push( new team_object("Run Speed", runners) )
var runners = new Array() ;
runners.push( new runner_object("Felix Sylvain", 0, 0, 43, 20) ) ;
runners.push( new runner_object("Semon Anne-Cla", 1, 0, 19, 5) ) ;
runners.push( new runner_object("Semon Anne-Cla", 2, 0, 38, 26) ) ;
runners.push( new runner_object("Meyer Harry", 3, 0, 47, 1) ) ;
runners.push( new runner_object("Meyer Harry", 4, 0, 35, 28) ) ;
runners.push( new runner_object("Strubin Daniel", 5, 0, 29, 39) ) ;
teams.push( new team_object("Eglise evangelique de Mey", runners) )
var runners = new Array() ;
runners.push( new runner_object("Carteron Nicol", 0, 0, 52, 6) ) ;
runners.push( new runner_object("Arora Adit", 1, 0, 18, 23) ) ;
runners.push( new runner_object("Viaud Arthur", 2, 0, 38, 47) ) ;
runners.push( new runner_object("Pernet Jeremy", 3, 0, 44, 40) ) ;
runners.push( new runner_object("Chapel Yoann", 4, 0, 31, 36) ) ;
runners.push( new runner_object("Denman Claire", 5, 0, 28, 45) ) ;
teams.push( new team_object("Apocalypse Penguins", runners) )
var runners = new Array() ;
runners.push( new runner_object("Ponard Julien", 0, 0, 40, 41) ) ;
runners.push( new runner_object("Touri Salim", 1, 0, 16, 33) ) ;
runners.push( new runner_object("Touri Salim", 2, 0, 36, 49) ) ;
runners.push( new runner_object("Grobet Alexand", 3, 0, 48, 53) ) ;
runners.push( new runner_object("Chapuis Freder", 4, 0, 34, 50) ) ;
runners.push( new runner_object("Newel Claire", 5, 0, 36, 34) ) ;
teams.push( new team_object("fred", runners) )
var runners = new Array() ;
runners.push( new runner_object("Flachaire Roma", 0, 0, 39, 0) ) ;
runners.push( new runner_object("Briffard Guill", 1, 0, 19, 9) ) ;
runners.push( new runner_object("Bringe Antoine", 2, 0, 38, 32) ) ;
runners.push( new runner_object("Raison Sebasti", 3, 0, 43, 47) ) ;
runners.push( new runner_object("Di Paolo Jonat", 4, 0, 37, 16) ) ;
runners.push( new runner_object("Menard Enora", 5, 0, 36, 52) ) ;
teams.push( new team_object("ESIEE TEAM", runners) )
var runners = new Array() ;
runners.push( new runner_object("Desgreniers Jo", 0, 0, 35, 15) ) ;
runners.push( new runner_object("Mustaklem Chri", 1, 0, 21, 53) ) ;
runners.push( new runner_object("Oestreicher Va", 2, 0, 36, 51) ) ;
runners.push( new runner_object("Fernex Celine", 3, 0, 49, 26) ) ;
runners.push( new runner_object("Bennett Claire", 4, 0, 43, 2) ) ;
runners.push( new runner_object("Ferro Marco", 5, 0, 28, 22) ) ;
teams.push( new team_object("Les ptis physios", runners) )
var runners = new Array() ;
runners.push( new runner_object("Ruibal Nicolas", 0, 0, 47, 49) ) ;
runners.push( new runner_object("Costa Julie", 1, 0, 20, 56) ) ;
runners.push( new runner_object("Bill Charles", 2, 0, 38, 2) ) ;
runners.push( new runner_object("Plasschaert Ma", 3, 0, 42, 22) ) ;
runners.push( new runner_object("Fillettaz-Pern", 4, 0, 35, 48) ) ;
runners.push( new runner_object("Smits Johannes", 5, 0, 29, 53) ) ;
teams.push( new team_object("PwC Team", runners) )
var runners = new Array() ;
runners.push( new runner_object("van den Berg R", 0, 0, 43, 18) ) ;
runners.push( new runner_object("Raths Caroline", 1, 0, 19, 17) ) ;
runners.push( new runner_object("Norris Philip", 2, 0, 36, 43) ) ;
runners.push( new runner_object("Della Chiesa B", 3, 0, 42, 37) ) ;
runners.push( new runner_object("Cormack Robert", 4, 0, 37, 59) ) ;
runners.push( new runner_object("Pelosi Henriqu", 5, 0, 35, 10) ) ;
teams.push( new team_object("FIFA Master - UNINE", runners) )
var runners = new Array() ;
runners.push( new runner_object("Elson Greg", 0, 0, 45, 25) ) ;
runners.push( new runner_object("Ravn Ulla", 1, 0, 19, 56) ) ;
runners.push( new runner_object("Hugues Stephan", 2, 0, 37, 14) ) ;
runners.push( new runner_object("Ferlin Walter", 3, 0, 42, 28) ) ;
runners.push( new runner_object("Loyau Jeremy", 4, 0, 37, 39) ) ;
runners.push( new runner_object("Desmurs Marjor", 5, 0, 32, 35) ) ;
teams.push( new team_object("12 feet over", runners) )
var runners = new Array() ;
runners.push( new runner_object("Barthelme Simo", 0, 0, 41, 26) ) ;
runners.push( new runner_object("Souto David", 1, 0, 18, 8) ) ;
runners.push( new runner_object("Puntiroli Mich", 2, 0, 36, 34) ) ;
runners.push( new runner_object("Schoenhammer J", 3, 0, 48, 47) ) ;
runners.push( new runner_object("Burra Nicolas", 4, 0, 41, 31) ) ;
runners.push( new runner_object("Carlei Christo", 5, 0, 29, 10) ) ;
teams.push( new team_object("Visual Transient", runners) )
var runners = new Array() ;
runners.push( new runner_object("Howsam Mike", 0, 0, 39, 8) ) ;
runners.push( new runner_object("Rathbone Jenni", 1, 0, 22, 14) ) ;
runners.push( new runner_object("Nuttall Tom", 2, 0, 36, 15) ) ;
runners.push( new runner_object("Davies Tamara", 3, 0, 44, 37) ) ;
runners.push( new runner_object("Lewis Ron", 4, 0, 40, 46) ) ;
runners.push( new runner_object("Cooper Lisa", 5, 0, 33, 17) ) ;
teams.push( new team_object("Geneva Fitness II", runners) )
var runners = new Array() ;
runners.push( new runner_object("Laycock Paul", 0, 0, 37, 18) ) ;
runners.push( new runner_object("Tobin Mark", 1, 0, 18, 54) ) ;
runners.push( new runner_object("Clark Philip", 2, 0, 40, 41) ) ;
runners.push( new runner_object("Polifka Richar", 3, 0, 48, 35) ) ;
runners.push( new runner_object("Boyd Jamie", 4, 0, 32, 27) ) ;
runners.push( new runner_object("Beckingham Mat", 5, 0, 38, 45) ) ;
teams.push( new team_object("Laycock's Baton", runners) )
var runners = new Array() ;
runners.push( new runner_object("Corbaz Megane", 0, 0, 47, 28) ) ;
runners.push( new runner_object("Corbaz Nadia", 1, 0, 17, 28) ) ;
runners.push( new runner_object("Corbaz Nadia", 2, 0, 39, 6) ) ;
runners.push( new runner_object("Zumbrunnen-Vil", 3, 0, 50, 43) ) ;
runners.push( new runner_object("Argi Marion", 4, 0, 33, 44) ) ;
runners.push( new runner_object("Argi Marion", 5, 0, 28, 32) ) ;
teams.push( new team_object("Unitrac", runners) )
var runners = new Array() ;
runners.push( new runner_object("Gagnebin Laure", 0, 0, 45, 58) ) ;
runners.push( new runner_object("Gascon Gabriel", 1, 0, 21, 28) ) ;
runners.push( new runner_object("De Abreu Luis", 2, 0, 41, 17) ) ;
runners.push( new runner_object("Elsig Cedric", 3, 0, 47, 49) ) ;
runners.push( new runner_object("Gianella Mirko", 4, 0, 31, 56) ) ;
runners.push( new runner_object("Gianella Mirko", 5, 0, 29, 1) ) ;
teams.push( new team_object("Rothschild Running Team", runners) )
var runners = new Array() ;
runners.push( new runner_object("Schneeberger L", 0, 0, 44, 42) ) ;
runners.push( new runner_object("Dupraz Eric", 1, 0, 18, 6) ) ;
runners.push( new runner_object("Larcinese Mass", 2, 0, 42, 34) ) ;
runners.push( new runner_object("Glarner Stepha", 3, 0, 48, 29) ) ;
runners.push( new runner_object("Crispin Yves", 4, 0, 32, 25) ) ;
runners.push( new runner_object("Dentand Sebast", 5, 0, 31, 28) ) ;
teams.push( new team_object("Les Tongueurs", runners) )
var runners = new Array() ;
runners.push( new runner_object("Barker Anna-Le", 0, 0, 45, 14) ) ;
runners.push( new runner_object("Boulton Lucy", 1, 0, 21, 18) ) ;
runners.push( new runner_object("Paterson Alisa", 2, 0, 40, 8) ) ;
runners.push( new runner_object("Round Paul", 3, 0, 40, 56) ) ;
runners.push( new runner_object("Round Marisa", 4, 0, 40, 19) ) ;
runners.push( new runner_object("Prosser Oliver", 5, 0, 29, 55) ) ;
teams.push( new team_object("The Cunning Runts", runners) )
var runners = new Array() ;
runners.push( new runner_object("Quadrado Joao", 0, 0, 46, 41) ) ;
runners.push( new runner_object("Lopez Ariane", 1, 0, 20, 53) ) ;
runners.push( new runner_object("Santos Ana Rit", 2, 0, 44, 2) ) ;
runners.push( new runner_object("Lewis Lawrence", 3, 0, 41, 58) ) ;
runners.push( new runner_object("Pinheiro Pedro", 4, 0, 37, 56) ) ;
runners.push( new runner_object("Kaczor Marcin", 5, 0, 26, 31) ) ;
teams.push( new team_object("Millennium Club", runners) )
var runners = new Array() ;
runners.push( new runner_object("Framery Vincen", 0, 0, 42, 58) ) ;
runners.push( new runner_object("De Terrasson S", 1, 0, 22, 23) ) ;
runners.push( new runner_object("Lesage Guillau", 2, 0, 36, 42) ) ;
runners.push( new runner_object("Lesage Guillau", 3, 0, 42, 49) ) ;
runners.push( new runner_object("Ouisse Angèle", 4, 0, 45, 15) ) ;
runners.push( new runner_object("Henrioux Audr", 5, 0, 27, 57) ) ;
teams.push( new team_object("Decathlon 1", runners) )
var runners = new Array() ;
runners.push( new runner_object("Cusin Pierre", 0, 0, 43, 25) ) ;
runners.push( new runner_object("Micco Delphine", 1, 0, 22, 36) ) ;
runners.push( new runner_object("Bonazzi Domini", 2, 0, 41, 12) ) ;
runners.push( new runner_object("Derolland Phil", 3, 0, 37, 19) ) ;
runners.push( new runner_object("Bertinotti Jul", 4, 0, 45, 11) ) ;
runners.push( new runner_object("Derolland Mand", 5, 0, 28, 42) ) ;
teams.push( new team_object("Tonton, la poune et les p", runners) )
var runners = new Array() ;
runners.push( new runner_object("Jacquier Steph", 0, 0, 48, 58) ) ;
runners.push( new runner_object("Jacquier Steph", 1, 0, 19, 54) ) ;
runners.push( new runner_object("Amsellem Gabri", 2, 0, 43, 2) ) ;
runners.push( new runner_object("Goy Maryline", 3, 0, 54, 2) ) ;
runners.push( new runner_object("Kopp Jerôme", 4, 0, 28, 58) ) ;
runners.push( new runner_object("Kopp Jerôme", 5, 0, 23, 48) ) ;
teams.push( new team_object("Pizzamsellem", runners) )
var runners = new Array() ;
runners.push( new runner_object("Michel Yann", 0, 0, 43, 51) ) ;
runners.push( new runner_object("Bulliard Barba", 1, 0, 23, 3) ) ;
runners.push( new runner_object("Pazziani Romai", 2, 0, 41, 0) ) ;
runners.push( new runner_object("Michel Loïc", 3, 0, 39, 57) ) ;
runners.push( new runner_object("Bulliard Phil", 4, 0, 38, 39) ) ;
runners.push( new runner_object("Jaccard Samue", 5, 0, 33, 10) ) ;
teams.push( new team_object("Les Yessssss", runners) )
var runners = new Array() ;
runners.push( new runner_object("Liver Natacha", 0, 0, 42, 23) ) ;
runners.push( new runner_object("Leuba Sandrine", 1, 0, 18, 49) ) ;
runners.push( new runner_object("Corboz Noelle", 2, 0, 44, 22) ) ;
runners.push( new runner_object("Corboz Noelle", 3, 0, 53, 9) ) ;
runners.push( new runner_object("Kiondo Penuez", 4, 0, 28, 55) ) ;
runners.push( new runner_object("Faucogney Chri", 5, 0, 32, 14) ) ;
teams.push( new team_object("Stade Geneve relais 1", runners) )
var runners = new Array() ;
runners.push( new runner_object("Schmid Christo", 0, 0, 39, 1) ) ;
runners.push( new runner_object("Hostettler Nic", 1, 0, 18, 35) ) ;
runners.push( new runner_object("Moser Sophie", 2, 0, 40, 7) ) ;
runners.push( new runner_object("Grillet Freder", 3, 0, 45, 49) ) ;
runners.push( new runner_object("Rittiner Elisa", 4, 0, 43, 3) ) ;
runners.push( new runner_object("Molinari Alexa", 5, 0, 33, 26) ) ;
teams.push( new team_object("Brolliet", runners) )
var runners = new Array() ;
runners.push( new runner_object("Querou Yvon", 0, 0, 46, 12) ) ;
runners.push( new runner_object("Genand-Riondet", 1, 0, 20, 0) ) ;
runners.push( new runner_object("Jespierre Sand", 2, 0, 38, 38) ) ;
runners.push( new runner_object("Vernay Luc", 3, 0, 46, 26) ) ;
runners.push( new runner_object("Vesin Angèle", 4, 0, 38, 40) ) ;
runners.push( new runner_object("Combet Aline", 5, 0, 30, 10) ) ;
teams.push( new team_object("SIEGWERK FRANCE", runners) )
var runners = new Array() ;
runners.push( new runner_object("Snibrovska Mar", 0, 0, 54, 57) ) ;
runners.push( new runner_object("Snibrovska Mar", 1, 0, 22, 43) ) ;
runners.push( new runner_object("Savary Franço", 2, 0, 44, 28) ) ;
runners.push( new runner_object("Leaman Nichol", 3, 0, 40, 12) ) ;
runners.push( new runner_object("Ali Usama", 4, 0, 31, 48) ) ;
runners.push( new runner_object("Ali Usama", 5, 0, 26, 54) ) ;
teams.push( new team_object("SGS Relay", runners) )
var runners = new Array() ;
runners.push( new runner_object("Sakkal Isy", 0, 0, 41, 9) ) ;
runners.push( new runner_object("Abdel Satter A", 1, 0, 22, 55) ) ;
runners.push( new runner_object("Rivara Irène", 2, 0, 41, 54) ) ;
runners.push( new runner_object("Jullier Marin", 3, 0, 51, 20) ) ;
runners.push( new runner_object("Carrel Laurin", 4, 0, 40, 4) ) ;
runners.push( new runner_object("Cohen Jonatha", 5, 0, 23, 57) ) ;
teams.push( new team_object("HiHaHo", runners) )
var runners = new Array() ;
runners.push( new runner_object("Myers Biggs Du", 0, 0, 41, 32) ) ;
runners.push( new runner_object("Heijde Marc", 1, 0, 17, 49) ) ;
runners.push( new runner_object("Heijde Marc", 2, 0, 39, 53) ) ;
runners.push( new runner_object("Tilbrook Kimbe", 3, 0, 46, 52) ) ;
runners.push( new runner_object("Binkert Melani", 4, 0, 37, 27) ) ;
runners.push( new runner_object("Benagli Marie-", 5, 0, 37, 57) ) ;
teams.push( new team_object("ASABI", runners) )
var runners = new Array() ;
runners.push( new runner_object("Venturini Laur", 0, 0, 44, 47) ) ;
runners.push( new runner_object("Salter Tony", 1, 0, 17, 8) ) ;
runners.push( new runner_object("Stagliano Anna", 2, 0, 37, 47) ) ;
runners.push( new runner_object("Leutwiler Phil", 3, 0, 47, 42) ) ;
runners.push( new runner_object("Ridoutt Teija", 4, 0, 40, 49) ) ;
runners.push( new runner_object("Moreno Kathryn", 5, 0, 33, 23) ) ;
teams.push( new team_object("The Fugues", runners) )
var runners = new Array() ;
runners.push( new runner_object("Trombone Lesli", 0, 0, 49, 24) ) ;
runners.push( new runner_object("Guillemot Hele", 1, 0, 23, 22) ) ;
runners.push( new runner_object("Demlek Nabil", 2, 0, 38, 38) ) ;
runners.push( new runner_object("Le Dantec Helo", 3, 0, 47, 49) ) ;
runners.push( new runner_object("Wolf Christian", 4, 0, 28, 40) ) ;
runners.push( new runner_object("Wolf Christian", 5, 0, 33, 49) ) ;
teams.push( new team_object("Hi'Five", runners) )
var runners = new Array() ;
runners.push( new runner_object("Ssali David", 0, 0, 40, 10) ) ;
runners.push( new runner_object("Ssali David", 1, 0, 17, 48) ) ;
runners.push( new runner_object("Kavuma Andrew", 2, 0, 40, 29) ) ;
runners.push( new runner_object("Couture Nicola", 3, 0, 37, 33) ) ;
runners.push( new runner_object("Akatujuna Merc", 4, 0, 47, 0) ) ;
runners.push( new runner_object("Morris Clariss", 5, 0, 38, 54) ) ;
teams.push( new team_object("JOHN 3:16", runners) )
var runners = new Array() ;
runners.push( new runner_object("Viette Nicolas", 0, 0, 41, 42) ) ;
runners.push( new runner_object("Sulmont Franck", 1, 0, 21, 55) ) ;
runners.push( new runner_object("Ravier Emilie", 2, 0, 49, 26) ) ;
runners.push( new runner_object("Clerc Florian", 3, 0, 47, 40) ) ;
runners.push( new runner_object("Hardouin Cyril", 4, 0, 32, 20) ) ;
runners.push( new runner_object("Coquelle Natha", 5, 0, 29, 7) ) ;
teams.push( new team_object("FERRING Pharma", runners) )
var runners = new Array() ;
runners.push( new runner_object("Karlen Kevin", 0, 0, 45, 5) ) ;
runners.push( new runner_object("Thaqi Amire", 1, 0, 20, 36) ) ;
runners.push( new runner_object("Ginolin David", 2, 0, 32, 30) ) ;
runners.push( new runner_object("Cano Benoit", 3, 0, 46, 21) ) ;
runners.push( new runner_object("Spoerri Dina", 4, 0, 41, 32) ) ;
runners.push( new runner_object("Mbaye Mbeugue", 5, 0, 36, 47) ) ;
teams.push( new team_object("Les Pirates du Bitume", runners) )
var runners = new Array() ;
runners.push( new runner_object("Charlet Carole", 0, 0, 50, 10) ) ;
runners.push( new runner_object("Neuenschwander", 1, 0, 17, 24) ) ;
runners.push( new runner_object("Neuenschwander", 2, 0, 37, 3) ) ;
runners.push( new runner_object("Huax Thomas", 3, 0, 45, 59) ) ;
runners.push( new runner_object("Brasey Elodie", 4, 0, 40, 47) ) ;
runners.push( new runner_object("Warynski Basti", 5, 0, 31, 52) ) ;
teams.push( new team_object("Bad Friends & Co", runners) )
var runners = new Array() ;
runners.push( new runner_object("Chalmers Aliso", 0, 0, 50, 52) ) ;
runners.push( new runner_object("Litton Jennife", 1, 0, 22, 17) ) ;
runners.push( new runner_object("Thornber Titus", 2, 0, 38, 29) ) ;
runners.push( new runner_object("Orsat Olivier", 3, 0, 49, 34) ) ;
runners.push( new runner_object("Clamp Ruth", 4, 0, 38, 53) ) ;
runners.push( new runner_object("Gray Andrew", 5, 0, 23, 32) ) ;
teams.push( new team_object("The running tax team", runners) )
var runners = new Array() ;
runners.push( new runner_object("Keller Jean-Pi", 0, 0, 45, 35) ) ;
runners.push( new runner_object("Juillard Chris", 1, 0, 19, 59) ) ;
runners.push( new runner_object("Keller Jacques", 2, 0, 55, 42) ) ;
runners.push( new runner_object("Juillard Xavie", 3, 0, 41, 18) ) ;
runners.push( new runner_object("Juillard Pierr", 4, 0, 31, 40) ) ;
runners.push( new runner_object("Juillard Loïc", 5, 0, 29, 24) ) ;
teams.push( new team_object("Les pas presses", runners) )
var runners = new Array() ;
runners.push( new runner_object("Thuillat Vince", 0, 0, 45, 25) ) ;
runners.push( new runner_object("Henry Valentin", 1, 0, 19, 42) ) ;
runners.push( new runner_object("Chassery Aurel", 2, 0, 45, 8) ) ;
runners.push( new runner_object("Peltie Bertran", 3, 0, 40, 57) ) ;
runners.push( new runner_object("Peltie Bertran", 4, 0, 31, 29) ) ;
runners.push( new runner_object("Richon Romain", 5, 0, 41, 4) ) ;
teams.push( new team_object("Decathlon 4", runners) )
var runners = new Array() ;
runners.push( new runner_object("Fleury Marie", 0, 0, 50, 37) ) ;
runners.push( new runner_object("Delforge Sarah", 1, 0, 23, 26) ) ;
runners.push( new runner_object("Roche Noe", 2, 0, 32, 12) ) ;
runners.push( new runner_object("Gamer Jean-Chr", 3, 0, 39, 51) ) ;
runners.push( new runner_object("Gamer Jean-Chr", 4, 0, 34, 16) ) ;
runners.push( new runner_object("Lemaître Viol", 5, 0, 43, 23) ) ;
teams.push( new team_object("Decathlon 3", runners) )
var runners = new Array() ;
runners.push( new runner_object("Hickey Chris", 0, 0, 54, 52) ) ;
runners.push( new runner_object("Schmauss Linds", 1, 0, 20, 50) ) ;
runners.push( new runner_object("Mooney Robert", 2, 0, 33, 25) ) ;
runners.push( new runner_object("Beets Peter", 3, 0, 49, 46) ) ;
runners.push( new runner_object("Pinto Juan", 4, 0, 38, 10) ) ;
runners.push( new runner_object("Homer Nathan", 5, 0, 26, 48) ) ;
teams.push( new team_object("PG2013", runners) )
var runners = new Array() ;
runners.push( new runner_object("Deconfin Patri", 0, 0, 42, 28) ) ;
runners.push( new runner_object("Bergkvist Mich", 1, 0, 21, 47) ) ;
runners.push( new runner_object("Faure Sarah", 2, 0, 45, 7) ) ;
runners.push( new runner_object("Dramaillet Xav", 3, 0, 42, 56) ) ;
runners.push( new runner_object("Faure Corinne", 4, 0, 36, 29) ) ;
runners.push( new runner_object("Deconfin Flore", 5, 0, 35, 22) ) ;
teams.push( new team_object("Les jaguars divonnais", runners) )
var runners = new Array() ;
runners.push( new runner_object("Penot Christop", 0, 0, 42, 20) ) ;
runners.push( new runner_object("Chenaux Audrey", 1, 0, 18, 43) ) ;
runners.push( new runner_object("Schlatter Thie", 2, 0, 37, 37) ) ;
runners.push( new runner_object("Rickli Michell", 3, 0, 49, 6) ) ;
runners.push( new runner_object("Di Biase Arno", 4, 0, 37, 13) ) ;
runners.push( new runner_object("Stalder Rebecc", 5, 0, 39, 39) ) ;
teams.push( new team_object("Ecole Hoteliere de Geneve", runners) )
var runners = new Array() ;
runners.push( new runner_object("Martin Romain", 0, 0, 39, 11) ) ;
runners.push( new runner_object("Nahmias Lea", 1, 0, 25, 40) ) ;
runners.push( new runner_object("Spaggiari Flor", 2, 0, 41, 35) ) ;
runners.push( new runner_object("Marset Miguel", 3, 0, 43, 12) ) ;
runners.push( new runner_object("Imhof Fabien", 4, 0, 38, 51) ) ;
runners.push( new runner_object("Mugnier Matthe", 5, 0, 37, 50) ) ;
teams.push( new team_object("Les Ornithorynques", runners) )
var runners = new Array() ;
runners.push( new runner_object("Emch Sylvaine", 0, 0, 52, 44) ) ;
runners.push( new runner_object("Berney Karin", 1, 0, 19, 36) ) ;
runners.push( new runner_object("Berney Karin", 2, 0, 42, 5) ) ;
runners.push( new runner_object("Peter Nathalie", 3, 0, 49, 9) ) ;
runners.push( new runner_object("Jaques Lovera", 4, 0, 34, 22) ) ;
runners.push( new runner_object("Jaques Lovera", 5, 0, 28, 25) ) ;
teams.push( new team_object("New-Yorkaises", runners) )
var runners = new Array() ;
runners.push( new runner_object("Yamashita Masa", 0, 0, 45, 0) ) ;
runners.push( new runner_object("Mano Tomoko", 1, 0, 22, 23) ) ;
runners.push( new runner_object("Kondo Taka", 2, 0, 46, 26) ) ;
runners.push( new runner_object("Okai Hayato", 3, 0, 45, 19) ) ;
runners.push( new runner_object("Koizumi Junko", 4, 0, 39, 50) ) ;
runners.push( new runner_object("Nagao Shunsuke", 5, 0, 27, 42) ) ;
teams.push( new team_object("J. JAPON", runners) )
var runners = new Array() ;
runners.push( new runner_object("Popadin Konsta", 0, 0, 43, 25) ) ;
runners.push( new runner_object("Cesar Razquiin", 1, 0, 19, 35) ) ;
runners.push( new runner_object("Gasic Ivana", 2, 0, 39, 26) ) ;
runners.push( new runner_object("Dousse Aline", 3, 0, 52, 47) ) ;
runners.push( new runner_object("Ferreira Pedro", 4, 0, 35, 9) ) ;
runners.push( new runner_object("Diessler Shana", 5, 0, 36, 28) ) ;
teams.push( new team_object("Le neuvieme", runners) )
var runners = new Array() ;
runners.push( new runner_object("Gunther Renate", 0, 0, 39, 15) ) ;
runners.push( new runner_object("Mazoyer Julien", 1, 0, 20, 35) ) ;
runners.push( new runner_object("Mazoyer Julien", 2, 0, 39, 18) ) ;
runners.push( new runner_object("Kerymova Nadii", 3, 1, 0, 11) ) ;
runners.push( new runner_object("Farahmand Farz", 4, 0, 36, 11) ) ;
runners.push( new runner_object("Farahmand Farz", 5, 0, 31, 21) ) ;
teams.push( new team_object("Pigs Might Fly", runners) )
var runners = new Array() ;
runners.push( new runner_object("Delvenne Phili", 0, 0, 51, 31) ) ;
runners.push( new runner_object("Sousa Jean Car", 1, 0, 20, 51) ) ;
runners.push( new runner_object("Amigo Simon", 2, 0, 34, 40) ) ;
runners.push( new runner_object("Mortier Sebast", 3, 0, 49, 32) ) ;
runners.push( new runner_object("Garcia Bruno", 4, 0, 41, 26) ) ;
runners.push( new runner_object("Schmitt Antoin", 5, 0, 29, 28) ) ;
teams.push( new team_object("Ikea Vernier", runners) )
var runners = new Array() ;
runners.push( new runner_object("Calame Alain", 0, 0, 37, 2) ) ;
runners.push( new runner_object("Calame Geraldi", 1, 0, 24, 37) ) ;
runners.push( new runner_object("Rohrbach Pasca", 2, 0, 45, 43) ) ;
runners.push( new runner_object("Guntz Alexandr", 3, 0, 44, 32) ) ;
runners.push( new runner_object("Parini Julien", 4, 0, 34, 36) ) ;
runners.push( new runner_object("Decrey Ecuvill", 5, 0, 41, 7) ) ;
teams.push( new team_object("FMM on Tour", runners) )
var runners = new Array() ;
runners.push( new runner_object("Cloâtre Julie", 0, 0, 45, 49) ) ;
runners.push( new runner_object("Merlotti Sophi", 1, 0, 22, 23) ) ;
runners.push( new runner_object("Richet Julia", 2, 0, 45, 5) ) ;
runners.push( new runner_object("Essaafi Hiche", 3, 0, 41, 57) ) ;
runners.push( new runner_object("Sanchez Apari", 4, 0, 39, 15) ) ;
runners.push( new runner_object("Hurtado Laure", 5, 0, 33, 42) ) ;
teams.push( new team_object("SIG Relais", runners) )
var runners = new Array() ;
runners.push( new runner_object("Busser Gabriel", 0, 0, 43, 0) ) ;
runners.push( new runner_object("Busser Gabriel", 1, 0, 17, 29) ) ;
runners.push( new runner_object("Maillard Moniq", 2, 0, 46, 15) ) ;
runners.push( new runner_object("Busser Daniele", 3, 0, 52, 38) ) ;
runners.push( new runner_object("Galasso Daniel", 4, 0, 37, 32) ) ;
runners.push( new runner_object("Galasso Daniel", 5, 0, 31, 20) ) ;
teams.push( new team_object("Stade Geneve relais 2", runners) )
var runners = new Array() ;
runners.push( new runner_object("Morales Chloe", 0, 0, 45, 37) ) ;
runners.push( new runner_object("Ostrowski Vero", 1, 0, 21, 50) ) ;
runners.push( new runner_object("Guitton Karine", 2, 0, 43, 24) ) ;
runners.push( new runner_object("Mendiboure Sop", 3, 0, 47, 43) ) ;
runners.push( new runner_object("Ostrowski Brun", 4, 0, 39, 56) ) ;
runners.push( new runner_object("Lemaître Anth", 5, 0, 29, 54) ) ;
teams.push( new team_object("WOUFF", runners) )
var runners = new Array() ;
runners.push( new runner_object("Parnigoni Clau", 0, 0, 53, 38) ) ;
runners.push( new runner_object("Wenger Olivier", 1, 0, 18, 3) ) ;
runners.push( new runner_object("Amoos Olivier", 2, 0, 42, 38) ) ;
runners.push( new runner_object("Barral Bertran", 3, 0, 43, 27) ) ;
runners.push( new runner_object("Sewell Lydie", 4, 0, 37, 18) ) ;
runners.push( new runner_object("Andrianasolo M", 5, 0, 33, 50) ) ;
teams.push( new team_object("Eglise evang. de Meyrin 2", runners) )
var runners = new Array() ;
runners.push( new runner_object("Wetterwald Dam", 0, 0, 46, 1) ) ;
runners.push( new runner_object("Riedweg Bernar", 1, 0, 20, 7) ) ;
runners.push( new runner_object("Reymond Jean-D", 2, 0, 40, 45) ) ;
runners.push( new runner_object("Jost Roland", 3, 0, 45, 30) ) ;
runners.push( new runner_object("Hansma Sven", 4, 0, 41, 36) ) ;
runners.push( new runner_object("Sanz Augustin", 5, 0, 36, 5) ) ;
teams.push( new team_object("Etoile-Geneve VBC", runners) )
var runners = new Array() ;
runners.push( new runner_object("Gigandet Dagne", 0, 0, 44, 31) ) ;
runners.push( new runner_object("Gautier Adrian", 1, 0, 24, 3) ) ;
runners.push( new runner_object("Anastasiou Pan", 2, 0, 38, 26) ) ;
runners.push( new runner_object("Samways Jeremy", 3, 0, 42, 7) ) ;
runners.push( new runner_object("Malik Saba", 4, 0, 43, 55) ) ;
runners.push( new runner_object("Moulin Nathali", 5, 0, 37, 19) ) ;
teams.push( new team_object("P&G Explorer", runners) )
var runners = new Array() ;
runners.push( new runner_object("Fourier Lauren", 0, 0, 44, 21) ) ;
runners.push( new runner_object("Wavrin Sandrin", 1, 0, 24, 50) ) ;
runners.push( new runner_object("Fraissinet Ced", 2, 0, 41, 26) ) ;
runners.push( new runner_object("D'Haegeleer Ma", 3, 0, 56, 44) ) ;
runners.push( new runner_object("Neuville Loic", 4, 0, 34, 15) ) ;
runners.push( new runner_object("De Kerviler Gh", 5, 0, 29, 8) ) ;
teams.push( new team_object("International SOS", runners) )
var runners = new Array() ;
runners.push( new runner_object("Weiss Lucien", 0, 0, 42, 48) ) ;
runners.push( new runner_object("Weiss Laura", 1, 0, 21, 33) ) ;
runners.push( new runner_object("At Ayse", 2, 0, 40, 52) ) ;
runners.push( new runner_object("Bozzo Vincent", 3, 0, 47, 18) ) ;
runners.push( new runner_object("Bozzo Vincent", 4, 0, 38, 59) ) ;
runners.push( new runner_object("Manuel Stocker", 5, 0, 39, 33) ) ;
teams.push( new team_object("Les lamas", runners) )
var runners = new Array() ;
runners.push( new runner_object("Dufresne Vhohe", 0, 0, 44, 44) ) ;
runners.push( new runner_object("Mondhard Laure", 1, 0, 19, 38) ) ;
runners.push( new runner_object("Mondhard Emma", 2, 0, 40, 6) ) ;
runners.push( new runner_object("Senges Sandrin", 3, 0, 51, 24) ) ;
runners.push( new runner_object("Senges Marc", 4, 0, 39, 39) ) ;
runners.push( new runner_object("Jauslinlironi", 5, 0, 35, 42) ) ;
teams.push( new team_object("Les 6 fantastiques", runners) )
var runners = new Array() ;
runners.push( new runner_object("Mangel Marcel", 0, 0, 40, 9) ) ;
runners.push( new runner_object("Berrut Lyly", 1, 0, 21, 0) ) ;
runners.push( new runner_object("Kovietzny Alex", 2, 0, 39, 52) ) ;
runners.push( new runner_object("Lanzetta Giova", 3, 0, 46, 34) ) ;
runners.push( new runner_object("Scuitti Fiona", 4, 0, 46, 54) ) ;
runners.push( new runner_object("Ebert Katharin", 5, 0, 36, 59) ) ;
teams.push( new team_object("Kempinski", runners) )
var runners = new Array() ;
runners.push( new runner_object("O'Keefe Mark", 0, 0, 44, 4) ) ;
runners.push( new runner_object("Morelle Agathe", 1, 0, 26, 53) ) ;
runners.push( new runner_object("Shepherd Davin", 2, 0, 34, 44) ) ;
runners.push( new runner_object("Peacock Luke", 3, 0, 52, 35) ) ;
runners.push( new runner_object("Cornus Andre", 4, 0, 44, 32) ) ;
runners.push( new runner_object("Homaidan Emman", 5, 0, 28, 45) ) ;
teams.push( new team_object("The A-Team", runners) )
var runners = new Array() ;
runners.push( new runner_object("Blanc Raphaël", 0, 0, 48, 11) ) ;
runners.push( new runner_object("Negishi Masumi", 1, 0, 19, 5) ) ;
runners.push( new runner_object("Barros Sergio", 2, 0, 41, 34) ) ;
runners.push( new runner_object("Caffrey Colm", 3, 0, 51, 9) ) ;
runners.push( new runner_object("Yassad-Ottman", 4, 0, 38, 29) ) ;
runners.push( new runner_object("Tabeling Marc", 5, 0, 33, 44) ) ;
teams.push( new team_object("Dream Team", runners) )
var runners = new Array() ;
runners.push( new runner_object("Girard Francoi", 0, 0, 51, 50) ) ;
runners.push( new runner_object("Delavenna Nico", 1, 0, 16, 56) ) ;
runners.push( new runner_object("Finarelli Luci", 2, 0, 45, 14) ) ;
runners.push( new runner_object("Delavenna Cami", 3, 0, 52, 25) ) ;
runners.push( new runner_object("Vuagnoux Malik", 4, 0, 36, 52) ) ;
runners.push( new runner_object("Nicolle Maryli", 5, 0, 29, 15) ) ;
teams.push( new team_object("les foulees", runners) )
var runners = new Array() ;
runners.push( new runner_object("Kissinger-Matr", 0, 0, 50, 27) ) ;
runners.push( new runner_object("Frame Shannon", 1, 0, 21, 39) ) ;
runners.push( new runner_object("Bird Katie", 2, 0, 39, 15) ) ;
runners.push( new runner_object("Cleeland Belin", 3, 0, 50, 47) ) ;
runners.push( new runner_object("Apel Holger", 4, 0, 38, 13) ) ;
runners.push( new runner_object("Le Roy Jeremie", 5, 0, 32, 20) ) ;
teams.push( new team_object("ISO CS", runners) )
var runners = new Array() ;
runners.push( new runner_object("Forsyth Neil", 0, 0, 45, 39) ) ;
runners.push( new runner_object("Najafi Sarah", 1, 0, 19, 2) ) ;
runners.push( new runner_object("Dodd Patrick", 2, 0, 51, 41) ) ;
runners.push( new runner_object("Jennings Matth", 3, 0, 42, 34) ) ;
runners.push( new runner_object("Fauset Leanda", 4, 0, 40, 35) ) ;
runners.push( new runner_object("Jennings Lisa", 5, 0, 33, 11) ) ;
teams.push( new team_object("La Maison de Tara", runners) )
var runners = new Array() ;
runners.push( new runner_object("Costa Antonio", 0, 0, 49, 9) ) ;
runners.push( new runner_object("Hilfiker Phili", 1, 0, 21, 6) ) ;
runners.push( new runner_object("Perez Jaime", 2, 0, 41, 16) ) ;
runners.push( new runner_object("Gomez Alberto", 3, 0, 46, 57) ) ;
runners.push( new runner_object("Calatayud Davi", 4, 0, 38, 50) ) ;
runners.push( new runner_object("Pesante Elizab", 5, 0, 35, 25) ) ;
teams.push( new team_object("Banco Santander Suisse", runners) )
var runners = new Array() ;
runners.push( new runner_object("Leroux Eric", 0, 0, 42, 43) ) ;
runners.push( new runner_object("Tetaz Dorothe", 1, 0, 25, 59) ) ;
runners.push( new runner_object("Decor Christop", 2, 0, 43, 43) ) ;
runners.push( new runner_object("Tripod Remi", 3, 0, 47, 1) ) ;
runners.push( new runner_object("Tripod Remi", 4, 0, 36, 20) ) ;
runners.push( new runner_object("Schwartz Valer", 5, 0, 37, 36) ) ;
teams.push( new team_object("bonard c't'equipe", runners) )
var runners = new Array() ;
runners.push( new runner_object("Wright Victori", 0, 0, 49, 56) ) ;
runners.push( new runner_object("Mcneill Jan Cl", 1, 0, 19, 15) ) ;
runners.push( new runner_object("Howard Miriam", 2, 0, 42, 34) ) ;
runners.push( new runner_object("Shaw Lucy", 3, 0, 50, 49) ) ;
runners.push( new runner_object("Usher-Wilson G", 4, 0, 32, 56) ) ;
runners.push( new runner_object("Maines Amy", 5, 0, 38, 13) ) ;
teams.push( new team_object("The Spring Chicks", runners) )
var runners = new Array() ;
runners.push( new runner_object("Asensio Virgin", 0, 0, 56, 3) ) ;
runners.push( new runner_object("Waller Lauren", 1, 0, 22, 49) ) ;
runners.push( new runner_object("Istas Pauline", 2, 0, 37, 35) ) ;
runners.push( new runner_object("Pouponnot Alec", 3, 0, 44, 56) ) ;
runners.push( new runner_object("Hoetmer Niels", 4, 0, 34, 19) ) ;
runners.push( new runner_object("Naescher Naome", 5, 0, 38, 7) ) ;
teams.push( new team_object("VLANNP", runners) )
var runners = new Array() ;
runners.push( new runner_object("Freyria Romain", 0, 0, 46, 51) ) ;
runners.push( new runner_object("Costa Sandrine", 1, 0, 19, 37) ) ;
runners.push( new runner_object("Liechti Penelo", 2, 0, 43, 31) ) ;
runners.push( new runner_object("Mino Valerie", 3, 0, 50, 32) ) ;
runners.push( new runner_object("Castiglione Cl", 4, 0, 39, 29) ) ;
runners.push( new runner_object("Mino Johanna", 5, 0, 34, 35) ) ;
teams.push( new team_object("Les Rapides", runners) )
var runners = new Array() ;
runners.push( new runner_object("Guerrero Vanes", 0, 1, 1, 35) ) ;
runners.push( new runner_object("Tassi Matteo", 1, 0, 21, 51) ) ;
runners.push( new runner_object("Rummenigge Hen", 2, 0, 39, 22) ) ;
runners.push( new runner_object("Kucheriavyi Ol", 3, 0, 40, 48) ) ;
runners.push( new runner_object("Engelhard Alex", 4, 0, 36, 8) ) ;
runners.push( new runner_object("Rehane Sara", 5, 0, 34, 52) ) ;
teams.push( new team_object("FIFA Master - SDA Bocconi", runners) )
var runners = new Array() ;
runners.push( new runner_object("Bongard Nicola", 0, 0, 45, 10) ) ;
runners.push( new runner_object("Leuba Christin", 1, 0, 20, 40) ) ;
runners.push( new runner_object("Morandini Soni", 2, 0, 55, 59) ) ;
runners.push( new runner_object("Ottesen Freder", 3, 0, 44, 52) ) ;
runners.push( new runner_object("Cohen Benjamin", 4, 0, 34, 46) ) ;
runners.push( new runner_object("Espirito Santo", 5, 0, 33, 13) ) ;
teams.push( new team_object("DIP dans la course 2", runners) )
var runners = new Array() ;
runners.push( new runner_object("Lavorel David", 0, 0, 49, 24) ) ;
runners.push( new runner_object("Riquet Delacuv", 1, 0, 24, 40) ) ;
runners.push( new runner_object("Kurt Aida", 2, 0, 38, 22) ) ;
runners.push( new runner_object("Zimmerman Dami", 3, 0, 44, 12) ) ;
runners.push( new runner_object("Verstavel Delp", 4, 0, 41, 13) ) ;
runners.push( new runner_object("Ferreira Alain", 5, 0, 37, 1) ) ;
teams.push( new team_object("Arval Trading", runners) )
var runners = new Array() ;
runners.push( new runner_object("Reeves Simone", 0, 0, 52, 52) ) ;
runners.push( new runner_object("Meynier Sylvie", 1, 0, 22, 39) ) ;
runners.push( new runner_object("Mclaren Scotti", 2, 0, 43, 18) ) ;
runners.push( new runner_object("Polhil Carrie", 3, 0, 53, 6) ) ;
runners.push( new runner_object("Bordier Edgar", 4, 0, 31, 38) ) ;
runners.push( new runner_object("Steffen Daniel", 5, 0, 31, 29) ) ;
teams.push( new team_object("Geneva Runners", runners) )
var runners = new Array() ;
runners.push( new runner_object("Santiago Elena", 0, 0, 49, 20) ) ;
runners.push( new runner_object("Monneret Sonia", 1, 0, 22, 3) ) ;
runners.push( new runner_object("Venturini Cris", 2, 0, 42, 53) ) ;
runners.push( new runner_object("Conza-Rossier", 3, 0, 46, 53) ) ;
runners.push( new runner_object("Völki Veroniq", 4, 0, 41, 36) ) ;
runners.push( new runner_object("Furger Jacque", 5, 0, 32, 20) ) ;
teams.push( new team_object("DIP dans la course", runners) )
var runners = new Array() ;
runners.push( new runner_object("Spielmann Eric", 0, 0, 46, 11) ) ;
runners.push( new runner_object("Rodrigues Jose", 1, 0, 16, 3) ) ;
runners.push( new runner_object("Chapgier Laboi", 2, 0, 39, 20) ) ;
runners.push( new runner_object("Horveno Stepha", 3, 0, 46, 6) ) ;
runners.push( new runner_object("Wiget Sarah", 4, 0, 50, 49) ) ;
runners.push( new runner_object("Habegre Audrey", 5, 0, 36, 52) ) ;
teams.push( new team_object("Partage dans le Monde", runners) )
var runners = new Array() ;
runners.push( new runner_object("Fischer Manuel", 0, 1, 5, 18) ) ;
runners.push( new runner_object("Skidmore Celes", 1, 0, 20, 35) ) ;
runners.push( new runner_object("Hug Othmar", 2, 0, 38, 13) ) ;
runners.push( new runner_object("Moser Raimund", 3, 0, 43, 50) ) ;
runners.push( new runner_object("Mink Patrik", 4, 0, 35, 40) ) ;
runners.push( new runner_object("Covarrubias Ka", 5, 0, 32, 33) ) ;
teams.push( new team_object("funrun", runners) )
var runners = new Array() ;
runners.push( new runner_object("Melero Justine", 0, 0, 53, 48) ) ;
runners.push( new runner_object("Dietrich Inès", 1, 0, 20, 22) ) ;
runners.push( new runner_object("Stepczynski B", 2, 0, 41, 14) ) ;
runners.push( new runner_object("Candia Claire", 3, 0, 50, 18) ) ;
runners.push( new runner_object("Garcia Stepha", 4, 0, 37, 42) ) ;
runners.push( new runner_object("Betrisey Vale", 5, 0, 32, 51) ) ;
teams.push( new team_object("Les 6 poulettes", runners) )
var runners = new Array() ;
runners.push( new runner_object("Petrucci Franc", 0, 0, 53, 3) ) ;
runners.push( new runner_object("Ferro-Luzzi Gi", 1, 0, 21, 34) ) ;
runners.push( new runner_object("Ferro-Luzzi Gi", 2, 0, 35, 24) ) ;
runners.push( new runner_object("Nidegger Chris", 3, 0, 40, 40) ) ;
runners.push( new runner_object("Soussi Anne", 4, 0, 45, 6) ) ;
runners.push( new runner_object("Martz Laure", 5, 0, 40, 35) ) ;
teams.push( new team_object("TEAM SRED", runners) )
var runners = new Array() ;
runners.push( new runner_object("Faria Miguel", 0, 0, 54, 36) ) ;
runners.push( new runner_object("Dunant Jessica", 1, 0, 20, 3) ) ;
runners.push( new runner_object("Gyenes Beatrix", 2, 0, 46, 24) ) ;
runners.push( new runner_object("Erdos Attila", 3, 0, 49, 25) ) ;
runners.push( new runner_object("Ramires Bruno", 4, 0, 37, 57) ) ;
runners.push( new runner_object("Arredondo Alfr", 5, 0, 28, 5) ) ;
teams.push( new team_object("Bunge Runners", runners) )
var runners = new Array() ;
runners.push( new runner_object("Oppliger Patri", 0, 0, 50, 29) ) ;
runners.push( new runner_object("Ferrazzini Opp", 1, 0, 26, 21) ) ;
runners.push( new runner_object("Jörg Frederic", 2, 0, 32, 53) ) ;
runners.push( new runner_object("Bardet Guy", 3, 0, 50, 32) ) ;
runners.push( new runner_object("Bardet Christ", 4, 0, 40, 42) ) ;
runners.push( new runner_object("Oppliger Oliv", 5, 0, 35, 32) ) ;
teams.push( new team_object("Les Tremolos", runners) )
var runners = new Array() ;
runners.push( new runner_object("Grosclaude Dan", 0, 0, 47, 49) ) ;
runners.push( new runner_object("Pugnale Valeri", 1, 0, 22, 52) ) ;
runners.push( new runner_object("Pugnale Valeri", 2, 0, 49, 49) ) ;
runners.push( new runner_object("Ciletti Caroli", 3, 0, 49, 6) ) ;
runners.push( new runner_object("Rouiller Elmer", 4, 0, 36, 27) ) ;
runners.push( new runner_object("Rouiller Elmer", 5, 0, 30, 33) ) ;
teams.push( new team_object("les peluches", runners) )
var runners = new Array() ;
runners.push( new runner_object("Mogashoa Ephra", 0, 0, 50, 19) ) ;
runners.push( new runner_object("Tswai Lenteng", 1, 0, 22, 4) ) ;
runners.push( new runner_object("Kampel Kim", 2, 0, 41, 44) ) ;
runners.push( new runner_object("Kona Fezile", 3, 0, 42, 30) ) ;
runners.push( new runner_object("Kosmicki Saman", 4, 0, 47, 3) ) ;
runners.push( new runner_object("Sekonyana Ngak", 5, 0, 34, 10) ) ;
teams.push( new team_object("Team South Africa", runners) )
var runners = new Array() ;
runners.push( new runner_object("Perruchoud Rom", 0, 0, 49, 19) ) ;
runners.push( new runner_object("Gilbert Aureli", 1, 0, 22, 41) ) ;
runners.push( new runner_object("Rochon Elodie", 2, 0, 46, 7) ) ;
runners.push( new runner_object("Borie Damien", 3, 0, 43, 16) ) ;
runners.push( new runner_object("Agullo Charlot", 4, 0, 40, 54) ) ;
runners.push( new runner_object("Pinto Rachelle", 5, 0, 35, 49) ) ;
teams.push( new team_object("EY TAX", runners) )
var runners = new Array() ;
runners.push( new runner_object("Rahimoff Sasch", 0, 0, 53, 24) ) ;
runners.push( new runner_object("Olive Sandra", 1, 0, 26, 2) ) ;
runners.push( new runner_object("Hein Thorsten", 2, 0, 32, 8) ) ;
runners.push( new runner_object("Verschueren An", 3, 0, 57, 58) ) ;
runners.push( new runner_object("Fernet Bertran", 4, 0, 35, 2) ) ;
runners.push( new runner_object("Bugallo David", 5, 0, 33, 36) ) ;
teams.push( new team_object("Kivala-HR", runners) )
var runners = new Array() ;
runners.push( new runner_object("Bensimon David", 0, 0, 51, 29) ) ;
runners.push( new runner_object("De Posson Eleo", 1, 0, 23, 19) ) ;
runners.push( new runner_object("Desfayes Sebas", 2, 0, 41, 53) ) ;
runners.push( new runner_object("Boissonnas Ben", 3, 0, 47, 12) ) ;
runners.push( new runner_object("Kieffer Stepha", 4, 0, 44, 42) ) ;
runners.push( new runner_object("Dal Busco Nath", 5, 0, 30, 49) ) ;
teams.push( new team_object("Perreard de Boccard", runners) )
var runners = new Array() ;
runners.push( new runner_object("Sokmen Ismail", 0, 0, 55, 6) ) ;
runners.push( new runner_object("Gayout Kathy", 1, 0, 24, 29) ) ;
runners.push( new runner_object("Romagnan Cathe", 2, 0, 40, 27) ) ;
runners.push( new runner_object("Paturaud Nicol", 3, 0, 48, 54) ) ;
runners.push( new runner_object("Villa Camille", 4, 0, 38, 38) ) ;
runners.push( new runner_object("Vilacha Enriqu", 5, 0, 31, 53) ) ;
teams.push( new team_object("JTI's Gazelles", runners) )
var runners = new Array() ;
runners.push( new runner_object("Julie Marine", 0, 0, 58, 30) ) ;
runners.push( new runner_object("Doyard Amandin", 1, 0, 23, 23) ) ;
runners.push( new runner_object("Simm Kai-Uwe", 2, 0, 40, 7) ) ;
runners.push( new runner_object("Beaumont Arnau", 3, 0, 42, 54) ) ;
runners.push( new runner_object("Eltelmissany T", 4, 0, 39, 43) ) ;
runners.push( new runner_object("Wiaranowski Ja", 5, 0, 35, 21) ) ;
teams.push( new team_object("Pampers First Steps", runners) )
var runners = new Array() ;
runners.push( new runner_object("Mugnier Michel", 0, 0, 53, 32) ) ;
runners.push( new runner_object("Meynard Anne", 1, 0, 23, 51) ) ;
runners.push( new runner_object("Gal Claudine", 2, 0, 44, 54) ) ;
runners.push( new runner_object("Maggio Albane", 3, 0, 52, 33) ) ;
runners.push( new runner_object("Chamay-Weber C", 4, 0, 34, 56) ) ;
runners.push( new runner_object("Chamay-Weber C", 5, 0, 30, 12) ) ;
teams.push( new team_object("HUG Relais 1", runners) )
var runners = new Array() ;
runners.push( new runner_object("Veloso Cindy", 0, 0, 50, 36) ) ;
runners.push( new runner_object("Renevot Chloe", 1, 0, 23, 25) ) ;
runners.push( new runner_object("Leprêtre Maxi", 2, 0, 39, 0) ) ;
runners.push( new runner_object("Michaud Bertr", 3, 0, 52, 35) ) ;
runners.push( new runner_object("Carniel Sybil", 4, 0, 36, 49) ) ;
runners.push( new runner_object("Woehl Lucie", 5, 0, 37, 52) ) ;
teams.push( new team_object("Decathlon 2", runners) )
var runners = new Array() ;
runners.push( new runner_object("Abraham Michel", 0, 0, 57, 43) ) ;
runners.push( new runner_object("Pugliese Maxim", 1, 0, 19, 28) ) ;
runners.push( new runner_object("Gualtieri Rach", 2, 0, 42, 14) ) ;
runners.push( new runner_object("Gualtieri Chri", 3, 0, 48, 59) ) ;
runners.push( new runner_object("Jacquelin Anne", 4, 0, 38, 11) ) ;
runners.push( new runner_object("Simon Emily", 5, 0, 33, 56) ) ;
teams.push( new team_object("Partage dans le Monde", runners) )
var runners = new Array() ;
runners.push( new runner_object("Mollière Anni", 0, 1, 0, 10) ) ;
runners.push( new runner_object("Lemoine Christ", 1, 0, 20, 23) ) ;
runners.push( new runner_object("Lemoine Chris", 2, 0, 42, 10) ) ;
runners.push( new runner_object("Menard Bruno", 3, 0, 45, 37) ) ;
runners.push( new runner_object("Menard Bruno", 4, 0, 33, 6) ) ;
runners.push( new runner_object("Menard-Piguet", 5, 0, 39, 21) ) ;
teams.push( new team_object("Les Pers Tatanes", runners) )
var runners = new Array() ;
runners.push( new runner_object("Leuthold Jasmi", 0, 0, 54, 40) ) ;
runners.push( new runner_object("Leszek Melanie", 1, 0, 19, 42) ) ;
runners.push( new runner_object("Bean Andrew", 2, 0, 50, 48) ) ;
runners.push( new runner_object("Karmass Zohra", 3, 0, 51, 4) ) ;
runners.push( new runner_object("Degen Michael", 4, 0, 30, 12) ) ;
runners.push( new runner_object("Sechaud Lucile", 5, 0, 34, 44) ) ;
teams.push( new team_object("Interiman", runners) )
var runners = new Array() ;
runners.push( new runner_object("Zosso Diane", 0, 0, 47, 31) ) ;
runners.push( new runner_object("Kupper Anne-So", 1, 0, 25, 3) ) ;
runners.push( new runner_object("Seng Henry", 2, 0, 39, 3) ) ;
runners.push( new runner_object("Zheleznyakov E", 3, 0, 48, 34) ) ;
runners.push( new runner_object("Zosso Alexandr", 4, 0, 54, 28) ) ;
runners.push( new runner_object("Tarel Joël", 5, 0, 27, 7) ) ;
teams.push( new team_object("EDJAHA", runners) )
var runners = new Array() ;
runners.push( new runner_object("Thornton Danie", 0, 0, 50, 2) ) ;
runners.push( new runner_object("Clement Sabrin", 1, 0, 22, 17) ) ;
runners.push( new runner_object("Hugo Claire", 2, 0, 47, 31) ) ;
runners.push( new runner_object("Nguyen Aurelia", 3, 0, 48, 18) ) ;
runners.push( new runner_object("Kallenberg Jud", 4, 0, 39, 17) ) ;
runners.push( new runner_object("Kallenberg Jud", 5, 0, 34, 30) ) ;
teams.push( new team_object("GAVI", runners) )
var runners = new Array() ;
runners.push( new runner_object("Bonna Philippe", 0, 0, 48, 53) ) ;
runners.push( new runner_object("Perez Angèle", 1, 0, 26, 31) ) ;
runners.push( new runner_object("Germann Chris", 2, 0, 39, 33) ) ;
runners.push( new runner_object("Moser Laurent", 3, 0, 49, 16) ) ;
runners.push( new runner_object("Granger Cynth", 4, 0, 40, 27) ) ;
runners.push( new runner_object("Pelletier Son", 5, 0, 37, 43) ) ;
teams.push( new team_object("De Pfyffer", runners) )
var runners = new Array() ;
runners.push( new runner_object("Cengelli-Hänn", 0, 0, 55, 42) ) ;
runners.push( new runner_object("Tremblay Jessi", 1, 0, 22, 29) ) ;
runners.push( new runner_object("Hausser Joell", 2, 0, 35, 58) ) ;
runners.push( new runner_object("Martinez Lara", 3, 0, 53, 58) ) ;
runners.push( new runner_object("Martinez Lara", 4, 0, 49, 42) ) ;
runners.push( new runner_object("Bertolo Jerem", 5, 0, 24, 50) ) ;
teams.push( new team_object("Urgences ghol", runners) )
var runners = new Array() ;
runners.push( new runner_object("Metrailler Pau", 0, 0, 47, 33) ) ;
runners.push( new runner_object("Metrailler Pau", 1, 0, 18, 40) ) ;
runners.push( new runner_object("Broillet Clara", 2, 0, 44, 4) ) ;
runners.push( new runner_object("Bavarel Pascal", 3, 0, 55, 34) ) ;
runners.push( new runner_object("Vergère Delph", 4, 0, 42, 51) ) ;
runners.push( new runner_object("Metrailler Na", 5, 0, 34, 31) ) ;
teams.push( new team_object("LES AMOUREUX DE LA BASKET", runners) )
var runners = new Array() ;
runners.push( new runner_object("Heymoz Emilie", 0, 0, 50, 20) ) ;
runners.push( new runner_object("Caputo Cruz Fa", 1, 0, 22, 51) ) ;
runners.push( new runner_object("Giacomotti Kar", 2, 0, 51, 52) ) ;
runners.push( new runner_object("Jaquier Marion", 3, 0, 48, 40) ) ;
runners.push( new runner_object("Combremont Lae", 4, 0, 43, 8) ) ;
runners.push( new runner_object("Combremont Sev", 5, 0, 26, 39) ) ;
teams.push( new team_object("Les tortues dopees", runners) )
var runners = new Array() ;
runners.push( new runner_object("Monforte Cecil", 0, 0, 50, 32) ) ;
runners.push( new runner_object("Walti Damien", 1, 0, 20, 13) ) ;
runners.push( new runner_object("Muller Arthur", 2, 0, 42, 46) ) ;
runners.push( new runner_object("Muller Vincent", 3, 0, 48, 3) ) ;
runners.push( new runner_object("Muller Antoine", 4, 0, 44, 27) ) ;
runners.push( new runner_object("Karsegard Joac", 5, 0, 37, 31) ) ;
teams.push( new team_object("Les mokamu", runners) )
var runners = new Array() ;
runners.push( new runner_object("Genoud Jean Ph", 0, 0, 54, 15) ) ;
runners.push( new runner_object("Falduto Carmel", 1, 0, 30, 9) ) ;
runners.push( new runner_object("Aebi Joelle", 2, 0, 50, 59) ) ;
runners.push( new runner_object("Junk Matthieu", 3, 0, 42, 32) ) ;
runners.push( new runner_object("Sauthier Benoi", 4, 0, 32, 54) ) ;
runners.push( new runner_object("Ergin Sami", 5, 0, 32, 44) ) ;
teams.push( new team_object("BCP BANK TEAM 1", runners) )
var runners = new Array() ;
runners.push( new runner_object("Benezet Christ", 0, 0, 54, 38) ) ;
runners.push( new runner_object("Gros Joel", 1, 0, 21, 31) ) ;
runners.push( new runner_object("Gros Joel", 2, 0, 42, 49) ) ;
runners.push( new runner_object("Zaharieva Eva", 3, 0, 53, 21) ) ;
runners.push( new runner_object("Gros Laetitia", 4, 0, 37, 41) ) ;
runners.push( new runner_object("Juillard Beatr", 5, 0, 34, 2) ) ;
teams.push( new team_object("Le club des cinq", runners) )
var runners = new Array() ;
runners.push( new runner_object("Boespflug Sofi", 0, 0, 50, 9) ) ;
runners.push( new runner_object("Mure Cyrielle", 1, 0, 24, 51) ) ;
runners.push( new runner_object("Kropp Pauline", 2, 0, 47, 3) ) ;
runners.push( new runner_object("Marion Yoann", 3, 0, 43, 38) ) ;
runners.push( new runner_object("Bister Pauline", 4, 0, 41, 45) ) ;
runners.push( new runner_object("Drevet Magali", 5, 0, 36, 52) ) ;
teams.push( new team_object("Les Pilsner Runners", runners) )
var runners = new Array() ;
runners.push( new runner_object("De Knoop Sebas", 0, 0, 41, 57) ) ;
runners.push( new runner_object("Minervini Gian", 1, 0, 22, 5) ) ;
runners.push( new runner_object("Ghazal Mahmoud", 2, 0, 48, 17) ) ;
runners.push( new runner_object("Bezard Amandin", 3, 0, 57, 38) ) ;
runners.push( new runner_object("Zorn Laura", 4, 0, 40, 49) ) ;
runners.push( new runner_object("Steuernagel-Se", 5, 0, 34, 23) ) ;
teams.push( new team_object("THE FUN, THE DIVERSE AND", runners) )
var runners = new Array() ;
runners.push( new runner_object("Turbatu Laura", 0, 0, 57, 42) ) ;
runners.push( new runner_object("Rousseaux Emma", 1, 0, 21, 11) ) ;
runners.push( new runner_object("Rousseaux Emma", 2, 0, 42, 12) ) ;
runners.push( new runner_object("Nguyen Tuan", 3, 0, 53, 38) ) ;
runners.push( new runner_object("Crivelli Prami", 4, 0, 38, 10) ) ;
runners.push( new runner_object("Crivelli Prami", 5, 0, 32, 18) ) ;
teams.push( new team_object("Rocket Tulipe", runners) )
var runners = new Array() ;
runners.push( new runner_object("Nelson Sara", 0, 0, 45, 5) ) ;
runners.push( new runner_object("Nelson Sara", 1, 0, 19, 6) ) ;
runners.push( new runner_object("Jimenez Claudi", 2, 0, 46, 58) ) ;
runners.push( new runner_object("Horak Michelle", 3, 0, 53, 13) ) ;
runners.push( new runner_object("Lyon Susan", 4, 0, 41, 11) ) ;
runners.push( new runner_object("Louit Guniz", 5, 0, 39, 56) ) ;
teams.push( new team_object("P&G 2", runners) )
var runners = new Array() ;
runners.push( new runner_object("Carmona Gabrie", 0, 0, 47, 43) ) ;
runners.push( new runner_object("Bovier Anyssia", 1, 0, 22, 35) ) ;
runners.push( new runner_object("Lenggenhager G", 2, 0, 49, 35) ) ;
runners.push( new runner_object("Jud Raphael", 3, 0, 49, 27) ) ;
runners.push( new runner_object("Broccard Virgi", 4, 0, 41, 34) ) ;
runners.push( new runner_object("Sierro Fabienn", 5, 0, 34, 44) ) ;
teams.push( new team_object("Les Coupains", runners) )
var runners = new Array() ;
runners.push( new runner_object("Samara Maya", 0, 0, 57, 33) ) ;
runners.push( new runner_object("Miller David", 1, 0, 19, 8) ) ;
runners.push( new runner_object("Stampacchia Ot", 2, 0, 47, 32) ) ;
runners.push( new runner_object("Clark-Polner E", 3, 0, 52, 38) ) ;
runners.push( new runner_object("Bleuler Regula", 4, 0, 41, 33) ) ;
runners.push( new runner_object("Ohm Christian", 5, 0, 27, 17) ) ;
teams.push( new team_object("Kamikaze Rockets", runners) )
var runners = new Array() ;
runners.push( new runner_object("Steffenoni Mat", 0, 0, 51, 35) ) ;
runners.push( new runner_object("Vaussanvin Jea", 1, 0, 21, 26) ) ;
runners.push( new runner_object("Padoux Sabrina", 2, 0, 43, 3) ) ;
runners.push( new runner_object("Duperray Olivi", 3, 0, 52, 5) ) ;
runners.push( new runner_object("Dasilva Cosme", 4, 0, 34, 20) ) ;
runners.push( new runner_object("Frey Helene", 5, 0, 43, 20) ) ;
teams.push( new team_object("LE QUEBEC LIBRE", runners) )
var runners = new Array() ;
runners.push( new runner_object("Pye Sarah", 0, 0, 49, 48) ) ;
runners.push( new runner_object("Boisclair Mano", 1, 0, 22, 16) ) ;
runners.push( new runner_object("Galarneau Soph", 2, 0, 50, 28) ) ;
runners.push( new runner_object("Penny Diana", 3, 0, 47, 46) ) ;
runners.push( new runner_object("Coke Aisha", 4, 0, 42, 28) ) ;
runners.push( new runner_object("Shields Ashlei", 5, 0, 33, 47) ) ;
teams.push( new team_object("Sassy Beavers", runners) )
var runners = new Array() ;
runners.push( new runner_object("Varidel Scilac", 0, 0, 54, 14) ) ;
runners.push( new runner_object("Jaffeux Martin", 1, 0, 26, 32) ) ;
runners.push( new runner_object("Fayolle Serge", 2, 0, 44, 2) ) ;
runners.push( new runner_object("Scilacci Renzo", 3, 0, 49, 44) ) ;
runners.push( new runner_object("Terray Jean-Pi", 4, 0, 36, 50) ) ;
runners.push( new runner_object("Renaud Chantal", 5, 0, 35, 26) ) ;
teams.push( new team_object("CHANTAL's", runners) )
var runners = new Array() ;
runners.push( new runner_object("Bouyanfif Abde", 0, 0, 54, 15) ) ;
runners.push( new runner_object("Mastantuono Ra", 1, 0, 27, 27) ) ;
runners.push( new runner_object("Hathroubi Moha", 2, 0, 39, 20) ) ;
runners.push( new runner_object("O'Connell Corm", 3, 0, 41, 10) ) ;
runners.push( new runner_object("Tome Baptista", 4, 0, 42, 20) ) ;
runners.push( new runner_object("Taralli Mario", 5, 0, 42, 50) ) ;
teams.push( new team_object("BCP BANK TEAM 2", runners) )
var runners = new Array() ;
runners.push( new runner_object("Guignard Patri", 0, 0, 57, 13) ) ;
runners.push( new runner_object("Hauri Gaetan", 1, 0, 23, 49) ) ;
runners.push( new runner_object("Lafargue Julie", 2, 0, 51, 6) ) ;
runners.push( new runner_object("Luisier Damien", 3, 0, 45, 14) ) ;
runners.push( new runner_object("Bugnon Cedric", 4, 0, 35, 36) ) ;
runners.push( new runner_object("Rasmussen Patr", 5, 0, 34, 56) ) ;
teams.push( new team_object("la Sirene", runners) )
var runners = new Array() ;
runners.push( new runner_object("Bruhin Nathali", 0, 0, 50, 7) ) ;
runners.push( new runner_object("Pittet Eleonor", 1, 0, 21, 5) ) ;
runners.push( new runner_object("Boulet-Clivaz", 2, 0, 41, 35) ) ;
runners.push( new runner_object("Meythiaz Sylvi", 3, 0, 48, 52) ) ;
runners.push( new runner_object("Mann Sandra", 4, 0, 45, 38) ) ;
runners.push( new runner_object("Loiseau Moser", 5, 0, 40, 51) ) ;
teams.push( new team_object("les mamans", runners) )
var runners = new Array() ;
runners.push( new runner_object("Antunes Helder", 0, 0, 45, 11) ) ;
runners.push( new runner_object("Saisi Stefania", 1, 0, 23, 33) ) ;
runners.push( new runner_object("Perez-Rejon Ju", 2, 0, 41, 49) ) ;
runners.push( new runner_object("Perez-Rejon Ju", 3, 0, 50, 14) ) ;
runners.push( new runner_object("Perez-Rejon Ju", 4, 0, 43, 18) ) ;
runners.push( new runner_object("Jamois Sabine", 5, 0, 44, 8) ) ;
teams.push( new team_object("Vas-y Molo Mais Pas Trop", runners) )
var runners = new Array() ;
runners.push( new runner_object("Goldhill Nicol", 0, 0, 51, 57) ) ;
runners.push( new runner_object("Graham Toni", 1, 0, 25, 6) ) ;
runners.push( new runner_object("van Aswegen Ja", 2, 0, 47, 33) ) ;
runners.push( new runner_object("Lock Carla", 3, 0, 47, 29) ) ;
runners.push( new runner_object("Stanton Marcia", 4, 0, 38, 7) ) ;
runners.push( new runner_object("Ahlers Tamara", 5, 0, 38, 10) ) ;
teams.push( new team_object("Bebeautiful", runners) )
var runners = new Array() ;
runners.push( new runner_object("Locarno Manuel", 0, 0, 44, 49) ) ;
runners.push( new runner_object("Keveloh Kristi", 1, 0, 24, 49) ) ;
runners.push( new runner_object("Keveloh Kristi", 2, 0, 50, 54) ) ;
runners.push( new runner_object("Beaulieu Danie", 3, 0, 56, 10) ) ;
runners.push( new runner_object("Hanley Michael", 4, 0, 34, 40) ) ;
runners.push( new runner_object("Hanley Michael", 5, 0, 37, 31) ) ;
teams.push( new team_object("Forum Runners", runners) )
var runners = new Array() ;
runners.push( new runner_object("Slaunwhite Jas", 0, 0, 50, 31) ) ;
runners.push( new runner_object("Bourboula Vali", 1, 0, 25, 23) ) ;
runners.push( new runner_object("Knight Angela", 2, 0, 46, 7) ) ;
runners.push( new runner_object("Hochstrasser T", 3, 0, 46, 2) ) ;
runners.push( new runner_object("Rosa Eva", 4, 0, 45, 31) ) ;
runners.push( new runner_object("Bramham Rod", 5, 0, 35, 46) ) ;
teams.push( new team_object("Wooden Spoon", runners) )
var runners = new Array() ;
runners.push( new runner_object("Mc Kibbin Jenn", 0, 0, 52, 0) ) ;
runners.push( new runner_object("Dubrul Veroniq", 1, 0, 22, 30) ) ;
runners.push( new runner_object("Dubrul Veroniq", 2, 0, 46, 49) ) ;
runners.push( new runner_object("Guibert Yvette", 3, 0, 56, 56) ) ;
runners.push( new runner_object("Lacour Dominiq", 4, 0, 38, 20) ) ;
runners.push( new runner_object("Lacour Dominiq", 5, 0, 33, 20) ) ;
teams.push( new team_object("les choulexjussyennes", runners) )
var runners = new Array() ;
runners.push( new runner_object("Zaucher Ann", 0, 0, 49, 48) ) ;
runners.push( new runner_object("Chengadu Sonia", 1, 0, 21, 40) ) ;
runners.push( new runner_object("Bares Elena", 2, 0, 47, 39) ) ;
runners.push( new runner_object("Kuster Aurelie", 3, 0, 49, 58) ) ;
runners.push( new runner_object("Touvet Pauline", 4, 0, 41, 51) ) ;
runners.push( new runner_object("Cardoso Claudi", 5, 0, 39, 6) ) ;
teams.push( new team_object("Les petites reines", runners) )
var runners = new Array() ;
runners.push( new runner_object("Cevey Ariane", 0, 0, 54, 22) ) ;
runners.push( new runner_object("Gruber Marylou", 1, 0, 25, 4) ) ;
runners.push( new runner_object("Kapanci Domini", 2, 0, 43, 32) ) ;
runners.push( new runner_object("Gamperle Jean-", 3, 0, 48, 51) ) ;
runners.push( new runner_object("Martin Gallice", 4, 0, 42, 42) ) ;
runners.push( new runner_object("Berchten Teich", 5, 0, 35, 56) ) ;
teams.push( new team_object("Les Veyri'funny girls", runners) )
var runners = new Array() ;
runners.push( new runner_object("Schwob Elodie", 0, 0, 52, 0) ) ;
runners.push( new runner_object("Augstburger Ni", 1, 0, 24, 41) ) ;
runners.push( new runner_object("Kalisperatis M", 2, 0, 43, 59) ) ;
runners.push( new runner_object("Egger Sara", 3, 0, 55, 52) ) ;
runners.push( new runner_object("Larpin Ken", 4, 0, 40, 18) ) ;
runners.push( new runner_object("Bertacco Carol", 5, 0, 33, 43) ) ;
teams.push( new team_object("P&G", runners) )
var runners = new Array() ;
runners.push( new runner_object("Bailly Salins", 0, 0, 48, 14) ) ;
runners.push( new runner_object("Monnet Yann", 1, 0, 20, 40) ) ;
runners.push( new runner_object("Deshayes Annic", 2, 0, 49, 44) ) ;
runners.push( new runner_object("Medici Claire", 3, 0, 53, 47) ) ;
runners.push( new runner_object("Gillet Stephan", 4, 0, 40, 24) ) ;
runners.push( new runner_object("Gillet Stephan", 5, 0, 38, 5) ) ;
teams.push( new team_object("arx iT Team", runners) )
var runners = new Array() ;
runners.push( new runner_object("Hastings Newso", 0, 0, 47, 35) ) ;
runners.push( new runner_object("Paterson-Brown", 1, 0, 22, 38) ) ;
runners.push( new runner_object("Wolford Morna", 2, 0, 49, 25) ) ;
runners.push( new runner_object("Bonfiglio Anto", 3, 0, 56, 59) ) ;
runners.push( new runner_object("Prentice Anne", 4, 0, 41, 21) ) ;
runners.push( new runner_object("Hare Isabelle", 5, 0, 33, 5) ) ;
teams.push( new team_object("GET FIT THE RUNNERS WAY", runners) )
var runners = new Array() ;
runners.push( new runner_object("Nguyen Minh", 0, 0, 50, 34) ) ;
runners.push( new runner_object("Hoang Thuy-Co", 1, 0, 25, 39) ) ;
runners.push( new runner_object("Da Silva Irena", 2, 0, 44, 51) ) ;
runners.push( new runner_object("Erni Xavier", 3, 0, 45, 4) ) ;
runners.push( new runner_object("Hoang Tuong", 4, 0, 43, 56) ) ;
runners.push( new runner_object("Hoang Thuy-An", 5, 0, 41, 32) ) ;
teams.push( new team_object("HOANG", runners) )
var runners = new Array() ;
runners.push( new runner_object("Ferriter Karin", 0, 0, 48, 38) ) ;
runners.push( new runner_object("Di Filippo Chr", 1, 0, 24, 30) ) ;
runners.push( new runner_object("Schagrin Salli", 2, 0, 44, 35) ) ;
runners.push( new runner_object("Reves Leslie", 3, 0, 54, 23) ) ;
runners.push( new runner_object("Pitcher-Woznia", 4, 0, 42, 20) ) ;
runners.push( new runner_object("Dye Colleen", 5, 0, 37, 59) ) ;
teams.push( new team_object("TAG YOU'RE IT!", runners) )
var runners = new Array() ;
runners.push( new runner_object("Olphand Lauren", 0, 0, 56, 58) ) ;
runners.push( new runner_object("Dequiedt Veron", 1, 0, 24, 2) ) ;
runners.push( new runner_object("Campo Caroline", 2, 0, 42, 34) ) ;
runners.push( new runner_object("Bousseton Chri", 3, 0, 53, 6) ) ;
runners.push( new runner_object("Segransan Erik", 4, 0, 42, 0) ) ;
runners.push( new runner_object("Leclerc Nathal", 5, 0, 34, 9) ) ;
teams.push( new team_object("les SixRenA6pat'", runners) )
var runners = new Array() ;
runners.push( new runner_object("Körpert Wolfg", 0, 0, 52, 41) ) ;
runners.push( new runner_object("Körpert Wolfg", 1, 0, 22, 44) ) ;
runners.push( new runner_object("a Körpert Mic", 2, 0, 39, 33) ) ;
runners.push( new runner_object("ae Britten Dan", 3, 0, 46, 16) ) ;
runners.push( new runner_object("el Bruzova Ren", 4, 0, 53, 13) ) ;
runners.push( new runner_object("ta Baiani Giul", 5, 0, 39, 5) ) ;
teams.push( new team_object("Charlie`s angels", runners) )
var runners = new Array() ;
runners.push( new runner_object("Sormani Floren", 0, 0, 55, 8) ) ;
runners.push( new runner_object("Di Stasi Carol", 1, 0, 23, 32) ) ;
runners.push( new runner_object("Martinez Isabe", 2, 0, 45, 31) ) ;
runners.push( new runner_object("Mondo Sonia", 3, 0, 50, 26) ) ;
runners.push( new runner_object("Grippi Tania", 4, 0, 41, 16) ) ;
runners.push( new runner_object("Koudelkina Ann", 5, 0, 37, 40) ) ;
teams.push( new team_object("Dream Team Place Rouge", runners) )
var runners = new Array() ;
runners.push( new runner_object("Du Plessis Luc", 0, 0, 43, 12) ) ;
runners.push( new runner_object("Lutz Nathalie", 1, 0, 24, 58) ) ;
runners.push( new runner_object("Raths Julia", 2, 0, 52, 16) ) ;
runners.push( new runner_object("Raths Jonathan", 3, 0, 56, 22) ) ;
runners.push( new runner_object("Wallin Nathali", 4, 0, 41, 58) ) ;
runners.push( new runner_object("Oberoi Aditaya", 5, 0, 34, 51) ) ;
teams.push( new team_object("FIFA Master - De Montfort", runners) )
var runners = new Array() ;
runners.push( new runner_object("Fardella Claud", 0, 1, 1, 29) ) ;
runners.push( new runner_object("Ortiz Chicheri", 1, 0, 24, 49) ) ;
runners.push( new runner_object("Chicherio Chri", 2, 0, 42, 52) ) ;
runners.push( new runner_object("Morand Delphin", 3, 0, 50, 27) ) ;
runners.push( new runner_object("Bucher Chantal", 4, 0, 42, 29) ) ;
runners.push( new runner_object("Arrigoni Maria", 5, 0, 31, 52) ) ;
teams.push( new team_object("piano ma non troppo", runners) )
var runners = new Array() ;
runners.push( new runner_object("Souza Francisc", 0, 0, 57, 27) ) ;
runners.push( new runner_object("Betsur Viniciu", 1, 0, 18, 32) ) ;
runners.push( new runner_object("Chikusa Eduard", 2, 0, 48, 51) ) ;
runners.push( new runner_object("Pereira Fernan", 3, 0, 56, 39) ) ;
runners.push( new runner_object("Lopes Alberto", 4, 0, 37, 5) ) ;
runners.push( new runner_object("Pinto Alessand", 5, 0, 35, 44) ) ;
teams.push( new team_object("Baratona", runners) )
var runners = new Array() ;
runners.push( new runner_object("Gutierrez Bell", 0, 0, 56, 49) ) ;
runners.push( new runner_object("Rumasuglia Jud", 1, 0, 19, 19) ) ;
runners.push( new runner_object("Ryan Vanessa", 2, 0, 46, 43) ) ;
runners.push( new runner_object("Ebot Rachel", 3, 0, 52, 45) ) ;
runners.push( new runner_object("Denis Cecilia", 4, 0, 43, 10) ) ;
runners.push( new runner_object("Lda Simao", 5, 0, 35, 43) ) ;
teams.push( new team_object("Equipe Bella", runners) )
var runners = new Array() ;
runners.push( new runner_object("Robitail Frede", 0, 0, 52, 26) ) ;
runners.push( new runner_object("Favre Helène", 1, 0, 21, 32) ) ;
runners.push( new runner_object("Favre Helène", 2, 0, 47, 3) ) ;
runners.push( new runner_object("Taylor Mauri", 3, 0, 47, 56) ) ;
runners.push( new runner_object("e Blinova Kris", 4, 0, 45, 23) ) ;
runners.push( new runner_object("i Robitail Jev", 5, 0, 41, 11) ) ;
teams.push( new team_object("Taylor's Team", runners) )
var runners = new Array() ;
runners.push( new runner_object("Ganbat Orkhont", 0, 0, 57, 30) ) ;
runners.push( new runner_object("Teppe Marie-Cl", 1, 0, 20, 47) ) ;
runners.push( new runner_object("", 2, 0, 43, 55) ) ;
runners.push( new runner_object("Peter Clarence", 3, 0, 55, 19) ) ;
runners.push( new runner_object("Magnin Cecile", 4, 0, 41, 29) ) ;
runners.push( new runner_object("", 5, 0, 37, 17) ) ;
teams.push( new team_object("Python & Peter", runners) )
var runners = new Array() ;
runners.push( new runner_object("Hudson Nathali", 0, 0, 53, 53) ) ;
runners.push( new runner_object("Menetrier Clai", 1, 0, 22, 34) ) ;
runners.push( new runner_object("Menetrier Clai", 2, 0, 48, 3) ) ;
runners.push( new runner_object("Folea Ligia", 3, 0, 55, 49) ) ;
runners.push( new runner_object("Bischof Stepha", 4, 0, 41, 0) ) ;
runners.push( new runner_object("Bischof Stepha", 5, 0, 34, 58) ) ;
teams.push( new team_object("Smile on", runners) )
var runners = new Array() ;
runners.push( new runner_object("Gaskell Martin", 0, 0, 51, 24) ) ;
runners.push( new runner_object("Gaskell Alex", 1, 0, 21, 10) ) ;
runners.push( new runner_object("Thomas Nathan", 2, 0, 44, 49) ) ;
runners.push( new runner_object("Ogilvie Farquh", 3, 0, 55, 20) ) ;
runners.push( new runner_object("Ogilvie Ewan", 4, 0, 46, 0) ) ;
runners.push( new runner_object("Ogilvie Jamie", 5, 0, 37, 54) ) ;
teams.push( new team_object("Cancer Research", runners) )
var runners = new Array() ;
runners.push( new runner_object("Paramesvaran S", 0, 0, 53, 45) ) ;
runners.push( new runner_object("Paramesvaran S", 1, 0, 21, 51) ) ;
runners.push( new runner_object("Eshaq Yossof", 2, 0, 40, 55) ) ;
runners.push( new runner_object("Daya Rozmin", 3, 1, 12, 7) ) ;
runners.push( new runner_object("Maccormack Nei", 4, 0, 37, 57) ) ;
runners.push( new runner_object("Randle-Conde A", 5, 0, 30, 58) ) ;
teams.push( new team_object("Bremsstrahlung", runners) )
var runners = new Array() ;
runners.push( new runner_object("Becker Cathie", 0, 1, 2, 31) ) ;
runners.push( new runner_object("Preud'Homme Al", 1, 0, 22, 11) ) ;
runners.push( new runner_object("Preud'Homme Al", 2, 0, 50, 50) ) ;
runners.push( new runner_object("Morel Nathalie", 3, 0, 56, 0) ) ;
runners.push( new runner_object("Merour Laurian", 4, 0, 35, 22) ) ;
runners.push( new runner_object("Ruey Benjamin", 5, 0, 31, 12) ) ;
teams.push( new team_object("P&G 1", runners) )
var runners = new Array() ;
runners.push( new runner_object("Delatreche Cel", 0, 0, 47, 28) ) ;
runners.push( new runner_object("Goncalves Gray", 1, 0, 24, 31) ) ;
runners.push( new runner_object("Michel Aline", 2, 0, 48, 41) ) ;
runners.push( new runner_object("Blanchard Pasc", 3, 1, 0, 2) ) ;
runners.push( new runner_object("Michel Anne", 4, 0, 40, 38) ) ;
runners.push( new runner_object("Augendre Isabe", 5, 0, 37, 23) ) ;
teams.push( new team_object("TEAM LBC", runners) )
var runners = new Array() ;
runners.push( new runner_object("Mottaz Anais", 0, 0, 45, 30) ) ;
runners.push( new runner_object("Licker Virgini", 1, 0, 20, 1) ) ;
runners.push( new runner_object("Salleron Lisa", 2, 0, 48, 18) ) ;
runners.push( new runner_object("Mottaz Helene", 3, 1, 0, 41) ) ;
runners.push( new runner_object("Zufferey Bakos", 4, 0, 49, 7) ) ;
runners.push( new runner_object("Cuche Beatrice", 5, 0, 35, 57) ) ;
teams.push( new team_object("Witches of science", runners) )
var runners = new Array() ;
runners.push( new runner_object("Waterlot Jean-", 0, 0, 49, 31) ) ;
runners.push( new runner_object("Frontera Natha", 1, 0, 25, 5) ) ;
runners.push( new runner_object("Raymond Marie-", 2, 0, 56, 17) ) ;
runners.push( new runner_object("Briquez Vincen", 3, 0, 43, 33) ) ;
runners.push( new runner_object("Bocquet Valeri", 4, 0, 44, 28) ) ;
runners.push( new runner_object("Rivat Karine", 5, 0, 41, 26) ) ;
teams.push( new team_object("LES BRAS CASSES", runners) )
var runners = new Array() ;
runners.push( new runner_object("Cisneros Juan-", 0, 0, 54, 52) ) ;
runners.push( new runner_object("Aneiros Galina", 1, 0, 24, 13) ) ;
runners.push( new runner_object("Rengifo Angeli", 2, 0, 50, 0) ) ;
runners.push( new runner_object("Friedmann Arie", 3, 0, 51, 55) ) ;
runners.push( new runner_object("Goulart Freder", 4, 0, 40, 57) ) ;
runners.push( new runner_object("Botao-Mullins", 5, 0, 39, 5) ) ;
teams.push( new team_object("PHT Team", runners) )
var runners = new Array() ;
runners.push( new runner_object("Konialidis Ele", 0, 0, 54, 0) ) ;
runners.push( new runner_object("Vogel Allison", 1, 0, 21, 18) ) ;
runners.push( new runner_object("Som Mithona", 2, 0, 50, 19) ) ;
runners.push( new runner_object("Janin Emilie", 3, 0, 56, 49) ) ;
runners.push( new runner_object("Nogueira Vania", 4, 0, 44, 22) ) ;
runners.push( new runner_object("Kowalczyk Nath", 5, 0, 36, 1) ) ;
teams.push( new team_object("Veeman", runners) )
var runners = new Array() ;
runners.push( new runner_object("Corral Carrizo", 0, 0, 35, 49) ) ;
runners.push( new runner_object("Smith Karina", 1, 0, 26, 11) ) ;
runners.push( new runner_object("Carrizo Castil", 2, 0, 58, 27) ) ;
runners.push( new runner_object("Kahlen Jean-Pi", 3, 0, 55, 32) ) ;
runners.push( new runner_object("Telleria Raque", 4, 0, 47, 47) ) ;
runners.push( new runner_object("Roman Ysset", 5, 0, 39, 56) ) ;
teams.push( new team_object("SIXERS DREAM TEAM", runners) )
var runners = new Array() ;
runners.push( new runner_object("Barrientos Car", 0, 0, 46, 7) ) ;
runners.push( new runner_object("Agbayani Mario", 1, 0, 27, 29) ) ;
runners.push( new runner_object("Strebel Franz", 2, 0, 51, 13) ) ;
runners.push( new runner_object("Cardenas Franc", 3, 0, 51, 46) ) ;
runners.push( new runner_object("Louet Stephane", 4, 0, 42, 32) ) ;
runners.push( new runner_object("Castillo Nepta", 5, 0, 45, 14) ) ;
teams.push( new team_object("Team Malou", runners) )
var runners = new Array() ;
runners.push( new runner_object("De Sainte Mari", 0, 0, 58, 9) ) ;
runners.push( new runner_object("Marti Caroline", 1, 0, 23, 25) ) ;
runners.push( new runner_object("Dubouchet Cort", 2, 0, 50, 51) ) ;
runners.push( new runner_object("Wenger Thomas", 3, 0, 58, 32) ) ;
runners.push( new runner_object("Chiaradonna De", 4, 0, 36, 1) ) ;
runners.push( new runner_object("Eya Nchama Cru", 5, 0, 37, 32) ) ;
teams.push( new team_object("candidats-es socialistes", runners) )
var runners = new Array() ;
runners.push( new runner_object("Fonseca Camyla", 0, 0, 56, 21) ) ;
runners.push( new runner_object("Alvarez Barbar", 1, 0, 22, 25) ) ;
runners.push( new runner_object("Barredo Lola", 2, 0, 46, 21) ) ;
runners.push( new runner_object("Armando Alejan", 3, 0, 53, 4) ) ;
runners.push( new runner_object("Lemos Gabi", 4, 0, 49, 25) ) ;
runners.push( new runner_object("Arias Mariu", 5, 0, 38, 9) ) ;
teams.push( new team_object("El 49", runners) )
var runners = new Array() ;
runners.push( new runner_object("Jones Rebecca", 0, 0, 51, 48) ) ;
runners.push( new runner_object("Farmer Dawn", 1, 0, 28, 40) ) ;
runners.push( new runner_object("Gray Hannah", 2, 0, 52, 37) ) ;
runners.push( new runner_object("Richardson Nik", 3, 0, 50, 4) ) ;
runners.push( new runner_object("Tellier Marian", 4, 0, 37, 57) ) ;
runners.push( new runner_object("Cawood Emma", 5, 0, 45, 22) ) ;
teams.push( new team_object("ACCA-AWESOME", runners) )
var runners = new Array() ;
runners.push( new runner_object("Muller Stephan", 0, 0, 58, 57) ) ;
runners.push( new runner_object("Marclay Stepha", 1, 0, 26, 6) ) ;
runners.push( new runner_object("Marclay Stepha", 2, 0, 53, 43) ) ;
runners.push( new runner_object("Lamy Xavier", 3, 0, 52, 52) ) ;
runners.push( new runner_object("Lamy Geraldine", 4, 0, 43, 7) ) ;
runners.push( new runner_object("Lamy Geraldine", 5, 0, 36, 47) ) ;
teams.push( new team_object("7anela", runners) )
var runners = new Array() ;
runners.push( new runner_object("Hennous Semia", 0, 0, 49, 3) ) ;
runners.push( new runner_object("Larson Melanie", 1, 0, 23, 30) ) ;
runners.push( new runner_object("Perrier Sonia", 2, 0, 52, 28) ) ;
runners.push( new runner_object("Zaric Milijana", 3, 0, 59, 26) ) ;
runners.push( new runner_object("Panagides Dora", 4, 0, 48, 50) ) ;
runners.push( new runner_object("Jungjohann Sve", 5, 0, 38, 21) ) ;
teams.push( new team_object("e-LEMON-ators", runners) )
var runners = new Array() ;
runners.push( new runner_object("Zufferey Sebas", 0, 0, 57, 32) ) ;
runners.push( new runner_object("Grumbach Laeti", 1, 0, 24, 52) ) ;
runners.push( new runner_object("Köhler Sabrin", 2, 0, 50, 26) ) ;
runners.push( new runner_object("Zufferey Aure", 3, 0, 59, 19) ) ;
runners.push( new runner_object("Simeoni Carol", 4, 0, 50, 54) ) ;
runners.push( new runner_object("Carluccio Nic", 5, 0, 32, 38) ) ;
teams.push( new team_object("les paresseux", runners) )
var runners = new Array() ;
runners.push( new runner_object("Harley Ursula", 0, 1, 4, 32) ) ;
runners.push( new runner_object("Sarrazin Valer", 1, 0, 25, 0) ) ;
runners.push( new runner_object("Medina Sandro", 2, 0, 45, 18) ) ;
runners.push( new runner_object("Amer Shada", 3, 0, 57, 23) ) ;
runners.push( new runner_object("Geninazzi Flor", 4, 0, 49, 43) ) ;
runners.push( new runner_object("Sasina-Yates Y", 5, 0, 36, 42) ) ;
teams.push( new team_object("Coutts", runners) )
var runners = new Array() ;
runners.push( new runner_object("Islami Lume", 0, 0, 55, 25) ) ;
runners.push( new runner_object("Wicky Natacha", 1, 0, 25, 5) ) ;
runners.push( new runner_object("Bajrami Ilir", 2, 0, 50, 6) ) ;
runners.push( new runner_object("Llanos Froilan", 3, 0, 47, 12) ) ;
runners.push( new runner_object("Da Costa Jean-", 4, 0, 51, 6) ) ;
runners.push( new runner_object("De Almeida Van", 5, 0, 50, 40) ) ;
teams.push( new team_object("MP Running team", runners) )
var runners = new Array() ;
runners.push( new runner_object("Motolo Moletsa", 0, 1, 7, 34) ) ;
runners.push( new runner_object("Munday Denise", 1, 0, 33, 17) ) ;
runners.push( new runner_object("Peyser Darcy", 2, 0, 47, 55) ) ;
runners.push( new runner_object("Meguenni-Tani", 3, 0, 47, 8) ) ;
runners.push( new runner_object("Black Elizabet", 4, 0, 43, 20) ) ;
runners.push( new runner_object("Page Victoria", 5, 0, 41, 11) ) ;
teams.push( new team_object("GHNI Switzerland relais", runners) )
var runners = new Array() ;
runners.push( new runner_object("Gaughan Margar", 0, 0, 59, 59) ) ;
runners.push( new runner_object("Edeus Gillian", 1, 0, 23, 47) ) ;
runners.push( new runner_object("Edeus Gillian", 2, 0, 51, 38) ) ;
runners.push( new runner_object("Bogard-Wilson", 3, 1, 6, 13) ) ;
runners.push( new runner_object("Fairweather De", 4, 0, 46, 28) ) ;
runners.push( new runner_object("Wright Emma", 5, 0, 34, 55) ) ;
teams.push( new team_object("Top Totty Runners", runners) )
