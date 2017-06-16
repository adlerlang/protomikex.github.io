$(function(){
var $trelloheader = $('#trelloheader');
var $items = $('div.jumbotron');
var $trellotask = $('#trellotasks');
var $trellobadge = $('#trellobadge')
var $ta = $('#ta');


$.ajax({
url: 'https://api.trello.com/1/boards/8TZhObPN?fields=name,desc&cards=open&card_fields=all&lists=open&list_fields=all&members=all&member_fields=all',
dataType:'json',
type:'GET',
success: function(results){



var trelloboards = results;
var trellolists = results.lists;
var trellocards = results.cards;
var trellomem = results.members;







$trelloheader.append('<span class = "badge pull-right ">'+'Tasks '+trelloboards.lists.length+'<span>');
    
$trelloheader.append(
'<h3>'+ trelloboards.name + '</h3>');





$.each(trellolists.slice(0,10), function(b, list){





  

    
    
      var trellohtml=  '<div class="col-md-4"><div class="panel panel-default">'+
  '<div class="panel-heading"><h4>' +list['name'] +'</h4>'+( list['closed']= false ? '<div class="badge pull-right">Open</div>': '<div class="badge pull-right">Open</div>')+'</div>'



$.each(trellocards.slice(0,10), function(i,card){
  
  $.each(trellomem.slice(0.10), function(i, member){
   
 
   if(list.id == card.idList){
     trellohtml += '<div class="panel-body" id="1"><p><a href="'+card.shortUrl+'">'+card.name+'</a></p>'+
     (card.badges.description != true ? ' ' : '<p>'+'Description: ' + card.desc+'</p>')
      +'</div>'+'<div class="panel-body" id = "2"><div class ="col-md-5">'+(member.id == card.idMembers ? '<div class="thumbnail">'+'<img src="https://trello-avatars.s3.amazonaws.com/'+ member.avatarHash +'/30.png'+'" />'+'<p>'+member.username+'</p></div>':"ten")
     +'</div></div>';
    
   }


});



})

  
  

trellohtml+='</div>';
$trellotask.append(trellohtml);

});


 







}
});


});