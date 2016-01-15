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
trigger.addEventListener('click', function(event) {
  console.log('triggered')
  // abort the link's default action.
  event.preventDefault();
  event.stopImmediatePropagation();
  
  activeState(this);
}, true);

function activeState(trigger) {
  console.log('hit')
  var targetName = trigger.getAttribute('href').replace('#', '');
  var target = document.getElementById(targetName);
  
  if (!target) {
    return;
  }
  
  trigger.classList.toggle('active');
  target.classList.toggle('active');
}