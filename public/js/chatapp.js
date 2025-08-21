
function colorOnCLick() {
  const spansection = document.getElementById('sendsec'); // ✅ Fixed here
  spansection.style.backgroundColor = "rgba(255, 255, 255, 0.062)";
  // Reset to transparent after 150 milliseconds
  setTimeout(() => {
    spansection.style.backgroundColor = "transparent";
  }, 150);

}
function sendMessage() {

  console.log("sendMessage called");
  const input = document.getElementById('txtMessage');
  const message = input.value.trim();
  if (message === '') return; // Don't send empty messages
  colorOnCLick();
  const senderChatSection = document.getElementById('senderSection');

  const now = new Date();
  const hours = now.getHours().toString().padStart(2, '0');
  const minutes = now.getMinutes().toString().padStart(2, '0');
  const currentTime = `${hours}:${minutes}`;

  senderChatSection.insertAdjacentHTML('beforeend', `
                <div class="sender_msg_box">
                        <div class="sender_msg_box_content">
                        <p class="senderusername">user</p>
                        <span class="line"></span>
                        <p>${message}</p>
                    </div>
                    <div class="time">
                        <p>${currentTime}</p>
                    </div>
                </div>
            `);

  input.value = ''; // Clear input after sending
}

//create contect menu
const contextMenu = document.createElement('ul');
contextMenu.className = 'contextMenu';
contextMenu.innerHTML = `
  <div>
    <li>Exit</li>
    <li>Terminate session</li>
  </div>
`;
//get options button id
const optionButton = document.getElementById('options_icon');

options_icon.addEventListener('mouseover', e => {
 document.body.appendChild(contextMenu);
});
// const contextMenu = document.createElement('ul');
// contextMenu.className = 'contextMenu';
// contextMenu.innerHTML = `
//       <div>Exit </div>
//       <div>terminate ession </div>
//     `
// document.body.appendChild(contextMenu);

// document.addEventListener('mousemove', e=>{
//   const {innerWidth,innerHeight} = window;
//   const {offsetWidth,offsetHeight} = contextMenu;

//   let x = 0;
//   let y = 0;

//   if(e.clientX >= (innerWidth - offsetWidth)){
//     contextMenu.style.transform = 'translateX(-100%)';
//     x = '-100%'
//   }
//     if(e.clientX >= (innerHeight - offsetHeight)){
//     contextMenu.style.transform = 'translateX(-100%)';
//     y= '-100%'
//   }
//   contextMenu.style.left = e.clientX + 'px';
//   contextMenu.style.top = e.clientY + 'px';
//   contextMenu.style.transform = 'translate(${x},${y})'
// })

const updateMenuPosition = (x, y) => {

};
document.addEventListener('options', e => {

});
