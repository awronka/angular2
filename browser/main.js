
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

var trigger = document.getElementById('trigger');
trigger.addEventListener('click', function (event) {
  console.log('triggered');
  // abort the link's default action.
  event.preventDefault();
  event.stopImmediatePropagation();

  activeState(this);
}, true);

function activeState(trigger) {
  console.log('hit');
  var targetName = trigger.getAttribute('href').replace('#', '');
  var target = document.getElementById(targetName);

  if (!target) {
    return;
  }

  trigger.classList.toggle('active');
  target.classList.toggle('active');
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZhbmlsbGEvdmFuaWxsYS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFtQkEsSUFBQSxPQUFBLEdBQUEsUUFBQSxDQUFBLGNBQUEsQ0FBQSxTQUFBLENBQUEsQ0FBQTtBQUNBLE9BQUEsQ0FBQSxnQkFBQSxDQUFBLE9BQUEsRUFBQSxVQUFBLEtBQUEsRUFBQTtBQUNBLFNBQUEsQ0FBQSxHQUFBLENBQUEsV0FBQSxDQUFBOztBQUFBLEFBRUEsT0FBQSxDQUFBLGNBQUEsRUFBQSxDQUFBO0FBQ0EsT0FBQSxDQUFBLHdCQUFBLEVBQUEsQ0FBQTs7QUFFQSxhQUFBLENBQUEsSUFBQSxDQUFBLENBQUE7Q0FDQSxFQUFBLElBQUEsQ0FBQSxDQUFBOztBQUVBLFNBQUEsV0FBQSxDQUFBLE9BQUEsRUFBQTtBQUNBLFNBQUEsQ0FBQSxHQUFBLENBQUEsS0FBQSxDQUFBLENBQUE7QUFDQSxNQUFBLFVBQUEsR0FBQSxPQUFBLENBQUEsWUFBQSxDQUFBLE1BQUEsQ0FBQSxDQUFBLE9BQUEsQ0FBQSxHQUFBLEVBQUEsRUFBQSxDQUFBLENBQUE7QUFDQSxNQUFBLE1BQUEsR0FBQSxRQUFBLENBQUEsY0FBQSxDQUFBLFVBQUEsQ0FBQSxDQUFBOztBQUVBLE1BQUEsQ0FBQSxNQUFBLEVBQUE7QUFDQSxXQUFBO0dBQ0E7O0FBRUEsU0FBQSxDQUFBLFNBQUEsQ0FBQSxNQUFBLENBQUEsUUFBQSxDQUFBLENBQUE7QUFDQSxRQUFBLENBQUEsU0FBQSxDQUFBLE1BQUEsQ0FBQSxRQUFBLENBQUEsQ0FBQTtDQUNBIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBmdW5jdGlvbiBhY3RpdmVTdGF0ZSh0cmlnZ2VyKSB7XG4vLyAgICAgY29uc29sZS5sb2coJ2hpdCcpXG4vLyAgIHZhciB0YXJnZXROYW1lID0gdHJpZ2dlci5nZXRBdHRyaWJ1dGUoJ2hyZWYnKS5yZXBsYWNlKCcjJywnJyk7XG4vLyAgIHZhciB0YXJnZXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0YXJnZXROYW1lKTtcbiAgXG4vLyAgIC8vIGRvbid0IG1lc3Mgd2l0aCB0aGluZ3MgaWYgdGhlcmUgaXMgbm8gdGFyZ2V0XG4vLyAgIGlmICghdGFyZ2V0KSB7XG4vLyAgICAgcmV0dXJuO1xuLy8gICB9XG4gIFxuLy8gICBpZiAodHJpZ2dlci5jbGFzc0xpc3QuY29udGFpbnMoJ2FjdGl2ZScpKSB7XG4vLyAgICAgdHJpZ2dlci5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbi8vICAgICB0YXJnZXQuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4vLyAgIH0gZWxzZSB7XG4vLyAgICAgdHJpZ2dlci5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbi8vICAgICB0YXJnZXQuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG4vLyAgIH1cbi8vIH07XG5cbnZhciB0cmlnZ2VyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RyaWdnZXInKTtcbnRyaWdnZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihldmVudCkge1xuICBjb25zb2xlLmxvZygndHJpZ2dlcmVkJylcbiAgLy8gYWJvcnQgdGhlIGxpbmsncyBkZWZhdWx0IGFjdGlvbi5cbiAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgZXZlbnQuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKCk7XG4gIFxuICBhY3RpdmVTdGF0ZSh0aGlzKTtcbn0sIHRydWUpO1xuXG5mdW5jdGlvbiBhY3RpdmVTdGF0ZSh0cmlnZ2VyKSB7XG4gIGNvbnNvbGUubG9nKCdoaXQnKVxuICB2YXIgdGFyZ2V0TmFtZSA9IHRyaWdnZXIuZ2V0QXR0cmlidXRlKCdocmVmJykucmVwbGFjZSgnIycsICcnKTtcbiAgdmFyIHRhcmdldCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRhcmdldE5hbWUpO1xuICBcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgXG4gIHRyaWdnZXIuY2xhc3NMaXN0LnRvZ2dsZSgnYWN0aXZlJyk7XG4gIHRhcmdldC5jbGFzc0xpc3QudG9nZ2xlKCdhY3RpdmUnKTtcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
