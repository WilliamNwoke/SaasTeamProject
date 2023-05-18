export class CommentClass {
    id: string;
    postId: string;
    author: string;
    description: string;
    dateTime: Date;
    likes: number;
    dislikes: number;
  
    constructor(
      id: string,
      postId: string,
      author: string,
      description: string,
      dateTime: Date,
      likes: number,
      dislikes: number
    ) {
      this.id = id;
      this.postId = postId;
      this.author = author;
      this.description = description;
      this.dateTime = dateTime;
      this.likes = likes;
      this.dislikes = dislikes;
    }
  }
  