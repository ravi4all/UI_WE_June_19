function Song(id, name, image, url) {
    this.id = id;
    this.name = name;
    this.image = image;
    this.url = url;
    this.selected = false;
}

var obj = {
    "playList": [],
    addSong: function(id, name, img, url) {
        var song = new Song(id, name, img, url);
        this.playList.push(song);
        console.log(this.playList);
    },
    deleteSong: function(id) {
        var song = this.playList.filter(function(x) {
            return x.id == id;
        });
        song[0].selected = true;
        // console.log(song);
        this.playList = this.playList.filter(function(x) {
            return x.selected == false;
        })
    }
}