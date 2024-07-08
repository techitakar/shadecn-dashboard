import {Post} from "@/types/posts"

const posts:Post[]=[
    {
        id: '1',
        title: 'The Lord of the Rings: The Fellowship of the Ring',
        body: 'The Lord of the Rings: The Fellowship of the Ring is a 1954 novel...',
        author: 'Jr. Tolkien',
        date: '2022-01-01',
        comments: [
          { id: '1', text: 'Nice', username: 'Jane' },
          {
            id: '2',
            text: 'Awesome fantasy book. I would recommend it!',
            username: 'Alex',
          },
        ],
      },
    {
        id: "2",
        title: "To Kill a Mockingbird",
        body: "To Kill a Mockingbird is a novel by Harper Lee published in 1960...",
        author: "Harper Lee",
        date: "1960-07-11",
        comments: [
          { id: "1", text: "Classic!", username: "Bookworm" },
          { id: "2", text: "One of my all-time favorites", username: "LiteraryFan" }
        ]
      },
    {
        id: "3",
        title: "1984",
        body: "1984 is a dystopian novel by George Orwell published in 1949...",
        author: "George Orwell",
        date: "1949-06-08",
        comments: [
          { id: "1", text: "Scarily prophetic", username: "DystopiaReader" },
          { id: "2", text: "A must-read for everyone", username: "OrwellFan" }
        ]
      },
      {
        id: "4",
        title: "Pride and Prejudice",
        body: "Pride and Prejudice is a romantic novel by Jane Austen published in 1813...",
        author: "Jane Austen",
        date: "1813-01-28",
        comments: [
          { id: "1", text: "Lovely characters!", username: "RomanceReader" },
          { id: "2", text: "Timeless classic", username: "ClassicLover" }
        ]
      },
     {
        id: "5",
        title: "The Catcher in the Rye",
        body: "The Catcher in the Rye is a novel by J.D. Salinger published in 1951...",
        author: "J.D. Salinger",
        date: "1951-07-16",
        comments: [
          { id: "1", text: "Relatable protagonist", username: "HoldenFan" },
          { id: "2", text: "Iconic coming-of-age story", username: "LiteraryJunkie" }
        ]
      },
      {
        id: "6",
        title: "Moby-Dick",
        body: "Moby-Dick is a novel by Herman Melville published in 1851...",
        author: "Herman Melville",
        date: "1851-10-18",
        comments: [
          { id: "1", text: "Epic tale of obsession", username: "WhaleWatcher" },
          { id: "2", text: "Incredible literary adventure", username: "AdventureReader" }
        ]
      },
      {
        id: "7",
        title: "The Great Gatsby",
        body: "The Great Gatsby is a novel by F. Scott Fitzgerald published in 1925...",
        author: "F. Scott Fitzgerald",
        date: "1925-04-10",
        comments: [
          { id: "1", text: "Captivating portrayal of the Jazz Age", username: "GatsbyFan" },
          { id: "2", text: "Beautifully written", username: "LiteraryEnthusiast" }
        ]
      },
     {
        id: "8",
        title: "War and Peace",
        body: "War and Peace is a novel by Leo Tolstoy published in 1869...",
        author: "Leo Tolstoy",
        date: "1869-01-01",
        comments: [
          { id: "1", text: "Historical masterpiece", username: "HistoryBuff" },
          { id: "2", text: "Complex characters and storylines", username: "TolstoyReader" }
        ]
      },
     {
        id: "9",
        title: "The Odyssey",
        body: "The Odyssey is an ancient Greek epic poem attributed to Homer...",
        author: "Homer",
        date: "Ancient Greece",
        comments: [
          { id: "1", text: "Legendary journey", username: "EpicFan" },
          { id: "2", text: "Foundational work of Western literature", username: "LiteratureScholar" }
        ]
      },
      {
        id: "10",
        title: "The Grapes of Wrath",
        body: "The Grapes of Wrath is a novel by John Steinbeck published in 1939...",
        author: "John Steinbeck",
        date: "1939-04-14",
        comments: [
          { id: "1", text: "Powerful social commentary", username: "SocialJusticeReader" },
          { id: "2", text: "Emotionally gripping", username: "SteinbeckFan" }
        ]
      },
       {
        id: "11",
        title: "Anna Karenina",
        body: "Anna Karenina is a novel by Leo Tolstoy published in 1877...",
        author: "Leo Tolstoy",
        date: "1877-01-01",
        comments: [
          { id: "1", text: "Tragic and beautiful", username: "RussianLitFan" },
          { id: "2", text: "Complex characters and themes", username: "TolstoyLover" }
        ]
      }
]

export default posts