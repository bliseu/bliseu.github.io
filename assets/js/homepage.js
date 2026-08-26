(function () {
  var root = document.documentElement;
  var btn = document.getElementById('themeToggle');
  if (!btn) return;
  btn.addEventListener('click', function () {
    var next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    root.setAttribute('data-theme', next);
    try { localStorage.setItem('home-theme', next); } catch (e) {}
  });
})();

(function () {
  var heading = document.getElementById('-publications');
  if (!heading) return;

  var items = [];
  var node = heading.nextElementSibling;
  while (node) {
    if (node.tagName === 'H1') break;
    if (node.tagName === 'OL') {
      for (var i = 0; i < node.children.length; i++) {
        if (node.children[i].tagName === 'LI') items.push(node.children[i]);
      }
    }
    node = node.nextElementSibling;
  }

  var total = items.length;
  for (var j = 0; j < items.length; j++) {
    var marker = document.createElement('span');
    marker.className = 'publication-total';
    marker.textContent = '（总第 ' + (total - j) + ' 篇）';
    items[j].appendChild(marker);
  }
})();
