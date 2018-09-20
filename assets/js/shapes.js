        var keys=['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
            
        function onKeyDown(event){
            for(var a=0; a<26;a++){
                if(event.key===keys[a]){
                    pathCreate();
                    break;
                }
            }

        }
        function getRandomInt(max){
            return Math.floor(Math.random()*Math.floor(max));

        }
        function randColor(){
            var colors;
            colors="rgb("+getRandomInt(255)+","+getRandomInt(255)+","+getRandomInt(255)+")";
            return colors;
        }
        function pathCreate(){
            var path=new Path.Circle({
                center:Point.random()*view.size,
                radius:900,
                fillColor:randColor()
            });
            path.onFrame=function(e){
                path.scale(0.92);
                path.fillColor.hue+=0.1;
            }
            return path;
        }
