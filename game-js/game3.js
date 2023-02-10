let ball_x = 0;   //ball球
let ball_y = 0;
let mouse_x = 0;  //mouse滑鼠
let mouse_y = 0;
let vel_x = 0;    //vel光球
let vel_y = 0;
// const宣告常數變數
const docStyle = document.documentElement.style;
const strength = 0.15;  //球與滑鼠距離比例
const drag = 0.15;      //光球縮放比例

// 取得滑鼠座標
document.addEventListener("mousemove", (e) => {
    // 測試滑鼠x,y座標
    // console.log(e.clientX);
    // console.log(e.clientY);
    mouse_x = e.clientX;
    mouse_y = e.clientY;
});
// 回傳座標到css
function delayMotion(){
    // ball_x = mouse_x;
    // ball_y = mouse_y;
    // x*strength
    let distance_x = mouse_x - ball_x;
    distance_x *= strength;
    vel_x *= drag;
    vel_x += distance_x
    ball_x += vel_x;
        console.log("distance_x=" + distance_x);
        console.log("mouse_x =" + mouse_x);
        console.log("ball_x =" + ball_x);
    // y*strength
    let distance_y = mouse_y - ball_y;
    distance_y *= strength;
    vel_y *= drag;
    vel_y += distance_y
    ball_y += vel_y;
        // console.log("distance_y=" + distance_y);
        // console.log("mouse_y =" + mouse_y);
        // console.log("ball_y =" + ball_y);
    docStyle.setProperty("--mouse-x", ball_x);
    docStyle.setProperty("--mouse-y", ball_y);
    // 光球
    docStyle.setProperty("--scale", (vel_x + vel_y) * drag);
    requestAnimationFrame(delayMotion);
}
delayMotion();