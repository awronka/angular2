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

// document.addEventListener('DOMContentLoaded', function(){
//   console.log('loaded')
//   var trigger = document.getElementById('trigger')
//   trigger.addEventListener('click', addClassToTarget)
//   console.log(trigger)

//   var anchor = document.getElementsByTagName('a')[0]
//   console.log(anchor)

//   anchor.addEventListener('click', function(){
//     if(!target.classList.contains('red')){
//       target.classList.add('red')
//       trigger.removeEventListener('click', addClassToTarget)
//     }
//     else(
//       target.classList.remove('red')
//       )
//       event.stopImmediatePropagation()
//   })

//   var Nessy = document.querySelector('.monsters')
//   var AllMonsters = document.querySelectorAll('.monsters')

//   console.log(Nessy, AllMonsters)
//   Nessy.addEventListener('click', function(){
//     Nessy.innerHTML = '<li class="monster" style="color:red;">Nessy</li>'

//   })

//   AllMonsters[1].addEventListener('mouseover', function(){
//     AllMonsters[1].textContent= "Godzilla"
//   })
//   AllMonsters[1].addEventListener('mouseout', function(){
//     AllMonsters[1].textContent='Big Foot'
//   })


//   var div = document.createElement('div')
//   div.setAttribute('style', 'color:blue;');
//   div.textContent='Homer';
//     AllMonsters[2].appendChild(div)

// target.addEventListener('click', function(){
//   var list = document.getElementsByTagName('ul')[0];
//   console.log(list)
//   console.log(list.children)
//   console.log(list.lastChild)
//   list.removeChild(list.lastChild)


//     console.log(trigger.nextElementSibling)
//     console.log(trigger.nextSibling)
//         console.log(trigger.nextSibling.nextSibling)



// })


//   })


// function  addClassToTarget(){
//       var target = document.querySelector('#target');
//       console.log(target)
//       target.classList.toggle('active')
//       // event.preventDefault()
//       // event.stopImmediatePropagation();
//   }
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












