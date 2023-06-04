export class ForumPostClass {
    id: string;
    accountId: string;
    title: string;
    author: string;
    isAnonymous: boolean;
    isEdited: boolean;
    description: string;
    dateTime: Date;
    likes: number;
    dislikes: number;
    comments: string[];

    constructor(
        id: string,
        accountId: string,
        title: string,
        author: string,
        isAnonymous: boolean,
        isEdited: boolean,
        description: string,
        dateTime: Date,
        likes: number,
        dislikes: number,
        comments: string[]
    ) {
        this.id = id;
        this.accountId = accountId;
        this.title = title;
        this.author = author;
        this.isAnonymous = isAnonymous;
        this.isEdited = isEdited;
        this.description = description;
        this.dateTime = dateTime;
        this.likes = likes;
        this.dislikes = dislikes;
        this.comments = comments;
    }
}
