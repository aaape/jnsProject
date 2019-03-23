/**
 * Created by Administrator on 2019.3.21.
 */
window.onload = function () {

    var btn1 = document.getElementById("btn1");
    var divs = document.getElementById("wrap").children;
    var flag = true;

    function myFn() {
        this.style.backgroundColor = "#f79c0a";
        this.style.color = "#fff";
        btn2.style.backgroundColor = "#fff";
        btn2.style.color = "#f79c0a";
        //设置获取一个随机获取两个数最大值的函数
        function getRamdon(max,min) {
            var X  = Math.floor(Math.random()*(max - min +1) +min);
            return X;
        }

        function reRamArr(divs,num) {

            //遍历DIVS集合，赋给一个新数组；因为后面要删除该数组中内容
            var div = [];
            for(var i = 0; i < divs.length; i++){
                //蠢逼，这里初始化样式
                divs[i].style.backgroundColor= "#f79c0a";
                div.push(divs[i]);
            }
            //创建新数组，存放随机项
            var reArr = [];
            for (var i = 0; i < num; i++){
                if (div.length > 0){
                    var arrIndex =  getRamdon(div.length-1,0);
                    console.log(arrIndex);
                    reArr.push(div[arrIndex]);
                    div.splice(arrIndex,1);
                    console.dir(reArr[i]);
                }else {
                    break;
                }
            };

            for (var i in reArr){
                var r = getRamdon(255,0);
                var g = getRamdon(255,0);
                var b = getRamdon(255,0);
                reArr[i].style.backgroundColor = 'rgb('+ r +',' + g + ',' + b + ')';
            }

        }
        // for(var i = 0; i < divs.length; i++)
        if (flag){
            timerId = setInterval(function () {
                reRamArr(divs,3);
            },1000)
            flag = false;
        }

    }
    btn1.addEventListener("click",myFn);

    var btn2 = document.getElementById("btn2");
    btn2.addEventListener("click",function () {
        btn1.style.backgroundColor = "#fff";
        btn1.style.color = "#f79c0a"
        this.style.backgroundColor = "#f79c0a";
        this.style.color = "#fff";
        clearInterval(timerId);
        for(var i = 0; i < divs.length; i++){
            //蠢逼，这里初始化样式
            divs[i].style.backgroundColor= "#f79c0a";
            flag = true;
        }
    });
    btn2.removeEventListener("click",myFn);

}
