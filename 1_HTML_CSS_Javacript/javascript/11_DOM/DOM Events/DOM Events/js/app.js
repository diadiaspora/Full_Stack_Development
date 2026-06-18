const likeButtonElement = document.querySelector("#like-button");

console.dir(likeButtonElement);

const commentButtonElement = document.querySelector("#comment-button");

console.dir(commentButtonElement);

const commentListElement = document.querySelector("ul");
console.dir(commentListElement);

const inputElement = document.querySelector("input");
console.dir(inputElement);

const dislikeButtonElement = document.querySelector("#dislike-button");
console.dir(dislikeButtonElement);

let likesCount = 0;

let dislikesCount = 0;

const handleReaction = (event) => {
    if (event.target.id === 'like-button') {
         likesCount = likesCount + 1;
         likeButtonElement.textContent = `${likesCount} likes. like this post!`;
    } else {
        dislikesCount = dislikesCount + 1;
        dislikeButtonElement.textContent = `${dislikesCount} dislike(s). Dislike this post!`;
    }
 
   
    console.log(likesCount);
    console.log(dislikesCount);
};

likeButtonElement.addEventListener("click", handleReaction);

dislikeButtonElement.addEventListener("click", handleReaction);




// ___________________________




commentButtonElement.addEventListener("click", () => {
      if (inputElement.value === "") {
        return;
      }
  //   console.log("I work!");
  const commentElement = document.createElement("li");
    commentElement.textContent = inputElement.value;
    
  // console.log(commentElement);
  commentListElement.appendChild(commentElement);


  inputElement.value = "";
});
