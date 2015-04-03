ang.controller('ComfortPlayedCtrl', function($scope, $animate, $interval){
  $animate.enabled(true);
  $scope.picNum = 0;

  $scope.playPicks = [
    {summoner: "skPrismo", played: ['Amumu', 'Morgana', 'Blitzcrank']},
    {summoner: "SuitXUp", played: ['Graves', 'Jinx', 'Pantheon']},
    {summoner: "skBMO", played: ['Malphite', 'Morgana', "Nautilus"]},
    {summoner: "SlyDynamo", played: ['Vi', 'Lissandra', 'JarvanIV']},
    {summoner: "YellowHappy", played: ['Thresh', 'Heimerdinger', 'Blitzcrank']},
    {summoner: "skSkycon", played: ['Kalista', 'Trundle', 'Blitzcrank']}
  ];

});