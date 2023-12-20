var ans = document.querySelectorAll(".main .faq .ques div:first-child");

for(let i = 0; i < ans.length; i++) {
    // to simulate the active state on click on the whole div for the span.
    ans[i].addEventListener("mousedown", (event)=>{
        ans[i].querySelector("span").style.color = "#AD28EB";
    });
    ans[i].addEventListener("mouseup", (event)=>{
        ans[i].querySelector("span").style.color = "rgba(0, 0, 0, .7)";
    });
    // on click, making p tag visible or invisible, with + or - img
    ans[i].addEventListener("click", ()=>{
        // the p tag that needs to be shown.
        var ans_i = document.getElementById("ans"+(i+1));
        // the + or - img
        var quesImg = ans[i].querySelector("img");
        // check if the element is block
        if(ans_i.style.display === "block") {
            ans_i.style.display = "none";
            quesImg.setAttribute("src", "assets/images/icon-plus.svg");
        } else {
            ans_i.style.display = "block";
            quesImg.setAttribute("src", "assets/images/icon-minus.svg");
        }
    });
}