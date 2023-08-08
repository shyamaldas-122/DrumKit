//Detecting Button Press
var length=document.querySelectorAll(".drum").length;

for(var i=0;i<length;i++)
{
    document.querySelectorAll(".drum")[i].addEventListener("click",function(){
        var buttonInnerHTML=this.innerHTML;

        console.log(buttonInnerHTML);
        makeSound(buttonInnerHTML);

        buttonAnimation(buttonInnerHTML);
        
    })
}
//Detecting Keyboard Press
document.addEventListener("keypress",function(event)
{
    makeSound(event.key);
    // console.log(event.key);
    buttonAnimation(event.key);
});

// var target=document.querySelector(".w");
// var audio1 = new Audio("sounds/crash.mp3") ;
// target.addEventListener("click",function()
// {
//     audio1.play();
// });
// var audio2 = new Audio("sounds/kick-bass.mp3") ;
// document.querySelector(".a").addEventListener("click",function()
// {
//     audio2.play();
// });
// var audio3 = new Audio("sounds/snare.mp3") ;
// document.querySelector(".s").addEventListener("click",function()
// {
//     audio3.play();
// });
// var audio4 = new Audio("sounds/tom-1.mp3") ;
// document.querySelector(".d").addEventListener("click",function()
// {
//     audio4.play();
// });
// var audio5 = new Audio("sounds/tom-2.mp3") ;
// document.querySelector(".j").addEventListener("click",function()
// {
//     audio5.play();
// });
// var audio6 = new Audio("sounds/tom-3.mp3") ;
// document.querySelector(".k").addEventListener("click",function()
// {
//     audio6.play();
// });
// var audio7 = new Audio("sounds/tom-4.mp3") ;
// document.querySelector(".l").addEventListener("click",function()
// {
//     audio7.play();
// });

    function makeSound(key)
    {
        switch(key)
        {
            case "w":
                var audio1 = new Audio("sounds/crash.mp3") ;
                audio1.play();
                break;
                
            case "a":
                var audio2 = new Audio("sounds/kick-bass.mp3") ;
                audio2.play();
                break;

            case "s":
                var audio3 = new Audio("sounds/snare.mp3") ;
                audio3.play();
                break;

            case "d":
                var audio4 = new Audio("sounds/tom-1.mp3") ;
                audio4.play();
                break;

            case "j":
                var audio5 = new Audio("sounds/tom-2.mp3") ;
                audio5.play();
                break;

            case "k":
                var audio6 = new Audio("sounds/tom-3.mp3") ;
                audio6.play();
                break;

            case "l":
                var audio7 = new Audio("sounds/tom-4.mp3") ;
                audio7.play();
                break;

            default:
                console.log(buttonInnerHTML);

        }
    }

    function buttonAnimation(currentKey)
    {
        var activeButton=document.querySelector("."+currentKey);

        activeButton.classList.add("pressed");
        
        setTimeout(function(){
            activeButton.classList.remove("pressed");
        },100 )
    }