ang.controller('ComfortWinCtrl', function($scope, $animate, $interval){
  $scope.currentSlide = 0;
  $scope.picNum = 0;
  // $interval(changePic, 10000);

  $scope.winPicks = [
  {summoner: "Kyomi the Fox", win: ['Ahri', 'Sona', 'MissFortune']},
  {summoner: "SuitXUp", win: ['XinZhao', 'Wukong', 'Jax']},
  {summoner: "DJ SojuTIME", win: ['Darius', 'Sivir', 'Udyr']},
  {summoner: "SlyDynamo", win: ['Nasus', 'Kassadin', 'Caitlyn']},
  {summoner: "YellowHappy", win: ['Sivir', 'Nami', 'Yorick']},
  ];

  function changePic(){
    if ($scope.picNum === 2) {
      $scope.picNum = 0;
    } else {
      $scope.picNum += 1;
    }
  }
});