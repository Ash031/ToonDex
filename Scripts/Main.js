loadTunes = function(){
    generateStats();
    document.getElementById("MainTable").innerHTML = printToons(allToons());
};

searchTunes = function(){
    document.getElementById("MainTable").innerHTML = printToons(searchToons());
};

generateToonManager = function(){
    document.getElementById("modal-body").innerHTML = printCollected();
};

generateStats = function(){
    document.getElementById("TCount").innerHTML = "Collected "+NToonGot()+" out of "+tunes.length+" toons";
    document.getElementById("avLvl").innerHTML = "Average Level: "+avLvl();
    document.getElementById("avTun").innerHTML = "Average Tune Up: "+avTU();
};