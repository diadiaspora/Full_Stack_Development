const likeButtonElement = document.querySelector("#like-button");``

console.dir(likeButtonElement);

const commentButtonElement = document.querySelector("#comment-button");

console.dir(commentButtonElement);

const commentListElement = document.querySelector("ul");
console.dir(commentListElement);

const inputElement = document.querySelector("input");
console.dir(inputElement);

const dislikeButtonElement = document.querySelector("#dislike-button");
console.dir(dislikeButtonElement);

const bodyElement = document.querySelector("body");
const divElement = document.querySelector("div");

bodyElement.addEventListener("click", () => {
  console.log("body");
});

divElement.addEventListener("click", () => {
  console.log("div");
});

let likesCount = 0;

let dislikesCount = 0;

const handleReaction = (event) => {
console.log(event.target.id);

    if (event.target.id === 'like-button') {
         likesCount = likesCount + 1;
         likeButtonElement.textContent = `${likesCount} likes. like this post!`;
    } else {
        dislikesCount = dislikesCount + 1;
      dislikeButtonElement.textContent =
        `${dislikesCount} dislike(s). Dislike this post!`;
    }
 
   
    console.log(likesCount);
    console.log(dislikesCount);
};

divElement.addEventListener("click", handleReaction);

// likeButtonElement.addEventListener("click", handleReaction);

// dislikeButtonElement.addEventListener("click", handleReaction);




// ___________________________




commentButtonElement.addEventListener("click", () => {
      if (inputElement.value === "") {
        return;
      }
  
  const commentElement = document.createElement("li");
    commentElement.textContent = inputElement.value;
    
  
  commentListElement.appendChild(commentElement);


  inputElement.value = "";
});
