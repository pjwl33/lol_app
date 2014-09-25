ang.controller('ComfortPlayedCtrl', function($scope, $animate, $interval){
  $animate.enabled(true);
  $scope.picNum = 0;
  // $interval(changePic, 10000);

  $scope.playPicks = [
    {summoner: "Kyomi the Fox", played: ['Ahri', 'MissFortune', 'Nami']},
    {summoner: "SuitXUp", played: ['Jax', 'Wukong', 'Shyvana']},
    {summoner: "WHblackITE", played: ['Morgana', 'Thresh', 'Sivir']},
    {summoner: "SlyDynamo", played: ['Yasuo', 'Caitlyn', 'LeeSin']},
    {summoner: "YellowHappy", played: ['Thresh', 'Nami', 'Caitlyn']}
  ];

  function changePic(){
    if ($scope.picNum === 2) {
      $scope.picNum = 0;
    } else {
      $scope.picNum += 1;
    }
  }
});