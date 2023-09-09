export type MessageType = {
  type: 'me' | 'you';
  userId: string;
  message: string;
  timeStamp: string;
};
export type ChatList = {
  image: string;
  distance: string;
  lastMessage: string;
  userId: string;
};

export const UserChatList: Array<ChatList> = [
  {
    image: `https://avatars.dicebear.com/api/jdenticon/2.png`,
    distance: '2 miles away',
    lastMessage: "Hey, how's it going?",
    userId: 'user123',
  },
  {
    image: `https://avatars.dicebear.com/api/jdenticon/22.png`,
    distance: '5 miles away',
    lastMessage: 'What are you up to today?',
    userId: 'user456',
  },
  {
    image: `https://avatars.dicebear.com/api/jdenticon/12.png`,
    distance: '1 mile away',
    lastMessage: 'I saw that movie too!',
    userId: 'user789',
  },
  {
    image: `https://avatars.dicebear.com/api/jdenticon/1.png`,
    distance: '10 miles away',
    lastMessage: "Let's grab coffee sometime!",
    userId: 'user101',
  },
  {
    image: `https://avatars.dicebear.com/api/jdenticon/21.png`,
    distance: '3 miles away',
    lastMessage: "How's the weather over there?",
    userId: 'user202',
  },
];
export const UserConversation: Array<MessageType> = [
  {
    type: 'me',
    userId: '1',
    message: 'Hello!',
    timeStamp: '2023-08-30T10:15:00.000Z',
  },
  {
    type: 'you',
    userId: '2',
    message: 'Hi there!',
    timeStamp: '2023-08-30T10:20:00.000Z',
  },
  {
    type: 'me',
    userId: '1',
    message: 'How are you?',
    timeStamp: '2023-08-30T10:25:00.000Z',
  },
  {
    type: 'you',
    userId: '2',
    message: "I'm good, thanks!",
    timeStamp: '2023-08-30T10:30:00.000Z',
  },
  {
    type: 'me',
    userId: '1',
    message: "What's new?",
    timeStamp: '2023-08-30T10:35:00.000Z',
  },
  {
    type: 'you',
    userId: '2',
    message: 'Not much, just working on a project.',
    timeStamp: '2023-08-30T10:40:00.000Z',
  },
  {
    type: 'me',
    userId: '1',
    message: 'That sounds interesting!',
    timeStamp: '2023-08-30T10:45:00.000Z',
  },
  {
    type: 'me',
    userId: '1',
    message: 'That really sounds interesting!',
    timeStamp: '2023-08-30T10:45:00.000Z',
  },
  {
    type: 'me',
    userId: '1',
    message: 'That sounds interesting!',
    timeStamp: '2023-08-30T10:45:00.000Z',
  },
  {
    type: 'you',
    userId: '2',
    message: "Yeah, it's keeping me busy.",
    timeStamp: '2023-08-30T10:50:00.000Z',
  },
  {
    type: 'me',
    userId: '1',
    message: "Let's catch up later!",
    timeStamp: '2023-08-30T10:55:00.000Z',
  },
  {
    type: 'you',
    userId: '2',
    message: 'Sure, talk to you later!',
    timeStamp: '2023-08-30T11:00:00.000Z',
  },
  {
    type: 'me',
    userId: '1',
    message: 'Goodbye!',
    timeStamp: '2023-08-30T11:05:00.000Z',
  },
  {
    type: 'you',
    userId: '2',
    message: 'Bye!',
    timeStamp: '2023-08-30T11:10:00.000Z',
  },
];
