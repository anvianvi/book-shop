const books = [
  {
    id: 0,
    author: "George Orwell",
    imageLink: "./books-imgs/1984.jpg",
    title: "1984",
    publication: "January 1, 1961",
    price: 9.99,
    description: "Written more than 70 years ago, 1984 was George Orwell’s chilling prophecy about the future. And while 1984 has come and gone, his dystopian vision of a government that will do anything to control the narrative is timelier than ever...",
    amazon: "https://a.co/d/dYJeOE1",
    instock: 10
  }, {
    id: 1,
    author: "Stephen Hawking",
    imageLink: "./books-imgs/a-brief-history-of-time.jpg",
    title: "A Brief History of Time",
    publication: "September 1, 1998",
    price: 18.00,
    description: "A landmark volume in science writing by one of the great minds of our time, Stephen Hawking’s book explores such profound questions as: How did the universe begin—and what made its start possible? Does time always flow forward? Is the universe unending—or are there boundaries? Are there other dimensions in space? What will happen when it all ends?",
    amazon: "https://a.co/d/6R5xVie",
    instock: 8
  },
  {
    id: 2,
    author: "Dave Eggers",
    imageLink: "./books-imgs/a-heartbreaking-work.jpg",
    title: "A Heartbreaking Work of Staggering Genius",
    publication: "February 13, 2001",
    price: 18.00,
    description: "A book that redefines both family and narrative for the twenty-first century. A Heartbreaking Work of Staggering Genius is the moving memoir of a college senior who, in the space of five weeks, loses both of his parents to cancer and inherits his eight-year-old brother. Here is an exhilarating debut that manages to be simultaneously hilarious and wildly inventive as well as a deeply heartfelt story of the love that holds a family together.",
    amazon: "https://a.co/d/cbwuNaW",
    instock: 5
  },
  {
    id: 3,
    author: "Ishmael Beah",
    imageLink: "./books-imgs/a-long-way-gone.jpg",
    title: "A Long Way Gone: Memoirs of a Boy Soldier",
    publication: "August 5, 2008",
    price: 15.00,
    description: "This is how wars are fought now: by children, hopped-up on drugs and wielding AK-47s. Children have become soldiers of choice. In the more than fifty conflicts going on worldwide, it is estimated that there are some 300,000 child soldiers. Ishmael Beah used to be one of them.",
    amazon: "https://a.co/d/9NuGtyr",
    instock: 2
  },
  {
    id: 4,
    author: "Lemony Snicket",
    imageLink: "./books-imgs/the-bad-beginning.jpg",
    title: "The Bad Beginning: Or, Orphans!",
    publication: "May 8, 2007",
    price: 7.99,
    description: "In the tradition of great storytellers, from Dickens to Dahl, comes an exquisitely dark comedy that is both literary and irreverent, hilarious and deftly crafted. Never before has a tale of three likeable and unfortunate children been quite so enchanting, or quite so uproariously unhappy. ",
    amazon: "https://a.co/d/4UAcuOA",
    instock: 3
  },
  {
    id: 5,
    author: "Madeleine L'Engle",
    imageLink: "./books-imgs/a-wrinkle-in-time.jpg",
    title: "A Wrinkle in Time",
    publication: "May 1, 2007",
    price: 5.75,
    description: "A tesseract (in case the reader doesn't know) is a wrinkle in time. To tell more would rob the reader of the enjoyment of Miss L'Engle's unusual book. A Wrinkle in Time, winner of the Newbery Medal in 1963, is the story of the adventures in space and time of Meg, Charles Wallace, and Calvin O'Keefe (athlete, student, and one of the most popular boys in high school). They are in search of Meg's father, a scientist who disappeared while engaged in secret work for the government on the tesseract problem.",
    amazon: "https://a.co/d/0WvL22p",
    instock: 22
  },
  {
    id: 6,
    author: "Lewis Carroll",
    imageLink: "./books-imgs/alice-adventures.jpg",
    title: "Alice's Adventures in Wonderlands",
    publication: "June 1, 1984",
    price: 5.95,
    description: "In 1862 Charles Lutwidge Dodgson, a shy Oxford mathematician with a stammer, created a story about a little girl tumbling down a rabbit hole. Thus began the immortal adventures of Alice, perhaps the most popular heroine in English literature. Countless scholars have tried to define the charm of the Alice books—with those wonderfully eccentric characters the Queen of Hearts, Tweedledum, and Tweedledee, the Cheshire Cat, Mock Turtle, the Mad Hatter et al.—by proclaiming that they really comprise a satire on language, a political allegory, a parody of Victorian children’s literature, even a reflection of contemporary ecclesiastical history.",
    amazon: "https://a.co/d/0yZzti7",
    instock: 12
  },
  {
    id: 7,
    author: "Bob Woodward",
    imageLink: "./books-imgs/all-the-presidents-men.jpg",
    title: "All the President's Men",
    publication: "June 16, 1994",
    price: 16.99,
    description: "This is the book that changed America. Published just two months before President Nixon’s resignation, All the President’s Men revealed the full scope of the Watergate scandal and introduced for the first time the mysterious “Deep Throat.” Beginning with the story of a simple burglary at Democratic headquarters and then continuing through headline after headline, Bernstein and Woodward deliver the stunning revelations and pieces in the Watergate puzzle that brought about Nixon's shocking downfall. Their explosive reports won a Pulitzer Prize for The Washington Post, toppled the president, and have since inspired generations of reporters.",
    amazon: "https://a.co/d/3yRAjPW",
    instock: 32
  },
  {
    id: 8,
    author: "Alice Munro",
    imageLink: "./books-imgs/selected-stories.jpg",
    title: "Selected Stories",
    publication: "November 11, 1997",
    price: 26.56,
    description: "Spanning almost thirty years and settings that range from big cities to small towns and farmsteads of rural Canada, this magnificent collection brings together twenty-eight stories by a writer of unparalleled wit, generosity, and emotional power. In her Selected Stories, Alice Munro makes lives that seem small unfold until they are revealed to be as spacious as prairies and locates the moments of love and betrayal, desire and forgiveness, that change those lives forever. To read these stories--about a traveling salesman and his children on an impromptu journey; an abandoned woman choosing between seduction and solitude--is to succumb to the spell of a writer who enchants her readers utterly even as she restores them to their truest selves.",
    amazon: "https://a.co/d/5lU54nL",
    instock: 6
  },
  {
    id: 9,
    author: "Frank McCourt",
    imageLink: "./books-imgs/frank-mccourt.jpg",
    title: "Angela's Ashes: A Memoir",
    publication: "May 25, 1999",
    price: 9.49,
    description: "When I look back on my childhood I wonder how I managed to survive at all. It was, of course, a miserable childhood: the happy childhood is hardly worth your while. Worse than the ordinary miserable childhood is the miserable Irish childhood, and worse yet is the miserable Irish Catholic childhood.",
    amazon: "https://a.co/d/2PYMAfz",
    instock: 2
  }
]
