save = function(){
    localStorage.setItem("tunes", JSON.stringify(tunes));
};

load = function(){
    if(localStorage.tunes) tunes = JSON.parse(localStorage.tunes);
    loadTunes();
};

allToons = function(){
    var ret = [];
    for(var i=0;i<tunes.length;i++){
        if(tunes[i].Obtained) ret.push(tunes[i]);
    }
    return ret;
};
addAll = function(){
    for(var i=0;i<tunes.length;i++){
        tunes[i].Obtained=true;
    }
};
removeAll = function(){
    for(var i=0;i<tunes.length;i++){
        tunes[i].Obtained=false;
    }
};

generateLvlUpModal = function(i){
    document.getElementById("lvl-modal-header").innerHTML = "<p>Select your "+i+"</p>";
    document.getElementById("lvl-modal-body").innerHTML = "<input id=\"lvlBox\" type=\"number\" name='"+i+"'>";
};
generateTUModal = function(i){
    document.getElementById("TU-modal-header").innerHTML = "<p>Select your "+i+"</p>";
    document.getElementById("TU-modal-body").innerHTML = "<input id=\"TUBox\" type=\"number\" name='"+i+"'>";
};

searchToons = function(name){
    ret = [];
    var regEx = new RegExp(name);
    for(var i = 0;i<tunes.length;i++){
        var o = tunes[i];
        if(o.Obtained && (regEx.test(o.Name)||regEx.test(o.OriginalToon))) ret.push(o);
    }
    return ret;
};

printToons = function(toons){
    var text = "<tr><th>Name</th><th>Zone</th><th>Class</th><th>Rarity</th><th>Level</th><th>TunesUp</th></tr>";
    for(var i=0;i<toons.length;i++){
        var o = toons[i];
        var name = "'"+o.Name+"'";
        if(o.Zone==0)text += "<tr class=\"w3-green\"><td>"+o.Name+"</td><td>"+Zones[o.Zone]+"</td><td>"+Class[o.Class]+"</td><td>"+Rarity[o.Rarity]+"</td><td>"+o.Level+" <button onClick=\"showLvlModal("+name+")\">Change Lvl</button></td><td>"+o.TunesUp+" <button onClick=\"showTUModal("+name+")\">Change TuneUps</button></td></tr>";    
        if(o.Zone==1)text += "<tr class=\"w3-light-blue\"><td>"+o.Name+"</td><td>"+Zones[o.Zone]+"</td><td>"+Class[o.Class]+"</td><td>"+Rarity[o.Rarity]+"</td><td>"+o.Level+" <button onClick=\"showLvlModal("+name+")\">Change Lvl</button></td><td>"+o.TunesUp+" <button onClick=\"showTUModal("+name+")\">Change TuneUps</button></td></tr>";    
        if(o.Zone==2)text += "<tr class=\"w3-yellow\"><td>"+o.Name+"</td><td>"+Zones[o.Zone]+"</td><td>"+Class[o.Class]+"</td><td>"+Rarity[o.Rarity]+"</td><td>"+o.Level+" <button onClick=\"showLvlModal("+name+")\">Change Lvl</button></td><td>"+o.TunesUp+" <button onClick=\"showTUModal("+name+")\">Change TuneUps</button></td></tr>";    
        if(o.Zone==3)text += "<tr class=\"w3-orange\"><td>"+o.Name+"</td><td>"+Zones[o.Zone]+"</td><td>"+Class[o.Class]+"</td><td>"+Rarity[o.Rarity]+"</td><td>"+o.Level+" <button onClick=\"showLvlModal("+name+")\">Change Lvl</button></td><td>"+o.TunesUp+" <button onClick=\"showTUModal("+name+")\">Change TuneUps</button></td></tr>";    
        if(o.Zone==4)text += "<tr class=\"w3-blue\"><td>"+o.Name+"</td><td>"+Zones[o.Zone]+"</td><td>"+Class[o.Class]+"</td><td>"+Rarity[o.Rarity]+"</td><td>"+o.Level+" <button onClick=\"showLvlModal("+name+")\">Change Lvl</button></td><td>"+o.TunesUp+" <button onClick=\"showTUModal("+name+")\">Change TuneUps</button></td></tr>";    
        if(o.Zone==5)text += "<tr class=\"w3-purple\"><td>"+o.Name+"</td><td>"+Zones[o.Zone]+"</td><td>"+Class[o.Class]+"</td><td>"+Rarity[o.Rarity]+"</td><td>"+o.Level+" <button onClick=\"showLvlModal("+name+")\">Change Lvl</button></td><td>"+o.TunesUp+" <button onClick=\"showTUModal("+name+")\">Change TuneUps</button></td></tr>";    
        if(o.Zone==6)text += "<tr class=\"w3-orange\"><td>"+o.Name+"</td><td>"+Zones[o.Zone]+"</td><td>"+Class[o.Class]+"</td><td>"+Rarity[o.Rarity]+"</td><td>"+o.Level+" <button onClick=\"showLvlModal("+name+")\">Change Lvl</button></td><td>"+o.TunesUp+" <button onClick=\"showTUModal("+name+")\">Change TuneUps</button></td></tr>";    
        if(o.Zone==7)text += "<tr class=\"w3-pink\"><td>"+o.Name+"</td><td>"+Zones[o.Zone]+"</td><td>"+Class[o.Class]+"</td><td>"+Rarity[o.Rarity]+"</td><td>"+o.Level+" <button onClick=\"showLvlModal("+name+")\">Change Lvl</button></td><td>"+o.TunesUp+" <button onClick=\"showTUModal("+name+")\">Change TuneUps</button></td></tr>";    
    }
    return text;
};
printCollected = function(){
    var text = "";
    for(var i=0;i<tunes.length;i++){
        var name = tunes[i].Name;
        text += "<label><input onClick=\"getToon("+i+")\" type=\"checkbox\" id=\""+name+"\"";
        if(tunes[i].Obtained) text+="checked=\"\"";
        text +=">"+name+"</label><br/>";    
    }
    return text;
};

getToon = function(toonN){
    tunes[toonN].Obtained = !tunes[toonN].Obtained; 
};

changeToonLevel = function(toon,lvl){
    if(lvl){
        if(lvl<1)lvl=1;
        if(lvl>49) lvl = 49;
    } 
    else lvl=1;
    for(var i=0;i<tunes.length;i++){
        if(tunes[i].Name===toon){
            tunes[i].Level = lvl;
            return;
        }
    }
};
changeToonTunes = function(toon,tunesUp){
    if(tunesUp){
        if(tunesUp<1)tunesUp=1;
        if(tunesUp>30) tunesUp = 30;
    } 
    else tunesUp=1;
    for(var i=0;i<tunes.length;i++){
        if(tunes[i].Name===toon){
            tunes[i].TunesUp = tunesUp;
            return;
        }
    }
};

NToonGot = function(){
    var ret = 0;
    for(var i = 0;i<tunes.length;i++){
        if(tunes[i].Obtained) ret++;
    }
    return ret;
};

avLvl = function(){
    var ret = 0;
    for(var i = 0;i<tunes.length;i++){
        if(tunes[i].Obtained) ret+=parseInt(tunes[i].Level);
    }
    console.log(ret + " " + NToonGot()+" "+ (ret/NToonGot()));
    return (ret/NToonGot());
};
avTU = function(){
    var ret = 0;
    for(var i = 0;i<tunes.length;i++){
        if(tunes[i].Obtained) ret+=parseInt(tunes[i].TunesUp);
    }
    return (ret/NToonGot());
};

Version = "0.0.1";
Zones = ["Forest","Town","Farm","Desert","City","Space","WBStudios","Avalooney"];
Class = ["Attacker","Defender","Support"];
Rarity= ["Common","Rare","Epic"];
tunes = [
    {
        Name:"Bugs Bunny",
        Zone:0,
        Class:0,
        Rarity:2,
        Level:1,
        TunesUp:1,
        Tags:["Rabbit","Rural","Original"],
        OriginalToon: "Bugs Bunny",
        Obtained:false
    },
    {
        Name:"Daffy Duck",
        Zone:0,
        Class:0,
        Rarity:2,
        Level:1,
        TunesUp:1,
        Tags:["Bird","Rural","Original"],
        OriginalToon: "Daffy Duck",
        Obtained:false
    },
    {
        Name:"Elmer Fudd",
        Zone:0,
        Class:1,
        Rarity:1,
        Level:1,
        TunesUp:1,
        Tags:["Human","Hunter","Original"],
        OriginalToon: "Elmer Fudd",
        Obtained:false
    },
    {
        Name:"Hunter Yosemite Sam",
        Zone:0,
        Class:0,
        Rarity:0,
        Level:1,
        TunesUp:1,
        Tags:["Human","Hunter"],
        OriginalToon: "Yosemite Sam",
        Obtained:false
    },
    {
        Name:"Marvin Fudd",
        Zone:0,
        Class:0,
        Rarity:1,
        Level:1,
        TunesUp:1,
        Tags:["Alien","Hunter"],
        OriginalToon: "Marvin",
        Obtained:false
    },
    {
        Name:"Fishercat Sylvester JR.",
        Zone:0,
        Class:2,
        Rarity:1,
        Level:1,
        TunesUp:1,
        Tags:["Cat","Explorer"],
        OriginalToon: "Sylvester",
        Obtained:false
    },
    {
        Name:"Scout Sylvester",
        Zone:0,
        Class:0,
        Rarity:0,
        Level:1,
        TunesUp:1,
        Tags:["Cat","Scout"],
        OriginalToon: "Sylvester",
        Obtained:false
    },
    {
        Name:"Scout Foghorn",
        Zone:0,
        Class:1,
        Rarity:0,
        Level:1,
        TunesUp:1,
        Tags:["Bird","Scout"],
        OriginalToon: "Foghorn",
        Obtained:false
    },
    {
        Name:"Scout Leader Granny",
        Zone:0,
        Class:2,
        Rarity:0,
        Level:1,
        TunesUp:1,
        Tags:["Human","Scout"],
        OriginalToon: "Granny",
        Obtained:false
    },
    {
        Name:"Lola",
        Zone:1,
        Class:0,
        Rarity:2,
        Level:1,
        TunesUp:1,
        Tags:["Rabbit","Citizen","Original"],
        OriginalToon: "Lola",
        Obtained:false
    },
    {
        Name:"Gridiron Gossamer",
        Zone:1,
        Class:1,
        Rarity:2,
        Level:1,
        TunesUp:1,
        Tags:["Monster","Athlete"],
        OriginalToon: "Gossamer",
        Obtained:false
    },
    {
        Name:"Penelope",
        Zone:1,
        Class:0,
        Rarity:2,
        Level:1,
        TunesUp:1,
        Tags:["Cat","Citizen","Original"],
        OriginalToon: "Penelope",
        Obtained:false
    },
    {
        Name:"Photographer Sylvester",
        Zone:1,
        Class:0,
        Rarity:0,
        Level:1,
        TunesUp:1,
        Tags:["Cat","Artist"],
        OriginalToon: "Sylvester",
        Obtained:false
    },
    {
        Name:"Salesduck Daffy",
        Zone:1,
        Class:0,
        Rarity:0,
        Level:1,
        TunesUp:1,
        Tags:["Bird","Professional"],
        OriginalToon: "Daffy Duck",
        Obtained:false
    },
    {
        Name:"Barber Buggs",
        Zone:1,
        Class:2,
        Rarity:1,
        Level:1,
        TunesUp:1,
        Tags:["Rabbit","Professional"],
        OriginalToon: "Bugs Bunny",
        Obtained:false
    },
    {
        Name:"Pepe Le Pew",
        Zone:1,
        Class:0,
        Rarity:1,
        Level:1,
        TunesUp:1,
        Tags:["Skunk","Citizen","Original"],
        OriginalToon: "Pepe Le Pew",
        Obtained:false
    },
    {
        Name:"Porky Pig",
        Zone:1,
        Class:2,
        Rarity:2,
        Level:1,
        TunesUp:1,
        Tags:["Pig","Citizen","Original"],
        OriginalToon: "Porky",
        Obtained:false
    },
    {
        Name:"Officer Yosemite",
        Zone:1,
        Class:2,
        Rarity:0,
        Level:1,
        TunesUp:1,
        Tags:["Human","Cop"],
        OriginalToon: "Yosemite Sam",
        Obtained:false
    },
    {
        Name:"Police Dog Hector",
        Zone:1,
        Class:1,
        Rarity:0,
        Level:1,
        TunesUp:1,
        Tags:["Dog","Cop"],
        OriginalToon: "Hector",
        Obtained:false
    },
    {
        Name:"Barnyard Dawg",
        Zone:2,
        Class:0,
        Rarity:1,
        Level:1,
        TunesUp:1,
        Tags:["Dog","Rural","Original"],
        OriginalToon: "Barnyard Dawg",
        Obtained:false
    },
    {
        Name:"Foghorn Leghorn",
        Zone:2,
        Class:1,
        Rarity:2,
        Level:1,
        TunesUp:1,
        Tags:["Bird","Rural","Original"],
        OriginalToon: "Foghorn Leghorn",
        Obtained:false
    },
    {
        Name:"Miss Prissy",
        Zone:2,
        Class:0,
        Rarity:1,
        Level:1,
        TunesUp:1,
        Tags:["Bird","Rural","Original"],
        OriginalToon: "Miss Prissy",
        Obtained:false
    },
    {
        Name:"Farmer Porky",
        Zone:2,
        Class:2,
        Rarity:0,
        Level:1,
        TunesUp:1,
        Tags:["Pig","Farmer"],
        OriginalToon: "Porky",
        Obtained:false
    },
    {
        Name:"Farmer Petunia",
        Zone:2,
        Class:0,
        Rarity:0,
        Level:1,
        TunesUp:1,
        Tags:["Pig","Farmer"],
        OriginalToon: "Petunia",
        Obtained:false
    },
    {
        Name:"Farmer Hector",
        Zone:2,
        Class:1,
        Rarity:0,
        Level:1,
        TunesUp:1,
        Tags:["Dog","Farmer"],
        OriginalToon: "Hector",
        Obtained:false
    },
    {
        Name:"Scarecrow Sylvester",
        Zone:2,
        Class:2,
        Rarity:0,
        Level:1,
        TunesUp:1,
        Tags:["Cat","Farmer"],
        OriginalToon: "Sylvester",
        Obtained:false
    },
    {
        Name:"Ralph Wolf",
        Zone:2,
        Class:0,
        Rarity:1,
        Level:1,
        TunesUp:1,
        Tags:["Dog","Professional","Original"],
        OriginalToon: "Ralph Wolf",
        Obtained:false
    },
    {
        Name:"Sam Sheepdog",
        Zone:2,
        Class:1,
        Rarity:2,
        Level:1,
        TunesUp:1,
        Tags:["Dog","Professional","Original"],
        OriginalToon: "Sam Sheepdog",
        Obtained:false
    },
    {
        Name:"Outlaw Foghorn",
        Zone:3,
        Class:0,
        Rarity:0,
        Level:1,
        TunesUp:1,
        Tags:["Bird","Outlaw"],
        OriginalToon: "Foghorn Leghorn",
        Obtained:false
    },
    {
        Name:"Outlaw Sylvester",
        Zone:3,
        Class:2,
        Rarity:0,
        Level:1,
        TunesUp:1,
        Tags:["Cat","Outlaw"],
        OriginalToon: "Sylvester",
        Obtained:false
    },
    {
        Name:"Wile E Coyote",
        Zone:3,
        Class:0,
        Rarity:2,
        Level:1,
        TunesUp:1,
        Tags:["Dog","Mastermind","Original"],
        OriginalToon: "Wile E Coyote",
        Obtained:false
    },
    {
        Name:"Road Runner",
        Zone:3,
        Class:2,
        Rarity:2,
        Level:1,
        TunesUp:1,
        Tags:["Bird","Wild West","Original"],
        OriginalToon: "Road Runner",
        Obtained:false
    },
    {
        Name:"Sheriff Porky",
        Zone:3,
        Class:2,
        Rarity:0,
        Level:1,
        TunesUp:1,
        Tags:["Pig","Cop"],
        OriginalToon: "Porky",
        Obtained:false
    },
    {
        Name:"Settler Granny",
        Zone:3,
        Class:2,
        Rarity:0,
        Level:1,
        TunesUp:1,
        Tags:["Human","Wild West"],
        OriginalToon: "Granny",
        Obtained:false
    },
    {
        Name:"Cowboy Bugs",
        Zone:3,
        Class:0,
        Rarity:0,
        Level:1,
        TunesUp:1,
        Tags:["Rabbit","Wild West"],
        OriginalToon: "Bugs Bunny",
        Obtained:false
    },
    {
        Name:"Masked Avenger",
        Zone:3,
        Class:0,
        Rarity:1,
        Level:1,
        TunesUp:1,
        Tags:["Bird","Hero"],
        OriginalToon: "Daffy Fuck",
        Obtained:false
    },
    {
        Name:"Yosemite Sam",
        Zone:3,
        Class:0,
        Rarity:2,
        Level:1,
        TunesUp:1,
        Tags:["Human","Outlaw","Original"],
        OriginalToon: "Yosemite Sam",
        Obtained:false
    },
    {
        Name:"Granny",
        Zone:4,
        Class:2,
        Rarity:2,
        Level:1,
        TunesUp:1,
        Tags:["Human","Citizen","Original"],
        OriginalToon: "Granny",
        Obtained:false
    },
    {
        Name:"Hector",
        Zone:4,
        Class:1,
        Rarity:1,
        Level:1,
        TunesUp:1,
        Tags:["Dog","Citizen","Original"],
        OriginalToon: "Hector",
        Obtained:false
    },
    {
        Name:"Sylvester",
        Zone:4,
        Class:0,
        Rarity:2,
        Level:1,
        TunesUp:1,
        Tags:["Cat","Citizen","Original"],
        OriginalToon: "Sylvester",
        Obtained:false
    },
    {
        Name:"Waiter Elmer",
        Zone:4,
        Class:2,
        Rarity:0,
        Level:1,
        TunesUp:1,
        Tags:["Human","Staff"],
        OriginalToon: "Elmer Fudd",
        Obtained:false
    },
    {
        Name:"Joe Monday",
        Zone:4,
        Class:0,
        Rarity:0,
        Level:1,
        TunesUp:1,
        Tags:["Bird","Cop"],
        OriginalToon: "Daffy Duck",
        Obtained:false
    },
    {
        Name:"Mr. Sam",
        Zone:4,
        Class:1,
        Rarity:0,
        Level:1,
        TunesUp:1,
        Tags:["Human","Villain"],
        OriginalToon: "Yosemite Sam",
        Obtained:false
    },
    {
        Name:"Chauffeur Porky",
        Zone:4,
        Class:2,
        Rarity:0,
        Level:1,
        TunesUp:1,
        Tags:["Pig","Staff"],
        OriginalToon: "Porky",
        Obtained:false
    },
    {
        Name:"Leopold",
        Zone:4,
        Class:1,
        Rarity:1,
        Level:1,
        TunesUp:1,
        Tags:["Rabbit","Artist"],
        OriginalToon: "Bugs Bunny",
        Obtained:false
    },
    {
        Name:"Martian Bugs",
        Zone:5,
        Class:0,
        Rarity:1,
        Level:1,
        TunesUp:1,
        Tags:["Rabbit","Explorer"],
        OriginalToon: "Bugs Bunny",
        Obtained:false
    },
    {
        Name:"Duck Dodgers",
        Zone:5,
        Class:0,
        Rarity:2,
        Level:1,
        TunesUp:1,
        Tags:["Bird","Hero"],
        OriginalToon: "Daffy Duck",
        Obtained:false
    },
    {
        Name:"Space Cadet",
        Zone:5,
        Class:2,
        Rarity:1,
        Level:1,
        TunesUp:1,
        Tags:["Pig","Hero"],
        OriginalToon: "Porky",
        Obtained:false
    },
    {
        Name:"Space Explorer Granny",
        Zone:5,
        Class:0,
        Rarity:0,
        Level:1,
        TunesUp:1,
        Tags:["Human","Explorer"],
        OriginalToon: "Granny",
        Obtained:false
    },
    {
        Name:"Astronaut Sylvester",
        Zone:5,
        Class:1,
        Rarity:0,
        Level:1,
        TunesUp:1,
        Tags:["Cat","Explorer"],
        OriginalToon: "Sylvester",
        Obtained:false
    },
    {
        Name:"Astronaut Hector",
        Zone:5,
        Class:0,
        Rarity:0,
        Level:1,
        TunesUp:1,
        Tags:["Dog","Explorer"],
        OriginalToon: "Hector",
        Obtained:false
    },
    {
        Name:"Witch Lezah",
        Zone:5,
        Class:2,
        Rarity:0,
        Level:1,
        TunesUp:1,
        Tags:["Human","Villain"],
        OriginalToon: "Witch Hazel",
        Obtained:false
    },
    {
        Name:"Marvin",
        Zone:5,
        Class:0,
        Rarity:2,
        Level:1,
        TunesUp:1,
        Tags:["Alien","Mastermind","Original"],
        OriginalToon: "Marvin",
        Obtained:false
    },
    {
        Name:"Queso Bandito",
        Zone:6,
        Class:2,
        Rarity:2,
        Level:1,
        TunesUp:1,
        Tags:["Mouse","Outlaw"],
        OriginalToon: "Speedy Gonzales",
        Obtained:false
    },
    {
        Name:"Show Biz Daffy",
        Zone:6,
        Class:0,
        Rarity:1,
        Level:1,
        TunesUp:1,
        Tags:["Bird","Artist"],
        OriginalToon: "Daffy Duck",
        Obtained:false
    },
    {
        Name:"Show Biz Bugs",
        Zone:6,
        Class:2,
        Rarity:1,
        Level:1,
        TunesUp:1,
        Tags:["Rabbit","Artist"],
        OriginalToon: "Bugs Bunny",
        Obtained:false
    },
    {
        Name:"Rocket Coyote",
        Zone:6,
        Class:0,
        Rarity:2,
        Level:1,
        TunesUp:1,
        Tags:["Dog","Holiday"],
        OriginalToon: "Wile E Coyote",
        Obtained:false
    },
    {
        Name:"Rocket Sylvester",
        Zone:6,
        Class:2,
        Rarity:2,
        Level:1,
        TunesUp:1,
        Tags:["Cat","Holiday"],
        OriginalToon: "Sylvester",
        Obtained:false
    },
    {
        Name:"Holiday Bugs Bunny",
        Zone:6,
        Class:1,
        Rarity:2,
        Level:1,
        TunesUp:1,
        Tags:["Rabbit","Holiday"],
        OriginalToon: "Bugs Bunny",
        Obtained:false
    },
    {
        Name:"Elf Daffy Duck",
        Zone:6,
        Class:2,
        Rarity:1,
        Level:1,
        TunesUp:1,
        Tags:["Bird","Holiday"],
        OriginalToon: "Daffy Duck",
        Obtained:false
    },
    {
        Name:"Scrooge Yosemite Sam",
        Zone:6,
        Class:0,
        Rarity:1,
        Level:1,
        TunesUp:1,
        Tags:["Human","Holiday"],
        OriginalToon: "Yosemite Sam",
        Obtained:false
    },
    {
        Name:"Monster Foghorn",
        Zone:6,
        Class:1,
        Rarity:1,
        Level:1,
        TunesUp:1,
        Tags:["Monster","Villain"],
        OriginalToon: "Foghorn Leghorn",
        Obtained:false
    },
    {
        Name:"Dr. Dawgstein",
        Zone:6,
        Class:2,
        Rarity:1,
        Level:1,
        TunesUp:1,
        Tags:["Dog","Mastermind"],
        OriginalToon: "Barnyard Dawg",
        Obtained:false
    },
    {
        Name:"Ralph The Wolf Vampire",
        Zone:6,
        Class:0,
        Rarity:2,
        Level:1,
        TunesUp:1,
        Tags:["Dog","Magic"],
        OriginalToon: "Ralph",
        Obtained:false
    },
    {
        Name:"Western Type Hero",
        Zone:6,
        Class:0,
        Rarity:1,
        Level:1,
        TunesUp:1,
        Tags:["Bird","Wild West"],
        OriginalToon: "Daffy Duck",
        Obtained:false
    },
    {
        Name:"Cowgirl Granny",
        Zone:6,
        Class:2,
        Rarity:1,
        Level:1,
        TunesUp:1,
        Tags:["Human","Wild West"],
        OriginalToon: "Granny",
        Obtained:false
    },
    {
        Name:"Cowboy Sylvester",
        Zone:6,
        Class:1,
        Rarity:1,
        Level:1,
        TunesUp:1,
        Tags:["Cat","Wild West"],
        OriginalToon: "Sylvester",
        Obtained:false
    },
    {
        Name:"Lunar Petunia",
        Zone:7,
        Class:2,
        Rarity:2,
        Level:1,
        TunesUp:1,
        Tags:["Pig","Hero"],
        OriginalToon: "Petunia",
        Obtained:false
    },
    {
        Name:"Merlin Sam",
        Zone:7,
        Class:0,
        Rarity:2,
        Level:1,
        TunesUp:1,
        Tags:["Human","Magic"],
        OriginalToon: "Yosemite Sam",
        Obtained:false
    },
    {
        Name:"Handmaiden Granny",
        Zone:7,
        Class:2,
        Rarity:0,
        Level:1,
        TunesUp:1,
        Tags:["Human","Staff"],
        OriginalToon: "Granny",
        Obtained:false
    },
    {
        Name:"Pepe Le Bard",
        Zone:7,
        Class:2,
        Rarity:1,
        Level:1,
        TunesUp:1,
        Tags:["Skunk","Artist"],
        OriginalToon: "Pepe Le Pew",
        Obtained:false
    },
    {
        Name:"Elf Daffy Duck",
        Zone:7,
        Class:2,
        Rarity:1,
        Level:1,
        TunesUp:1,
        Tags:["Bird","Holiday"],
        OriginalToon: "Daffy Duck",
        Obtained:false
    },
    {
        Name:"Daffy Hood",
        Zone:7,
        Class:0,
        Rarity:2,
        Level:1,
        TunesUp:1,
        Tags:["Bird","Hero"],
        OriginalToon: "Daffy Duck",
        Obtained:false
    },
    {
        Name:"Friar Porky",
        Zone:7,
        Class:1,
        Rarity:2,
        Level:1,
        TunesUp:1,
        Tags:["Pig","Professional"],
        OriginalToon: "Porky",
        Obtained:false
    },
    {
        Name:"Scarlet Pumpernickel",
        Zone:7,
        Class:0,
        Rarity:2,
        Level:1,
        TunesUp:1,
        Tags:["Bird","Hero"],
        OriginalToon: "Daffy Duck",
        Obtained:false
    },
    {
        Name:"Grand Duke Sylvester",
        Zone:7,
        Class:0,
        Rarity:2,
        Level:1,
        TunesUp:1,
        Tags:["Cat","Villain"],
        OriginalToon: "Sylvester",
        Obtained:false
    },
    {
        Name:"Chamberlain Porky",
        Zone:7,
        Class:2,
        Rarity:1,
        Level:1,
        TunesUp:1,
        Tags:["Pig","Staff"],
        OriginalToon: "Porky",
        Obtained:false
    },
    {
        Name:"King Bugs Bunny",
        Zone:7,
        Class:0,
        Rarity:2,
        Level:1,
        TunesUp:1,
        Tags:["Rabbit","King"],
        OriginalToon: "Bugs Bunny",
        Obtained:false
    },
    {
        Name:"Royal Page Coyote",
        Zone:7,
        Class:2,
        Rarity:0,
        Level:1,
        TunesUp:1,
        Tags:["Dog","Staff"],
        OriginalToon: "Wile E Coyote",
        Obtained:false
    },
    {
        Name:"Black Knight Sam",
        Zone:7,
        Class:0,
        Rarity:2,
        Level:1,
        TunesUp:1,
        Tags:["Human","Magic"],
        OriginalToon: "Yosemite Sam",
        Obtained:false
    },
    {
        Name:"Witch Hazel",
        Zone:7,
        Class:0,
        Rarity:1,
        Level:1,
        TunesUp:1,
        Tags:["Human","Magic","Original"],
        OriginalToon: "Witch Hazel",
        Obtained:false
    },
    {
        Name:"Gossamer",
        Zone:7,
        Class:1,
        Rarity:0,
        Level:1,
        TunesUp:1,
        Tags:["Monster","Villain","Original"],
        OriginalToon: "Gossamer",
        Obtained:false
    },
    {
        Name:"Valkyrie Bugs",
        Zone:7,
        Class:2,
        Rarity:2,
        Level:1,
        TunesUp:1,
        Tags:["Rabbit","Magic"],
        OriginalToon: "Bugs Bunny",
        Obtained:false
    },
    {
        Name:"Siegfried Elmer",
        Zone:7,
        Class:1,
        Rarity:2,
        Level:1,
        TunesUp:1,
        Tags:["Human","Hero"],
        OriginalToon: "Elmer Fudd",
        Obtained:false
    }
];