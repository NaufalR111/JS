var playersrc=$('#ytplayer').attr('src');
$('#ytplayer').mouseover(function(){
$('#ytplayer').attr('src',playersrc+'&autoplay=1');
});
$('#ytplayer').mouseout(function(){
$('#ytplayer').attr('src',playersrc);
});