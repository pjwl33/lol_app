ang.controller('HomeCtrl', function($scope, $animate, $http, $interval){
  $animate.enabled(true);
  $scope.num = 0;
  // $interval(changePic, 10000);

  function changePic(){
    if ($scope.num === 2) {
      $scope.num = 0;
    } else {
      $scope.num += 1;
    }
  }

  $http.get('/get_champs.json').then(function(res){
    $scope.champs = res.data;
  });

  $scope.picks = 'win';
  $scope.showPicks = function(divId){
    $scope.picks = divId;
    checkActive();
  };

  $scope.groupDynamics = [
  {summoner: "Yunah", strengths: ['Mobile Champs', 'Utility Mage', 'Assassin'], weaknesses: ['Low Mobility', 'ADC', 'Low Damage Champs']},
  {summoner: "SuitXUp", strengths: ['Assassin', 'Off-Tanks'], weaknesses: ['Initiators']},
  {summoner: "DJ SojuTIME", strengths: ['Mobile Lane Bullies', 'Initiator Tanks'], weaknesses: ['Vulnerable Early Game Champs']},
  {summoner: "SlyDynamo", strengths: ['Hypercarry', 'Roles where Plays Can be Done on Instinct'], weaknesses: ['Non-Seige ADC']},
  {summoner: "YellowHappy", strengths: ['Thresh God', 'Bubble God'], weaknesses: ['Getting Bored', 'YOLO']},
  {summoner: "skguppy", strengths: ['Amumu in the Jungle', 'Laning'], weaknesses: ['That one time he ulted while trying to Trinket Ward...', 'Initiation Hesitation']},
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
  {name: "WOMBOLOGY", abbr: "wombo", kyomiChamps: ['Orianna', 'Nami','Janna'], suitChamps: ['Wukong', 'Vi'], sojuChamps: ['Lulu', 'Malphite'], slyChamps: ['Yasuo'], yellowChamps: ['Thresh', 'Nami', 'Orianna'], skgChamps: ['Annie', 'Amumu', 'Ryze']},
  {name: "2 Fast 2 Furious", abbr: "fast", kyomiChamps: ['Orianna', 'Karma'], suitChamps: ['XinZhao', 'Vi', 'Wukong'], sojuChamps: ['Lulu', 'Malphite', 'DrMundo'], slyChamps: ['Talon', 'Lucian'], yellowChamps: ['Sivir', 'Nami'], skgChamps: ['Fizz', 'Amumu', 'Sivir']},
  {name: "Freebies", abbr: "freebies", kyomiChamps: ['Ahri', 'Akali', 'Lucian'], suitChamps: ['XinZhao', 'JarvanIV', 'Pantheon'], sojuChamps: ['Darius', 'Warwick', 'Blitzcrank'], slyChamps: ['Fizz', 'Talon', 'Lucian'], yellowChamps: ['Thresh', 'Blitzcrank'], skgChamps: ['Fizz', 'Amumu', 'Sivir']},
  {name: "Wanna See a Hat-Trick?", abbr: "hattrick", kyomiChamps: ['Caitlyn', 'Orianna', 'Karma', 'Sona'], suitChamps: ['Wukong', 'Khazix'], sojuChamps: ['Lulu', 'DrMundo', 'Nidalee'], slyChamps: ['Caitlyn', 'Khazix', 'Zed'], yellowChamps: ['Ziggs', 'Orianna', 'Nami', 'Caitlyn'], skgChamps: ['Annie', 'Amumu']},
  {name: "I'm a survivor", abbr: "survivor", kyomiChamps: ['Anivia'], suitChamps: ['Aatrox'], sojuChamps: ['Alistar'], slyChamps: ['Sion'], yellowChamps: ['Zilean'], skgChamps: ['Kayle']},
  ];

  $scope.showTeamComp = function(teamName){
    $scope.showTeam = teamName;
  };
});