$(document).ready(function(){});

function addLifeList() {
    let input = $(".input input");
    if(input.val() !== ""){
        function checkList () {
            div.toggleClass("none")
        }
        function trashList () {
            div.addClass("scaleDown");
            // 因為向內收合的動重要0.5秒,所以設定0.5秒後執行
            setTimeout(function (){div.remove()}, 500);
        }
    
        let nowTime = new Date();
        let time = nowTime.getMonth() + 1 + "/" + nowTime.getDate();
    
        let div = $("<div>").addClass("list-text");
        let h3 = $($("<h3>").addClass("time")).text(time);
        let p = $($("<p>").addClass("text")).text(input.val());
        let check = $($("<div>").addClass("check")).html('<i class="fa-solid fa-check"></i>');
        check.click(checkList);
        let trash = $($("<div>").addClass("trash")).html('<i class="fa-solid fa-trash"></i>');
        trash.click(trashList);
        
        div.append(h3, p, check, trash)
        $(".life-list").append(div);
        input.val("");
    };
}
function addWorkList() {

    let input = $(".input input");
    if(input.val() !== ""){
        function checkList () {
            div.toggleClass("none")
        }
        function trashList () {
            div.addClass("scaleDown");
            // 因為向內收合的動重要0.5秒,所以設定0.5秒後執行
            setTimeout(function (){div.remove()}, 500);
        }
    
        let nowTime = new Date();
        let time = nowTime.getMonth() + 1 + "/" + nowTime.getDate();
    
        let div = $("<div>").addClass("list-text");
        let h3 = $($("<h3>").addClass("time")).text(time);
        let p = $($("<p>").addClass("text")).text(input.val());
        let check = $($("<div>").addClass("check")).html('<i class="fa-solid fa-check"></i>');
        check.click(checkList);
        let trash = $($("<div>").addClass("trash")).html('<i class="fa-solid fa-trash"></i>');
        trash.click(trashList);
        
        div.append(h3, p, check, trash)
        $(".work-list").append(div);
        input.val("");
    };
}
function addDreamsList() {

    let input = $(".input input");
    if(input.val() !== ""){
        function checkList () {
            div.toggleClass("none")
        }
        function trashList () {
            div.addClass("scaleDown");
            // 因為向內收合的動重要0.5秒,所以設定0.5秒後執行
            setTimeout(function (){div.remove()}, 500);
        }
    
        let nowTime = new Date();
        let time = nowTime.getMonth() + 1 + "/" + nowTime.getDate();
    
        let div = $("<div>").addClass("list-text");
        let h3 = $($("<h3>").addClass("time")).text(time);
        let p = $($("<p>").addClass("text")).text(input.val());
        let check = $($("<div>").addClass("check")).html('<i class="fa-solid fa-check"></i>');
        check.click(checkList);
        let trash = $($("<div>").addClass("trash")).html('<i class="fa-solid fa-trash"></i>');
        trash.click(trashList);
        
        div.append(h3, p, check, trash)
        $(".dreams-list").append(div);
        input.val("");
    };
}

$(".life").click(addLifeList);
$(".work").click(addWorkList);
$(".dreams").click(addDreamsList);
$(".input input").keypress( e => {
    if( e.keyCode === 13 ) {
        addLifeList();
    }
});