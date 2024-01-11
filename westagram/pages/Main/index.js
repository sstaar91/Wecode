const commentBox = document.getElementsByClassName("commentBox")[0];
const commentValue = document.getElementsByClassName("commentInput")[0];
const commentButton = document.getElementsByClassName("commentButton")[0];

const commentList = document.getElementsByClassName("commentList")[0];

const checkComment = () => {
  const commentValid = commentValue.value !== "";

  commentButton.disabled = !commentValid;
  commentButton.style.opacity = commentValid ? 1 : 0.5;
  commentButton.style.cursor = commentValid ? "pointer" : "not-allowed";
};

const makeComment = () => {
  const commentBox = document.createElement("div");
  const commentUser = document.createElement("span");
  const comment = document.createElement("span");

  commentBox.classList.add("comment");
  commentUser.innerText = `user ${commentList.children.length + 1}`;
  comment.innerText = commentValue.value;

  commentBox.appendChild(commentUser);
  commentBox.appendChild(comment);
  commentList.appendChild(commentBox);
};

const submitComment = (e) => {
  e.preventDefault();

  makeComment();
  commentValue.value = "";
};

commentValue.addEventListener("input", checkComment);
commentBox.addEventListener("submit", submitComment);
