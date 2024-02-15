function closeDiv() {
    document.getElementById("firstDiv").style.display = "none";
    document.getElementById("secondDiv").style.display = "block";

}
function yesAns() {
    document.getElementById("secondDiv").style.display = "none";
    document.getElementById("thirdDiv").style.display = "block";
    document.getElementById("tabBtn").style.display = "block";

}
function noAns() {
    document.getElementById("stickerOne").style.display = "none";
    document.getElementById("stickerOnee").style.display = "none";
    document.getElementById("stickerTwo").style.display = "block";
    document.getElementById("stickerTwoo").style.display = "block";
    document.getElementById("noBtn").style.display = "none";
    document.getElementById("noBtn2").style.display = "block";
}
function noAns2() {
    document.getElementById("stickerTwo").style.display = "none";
    document.getElementById("stickerTwoo").style.display = "none";
    document.getElementById("stickerThree").style.display = "block";
    document.getElementById("stickerThreee").style.display = "block";
    document.getElementById("noBtn2").style.display = "none";
    document.getElementById("noBtn3").style.display = "block";
}
function noAns3() {
    document.getElementById("stickerThree").style.display = "none";
    document.getElementById("stickerThreee").style.display = "none";
    document.getElementById("stickerFour").style.display = "block";
    document.getElementById("stickerFourr").style.display = "block";
    document.getElementById("noBtn3").style.display = "none";
    document.getElementById("noBtn4").style.display = "block";
}
function noAns4() {
    document.getElementById("stickerFour").style.display = "none";
    document.getElementById("stickerFourr").style.display = "none";
    document.getElementById("stickerFive").style.display = "block";
    document.getElementById("stickerFivee").style.display = "block";
    document.getElementById("noBtn4").style.display = "none";
    document.getElementById("noBtn5").style.display = "block";
}
function noAns5() {
    document.getElementById("stickerFive").style.display = "none";
    document.getElementById("stickerFivee").style.display = "none";
    document.getElementById("stickerSix").style.display = "block";
    document.getElementById("stickerSixx").style.display = "block";
    document.getElementById("noBtn5").style.display = "none";
    document.getElementById("yesBtn").style.display = "none";
    document.getElementById("yesBtn2").style.display = "block";
}
function newTab() {
    window.open('letter.html', '_blank', 'height=400, width=600, left=375, top=150, resizable=no, menubar=yes'); 
    return false;
}
function mailLtr() {
    window.open('love.html', '_blank', 'height=768, width=1366, fullscreen=yes, menubar=yes, scrollbar=yes'); 
    return false;
}