window.onresize = function(){
    //console.log(document.body.clientWidth); //打印当前宽度
    var currentWidth = document.body.clientWidth;
    var searchBox = document.querySelector('.searchBox');
    if(currentWidth<1200){
        // console.log(searchBox);
        // console.log(document.body.clientWidth);
    }
}

function showReactNav(){
    var reactNav = document.querySelector(".reactNav");
    // reactNav.style.display="block";
    reactNav.style.left = 0+"px";
    var showBtn = document.querySelector(".dropDownButton ");
    showBtn.style.opacity=0;

}
function hideReactNav(){
    var reactNav = document.querySelector(".reactNav");
    // reactNav.style.display="none";
    reactNav.style.left = -576+"px";
    var showBtn = document.querySelector(".dropDownButton ");
    showBtn.style.opacity=1;
}
// function showReactNav(){
//     $(".reactNav").css('right','0px');
//     $(".dropDownButton").css('opacity',0);
//     $(".reactNav").animate({
//         right:'0px',
//         display:'block'
//     });
// }