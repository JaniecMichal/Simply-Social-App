import photo from 'assets/images/noPhoto.jpeg';

export const initialPosts = [
  {
    id: '1',
    author: 'Jan Kowalski',
    profileIcon: photo,
    title: 'My Travels',
    content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
      Quisque iaculis, turpis a auctor aliquet, ante ipsum accumsan mauris, in dictum velit nibh in dolor. I
      n hac habitasse platea dictumst. Donec et nisl faucibus tellus condimentum semper eget sed dui.
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
      Quisque iaculis, turpis a auctor aliquet, ante ipsum accumsan mauris, in dictum velit nibh in dolor. I
      n hac habitasse platea dictumst. Donec et nisl faucibus tellus condimentum semper eget sed dui.`,
    date: 'Created at 13:12:31 on April 16, 2021',
    comments: [
      {
        id: '1',
        author: 'Konrad Wallenrod',
        profileIcon: photo,
        content: `Great post!`,
        date: 'Created at 11:23:31 on April 17, 2021',
      },
      {
        id: '2',
        author: 'Michał Janiec',
        profileIcon: photo,
        content: `I like reading your posts. Give us more..`,
        date: 'Created at 01:23:31 on April 19, 2021',
      },
    ],
  },
  {
    id: '2',
    author: 'Michał Janiec',
    profileIcon: photo,
    title: 'My new car!',
    content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
      Quisque iaculis, turpis a auctor aliquet, ante ipsum accumsan mauris, in dictum velit nibh in dolor. I
      n hac habitasse platea dictumst. Donec et nisl faucibus tellus condimentum semper eget sed dui.
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
      Quisque iaculis, turpis a auctor aliquet, ante ipsum accumsan mauris, in dictum velit nibh in dolor. I
      n hac habitasse platea dictumst. Donec et nisl faucibus tellus condimentum semper eget sed dui.`,
    date: 'Created at 10:12:31 on April 11, 2021',
    comments: [
      {
        id: '1',
        author: 'Konrad Wallenrod',
        profileIcon: photo,
        content: `Great post!`,
        date: 'Created at 11:23:31 on April 12, 2021',
      },
      {
        id: '2',
        author: 'Chuck Norris',
        profileIcon: photo,
        content: `I like reading your posts. Give us more..`,
        date: 'Created at 11:23:31 on April 13, 2021',
      },
      {
        id: '3',
        author: 'Bruce Lee',
        profileIcon: photo,
        content: `Great post!`,
        date: 'Created at 15:23:31 on April 13, 2021',
      },
      {
        id: '4',
        author: 'Aragorn',
        profileIcon: photo,
        content: `I like reading your posts. Give us more..`,
        date: 'Created at 07:23:31 on April 14, 2021',
      },
    ],
  },
];
