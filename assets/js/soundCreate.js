var sound;
        var i=97;
        var j=65;
        var sArr=['bubbles','clay','confetti','corona','dotted-spiral','flash-1','flash-2','flash-3','glimmer','moon','pinwheel','piston-1','piston-2','piston-3','prism-1','prism-2','prism-3','splits','squiggle','strike','suspension','timer','ufo','veil','wipe','zig-zag'];
        document.addEventListener('keypress', function(e) {
            for(var a=0;a<26;a++){
                if(e.which===i || e.which===j){
                    sound=soundCreate(sArr[a]);
                    sound.play();
                    break;
                }
                else if(e.which===i+a || e.which===j+a){
                    sound=soundCreate(sArr[a]);
                    sound.play();
                    break;
                }
            }
        });
        function soundCreate(soundName){
            var sound=new Howl({
                src:['assets/sounds/'+soundName+'.mp3']
            });
            return sound;

        }
