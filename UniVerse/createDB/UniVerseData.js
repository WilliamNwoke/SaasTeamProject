//UniVerse DatabaseSetup
db = db.getSiblingDB('universe');

//Account
db.createCollection('account')
account.Collection = db.getCollection("account");
accountCollection.remove({})
accountCollection.insert(
{
      accountId: 001,
      userName: "edoe",
      firstName: "Ernest",
      lastName: "Doe",
      email: "edoe@seattleu.com",
      department: "College of Nursing",

}
)
accountCollection.insert(
{
      accountId: 002,
      userName: "jsmith",
      firstName: "Janet",
      lastName: "Smith",
      email: "jsmith@seattleu.com",
      department: "College of Education",

}
)
accountCollection.insert(
{
      accountId: 003,
      userName: "srodriguez",
      firstName: "Santiago",
      lastName: "Rodriguez",
      email: "srodriguez@seattleu.edu",
      department: "College of Arts",

}
)
accountCollection.insert(
{
      accountId: 004,
      userName: "kcruz24",
      firstName: "Kayleigh",
      lastName: "Cruz",
      email: "kayleighc@seattleu.edu",
      department: "College of Science and Engineering",

}
)
accountCollection.insert(
{
      accountId: 005,
      userName: "kennyj",
      firstName: "Kenneth",
      lastName: "Jones",
      email: "kjones@seattleu.edu",
      department: "Chemistry Department",

}
)

//Post
db.createCollection('postEntry')
postEntryCollection = db.getCollection("postEntry")
postEntryCollection.remove({})
postEntryCollection.insert(
{
    accountId: 001,
    postId: 01,
    title: "Textbook inquiry",
    author: "Ernest Doe",
    isAnonymous: false,
    isEdited: false,
    description:"Are there any recommendations for which supplementary textbooks to read for clincals?",
    dateTime: 02-13-2023,
    likes: 3,
    dislikes: 0,
    comments: [1]
}
)
postEntryCollection.insert(
{
    accountId: 002,
    postId: 02,
    title: "Experiential Learning Tips",
    author: "Janet Smith",
    isAnonymous: true,
    isEdited: false,
    description: "I have found great success in always asking for feedback during my experiential learning experience as a K-12 school teacher. The feedback are quiet constructive and I must say please don't shy away from asking for help. I wish I knew this sooner",
    dateTime: 02-24-2023,
    likes: 4,
    dislikes: 0,
    comments: [2],
}
)
postEntryCollection.insert(
{
    accountId: 003,
    postId: 03,
    title: "Hangout in the Game Lounge",
    author: "Santiago Rodriguez",
    isAnonymous: false,
    isEdited: false,
    description:"If anyone wants to hangout for a game of FIFA or 2K, head up to the fifth floor of Residence Hall A",
    dateTime: 02-17-2023,
    likes: 3,
    dislikes: 1,
    comments: [1],
}
)
postEntryCollection.insert(
{
    accountId: 004,
    postId: 04,
    title: "Hackathon Open for All",
    author: "Kayleigh Cruz",
    isAnonymous: False,
    isEdited: False,
    description:"Fellow students, the Computer Science Society will be hosting a Hackathon on campus this evening at 8pm. Join in to stand the chance of winning some cool prizes. Free pizza will be served too!",
    dateTime: 03-13-2023,
    likes: 5,
    dislikes: 2,
    comments: [3],
}
)
postEntryCollection.insert(
{
    accountId: 005,
    postId: 05,
    title: "Taken CH 2300?",
    author: "Kenneth Jones",
    isAnonymous: False,
    isEdited: False,
    description:"I'm planning on enrolling in CH 2300 next quarter. Has anyone taken that course with Dr. Ortega? I would want to know waht is like taking that course with her.",
    dateTime: 03-15-2023,
    likes: 1,
    dislikes: 0,
    comments: [3],
}
)

//Comment
db.createCollection('comment')
commentCollection = db.getCollection("comment")
commentCollection.remove({})
commentCollection.insert(
{
    postId : 01,
    commmentId: 0001,
    author: "Jane Smith",
    description: "Human Anotomy by A.H Henson is a good supplementar textbook. It should support you through clinicals",
    dateTime: 02-14-2023,
    likes: 3,
    dislikes: 0,
}
)
commentCollection.insert(
{
    postId : 02,
    commmentId: 0002,
    author: "Kenneth Jones",
    description: "I concur, I always remember asking for feedback during my internship at the pharmaceutical company. I interned at last summer.",
    dateTime: 02-24-2023,
    likes: 3,
    dislikes: 0,
}
)
commentCollection.insert(
{
    postId : 03,
    commmentId: 0003,
    author: "Kayleigh Cruz",
    description: "How about we meet around 8:00pm. I should be finished with homework by then. Plus my roommates wanna join in too",
    dateTime: 02-18-2023,
    likes: 3,
    dislikes: 0,
}
)
commentCollection.insert(
{
    postId : 04,
    commmentId: 0004,
    author: "Kenneth Jones",
    description: "Yay! Hackathons are back. How I missed in-person hackathon since the pandemic caused us to experience them virtually",
    dateTime: 03-14-2023,
    likes: 2,
    dislikes: 0,
}
)
commentCollection.insert(
{
    postId : 05,
    commmentId: 0005,
    author: "Santiago Rodriguez",
    description: "I haven't had any courses with Dr. Ortega. However, from what I've heard from my bestfriend, who is a Chemistry major, she's a fun professor. Expect to learn a ton in her courses!",
    dateTime: 03-15-2023,
    likes: 1,
    dislikes: 0,
}
)

//Notification
db.createCollection('notification')
notificationCollection = db.getCollection("notification")
notificationCollection.remove({})
notificationCollection.insert(
{
    notificationId: 00001,
    accountId: 001,
    postId: 01,
    title:"Like and comment received.",
    description: "Jane Smith liked and commented on your post.",
    dateTime: 02-14-2023,
}
)
notificationCollection.insert(
{
    notificationId: 00002,
    accountId: 002,
    postId: 02,
    title:"Like and comment received.",
    description: "Kenneth Jones liked and commented on your post.",
    dateTime: 02-24-2023,
}
)
notificationCollection.insert(
{
    notificationId: 00003,
    accountId: 003,
    postId: 03,
    title:"Like and comment received",
    description: "Kayleigh Cruz liked and commented on your post.",
    dateTime: 02-18-2023,
}
)
notificationCollection.insert(
{
    notificationId: 00004,
    accountId: 004,
    postId: 04,
    title:"Like and comment received",
    description: "Kenneth Jones liked and commented on your post.",
    dateTime: 03-14-2023,
}
)
notificationCollection.insert(
{
    notificationId: 00005,
    accountId: 005,
    postId: 04,
    title:"Like and comment received",
    description: "Santiago Rodriguez liked and commented on your post =.",
    dateTime: 03-15-2023,
}
)


