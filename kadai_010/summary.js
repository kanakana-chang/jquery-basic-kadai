$(function(){
  //1.change-colorを押すと、文字色が変わる
  $('#change-color').on('click', function(){
    $('#target').css('color', 'red');
  });
  //2.change-textを押すと、文字内容が変わる
  $('#change-text').on('click', function(){
    $('#target').text('Hello!');
  });
  //3.fade-outを押すと、フェードアウトで文字が消える
  $('#fade-out').on('click', function(){
    $('#target').fadeOut();
  });
  //4.fade-inを押すと、フェードインで文字が現れる
  $('#fade-in').on('click', function(){
    $('#target').fadeIn();
  });
});