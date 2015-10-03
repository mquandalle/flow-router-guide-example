FlowRouter.route('/', {
  name: 'home',
  action: function() {
    BlazeLayout.render("mainLayout", {content: "blogHome"});
  }
});

FlowRouter.route('/:postId', {
  name: 'post',
  action: function() {
    BlazeLayout.render("mainLayout", {content: "blogPost"});
  }
});
