save = function(){
    localStorage.setItem("tunes", JSON.stringify(tunes));
    localStorage.setItem("teams",JSON.stringify(Teams));
    localStorage.setItem("version", Version);
};
loadString = function(string){
    tunes = JSON.parse(string);
};
load = function(){
    if(localStorage.tunes) {
        tunes = JSON.parse(localStorage.tunes);
        if(localStorage.version){
            if(localStorage.version==="0.0.1"){
                Teams = [[],[],[],[]];
            }
            else {
                // Updated
                Teams = JSON.parse(localStorage.teams);
                loadTunes();
                return;
            }
        }
        else{
            for(var i=0;i<tunes.length;i++){
                tunes[i].Rank=(tunes[i].Rarity+1);
            }
        }
    }
    loadTunes();
};


Version = "0.0.2";
LastSorted=0;