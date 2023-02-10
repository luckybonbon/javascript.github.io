let createdTime;    //建立時間
let clickedTime;    //點按時間
let reactionTime;   //反應時間

// 設定隨機顏色
function getRandomColor(){
    let max = 250;
    let min = 0;
    let green = Math.floor(Math.random()*(max-min+1))+min;
    let color = "rgba(255, " + green + ", 100, 1.0)";
    return color;
}
// 新增圖形
function makeBox(){
    let time = Math.random();
    time = time * 2000;   //延遲時間0~2秒
    setTimeout(function(){
        // 設定圖形隨機形狀
        if(Math.random() >= 0.5){
            document.querySelector('#box').style.borderRadius = "50%";
        }
        else{
            document.querySelector('#box').style.borderRadius = "0px";
        }
        // 取得網頁寬度、高度
        // console.log(window.innerWidth);
        // console.log(window.innerHeight);

        // 取得網頁寬度、高度
        // console.log(document.documentElement.clientWidth);
        // console.log(document.documentElement.clientHeight);


        // 設定隨機位置                            //
        // 定位點 top
        let min = 0;
        let max = window.innerHeight - 280;
        let top = Math.floor(Math.random() * (max - min + 1))+ min;
        // 定位點 left
        min = 0;
        max = window.innerWidth - 140;
                // 判斷瀏覽器長寬比例修改圖形長寬變量
                let dynamicBound;
                if(window.innerWidth > window.innerHeight){
                dynamicBound = window.innerWidth / 8;
                }
                else{
                dynamicBound = window.innerHeight/ 8;
                }
                dynamicBound = dynamicBound + "px";
                document.documentElement.style.setProperty("--bound", dynamicBound);
        left = Math.floor(Math.random() * (max - min + 1))+ min;
        // 設定定位點 top:px;  left:px;
        document.querySelector('#box').style.top = top + "px";
        document.querySelector('#box').style.left = left + "px";
        /*                                       */

        //設定背景顏色
        document.querySelector('#box').style.backgroundColor = getRandomColor();
        document.querySelector('#box').style.display = "block";
        createdTime = Date.now();
    }, time);
}

//滑鼠點按時
document.querySelector("#box").onclick = function(){
    this.style.display = "none";
    clickedTime = Date.now();
    reactionTime = (clickedTime - createdTime)/1000;
    document.getElementById('time').innerHTML = reactionTime;
makeBox();
}
makeBox();




