
let Photographer = class {
    constructor(name, description, imageSrc, yearsOfLife, timestamps, youtube, map) {
        this.name = name;
        this.description = description;
        this.imageSrc = imageSrc;
        this.yearsOfLife = yearsOfLife;
        this.youtube = youtube;
        this.map = map;
        this.timestamps = timestamps;
    }
}

export default Photographer;