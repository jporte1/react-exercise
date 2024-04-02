import { comments as data } from "../data/comments";

//private
let comments = [...data];

function getCommentById(id) {
  return comments.find(comment => comment.id === id);
}

function getCommentsByPostId(postId) {
  return comments.filter(comment => comment.postId === postId);
}

function updateCommentBody(id, body) {
  const commentIndex = comments.findIndex(comment => comment.id === id);
  if (commentIndex !== -1) {
    comments[commentIndex].body = body;
    return true;
  }
  return false;
}

function deleteCommentById(id) {
  comments = comments.filter(comment => comment.id !== id);
}

function addComment(comment) {
  const newComment = { id: generateId(comments), ...comment };
  comments.push(newComment);
}

export { getCommentById, getCommentsByPostId, updateCommentBody, deleteCommentById, addComment };