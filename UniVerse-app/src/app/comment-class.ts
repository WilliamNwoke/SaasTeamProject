export class CommentClass {
    id: string;
    forumpostId: string;
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
      this.forumpostId = postId;
      this.author = author;
      this.description = description;
      this.dateTime = dateTime;
      this.likes = likes;
      this.dislikes = dislikes;
    }
  }
  