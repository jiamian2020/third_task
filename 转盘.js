var Flag = true;

        document.querySelector(".anniu").onclick = function () {
            if (Flag == true) {
                var random = parseInt(Math.random() * 8);
                switch (random) {
                    case 0:
                        run(0, '一等奖');
                        break;
                    case 1:
                        run(46.5, '二等奖');
                        break;
                    case 2:
                        run(100.5, '三等奖');
                        break;
                    case 3:
                        run(127.5, '四等奖');
                        break;
                    case 4:
                        run(180, '五等奖');
                        break;
                    case 5:
                        run(211.5, '六等奖');
                        break;
                    case 6:
                        run(267.5, '七等奖');
                        break;
                    case 7:
                        run(310, '未中奖');
                        break;
                }
            }
        }

        var timer = null;
        var myAngle = document.querySelector(".myAngle");
        function run(angle, text) {
            Flag = false;
            var begin = 0;
            var beginAng = 1800;
            timer = setInterval(function () {
                if (begin >= (beginAng + angle)) {
                    Flag = true;
                    clearInterval(timer);
                }
                myAngle.style.transform = "rotate(" + begin + "deg)";
                begin += (beginAng + angle - begin) * 0.01;
            }, 25)
        }