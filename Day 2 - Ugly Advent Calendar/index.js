const calendarContainer = document.getElementById('calendar');

for (let i = 1; i <= 24; i++) {
  let present = document.createElement('li');
  present.classList.add('present');
  let cap = document.createElement('div');
  cap.classList.add('cap');
  let cap_bow = document.createElement('div');
  cap_bow.classList.add('cap_bow');
  cap_bow.innerHTML = "∞"
  let cap_ribbon = document.createElement('div');
  cap_ribbon.classList.add('cap_ribbon');
  let cap_shadow = document.createElement('div');
  cap_shadow.classList.add('cap_shadow');
  
  let box = document.createElement('div');
  box.classList.add('calendar-box');
  
  let vertical_ribbon = document.createElement('div');
  vertical_ribbon.classList.add('vertical_ribbon');
  let vertical_ribbon_shadow = document.createElement('div');
  vertical_ribbon_shadow.classList.add('vertical_ribbon_shadow');
  
  let horizontal_ribbon = document.createElement('div');
  horizontal_ribbon.classList.add('horizontal_ribbon');

  let number = document.createElement('p');
  number.innerHTML = i;
  const icon = document.createElement('i');
  icon.classList.add('fas', 'fa-gift');
  let description = document.createElement('p');
  description.innerHTML = "Open me!";

  box.appendChild(horizontal_ribbon);
  box.appendChild(vertical_ribbon);
  box.appendChild(vertical_ribbon_shadow);
  box.appendChild(cap_shadow);
  box.appendChild(number);
  box.appendChild(icon);
  box.appendChild(description);

  cap.appendChild(cap_ribbon);

  
  present.appendChild(cap);
  present.appendChild(cap_bow);
  present.appendChild(box);
  
  calendarContainer.appendChild(present);
}