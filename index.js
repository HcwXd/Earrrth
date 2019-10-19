const record_list_wrap = document.querySelector('.record_list_wrap');
const add_btn = document.querySelector('.add_btn');

add_btn.addEventListener('click', addNewRecord);
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = 'none';
  }
};

function initData(records) {
  const { title, subtitle, coin, color } = records;
}

function addNewRecord() {
  const today_record = document.querySelector('#today_record');
  const newItem = document.createElement('div');
  const { title, subtitle, coin, color } = records[0];

  const html = `<div class="item_wrap">
          <div class="item_left_wrap">
            <div class="item_icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="23" viewBox="0 0 20 23">
                <g fill="none" fill-rule="evenodd">
                  <path d="M-4-2h28v28H-4z" />
                  <path
                    fill=${color}
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
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                width="32"
                height="32"
                viewBox="0 0 32 32"
              >
                <defs>
                  <filter
                    id="a"
                    width="222.7%"
                    height="217.4%"
                    x="-61.4%"
                    y="-58.7%"
                    filterUnits="objectBoundingBox"
                  >
                    <feOffset dx="2" dy="1" in="SourceAlpha" result="shadowOffsetOuter1" />
                    <feGaussianBlur
                      in="shadowOffsetOuter1"
                      result="shadowBlurOuter1"
                      stdDeviation="2.5"
                    />
                    <feColorMatrix
                      in="shadowBlurOuter1"
                      result="shadowMatrixOuter1"
                      values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.5 0"
                    />
                    <feMerge>
                      <feMergeNode in="shadowMatrixOuter1" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>
                  <ellipse id="b" cx="11" cy="11" rx="11" ry="10.823" />
                </defs>
                <g fill="none" fill-rule="evenodd" filter="url(#a)" transform="translate(3 4)">
                  <g transform="translate(0 .18)">
                    <mask id="c" fill="#fff">
                      <use xlink:href="#b" />
                    </mask>
                    <use fill="#244DAE" xlink:href="#b" />
                    <path
                      fill="#03B454"
                      d="M13.705.71c.721 4.258.48 6.623-.721 7.096C11.78 8.28 11.3 9.344 11.54 11c-.48.946-1.202 1.42-2.164 1.42-1.443 0-4.328 1.774-4.328 2.128 0 .355 0 2.13-.721 2.13H2.164c-.48 0-2.404-1.065-5.77-3.194C-2.405 6.15-1.203 1.892 0 .71c1.803-1.775 8.656-3.194 9.377-3.194.48 0 1.924 1.065 4.328 3.194z"
                      mask="url(#c)"
                    />
                  </g>
                  <path
                    fill="#03B454"
                    d="M20.705 10.4c-1.705 1.136-2.131 2.272-1.279 3.408 1.279 1.704 2.392-2.97 2.557-3.408.11-.293-.316-.293-1.278 0z"
                  />
                  <ellipse cx="8.5" cy="9.18" fill="#101010" rx="1.5" ry="2" />
                  <ellipse cx="17.5" cy="9.18" fill="#101010" rx="1.5" ry="2" />
                  <path
                    stroke="#101010"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 15.18c0 1.25.75 2 1.5 2s1.5-.75 1.5-2"
                  />
                </g>
              </svg>
            </div>
            <div class="item_coin">${coin}</div>
          </div>
        </div>
  `;
  newItem.innerHTML = html;
  today_record.appendChild(newItem);
}
