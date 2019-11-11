(function () {
    window.onload = function () {

        let buttons = {
            "r_first": {
                onClickHandler: function () {
                    return () => showImageFirst();
                }
            },
            "r_second": {
                onClickHandler: function () {
                    return () => showImageSecond();
                }
            },
            "r_third": {
                onClickHandler: function () {
                    return () => showImageThird();
                }
            },
        }

        for (let key in buttons) {
            document.querySelector("#" + key).onclick = buttons[key].onClickHandler();            
        }


        function showImageFirst() {
            
            const concat = (x, y) => x.concat(y);

            const rgba = hex => [
                parseInt(hex.substr(0, 2), 16),
                parseInt(hex.substr(2, 2), 16),
                parseInt(hex.substr(4, 2), 16),
                255
            ];

            const pixels = data
              .reduce(concat)  
              .map(rgba)  
              .reduce(concat);

            let canvas = document.getElementById("canvas");
            canvas.width = 4;
            canvas.height = 4;
            canvas.style.boxShadow = "none";
            canvas.style.outline = "0";

            let cntx = canvas.getContext("2d");
            const imgData = new ImageData(Uint8ClampedArray.from(pixels), 4, 4);
            cntx.putImageData(imgData, 0, 0);
        }


        function showImageSecond() {

            const concat = (x, y) => x.concat(y);

            const rgb = rgba => [
                rgba[0],
                rgba[1],
                rgba[2],
                rgba[3],
            ];

            const pixels = bigData
              .reduce(concat)  
              .map(rgb)
              .reduce(concat);

            let canvas = document.getElementById("canvas");
            canvas.width = 32;
            canvas.height = 32;
            canvas.style.boxShadow = "none";
            canvas.style.outline = "0";

            let cntx = canvas.getContext("2d");
            const imgData = new ImageData(Uint8ClampedArray.from(pixels), 32, 32);
            cntx.putImageData(imgData, 0, 0);
        }


        function showImageThird() {
            let canvas = document.getElementById("canvas");
            canvas.width = 256;
            canvas.height = 256;
            canvas.style.boxShadow = "0px 4px 4px rgba(0, 0, 0, 0.25)";
            canvas.style.outline = "1px solid #C4C4C4";

            let cntx = canvas.getContext("2d");
            let img = new Image();
            img.src = "data/image.png";
            img.onload = function () {
                cntx.drawImage(img, 0, 0);
            };
        }
    }
})();