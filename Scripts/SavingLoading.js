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
                Version = "0.0.2";
            }
            else Teams = JSON.parse(localStorage.teams);
            if(localStorage.version==="0.0.2"){
                tunes.push({Name:"KChutha Saam",Zone:6,Class:1,Rarity:1,Rank:3,Level:1,TunesUp:1,Tags:["Monster","Mastermind"],OriginalToon: "Yosemite Sam",Obtained:false});
                localStorage.setItem("version", "0.0.3");
                removeToonZone("Elf Daffy Duck",7);
                changeRarity("Gossamer",1);
                changeRarity("Outlaw Sylvester",1);
                Version = "0.0.3";
                localStorage.setItem("version", "0.0.3");
            }
            if(localStorage.version==="0.0.3"){
                removeToonZone("KChutha Saam",6);
                tunes.push({Name:"KChutha Saam",Zone:6,Class:1,Rarity:1,Rank:3,Level:1,TunesUp:1,Tags:["Monster","Mastermind"],OriginalToon: "Yosemite Sam",Obtained:false});
            }
        }
        else{
            for(var i=0;i<tunes.length;i++){
                tunes[i].Rank=(tunes[i].Rarity+1);
            }
        }
    }
    save();
    loadTunes();
};

changeRarity = function(name,rarity){
    for(var i = 0;i<tunes.length;i++){
        if(tunes[i].Name===name){ 
            tunes[i].Rarity=rarity;
            return;
        }
    }
};

removeToonZone = function(name,zone){
    tunes = tunes.filter(e => (e.Name!==name || e.Zone!==zone));
};

Version = "0.0.4";
LastSorted=0;