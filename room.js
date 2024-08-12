var roomConfig = {
    roomName : "Tushar Room",
    playerName : "Tushar Host",
    maxPlayers : 11,
    public : true,    

};

var room = HBInit(roomConfig);

room.onPlayerJoin = function(player){

    room.sendChat("Greetings" + player.name);
}

room.onPlayerChat = function(player, message){
    if(message == "!admin"){
        room.setPlayerAdmin(player.id, true);
        return false;
    }
}