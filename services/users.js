import { users as data } from "../data/users";

//private
let users = [...data];

export function getAllUsers() {
  return users;
}

export function getUserById(id) {
  return users.find(user => user.id === id);
}

export function updateUser(id, userInfo) {
  const userIndex = users.findIndex(user => user.id === id);
  if (userIndex !== -1) {
    users[userIndex] = { ...users[userIndex], ...userInfo };
    return true;
  }
  return false;
}

export function addUser(userInfo) {
  const newUser = { id: generateId(users), ...userInfo };
  users.push(newUser);
}

// Utility function to generate unique ids
function generateId(dataArray) {
  return dataArray.length > 0 ? Math.max(...dataArray.map(item => item.id)) + 1 : 1;
}

export { getAllUsers, getUserById, updateUser, addUser };