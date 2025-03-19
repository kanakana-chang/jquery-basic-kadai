$(function(){
  // .btnがクリックされたら
  $('.btn').on('click', function(){
    //「クリックしました！」と表示させる
    $('.text-box').val('クリックしました！');
  });
});