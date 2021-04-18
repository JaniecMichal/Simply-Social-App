export const toHomePage = () => '/allPosts';
export const toAddPage = () => '/addPost';
export const toPostPage = ({ id } = { id: ':id' }) => `/post/${id}`;
export const toEditPage = ({ id } = { id: ':id' }) => `/edit/${id}`;
export const toAuthorPage = () => '/about';
