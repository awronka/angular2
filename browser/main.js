
// var ajax = {};
// ajax.x = function() {
//     if (typeof XMLHttpRequest !== 'undefined') {
//         return new XMLHttpRequest(); 
//     }
//     var versions = [
//         "MSXML2.XmlHttp.6.0",
//         "MSXML2.XmlHttp.5.0",  
//         "MSXML2.XmlHttp.4.0", 
//         "MSXML2.XmlHttp.3.0",  
//         "MSXML2.XmlHttp.2.0", 
//         "Microsoft.XmlHttp"
//     ];

//     var xhr;
//     for(var i = 0; i < versions.length; i++) { 
//         try { 
//             xhr = new ActiveXObject(versions[i]); 
//             break; 
//         } catch (e) {
//         } 
//     }
//     return xhr;
// };

// ajax.send = function(url, callback, method, data, sync) {
//     var x = ajax.x();
//     x.open(method, url, sync);
//     x.onreadystatechange = function() {
//         if (x.readyState == 4) {
//             callback(x.responseText)
//         }
//     };
//     if (method == 'POST') {
//         x.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
//     }
//     x.send(data)
// };

// ajax.get = function(url, data, callback, sync) {
//     var query = [];
//     for (var key in data) {
//         query.push(encodeURIComponent(key) + '=' + encodeURIComponent(data[key]));
//     }
//     ajax.send(url + (query.length ? '?' + query.join('&') : ''), callback, 'GET', null, sync)
// };

// function getData(){
//    var artist = document.getElementById('artist').value;

//     ajax.get('/albums/'+ artist, {}, function(data) {
//         data = JSON.parse(data)
//         addDomElements(document.getElementById("album-list"),data)
//     });
// }

// function addDomElements(node,data){
//         while (node.firstChild) {
//                 node.removeChild(node.firstChild);
//             }

//         for(var i =0; i<data.results.length;i++){
//             var variable = document.createElement('div')
//                 variable.innerHTML = data.results[i].collectionName;
//                 node.appendChild(variable)
//         }
// }

// function activeState(trigger) {
//     console.log('hit')
//   var targetName = trigger.getAttribute('href').replace('#','');
//   var target = document.getElementById(targetName);

//   // don't mess with things if there is no target
//   if (!target) {
//     return;
//   }

//   if (trigger.classList.contains('active')) {
//     trigger.classList.remove('active');
//     target.classList.remove('active');
//   } else {
//     trigger.classList.add('active');
//     target.classList.add('active');
//   }
// };

document.addEventListener('DOMContentLoaded', function () {
  console.log('loaded');
  var trigger = document.getElementById('trigger');
  trigger.addEventListener('click', addClassToTarget);
  console.log(trigger);

  var anchor = document.getElementsByTagName('a')[0];
  console.log(anchor);

  anchor.addEventListener('click', function () {
    if (!target.classList.contains('red')) {
      target.classList.add('red');
      trigger.removeEventListener('click', addClassToTarget);
    } else target.classList.remove('red');
    event.stopImmediatePropagation();
  });

  var Nessy = document.querySelector('.monsters');
  var AllMonsters = document.querySelectorAll('.monsters');

  console.log(Nessy, AllMonsters);
  Nessy.addEventListener('click', function () {
    Nessy.innerHTML = '<li class="monster" style="color:red;">Nessy</li>';
  });

  AllMonsters[1].addEventListener('mouseover', function () {
    AllMonsters[1].textContent = "Godzilla";
  });
  AllMonsters[1].addEventListener('mouseout', function () {
    AllMonsters[1].textContent = 'Big Foot';
  });

  var div = document.createElement('div');
  div.setAttribute('style', 'color:blue;');
  div.textContent = 'Homer';
  AllMonsters[2].appendChild(div);

  target.addEventListener('click', function () {
    var list = document.getElementsByTagName('ul')[0];
    console.log(list);
    console.log(list.children);
    console.log(list.lastChild);
    list.removeChild(list.lastChild);

    console.log(trigger.nextElementSibling);
    console.log(trigger.nextSibling);
    console.log(trigger.nextSibling.nextSibling);
  });
});

function addClassToTarget() {
  var target = document.querySelector('#target');
  console.log(target);
  target.classList.toggle('active');
  // event.preventDefault()
  // event.stopImmediatePropagation();
}
// console.log(document)
// var monster = document.querySelectorAll('.monsters')

// console.log('these are the monsters ' + monster[1].textContent)

// var trigger = document.getElementById('trigger');
// trigger.addEventListener('click', function(event) {
//   console.log('triggered')
//   // abort the link's default action.
//   event.preventDefault();
//   // event.stopImmediatePropagation();

//   activeState(this);
// }, false);

// function activeState(trigger) {
//   console.log('hit')
//   var targetName = trigger.getAttribute('href').replace('#', '');
//   var target = document.getElementById(targetName);

//   if (!target) {
//     return;
//   }

//   // trigger.classList.toggle('active');
//   target.classList.toggle('active');
// }

// function turnRed(){
//   console.log( 'hit red')
//   var targetName = document.getElementById("target")
//       targetName.classList.toggle('red')
//       console.log(event)
//       event.stopImmediatePropagation()
// }

// var monst = document.getElementsByTagName('li')
// console.log(monst)
// monst[0].setAttribute('style', 'color:red;')
// // monst[2].style('color:red')
// console.log(monst[0].getStyles)
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZhbmlsbGEvdmFuaWxsYS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBbUJBLFFBQUEsQ0FBQSxnQkFBQSxDQUFBLGtCQUFBLEVBQUEsWUFBQTtBQUNBLFNBQUEsQ0FBQSxHQUFBLENBQUEsUUFBQSxDQUFBLENBQUE7QUFDQSxNQUFBLE9BQUEsR0FBQSxRQUFBLENBQUEsY0FBQSxDQUFBLFNBQUEsQ0FBQSxDQUFBO0FBQ0EsU0FBQSxDQUFBLGdCQUFBLENBQUEsT0FBQSxFQUFBLGdCQUFBLENBQUEsQ0FBQTtBQUNBLFNBQUEsQ0FBQSxHQUFBLENBQUEsT0FBQSxDQUFBLENBQUE7O0FBRUEsTUFBQSxNQUFBLEdBQUEsUUFBQSxDQUFBLG9CQUFBLENBQUEsR0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUE7QUFDQSxTQUFBLENBQUEsR0FBQSxDQUFBLE1BQUEsQ0FBQSxDQUFBOztBQUVBLFFBQUEsQ0FBQSxnQkFBQSxDQUFBLE9BQUEsRUFBQSxZQUFBO0FBQ0EsUUFBQSxDQUFBLE1BQUEsQ0FBQSxTQUFBLENBQUEsUUFBQSxDQUFBLEtBQUEsQ0FBQSxFQUFBO0FBQ0EsWUFBQSxDQUFBLFNBQUEsQ0FBQSxHQUFBLENBQUEsS0FBQSxDQUFBLENBQUE7QUFDQSxhQUFBLENBQUEsbUJBQUEsQ0FBQSxPQUFBLEVBQUEsZ0JBQUEsQ0FBQSxDQUFBO0tBQ0EsTUFDQSxBQUNBLE1BQUEsQ0FBQSxTQUFBLENBQUEsTUFBQSxDQUFBLEtBQUEsQ0FBQSxDQUNBO0FBQ0EsU0FBQSxDQUFBLHdCQUFBLEVBQUEsQ0FBQTtHQUNBLENBQUEsQ0FBQTs7QUFFQSxNQUFBLEtBQUEsR0FBQSxRQUFBLENBQUEsYUFBQSxDQUFBLFdBQUEsQ0FBQSxDQUFBO0FBQ0EsTUFBQSxXQUFBLEdBQUEsUUFBQSxDQUFBLGdCQUFBLENBQUEsV0FBQSxDQUFBLENBQUE7O0FBRUEsU0FBQSxDQUFBLEdBQUEsQ0FBQSxLQUFBLEVBQUEsV0FBQSxDQUFBLENBQUE7QUFDQSxPQUFBLENBQUEsZ0JBQUEsQ0FBQSxPQUFBLEVBQUEsWUFBQTtBQUNBLFNBQUEsQ0FBQSxTQUFBLEdBQUEsbURBQUEsQ0FBQTtHQUVBLENBQUEsQ0FBQTs7QUFFQSxhQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsZ0JBQUEsQ0FBQSxXQUFBLEVBQUEsWUFBQTtBQUNBLGVBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxXQUFBLEdBQUEsVUFBQSxDQUFBO0dBQ0EsQ0FBQSxDQUFBO0FBQ0EsYUFBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLGdCQUFBLENBQUEsVUFBQSxFQUFBLFlBQUE7QUFDQSxlQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsV0FBQSxHQUFBLFVBQUEsQ0FBQTtHQUNBLENBQUEsQ0FBQTs7QUFHQSxNQUFBLEdBQUEsR0FBQSxRQUFBLENBQUEsYUFBQSxDQUFBLEtBQUEsQ0FBQSxDQUFBO0FBQ0EsS0FBQSxDQUFBLFlBQUEsQ0FBQSxPQUFBLEVBQUEsYUFBQSxDQUFBLENBQUE7QUFDQSxLQUFBLENBQUEsV0FBQSxHQUFBLE9BQUEsQ0FBQTtBQUNBLGFBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxXQUFBLENBQUEsR0FBQSxDQUFBLENBQUE7O0FBRUEsUUFBQSxDQUFBLGdCQUFBLENBQUEsT0FBQSxFQUFBLFlBQUE7QUFDQSxRQUFBLElBQUEsR0FBQSxRQUFBLENBQUEsb0JBQUEsQ0FBQSxJQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQTtBQUNBLFdBQUEsQ0FBQSxHQUFBLENBQUEsSUFBQSxDQUFBLENBQUE7QUFDQSxXQUFBLENBQUEsR0FBQSxDQUFBLElBQUEsQ0FBQSxRQUFBLENBQUEsQ0FBQTtBQUNBLFdBQUEsQ0FBQSxHQUFBLENBQUEsSUFBQSxDQUFBLFNBQUEsQ0FBQSxDQUFBO0FBQ0EsUUFBQSxDQUFBLFdBQUEsQ0FBQSxJQUFBLENBQUEsU0FBQSxDQUFBLENBQUE7O0FBR0EsV0FBQSxDQUFBLEdBQUEsQ0FBQSxPQUFBLENBQUEsa0JBQUEsQ0FBQSxDQUFBO0FBQ0EsV0FBQSxDQUFBLEdBQUEsQ0FBQSxPQUFBLENBQUEsV0FBQSxDQUFBLENBQUE7QUFDQSxXQUFBLENBQUEsR0FBQSxDQUFBLE9BQUEsQ0FBQSxXQUFBLENBQUEsV0FBQSxDQUFBLENBQUE7R0FJQSxDQUFBLENBQUE7Q0FHQSxDQUFBLENBQUE7O0FBR0EsU0FBQSxnQkFBQSxHQUFBO0FBQ0EsTUFBQSxNQUFBLEdBQUEsUUFBQSxDQUFBLGFBQUEsQ0FBQSxTQUFBLENBQUEsQ0FBQTtBQUNBLFNBQUEsQ0FBQSxHQUFBLENBQUEsTUFBQSxDQUFBLENBQUE7QUFDQSxRQUFBLENBQUEsU0FBQSxDQUFBLE1BQUEsQ0FBQSxRQUFBLENBQUE7OztBQUFBLENBR0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBmdW5jdGlvbiBhY3RpdmVTdGF0ZSh0cmlnZ2VyKSB7XG4vLyAgICAgY29uc29sZS5sb2coJ2hpdCcpXG4vLyAgIHZhciB0YXJnZXROYW1lID0gdHJpZ2dlci5nZXRBdHRyaWJ1dGUoJ2hyZWYnKS5yZXBsYWNlKCcjJywnJyk7XG4vLyAgIHZhciB0YXJnZXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0YXJnZXROYW1lKTtcbiAgXG4vLyAgIC8vIGRvbid0IG1lc3Mgd2l0aCB0aGluZ3MgaWYgdGhlcmUgaXMgbm8gdGFyZ2V0XG4vLyAgIGlmICghdGFyZ2V0KSB7XG4vLyAgICAgcmV0dXJuO1xuLy8gICB9XG4gIFxuLy8gICBpZiAodHJpZ2dlci5jbGFzc0xpc3QuY29udGFpbnMoJ2FjdGl2ZScpKSB7XG4vLyAgICAgdHJpZ2dlci5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbi8vICAgICB0YXJnZXQuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4vLyAgIH0gZWxzZSB7XG4vLyAgICAgdHJpZ2dlci5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbi8vICAgICB0YXJnZXQuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG4vLyAgIH1cbi8vIH07XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBmdW5jdGlvbigpe1xuICBjb25zb2xlLmxvZygnbG9hZGVkJylcbiAgdmFyIHRyaWdnZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndHJpZ2dlcicpXG4gIHRyaWdnZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBhZGRDbGFzc1RvVGFyZ2V0KVxuICBjb25zb2xlLmxvZyh0cmlnZ2VyKVxuXG4gIHZhciBhbmNob3IgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnYScpWzBdXG4gIGNvbnNvbGUubG9nKGFuY2hvcilcblxuICBhbmNob3IuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpe1xuICAgIGlmKCF0YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdyZWQnKSl7XG4gICAgICB0YXJnZXQuY2xhc3NMaXN0LmFkZCgncmVkJylcbiAgICAgIHRyaWdnZXIucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCBhZGRDbGFzc1RvVGFyZ2V0KVxuICAgIH1cbiAgICBlbHNlKFxuICAgICAgdGFyZ2V0LmNsYXNzTGlzdC5yZW1vdmUoJ3JlZCcpXG4gICAgICApXG4gICAgICBldmVudC5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKVxuICB9KVxuXG4gIHZhciBOZXNzeSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb25zdGVycycpXG4gIHZhciBBbGxNb25zdGVycyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5tb25zdGVycycpXG5cbiAgY29uc29sZS5sb2coTmVzc3ksIEFsbE1vbnN0ZXJzKVxuICBOZXNzeS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCl7XG4gICAgTmVzc3kuaW5uZXJIVE1MID0gJzxsaSBjbGFzcz1cIm1vbnN0ZXJcIiBzdHlsZT1cImNvbG9yOnJlZDtcIj5OZXNzeTwvbGk+J1xuXG4gIH0pXG5cbiAgQWxsTW9uc3RlcnNbMV0uYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdmVyJywgZnVuY3Rpb24oKXtcbiAgICBBbGxNb25zdGVyc1sxXS50ZXh0Q29udGVudD0gXCJHb2R6aWxsYVwiXG4gIH0pXG4gIEFsbE1vbnN0ZXJzWzFdLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3V0JywgZnVuY3Rpb24oKXtcbiAgICBBbGxNb25zdGVyc1sxXS50ZXh0Q29udGVudD0nQmlnIEZvb3QnXG4gIH0pXG5cblxuICB2YXIgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgZGl2LnNldEF0dHJpYnV0ZSgnc3R5bGUnLCAnY29sb3I6Ymx1ZTsnKTtcbiAgZGl2LnRleHRDb250ZW50PSdIb21lcic7XG4gICAgQWxsTW9uc3RlcnNbMl0uYXBwZW5kQ2hpbGQoZGl2KVxuXG50YXJnZXQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpe1xuICB2YXIgbGlzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCd1bCcpWzBdO1xuICBjb25zb2xlLmxvZyhsaXN0KVxuICBjb25zb2xlLmxvZyhsaXN0LmNoaWxkcmVuKVxuICBjb25zb2xlLmxvZyhsaXN0Lmxhc3RDaGlsZClcbiAgbGlzdC5yZW1vdmVDaGlsZChsaXN0Lmxhc3RDaGlsZClcblxuXG4gICAgY29uc29sZS5sb2codHJpZ2dlci5uZXh0RWxlbWVudFNpYmxpbmcpXG4gICAgY29uc29sZS5sb2codHJpZ2dlci5uZXh0U2libGluZylcbiAgICAgICAgY29uc29sZS5sb2codHJpZ2dlci5uZXh0U2libGluZy5uZXh0U2libGluZylcblxuXG5cbn0pXG5cblxuICB9KVxuXG5cbmZ1bmN0aW9uICBhZGRDbGFzc1RvVGFyZ2V0KCl7XG4gICAgICB2YXIgdGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RhcmdldCcpO1xuICAgICAgY29uc29sZS5sb2codGFyZ2V0KVxuICAgICAgdGFyZ2V0LmNsYXNzTGlzdC50b2dnbGUoJ2FjdGl2ZScpXG4gICAgICAvLyBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAvLyBldmVudC5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKTtcbiAgfVxuLy8gY29uc29sZS5sb2coZG9jdW1lbnQpXG4vLyB2YXIgbW9uc3RlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5tb25zdGVycycpXG5cbi8vIGNvbnNvbGUubG9nKCd0aGVzZSBhcmUgdGhlIG1vbnN0ZXJzICcgKyBtb25zdGVyWzFdLnRleHRDb250ZW50KVxuXG5cbi8vIHZhciB0cmlnZ2VyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RyaWdnZXInKTtcbi8vIHRyaWdnZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihldmVudCkge1xuLy8gICBjb25zb2xlLmxvZygndHJpZ2dlcmVkJylcbi8vICAgLy8gYWJvcnQgdGhlIGxpbmsncyBkZWZhdWx0IGFjdGlvbi5cbi8vICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbi8vICAgLy8gZXZlbnQuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKCk7XG4gIFxuLy8gICBhY3RpdmVTdGF0ZSh0aGlzKTtcbi8vIH0sIGZhbHNlKTtcblxuLy8gZnVuY3Rpb24gYWN0aXZlU3RhdGUodHJpZ2dlcikge1xuLy8gICBjb25zb2xlLmxvZygnaGl0Jylcbi8vICAgdmFyIHRhcmdldE5hbWUgPSB0cmlnZ2VyLmdldEF0dHJpYnV0ZSgnaHJlZicpLnJlcGxhY2UoJyMnLCAnJyk7XG4vLyAgIHZhciB0YXJnZXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0YXJnZXROYW1lKTtcbiAgXG4vLyAgIGlmICghdGFyZ2V0KSB7XG4vLyAgICAgcmV0dXJuO1xuLy8gICB9XG4gIFxuLy8gICAvLyB0cmlnZ2VyLmNsYXNzTGlzdC50b2dnbGUoJ2FjdGl2ZScpO1xuLy8gICB0YXJnZXQuY2xhc3NMaXN0LnRvZ2dsZSgnYWN0aXZlJyk7XG4vLyB9XG5cbi8vIGZ1bmN0aW9uIHR1cm5SZWQoKXtcbi8vICAgY29uc29sZS5sb2coICdoaXQgcmVkJylcbi8vICAgdmFyIHRhcmdldE5hbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRhcmdldFwiKVxuLy8gICAgICAgdGFyZ2V0TmFtZS5jbGFzc0xpc3QudG9nZ2xlKCdyZWQnKVxuLy8gICAgICAgY29uc29sZS5sb2coZXZlbnQpXG4vLyAgICAgICBldmVudC5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKVxuLy8gfVxuXG5cbi8vIHZhciBtb25zdCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdsaScpXG4vLyBjb25zb2xlLmxvZyhtb25zdClcbi8vIG1vbnN0WzBdLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCAnY29sb3I6cmVkOycpXG4vLyAvLyBtb25zdFsyXS5zdHlsZSgnY29sb3I6cmVkJylcbi8vIGNvbnNvbGUubG9nKG1vbnN0WzBdLmdldFN0eWxlcylcblxuXG5cblxuXG5cblxuXG5cblxuXG5cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
