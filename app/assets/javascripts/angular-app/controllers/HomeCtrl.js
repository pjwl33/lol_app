ang.controller('HomeCtrl', function($scope, $animate, $http, $interval){
  $animate.enabled(true);
  $scope.num = 0;

  $http.get('/get_champs.json').then(function(res){
    $scope.champs = res.data;
  });

  $scope.picks = 'win';
  $scope.showPicks = function(divId){
    $scope.picks = divId;
    checkActive();
  };

  $scope.groupDynamics = [
  {summoner: "skPrismo", strengths: ['Wombo Champs', 'Jungle Knowledge', 'Team Fights'], weaknesses: ['Solo Lanes', 'ADC', 'Non-Tanky Champs']},
  {summoner: "SuitXUp", strengths: ['ADC Positioning', 'Off-Tanks with Damage'], weaknesses: ['Initiators', 'Over-Stepping']},
  {summoner: "skBMO", strengths: ['Lane and Jungle Tanks', 'Initiator Tanks'], weaknesses: ['CSing', 'Peeling for Carries', 'Map awareness', 'Lane Trades']},
  {summoner: "SlyDynamo", strengths: ['Hypercarry', 'Roles where Plays Can be Done on Instinct'], weaknesses: ['Non-Seige ADC']},
  {summoner: "YellowHappy", strengths: ['Thresh God', 'Bubble God', 'Blitz God'], weaknesses: ['Getting Bored', 'YOLO']},
  {summoner: "skSkycon", strengths: ['Kalista', 'Trundle Jungle', 'Have You Seen My (dead) Bear (sister) Tibbers?'], weaknesses: ['Non-comfort Champs', 'Doing his Own Thang']},
  ];

  $scope.win = true;
  function checkActive(){
    if ($scope.picks == 'win'){
      $scope.win = true;
      $scope.play = false;
    } else {
      $scope.win = false;
      $scope.play = true;
    }
  }

  $scope.teamComps = [
  {name: "WOMBOLOGY", abbr: "wombo", p1Champs: ['Amumu', 'Sejuani'], p2Champs: ['Graves', 'Jinx'], p3Champs: ['Nautilus', 'Malphite', 'Lissandra'], p4Champs: ['Viktor', 'Vi', 'JarvanIV'], ph5Champs: ['Thresh', 'Nami', 'Blitzcrank'], p6Champs: ['Annie', 'Kalista', 'Heimerdinger']},
  {name: "JuggerMaw/ADC", abbr: "protect", p1Champs: ['Amumu', 'Sejuani', 'Morgana'], p2Champs: ['Jinx', 'Graves'], p3Champs: ['Lulu', 'Malphite', 'Nautilus'], p4Champs: ['Zed', 'Viktor', 'Lissandra'], p5Champs: ['Thresh', 'Janna', 'Nami'], p6Champs: ['Kalista']},
  // {name: "Freebies", abbr: "freebies", p1Champs: ['Ahri', 'Akali', 'Lucian'], p2Champs: ['XinZhao', 'JarvanIV', 'Pantheon'], p3Champs: ['Darius', 'Warwick', 'Blitzcrank'], p4Champs: ['Fizz', 'Talon', 'Lucian'], ph5Champs: ['Thresh', 'Blitzcrank'], p6Champs: ['Fizz', 'Amumu', 'Sivir']},
  // {name: "Wanna See a Hat-Trick?", abbr: "hattrick", p1Champs: ['Caitlyn', 'Orianna', 'Karma', 'Sona'], p2Champs: ['Wukong', 'Khazix'], p3Champs: ['Lulu', 'DrMundo', 'Nidalee'], p4Champs: ['Caitlyn', 'Khazix', 'Zed'], ph5Champs: ['Ziggs', 'Orianna', 'Nami', 'Caitlyn'], p6Champs: ['Annie', 'Amumu']},
  // {name: "I'm a survivor", abbr: "survivor", p1Champs: ['Anivia'], p2Champs: ['Aatrox'], p3Champs: ['Alistar'], p4Champs: ['Sion'], ph5Champs: ['Zilean'], p6Champs: ['Kayle']},
  ];

  $scope.showTeamComp = function(teamName){
    $scope.showTeam = teamName;
  };
});