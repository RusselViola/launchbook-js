// Exercise: Find the top navbar by query for the element type, which is <nav>.
  document.getElementsByTagName('nav');
// Exercise: Find the sidebar on the right by using it's id.
  document.getElementById('sidebar-right');
// Exercise: Find the "Pages" and "Groups" sections of the sidebar by using their class.
  document.getElementByClass('pages');
  document.getElementByClass('groups');
// Exercise: Find all of the comments on the page.
  document.getElementByClass('comments');
// Exercise: Find the first comment on the page.
  document.getElementsByClassName('comments')[0];
// Exercise: Find the last comment on the page.
  comments = document.getElementsByClassName('comments')[document.getElementsByClassName('comments');
  comments[comments.length -1];
// Exercise: Find the fourth comment on the page.
  document.getElementsByClassName('panel')[3];
// Exercise: Find one of the ads in the sidebar and hide them.
  document.getElementsByClassName('ad-slot')[0].style.display = 'none';
// Exercise: Set the visibility to the form that you hid in the previous step to make it visible again.
  document.getElementsByClassName('ad-slot')[0].style.display = 'block';
// Exercise: Use setAttribute to change src attribute of one of the ads in the sidebar.
  adOne = document.getElementsByClassName('ad-slot')[0];
  adPicture = adOne.getElementsByTagName('img');
  adPicture[0].setAttribute('src','src = http://vignette4.wikia.nocookie.net/rickandmorty/images/3/37/Mr_poopy_butthole.png/revision/latest/scale-to-width-down/164?cb=20150819161234');
// Exercise: Find Sam's post and change it's text to something incredible.
  var posts = document.getElementsByClassName('post media');
  var samPost = posts[3];
  var text = samPost.getElementsByTagName('p')[0];
  text.innerText = 'something incredible';
// Exercise: Find the first post and add the .post-liked class to it.
  var posts = document.getElementsByClassName('post media');
  posts[0].className = posts[0].className + (' post-liked');
// Exercise: Find the second post and remove the .post-liked class.
  var posts = document.getElementsByClassName('post media');
  posts[1].classList.remove('post-liked');
