import { posts as data } from "../data/posts";

//private
let posts = [...data];

export function getPosts() {
  return posts;
}

export function getPostsByUser(userId) {
  return posts.filter(post => post.userId === userId);
}

function getPostById(id) {
  return posts.find(post => post.id === id);
}

function addPost(post) {
  const newPost = { id: generateId(posts), ...post };
  posts.unshift(newPost);
}

function updatePostTitle(id, title) {
  const post = getPostById(id);
  if (post) {
    post.title = title;
  }
}

function updatePostBody(id, body) {
  const post = getPostById(id);
  if (post) {
    post.body = body;
  }
}

function updatePost(id, updatedPost) {
  const post = getPostById(id);
  if (post) {
    Object.assign(post, updatedPost);
  }
}

function deletePostBy(id) {
  posts = posts.filter(post => post.id !== id);
}

function deletePostsByUserId(userId) {
  posts = posts.filter(post => post.userId !== userId);
}

export { getPosts, getPostsByUser, getPostById, addPost, updatePostTitle, updatePostBody, updatePost, deletePostBy, deletePostsByUserId };