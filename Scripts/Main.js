loadTunes = function(){
    document.getElementById("MainTable").innerHTML = printToons(allToons());
};

searchTunes = function(){
    document.getElementById("MainTable").innerHTML = printToons(searchToons());
};

generateToonManager = function(){
    document.getElementById("modal-body").innerHTML = printCollected();
};