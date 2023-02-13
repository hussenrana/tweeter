const Renderer = function () {
  const renderPosts = function (posts) {
    $("#posts").empty();
    let count = 1;
    for (relevantPost of posts) {
      $("#posts").append(`<div class='post' data-id=${relevantPost.id}>
                <div class='post-text'>${relevantPost.text}</div>
                <div id='cmnt-${count}' class='comments'></div>
                <input class="commentinput" placeholder="Add Comment"></input>
                <button class="AddBotton">Comment</button>
                <button class="delete">Delete Post</button>
               
            </div>`);
      for (let comment of relevantPost.comments) {
        $(`[data-id=${relevantPost.id}]>.comments`).append(
          `<div data-id=${comment.id}>${comment.text}<span class="delete-comment">X</span></div>`
        );
      }
      count++;
    }
  };
  return { renderPosts };
};
