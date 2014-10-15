ang.controller('ComfortWinCtrl', function($scope, $animate, $interval){
  $scope.currentSlide = 0;
  $scope.picNum = 0;
  // $interval(changePic, 10000);

  $scope.winPicks = [
  {summoner: "Yunah", win: ['Ahri', 'Sona', 'MissFortune']},
  {summoner: "SuitXUp", win: ['XinZhao', 'Wukong', 'Jax']},
  {summoner: "DJ SojuTIME", win: ['Darius', 'Morgana', 'Lulu']},
  {summoner: "SlyDynamo", win: ['Nasus', 'Kassadin', 'Caitlyn']},
  {summoner: "YellowHappy", win: ['Sivir', 'Nami', 'Yorick']},
  {summoner: "skguppy", win: ['Sivir', 'Fizz', 'Amumu']}
  ];

  function changePic(){
    if ($scope.picNum === 2) {
      $scope.picNum = 0;
    } else {
      $scope.picNum += 1;
    }
  }
});