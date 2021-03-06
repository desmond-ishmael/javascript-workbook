'use strict';

$(document).ready(function() {
  $.ajax('https://api.github.com/users/desmond-ishmael/gists', {
    success: function(posts) {
      posts.forEach(function(post) {
        if (post.description.startsWith('#post')) {
          var strPostDescription = post.description.slice(5);
          var $post = $('<li><a href="#" data-url="' + post.url + '" data-comments="' + post.comments_url + '">' + strPostDescription + '</a></li>');
          $('#posts').append($post);
        };
      })
      $('body').on('click', 'a', function(event) {
        event.preventDefault();
        $.ajax($(this).data('url'), {
          success: function(post) {
            var postContent = post.files['post.md'].content;
            $('#post').empty().append(marked(postContent))
          }
        });
        $.ajax($(this).data('comments'), {
          success: function(comments) {
            $('#comments').empty();
            comments.forEach(function(comment) {
              var date = new Date(comment.created_at)
              var subdate = (date.toLocaleDateString() + ' ' + date.toLocaleTimeString() );
              var $comment = $('<div class= comment-entry>' + '<div>' + comment.user.login + '</div>' +
              '<div>' + comment.body + '</div>' +
              '<div>' + subdate + '</div>' + '</div>');
              $('#comments').append($comment);
            })
          }
        })
      });
    }
  });
});
