// Get the modal
var modal = document.getElementById('myModal');

// Get the button that opens the modal
var btn = document.getElementById('myBtn');

// When the user clicks the button, open the modal

item_count = 0;
total_coints = 51;

let items = [
  {
    title: '捷運',
    subtitle: '2.6 km',
    coin: 4,
    color: '#4861ff',
  },
  {
    title: '杏鮑菇藜麥珍珠堡',
    subtitle: '摩斯漢堡',
    coin: 26,
    color: '#70d70b',
  },
];

btn.onclick = function() {
  var newItem = document.createElement('div');
  newItem.classList.add('item');

  newItem.innerHTML = `
      <div>
        <img src="https://placeimg.com/48/48/any">
          <div>
            <p style="color: ${items[item_count].color}">${items[item_count].title}</p>
            <small>${items[item_count].subtitle}</small>
          </div>
          </div>

        <div>
          <img
            class="mask"
            src="https://placeimg.com/48/48/any"
          >
            <h1>${items[item_count].coin}</h1>
          </div>`;

  var modalBody = document.getElementsByClassName('item')[0];
  modalBody.parentNode.insertBefore(newItem, modalBody[0]);

  total_coints += items[item_count].coin;
  item_count++;
  item_count %= 2;

  if (item_count == 0) {
    alert('Provide a Modal');
  }
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = 'none';
  }
};
