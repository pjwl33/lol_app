ang.controller('ComfortWinCtrl', function($scope, $animate, $interval){
  $scope.currentSlide = 0;
  $scope.picNum = 0;

  $scope.winPicks = [
  {summoner: "skPrismo", win: ['Amumu', 'Sejuani', 'Vi']},
  {summoner: "SuitXUp", win: ['Jinx', 'Zed', 'Pantheon']},
  {summoner: "skBMO", win: ['Nautilus', 'Morgana', 'Gnar']},
  {summoner: "SlyDynamo", win: ['Vi', 'JarvanIV', 'Lissandra']},
  {summoner: "YellowHappy", win: ['Cassiopeia', 'Nami', 'Vayne']},
  {summoner: "skSkycon", win: ['Heimerdinger', 'Annie', 'Trundle']}
  ];

});