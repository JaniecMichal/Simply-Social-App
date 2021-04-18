import photo from 'assets/images/noPhoto.jpeg';
import blogAuthorPhoto from 'assets/images/loggedUser.jpg';
import car from 'assets/images/car.jpg';
import travel from 'assets/images/travel.jpg';

export const initialPosts = [
  {
    id: '1',
    author: 'Michał Janiec',
    profileIcon: blogAuthorPhoto,
    title: 'My Travels',
    content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
      Quisque iaculis, turpis a auctor aliquet, ante ipsum accumsan mauris, in dictum velit nibh in dolor. I
      n hac habitasse platea dictumst. Donec et nisl faucibus tellus condimentum semper eget sed dui.
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
      Quisque iaculis, turpis a auctor aliquet, ante ipsum accumsan mauris, in dictum velit nibh in dolor. I
      n hac habitasse platea dictumst. Donec et nisl faucibus tellus condimentum semper eget sed dui.`,
    fullContent: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
      Quisque iaculis, turpis a auctor aliquet, ante ipsum accumsan mauris, in dictum velit nibh in dolor. I
      n hac habitasse platea dictumst. Donec et nisl faucibus tellus condimentum semper eget sed dui.
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
      Quisque iaculis, turpis a auctor aliquet, ante ipsum accumsan mauris, in dictum velit nibh in dolor. I
      n hac habitasse platea dictumst. Donec et nisl faucibus tellus condimentum semper eget sed dui.
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
      Quisque iaculis, turpis a auctor aliquet, ante ipsum accumsan mauris, in dictum velit nibh in dolor. I
      n hac habitasse platea dictumst. Donec et nisl faucibus tellus condimentum semper eget sed dui.
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
      Quisque iaculis, turpis a auctor aliquet, ante ipsum accumsan mauris, in dictum velit nibh in dolor. I
      n hac habitasse platea dictumst. Donec et nisl faucibus tellus condimentum semper eget sed dui.
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
      Quisque iaculis, turpis a auctor aliquet, ante ipsum accumsan mauris, in dictum velit nibh in dolor. I
      n hac habitasse platea dictumst. Donec et nisl faucibus tellus condimentum semper eget sed dui.
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
      Quisque iaculis, turpis a auctor aliquet, ante ipsum accumsan mauris, in dictum velit nibh in dolor. I
      n hac habitasse platea dictumst. Donec et nisl faucibus tellus condimentum semper eget sed dui.
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
      Quisque iaculis, turpis a auctor aliquet, ante ipsum accumsan mauris, in dictum velit nibh in dolor. I
      n hac habitasse platea dictumst. Donec et nisl faucibus tellus condimentum semper eget sed dui.
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
      Quisque iaculis, turpis a auctor aliquet, ante ipsum accumsan mauris, in dictum velit nibh in dolor. I
      n hac habitasse platea dictumst. Donec et nisl faucibus tellus condimentum semper eget sed dui.`,
    contentPhoto: travel,
    date: 'Created at 13:12:31 on April 16, 2021',
    comments: [
      {
        id: 'k1w',
        author: 'Konrad Wallenrod',
        profileIcon: photo,
        content: `Great post!`,
        date: 'Created at 11:23:31 on April 17, 2021',
      },
      {
        id: 'm2j',
        author: 'Michał Janiec',
        profileIcon: blogAuthorPhoto,
        content: `Thank you Konrad for your opinion :)`,
        date: 'Created at 01:23:31 on April 19, 2021',
      },
    ],
  },
  {
    id: '2',
    author: 'Michał Janiec',
    profileIcon: blogAuthorPhoto,
    title: 'My new car!',
    content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
      Quisque iaculis, turpis a auctor aliquet, ante ipsum accumsan mauris, in dictum velit nibh in dolor. I
      n hac habitasse platea dictumst. Donec et nisl faucibus tellus condimentum semper eget sed dui.
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
      Quisque iaculis, turpis a auctor aliquet, ante ipsum accumsan mauris, in dictum velit nibh in dolor. I
      n hac habitasse platea dictumst. Donec et nisl faucibus tellus condimentum semper eget sed dui.`,
    date: 'Created at 10:12:31 on April 11, 2021',
    fullContent: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
      Quisque iaculis, turpis a auctor aliquet, ante ipsum accumsan mauris, in dictum velit nibh in dolor. I
      n hac habitasse platea dictumst. Donec et nisl faucibus tellus condimentum semper eget sed dui.
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
      Quisque iaculis, turpis a auctor aliquet, ante ipsum accumsan mauris, in dictum velit nibh in dolor. I
      n hac habitasse platea dictumst. Donec et nisl faucibus tellus condimentum semper eget sed dui.
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
      Quisque iaculis, turpis a auctor aliquet, ante ipsum accumsan mauris, in dictum velit nibh in dolor. I
      n hac habitasse platea dictumst. Donec et nisl faucibus tellus condimentum semper eget sed dui.
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
      Quisque iaculis, turpis a auctor aliquet, ante ipsum accumsan mauris, in dictum velit nibh in dolor. I
      n hac habitasse platea dictumst. Donec et nisl faucibus tellus condimentum semper eget sed dui.
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
      Quisque iaculis, turpis a auctor aliquet, ante ipsum accumsan mauris, in dictum velit nibh in dolor. I
      n hac habitasse platea dictumst. Donec et nisl faucibus tellus condimentum semper eget sed dui.
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
      Quisque iaculis, turpis a auctor aliquet, ante ipsum accumsan mauris, in dictum velit nibh in dolor. I
      n hac habitasse platea dictumst. Donec et nisl faucibus tellus condimentum semper eget sed dui.
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
      Quisque iaculis, turpis a auctor aliquet, ante ipsum accumsan mauris, in dictum velit nibh in dolor. I
      n hac habitasse platea dictumst. Donec et nisl faucibus tellus condimentum semper eget sed dui.
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
      Quisque iaculis, turpis a auctor aliquet, ante ipsum accumsan mauris, in dictum velit nibh in dolor. I
      n hac habitasse platea dictumst. Donec et nisl faucibus tellus condimentum semper eget sed dui.`,
    contentPhoto: car,
    comments: [
      {
        id: 'kw1',
        author: 'Konrad Wallenrod',
        profileIcon: photo,
        content: `Great post!`,
        date: 'Created at 11:23:31 on April 12, 2021',
      },
      {
        id: 'cn2',
        author: 'Chuck Norris',
        profileIcon: photo,
        content: `I like reading your posts. Give us more..`,
        date: 'Created at 11:23:31 on April 13, 2021',
      },
      {
        id: 'bl3',
        author: 'Bruce Lee',
        profileIcon: photo,
        content: `Great post!`,
        date: 'Created at 15:23:31 on April 13, 2021',
      },
      {
        id: 'asa4',
        author: 'Aragorn',
        profileIcon: photo,
        content: `I like reading your posts. Give us more..`,
        date: 'Created at 07:23:31 on April 14, 2021',
      },
    ],
  },
  {
    id: '3',
    author: 'Michał Janiec',
    profileIcon: blogAuthorPhoto,
    title: 'My new car!',
    content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
      Quisque iaculis, turpis a auctor aliquet, ante ipsum accumsan mauris, in dictum velit nibh in dolor. I
      n hac habitasse platea dictumst. Donec et nisl faucibus tellus condimentum semper eget sed dui.
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
      Quisque iaculis, turpis a auctor aliquet, ante ipsum accumsan mauris, in dictum velit nibh in dolor. I
      n hac habitasse platea dictumst. Donec et nisl faucibus tellus condimentum semper eget sed dui.`,
    date: 'Created at 10:12:31 on April 10, 2021',
    fullContent: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
      Quisque iaculis, turpis a auctor aliquet, ante ipsum accumsan mauris, in dictum velit nibh in dolor. I
      n hac habitasse platea dictumst. Donec et nisl faucibus tellus condimentum semper eget sed dui.
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
      Quisque iaculis, turpis a auctor aliquet, ante ipsum accumsan mauris, in dictum velit nibh in dolor. I
      n hac habitasse platea dictumst. Donec et nisl faucibus tellus condimentum semper eget sed dui.
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
      Quisque iaculis, turpis a auctor aliquet, ante ipsum accumsan mauris, in dictum velit nibh in dolor. I
      n hac habitasse platea dictumst. Donec et nisl faucibus tellus condimentum semper eget sed dui.
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
      Quisque iaculis, turpis a auctor aliquet, ante ipsum accumsan mauris, in dictum velit nibh in dolor. I
      n hac habitasse platea dictumst. Donec et nisl faucibus tellus condimentum semper eget sed dui.
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
      Quisque iaculis, turpis a auctor aliquet, ante ipsum accumsan mauris, in dictum velit nibh in dolor. I
      n hac habitasse platea dictumst. Donec et nisl faucibus tellus condimentum semper eget sed dui.
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
      Quisque iaculis, turpis a auctor aliquet, ante ipsum accumsan mauris, in dictum velit nibh in dolor. I
      n hac habitasse platea dictumst. Donec et nisl faucibus tellus condimentum semper eget sed dui.
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
      Quisque iaculis, turpis a auctor aliquet, ante ipsum accumsan mauris, in dictum velit nibh in dolor. I
      n hac habitasse platea dictumst. Donec et nisl faucibus tellus condimentum semper eget sed dui.
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
      Quisque iaculis, turpis a auctor aliquet, ante ipsum accumsan mauris, in dictum velit nibh in dolor. I
      n hac habitasse platea dictumst. Donec et nisl faucibus tellus condimentum semper eget sed dui.`,
    contentPhoto: car,
    comments: [
      {
        id: 'kw1',
        author: 'Konrad Wallenrod',
        profileIcon: photo,
        content: `Great post!`,
        date: 'Created at 11:23:31 on April 12, 2021',
      },
      {
        id: 'cn2',
        author: 'Chuck Norris',
        profileIcon: photo,
        content: `I like reading your posts. Give us more..`,
        date: 'Created at 11:23:31 on April 13, 2021',
      },
      {
        id: 'bl3',
        author: 'Bruce Lee',
        profileIcon: photo,
        content: `Great post!`,
        date: 'Created at 15:23:31 on April 13, 2021',
      },
      {
        id: 'asa4',
        author: 'Aragorn',
        profileIcon: photo,
        content: `I like reading your posts. Give us more..`,
        date: 'Created at 07:23:31 on April 14, 2021',
      },
    ],
  },
  {
    id: '3',
    author: 'Michał Janiec',
    profileIcon: blogAuthorPhoto,
    title: 'My new car!',
    content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
      Quisque iaculis, turpis a auctor aliquet, ante ipsum accumsan mauris, in dictum velit nibh in dolor. I
      n hac habitasse platea dictumst. Donec et nisl faucibus tellus condimentum semper eget sed dui.
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
      Quisque iaculis, turpis a auctor aliquet, ante ipsum accumsan mauris, in dictum velit nibh in dolor. I
      n hac habitasse platea dictumst. Donec et nisl faucibus tellus condimentum semper eget sed dui.`,
    date: 'Created at 10:12:31 on April 8, 2021',
    fullContent: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
      Quisque iaculis, turpis a auctor aliquet, ante ipsum accumsan mauris, in dictum velit nibh in dolor. I
      n hac habitasse platea dictumst. Donec et nisl faucibus tellus condimentum semper eget sed dui.
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
      Quisque iaculis, turpis a auctor aliquet, ante ipsum accumsan mauris, in dictum velit nibh in dolor. I
      n hac habitasse platea dictumst. Donec et nisl faucibus tellus condimentum semper eget sed dui.
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
      Quisque iaculis, turpis a auctor aliquet, ante ipsum accumsan mauris, in dictum velit nibh in dolor. I
      n hac habitasse platea dictumst. Donec et nisl faucibus tellus condimentum semper eget sed dui.
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
      Quisque iaculis, turpis a auctor aliquet, ante ipsum accumsan mauris, in dictum velit nibh in dolor. I
      n hac habitasse platea dictumst. Donec et nisl faucibus tellus condimentum semper eget sed dui.
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
      Quisque iaculis, turpis a auctor aliquet, ante ipsum accumsan mauris, in dictum velit nibh in dolor. I
      n hac habitasse platea dictumst. Donec et nisl faucibus tellus condimentum semper eget sed dui.
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
      Quisque iaculis, turpis a auctor aliquet, ante ipsum accumsan mauris, in dictum velit nibh in dolor. I
      n hac habitasse platea dictumst. Donec et nisl faucibus tellus condimentum semper eget sed dui.
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
      Quisque iaculis, turpis a auctor aliquet, ante ipsum accumsan mauris, in dictum velit nibh in dolor. I
      n hac habitasse platea dictumst. Donec et nisl faucibus tellus condimentum semper eget sed dui.
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
      Quisque iaculis, turpis a auctor aliquet, ante ipsum accumsan mauris, in dictum velit nibh in dolor. I
      n hac habitasse platea dictumst. Donec et nisl faucibus tellus condimentum semper eget sed dui.`,
    contentPhoto: car,
    comments: [
      {
        id: 'kw1',
        author: 'Konrad Wallenrod',
        profileIcon: photo,
        content: `Great post!`,
        date: 'Created at 11:23:31 on April 12, 2021',
      },
      {
        id: 'cn2',
        author: 'Chuck Norris',
        profileIcon: photo,
        content: `I like reading your posts. Give us more..`,
        date: 'Created at 11:23:31 on April 13, 2021',
      },
      {
        id: 'bl3',
        author: 'Bruce Lee',
        profileIcon: photo,
        content: `Great post!`,
        date: 'Created at 15:23:31 on April 13, 2021',
      },
      {
        id: 'asa4',
        author: 'Aragorn',
        profileIcon: photo,
        content: `I like reading your posts. Give us more..`,
        date: 'Created at 07:23:31 on April 14, 2021',
      },
    ],
  },
  {
    id: '4',
    author: 'Michał Janiec',
    profileIcon: blogAuthorPhoto,
    title: 'My new car!',
    content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
      Quisque iaculis, turpis a auctor aliquet, ante ipsum accumsan mauris, in dictum velit nibh in dolor. I
      n hac habitasse platea dictumst. Donec et nisl faucibus tellus condimentum semper eget sed dui.
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
      Quisque iaculis, turpis a auctor aliquet, ante ipsum accumsan mauris, in dictum velit nibh in dolor. I
      n hac habitasse platea dictumst. Donec et nisl faucibus tellus condimentum semper eget sed dui.`,
    date: 'Created at 10:12:31 on April 1, 2021',
    fullContent: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
      Quisque iaculis, turpis a auctor aliquet, ante ipsum accumsan mauris, in dictum velit nibh in dolor. I
      n hac habitasse platea dictumst. Donec et nisl faucibus tellus condimentum semper eget sed dui.
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
      Quisque iaculis, turpis a auctor aliquet, ante ipsum accumsan mauris, in dictum velit nibh in dolor. I
      n hac habitasse platea dictumst. Donec et nisl faucibus tellus condimentum semper eget sed dui.
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
      Quisque iaculis, turpis a auctor aliquet, ante ipsum accumsan mauris, in dictum velit nibh in dolor. I
      n hac habitasse platea dictumst. Donec et nisl faucibus tellus condimentum semper eget sed dui.
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
      Quisque iaculis, turpis a auctor aliquet, ante ipsum accumsan mauris, in dictum velit nibh in dolor. I
      n hac habitasse platea dictumst. Donec et nisl faucibus tellus condimentum semper eget sed dui.
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
      Quisque iaculis, turpis a auctor aliquet, ante ipsum accumsan mauris, in dictum velit nibh in dolor. I
      n hac habitasse platea dictumst. Donec et nisl faucibus tellus condimentum semper eget sed dui.
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
      Quisque iaculis, turpis a auctor aliquet, ante ipsum accumsan mauris, in dictum velit nibh in dolor. I
      n hac habitasse platea dictumst. Donec et nisl faucibus tellus condimentum semper eget sed dui.
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
      Quisque iaculis, turpis a auctor aliquet, ante ipsum accumsan mauris, in dictum velit nibh in dolor. I
      n hac habitasse platea dictumst. Donec et nisl faucibus tellus condimentum semper eget sed dui.
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
      Quisque iaculis, turpis a auctor aliquet, ante ipsum accumsan mauris, in dictum velit nibh in dolor. I
      n hac habitasse platea dictumst. Donec et nisl faucibus tellus condimentum semper eget sed dui.`,
    contentPhoto: car,
    comments: [
      {
        id: 'kw1',
        author: 'Konrad Wallenrod',
        profileIcon: photo,
        content: `Great post!`,
        date: 'Created at 11:23:31 on April 12, 2021',
      },
      {
        id: 'cn2',
        author: 'Chuck Norris',
        profileIcon: photo,
        content: `I like reading your posts. Give us more..`,
        date: 'Created at 11:23:31 on April 13, 2021',
      },
      {
        id: 'bl3',
        author: 'Bruce Lee',
        profileIcon: photo,
        content: `Great post!`,
        date: 'Created at 15:23:31 on April 13, 2021',
      },
      {
        id: 'asa4',
        author: 'Aragorn',
        profileIcon: photo,
        content: `I like reading your posts. Give us more..`,
        date: 'Created at 07:23:31 on April 14, 2021',
      },
    ],
  },
];
