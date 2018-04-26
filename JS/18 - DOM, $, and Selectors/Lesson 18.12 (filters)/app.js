/*
For this quiz, use articleList and DOM navigation methods to collect articleList's
sibling <h1> (var h1), children (var kids), and parent <div>s (var parents).

You must use articleList to navigate to the element(s)!
*/

// Start with these variable!
var articleList, h1, kids, parents;

var articleList = $('.article-list');

var h1 = articleList.siblings('h1');
var kids = articleList.children()
var parents = articleList.parents();

console.log(articleList);
console.log(h1);
console.log(kids);
console.log(parents);
