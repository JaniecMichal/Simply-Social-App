import photo from 'assets/images/noPhoto.jpeg';

export const initialPosts = [
  {
    author: 'Jan Kowalski',
    profileIcon: photo,
    content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
      Quisque iaculis, turpis a auctor aliquet, ante ipsum accumsan mauris, in dictum velit nibh in dolor. I
      n hac habitasse platea dictumst. Donec et nisl faucibus tellus condimentum semper eget sed dui.
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
      Quisque iaculis, turpis a auctor aliquet, ante ipsum accumsan mauris, in dictum velit nibh in dolor. I
      n hac habitasse platea dictumst. Donec et nisl faucibus tellus condimentum semper eget sed dui.`,
    data: '18-April-2021',
    comments: [
      {
        author: 'Konrad Wallenrod',
        content: `Great post!`,
        data: '18-April-2021',
      },
      {
        author: 'Konrad Wallenrod',
        content: `I like reading your posts. Give us more..`,
        data: '18-April-2021',
      },
    ],
  },
  {
    author: 'Michał Janiec',
    profileIcon: photo,
    content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
      Quisque iaculis, turpis a auctor aliquet, ante ipsum accumsan mauris, in dictum velit nibh in dolor. I
      n hac habitasse platea dictumst. Donec et nisl faucibus tellus condimentum semper eget sed dui.
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
      Quisque iaculis, turpis a auctor aliquet, ante ipsum accumsan mauris, in dictum velit nibh in dolor. I
      n hac habitasse platea dictumst. Donec et nisl faucibus tellus condimentum semper eget sed dui.`,
    data: '16-April-2021',
    comments: [
      {
        author: 'Konrad Wallenrod',
        content: `Great post!`,
        data: '13-April-2021',
      },
      {
        author: 'Konrad Wallenrod',
        content: `I like reading your posts. Give us more..`,
        data: '14-April-2021',
      },
      {
        author: 'Bruce Lee',
        content: `Great post!`,
        data: '13-April-2021',
      },
      {
        author: 'Aragorn',
        content: `I like reading your posts. Give us more..`,
        data: '14-April-2021',
      },
    ],
  },
];
