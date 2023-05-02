var uuid = require("uuid");
//UniVerse DatabaseSetup
db = db.getSiblingDB('uniVerse');

//Drop Existing for reseed
db.dropDatabase("uniVerse");
//Account
db.createCollection('accounts')
accountCollection = db.getCollection("accounts");
accountCollection.remove({})
accountId1 = (0, uuid.v4)()
accountCollection.insert(
{
      id: accountId1,
      userName: "edoe",
      firstName: "Ernest",
      lastName: "Doe",
      email: "edoe@seattleu.com",
      department: "College of Nursing",

}
)
accountId2 = (0, uuid.v4)()
accountCollection.insert(
{
      id: accountId2,
      userName: "jsmith",
      firstName: "Janet",
      lastName: "Smith",
      email: "jsmith@seattleu.com",
      department: "College of Education",

}
)
accountId3 = (0, uuid.v4)()
accountCollection.insert(
{
      id: accountId3,
      userName: "srodriguez",
      firstName: "Santiago",
      lastName: "Rodriguez",
      email: "srodriguez@seattleu.edu",
      department: "College of Arts",

}
)
accountId4 = (0, uuid.v4)()
accountCollection.insert(
{
      id: accountId4,
      userName: "kcruz24",
      firstName: "Kayleigh",
      lastName: "Cruz",
      email: "kayleighc@seattleu.edu",
      department: "College of Science and Engineering",

}
)
accountId5 = (0, uuid.v4)()
accountCollection.insert(
{
      id: accountId5,
      userName: "kennyj",
      firstName: "Kenneth",
      lastName: "Jones",
      email: "kjones@seattleu.edu",
      department: "Chemistry Department",

}
)
commentId1 = (0, uuid.v4)()
commentId2 = (0, uuid.v4)()
commentId3 = (0, uuid.v4)()
commentId4 = (0, uuid.v4)()
commentId5 = (0, uuid.v4)()

//Post
db.createCollection('posts')
postCollection = db.getCollection("posts")
postCollection.remove({})
postId1 = (0, uuid.v4)()
postCollection.insert(
{
    id: postId1,
    accountId: accountId1,
    title: "Textbook inquiry",
    author: "Ernest Doe",
    isAnonymous: false,
    isEdited: false,
    description:"Are there any recommendations for which supplementary textbooks to read for clincals?",
    dateTime: 02-13-2023,
    likes: 3,
    dislikes: 0,
    comments: [commentId1]
}
)
postId2 = (0, uuid.v4)()
postCollection.insert(
{
    id: postId2,
    accountId: accountId2,
    title: "Experiential Learning Tips",
    author: "Janet Smith",
    isAnonymous: true,
    isEdited: false,
    description: "I have found great success in always asking for feedback during my experiential learning experience as a K-12 school teacher. The feedback are quiet constructive and I must say please don't shy away from asking for help. I wish I knew this sooner",
    dateTime: 02-24-2023,
    likes: 4,
    dislikes: 0,
    comments: [commentId2],
}
)
postId3 = (0, uuid.v4)()
postCollection.insert(
{
    id: postId3,
    accountId: accountId3,
    title: "Hangout in the Game Lounge",
    author: "Santiago Rodriguez",
    isAnonymous: false,
    isEdited: false,
    description:"If anyone wants to hangout for a game of FIFA or 2K, head up to the fifth floor of Residence Hall A",
    dateTime: 02-17-2023,
    likes: 3,
    dislikes: 1,
    comments: [commentId1],
}
)
postId4 = (0, uuid.v4)()
postCollection.insert(
{
    id: postId4,
    accountId: accountId4,
    title: "Hackathon Open for All",
    author: "Kayleigh Cruz",
    isAnonymous: false,
    isEdited: false,
    description:"Fellow students, the Computer Science Society will be hosting a Hackathon on campus this evening at 8pm. Join in to stand the chance of winning some cool prizes. Free pizza will be served too!",
    dateTime: 03-13-2023,
    likes: 5,
    dislikes: 2,
    comments: [commentId3],
}
)
postId5 = (0, uuid.v4)()
postCollection.insert(
{
    id: postId5,
    accountId: accountId5,
    title: "Taken CH 2300?",
    author: "Kenneth Jones",
    isAnonymous: false,
    isEdited: false,
    description:"I'm planning on enrolling in CH 2300 next quarter. Has anyone taken that course with Dr. Ortega? I would want to know waht is like taking that course with her.",
    dateTime: 03-15-2023,
    likes: 1,
    dislikes: 0,
    comments: [commentId1],
}
)

//Comment
db.createCollection('comments')
commentCollection = db.getCollection("comments")
commentCollection.remove({})
commentCollection.insert(
{
    id: commentId1,
    postId : postId1,
    authorId: accountId2,
    description: "Human Anotomy by A.H Henson is a good supplementar textbook. It should support you through clinicals",
    dateTime: 02-14-2023,
    likes: 3,
    dislikes: 0,
}
)

commentCollection.insert(
{
    id: commentId2,
    postId : postId2,
    authorId: accountId5,
    description: "I concur, I always remember asking for feedback during my internship at the pharmaceutical company. I interned at last summer.",
    dateTime: 02-24-2023,
    likes: 3,
    dislikes: 0,
}
)
commentCollection.insert(
{
    id: commentId3,
    postId : postId4,
    authorId: accountId4,
    description: "How about we meet around 8:00pm. I should be finished with homework by then. Plus my roommates wanna join in too",
    dateTime: 02-18-2023,
    likes: 3,
    dislikes: 0,
}
)
commentCollection.insert(
{
    id: commentId4,
    postId : postId4,
    authorId: accountId5,
    description: "Yay! Hackathons are back. How I missed in-person hackathon since the pandemic caused us to experience them virtually",
    dateTime: 03-14-2023,
    likes: 2,
    dislikes: 0,
}
)
commentCollection.insert(
{
    id: commentId5,
    postId : postId5,
    authorId: accountId3,
    description: "I haven't had any courses with Dr. Ortega. However, from what I've heard from my bestfriend, who is a Chemistry major, she's a fun professor. Expect to learn a ton in her courses!",
    dateTime: 03-15-2023,
    likes: 1,
    dislikes: 0,
}
)

//Notification
db.createCollection('notifications')
notificationCollection = db.getCollection("notifications")
notificationCollection.remove({})
notificationId1 = (0, uuid.v4)()
notificationCollection.insert(
{
    id: notificationId1,
    accountId: accountId1,
    postId: postId1,
    title:"Like and comment received.",
    description: "Jane Smith liked and commented on your post.",
    dateTime: 02-14-2023,
}
)
notificationId2 = (0, uuid.v4)()
notificationCollection.insert(
{
    id: notificationId2,
    accountId: accountId2,
    postId: postId2,
    title:"Like and comment received.",
    description: "Kenneth Jones liked and commented on your post.",
    dateTime: 02-24-2023,
}
)
notificationId3 = (0, uuid.v4)()
notificationCollection.insert(
{
    id: notificationId3,
    accountId: accountId3,
    postId: postId3,
    title:"Like and comment received",
    description: "Kayleigh Cruz liked and commented on your post.",
    dateTime: 02-18-2023,
}
)
notificationId4 = (0, uuid.v4)()
notificationCollection.insert(
{
    id: notificationId4,
    accountId: accountId4,
    postId: postId4,
    title:"Like and comment received",
    description: "Kenneth Jones liked and commented on your post.",
    dateTime: 03-14-2023,
}
)
notificationId5 = (0, uuid.v4)()
notificationCollection.insert(
{
    id: notificationId5,
    accountId: accountId5,
    postId: postId4,
    title:"Like and comment received",
    description: "Santiago Rodriguez liked and commented on your post =.",
    dateTime: 03-15-2023,
}
)


