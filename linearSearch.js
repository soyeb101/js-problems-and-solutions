// Linear search algorithm

const users = [
  {
    username: "user1",
    email: "user1@example.com",
  },
  {
    username: "user2",
    email: "user2@example.com",
  },

  {
    username: "user3",
    email: "user3@example.com",
  },
];


function isUserExit(arr,val) {
    for(let i of arr) {
        if(i.username === val) {
            return true;
        }
    }
    return false;
}

const result = isUserExit(users,"exit");
console.log(result);

// Time complexity -> linear o(n)



