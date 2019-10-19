const record_list_wrap = document.querySelector('.record_list_wrap');
const add_btn = document.querySelector('.add_btn');
let isModalOpen = false;
let totalCoins = 256;

add_btn.addEventListener('click', toggleShowBurgur);

function getRecordHtml(record, add = false) {
  const { title, subtitle, coin, type } = record;
  const html =
    type === 'commute'
      ? `<div class="item_wrap ${add && 'item_hidden'}">
          <div class="item_left_wrap">
            <div class="item_icon commute">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="23" viewBox="0 0 20 23">
                <g fill="none" fill-rule="evenodd">
                  <path d="M-4-2h28v28H-4z" />
                  <path
                    fill="#4861ff"
                    fill-rule="nonzero"
                    d="M.667 16.667c0 1.026.455 1.948 1.166 2.59v1.493c0 .968.782 1.75 1.75 1.75.969 0 1.75-.782 1.75-1.75v-.583h9.334v.583c0 .957.781 1.75 1.75 1.75.956 0 1.75-.782 1.75-1.75v-1.493a3.484 3.484 0 0 0 1.166-2.59V5C19.333.917 15.157.333 10 .333S.667.917.667 5v11.667zm4.083 1.166c-.968 0-1.75-.781-1.75-1.75 0-.968.782-1.75 1.75-1.75s1.75.782 1.75 1.75c0 .969-.782 1.75-1.75 1.75zm10.5 0c-.968 0-1.75-.781-1.75-1.75 0-.968.782-1.75 1.75-1.75s1.75.782 1.75 1.75c0 .969-.782 1.75-1.75 1.75zm1.75-7H3V5h14v5.833z"
                  />
                </g>
              </svg>
            </div>
            <div class="item_title_wrap">
              <div class="item_title">${title}</div>
              <div class="item_subtitle">${subtitle}</div>
            </div>
          </div>
          <div class="item_right_wrap">
            <div class="earth_icon">
              <img src="./earth.svg" />
            </div>
            <div class="item_coin">${coin}</div>
          </div>
        </div>`
      : `<div class="item_wrap">
          <div class="item_left_wrap">
            <div class="item_icon food">
              <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26">
                <g fill="none" fill-rule="evenodd">
                  <path d="M-1-1h28v28H-1z" />
                  <path
                    fill="#5ebf00"
                    fill-rule="nonzero"
                    d="M24.55 4.833H20v-3.5A1.17 1.17 0 0 0 18.833.167a1.17 1.17 0 0 0-1.166 1.166v3.5h-4.55c-.689 0-1.225.595-1.167 1.284l.14 1.411C16.383 8.52 20 11.565 20 16.5l.023 9.333h1.984c.98 0 1.785-.758 1.901-1.715l1.797-18.001a1.162 1.162 0 0 0-1.155-1.284zM16.5 23.5H1.333a1.17 1.17 0 0 0-1.166 1.167 1.17 1.17 0 0 0 1.166 1.166H16.5a1.17 1.17 0 0 0 1.167-1.166A1.17 1.17 0 0 0 16.5 23.5zm-15.05-7h14.933c.724 0 1.295-.653 1.155-1.353-.758-3.769-4.69-5.659-8.621-5.659-3.932 0-7.852 1.89-8.622 5.659-.14.7.443 1.353 1.155 1.353zm15.05 2.333H1.333A1.17 1.17 0 0 0 .167 20a1.17 1.17 0 0 0 1.166 1.167H16.5A1.17 1.17 0 0 0 17.667 20a1.17 1.17 0 0 0-1.167-1.167z"
                  />
                </g>
              </svg>
            </div>
            <div class="item_title_wrap">
              <div class="item_title food_title">${title}</div>
              <div class="item_subtitle">${subtitle}</div>
            </div>
          </div>
          <div class="item_right_wrap">
            <div class="earth_icon">
              <img src="./earth.svg" />
            </div>
            <div class="item_coin">${coin}</div>
          </div>
        </div>`;
  return html;
}

function initData() {
  const yesterday_record_wrap = document.querySelector('#yesterday_record');
  const html = `<div class="daily_title">Yesterday</div>${yesterday_records
    .map((record) => getRecordHtml(record))
    .join('')}`;

  yesterday_record_wrap.innerHTML = html;
}

initData();

const separate = document.querySelector('.separate');
separate.addEventListener('click', () => {
  record_list_wrap.classList.toggle('record_list_wrap-active');
});

const total_coin = document.querySelector('.total_coin');
total_coin.innerHTML = totalCoins;

const modal_btn = document.querySelector('.modal_btn');
modal_btn.addEventListener('click', () => {
  document.querySelector('.modal_background').classList.add('hidden');
});

function addNewRecord() {
  const today_record_wrap = document.querySelector('#today_record');
  const newItem = document.createElement('div');
  const html = getRecordHtml(records[0], true);
  totalCoins += records[0].coin;
  total_coin.innerHTML = totalCoins;
  newItem.innerHTML = html;
  today_record_wrap.prepend(newItem);
}
const burger_menu = document.querySelector('.burger_menu');

function toggleShowBurgur() {
  burger_menu.classList.toggle('hidden');
}

burger_menu.querySelector('.book').addEventListener('click', () => {
  document.querySelector('#book').classList.toggle('hidden');
});

document.querySelector('#book').addEventListener('click', () => {
  document.querySelector('#book-info').classList.remove('hidden');
  document.querySelector('#book').classList.add('hidden');
});
burger_menu.querySelector('.social').addEventListener('click', () => {
  document.querySelector('#social').classList.toggle('hidden');
});

document.querySelector('#book-info').addEventListener('click', () => {
  document.querySelector('#book-info').classList.add('hidden');
});

document.querySelector('#social').addEventListener('click', () => {
  document.querySelector('#social').classList.add('hidden');
});
