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
    var TUGold = TotalTUGold();
    document.getElementById("GoldTU").innerHTML = "Gold Spent on Tune Up: "+ TUGold;
    document.getElementById("avRank").innerHTML = "Average Rank: "+avRank();
    var RankGold = totalRankUpGoldCost();
    document.getElementById("GoldRank").innerHTML = "Gold spent on Ranking: "+ RankGold;
    document.getElementById("TotalGold").innerHTML = "Total Gold spent: " + (parseInt(TUGold) + parseInt(RankGold));
};

SearchByName = function(){
    document.getElementById("MainTable").innerHTML = printToons(searchToons(document.getElementById("CharacterSearch").value));
};