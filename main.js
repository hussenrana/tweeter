const tweeter = Tweeter();
const renderer = Renderer();

renderer.renderPosts(tweeter.getPosts());

const post = function () {
  tweeter.addPost($("#input").val());
  $("#input").val("");
  renderer.renderPosts(tweeter.getPosts());
};

$("#posts").on("click", ".delete", function () {
  let postId = $(this).closest(".post").data().id;
  tweeter.removePost(postId);
  renderer.renderPosts(tweeter.getPosts());
});

$("#posts").on("click", ".AddBotton", function () {
  let postId = $(this).closest(".post").data().id;
  let commentText = $(this).siblings(".commentinput").val();
  console.log(commentText);
  tweeter.addComment(postId, commentText);
  renderer.renderPosts(tweeter.getPosts());
});

$("#posts").on("click", ".delete-comment", function () {
  let commentText = $(this).closest("div").data().id;
  let postId = $(this).closest(".post").data().id;
  tweeter.removeComment(postId, commentText);
  renderer.renderPosts(tweeter.getPosts());
});
