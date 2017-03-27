export class Product {

    constructor(id, timeStamp, title, description, pictureName, category, addedBy, likes, dislikes, wished, retailerName, link, cover, galleryId) {
        this.id = id;
        this.timeStamp = timeStamp;
        this.title = title;
        this.description = description;
        this.pictureName = pictureName;
        this.category = category;
        this.addedBy = addedBy;
        this.likes = likes;
        this.dislikes = dislikes;
        this.wished = wished;
        this.retailerName = retailerName;
        this.link = link;
        this.cover = cover;
        this.galleryId = galleryId;
    }

    public id: number;
    public timeStamp: Date;
    public title: string;
    public description: string;
    public pictureName: string;
    public category: string;
    public addedBy: string;
    public likes: number;
    public dislikes: number;
    public wished: number;
    public retailerName: string;
    public link: string;
    public cover: boolean;
    public galleryId: number;

}