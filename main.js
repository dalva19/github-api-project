var face = [{
  author: 'Sebastian Markbåge',
  avatarURL: 'https://avatars.githubusercontent.com/u/63648?v=4'
}];

var renderFaces = function () {
  $('.faces').empty(); 

  for (let i = 0; i < face.length; i++) {
    var source = $('#faces-template').html();
    var template = Handlebars.compile(source);
    var newHTML = template(face[i]); 
    $('.faces').append(newHTML);
  };
};

renderFaces();