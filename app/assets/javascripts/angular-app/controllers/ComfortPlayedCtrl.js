ang.controller('ComfortPlayedCtrl', function($scope, $animate, $interval){
  $animate.enabled(true);
  $scope.picNum = 0;
  // $interval(changePic, 10000);

  $scope.playPicks = [
    {summoner: "Yunah", played: ['Ahri', 'MissFortune', 'Nami']},
    {summoner: "SuitXUp", played: ['Jax', 'Wukong', 'Shyvana']},
    {summoner: "WHblackITE", played: ['Morgana', 'Thresh', 'Lulu']},
    {summoner: "SlyDynamo", played: ['Yasuo', 'Caitlyn', 'LeeSin']},
    {summoner: "YellowHappy", played: ['Thresh', 'Nami', 'Caitlyn']},
    {summoner: "skguppy", played: ['Sivir', 'Amumu', 'Fizz']}
  ];

  function changePic(){
    if ($scope.picNum === 2) {
      $scope.picNum = 0;
    } else {
      $scope.picNum += 1;
    }
  }
});