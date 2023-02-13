const Tweeter = function () {
  const _posts = [
    {
      text: "First post!",
      id: "p1",
      comments: [
        { id: "c1", text: "First comment on first post!" },
        { id: "c2", text: "Second comment on first post!!" },
        { id: "c3", text: "Third comment on first post!!!" },
      ],
    },
    {
      text: "Aw man, I wanted to be first",
      id: "p2",
      comments: [
        {
          id: "c4",
          text: "Don't wory second poster, you'll be first one day.",
        },
        { id: "c5", text: "Yeah, believe in yourself!" },
        { id: "c6", text: "Haha second place what a joke." },
      ],
    },
  ];
  let postIdCounter = 2;
  let commentIdCounter = 6;
  const getPosts = () => _posts;
  const addPost = function (text) {
    postIdCounter += 1;
    const post = { text: text, id: "P" + postIdCounter, comments: [] };
    _posts.push(post);
  };
  const removePost = function (postID) {
    let index = 0;
    for (currentpost of _posts) {
      if (postID == currentpost.id) {
        _posts.splice(index, 1);
      }
      index++;
    }
  };
  const addComment = function (postID, text) {
    commentIdCounter += 1;
    let comment = { id: "c" + commentIdCounter, text: text };
    for (currentpost of _posts) {
      if (postID == currentpost.id) {
        currentpost.comments.push(comment);
      }
    }
  };
  const removeComment = function (postID, commentID) {
    let index = 0;
    for (currentpost of _posts) {
      if (postID == currentpost.id) {
        for (comment of currentpost.comments) {
          if (commentID == comment.id) {
            currentpost.comments.splice(index, 1);
          }
          index += 1;
        }
      }
    }
  };
  return {
    getPosts: getPosts,
    addPost: addPost,
    addComment: addComment,
    removeComment: removeComment,
    removePost: removePost,
  };
};
