$(function(){
    $('.item a').click(function(){
        console.log($(this).find("h2")[0].innerText);
    })
})