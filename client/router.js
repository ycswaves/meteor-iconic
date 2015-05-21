Router.configure({
  layoutTemplate: 'layout'
});


Router.map(function() {
  this.route('index', {path: '/'});
  this.route('actionSheet');
  //this.route('sideMenu');
});
