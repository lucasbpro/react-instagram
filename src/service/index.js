// URLs
const API_USERS = "https://5e7d0266a917d70016684219.mockapi.io/api/v1/users";
const API_STORIES = "https://5e7d0266a917d70016684219.mockapi.io/api/v1/stories";

// GET USERS
export async function getUsers() {
  const response = await fetch(API_USERS);
  const users = await response.json();
  return users;
}

// GET USERS/:ID
export async function getUserById(userId) {
  const response = await fetch(`${API_USERS}/${userId}`);
  const data = await response.json();
  return data;
}

// GET USERS?search=USERNAME
export async function getUserByUsername(username){
  const response = await fetch(`${API_USERS}?search=${username}`);
  const data = await response.json();
  return data;
}

// GET STORIES
export async function getStories() {
    const response = await fetch(API_STORIES);
    const users = await response.json();
    return users;
  }
  
// GET STORIES/:ID
export async function getStoryById(storyID) {
    const response = await fetch(`${API_STORIES}/${storyID}`);
    const data = await response.json();
    return data;
}

// GET POSTS
export async function getPosts(userIds){
    let response;
    let posts = []; 
    //console.log(userIds);
    for(let i=0; i<userIds.length ; i++){
        response = await fetch(`${API_USERS}/${userIds[i]}/posts`);
        posts = [...posts, ...await response.json()];
    }

    return posts;
}

// POST USERS
export async function addUser(userInfo) {

    const params = { method: 'POST',
                     headers: {'Content-Type': 'application/json'},
                     body: userInfo
                };

    const response = await fetch(API_USERS, params);
    const data = await response.json();
    return data;
}