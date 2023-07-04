// key : AIzaSyCuozbhwv2qSp0hiD1cu7p6Uf2bSXEALbg
//list : D-ZZXq7VyDE

let key = "AIzaSyCuozbhwv2qSp0hiD1cu7p6Uf2bSXEALbg";
let list = "PLpCsw49zIOW352T9jdDUxOpD_of3FpG8N";
let vidList = document.querySelector(".vidList");
const url = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&key=${key}&playlistId=${list}`;

fetch(url)
  .then((data) => {
    return data.json();
  })
  .then((json) => {
    let items = json.items;
    let result = "";
    items.map((el) => {
      let title = el.snippet.title;

      // split은 (구분한 문자)를 기준으로 분할해서 배열로 반환, 반환된 배열에서 [2020.05.01, 9501041]

      result += `
            <article>
                <a href="${el.snippet.resourceId.videoId}" class="pic">
                    <img src="${el.snippet.thumbnails.medium.url}">
                 </a>

             
                    <h2>${title}</h2>
              
             
            </article>
                `;
    });
    vidList.innerHTML = result;
  });

//a태그인 썸네일을 클릭하면 비디오가 팝업되서 보이게

vidList.addEventListener("click", (e) => {
  e.preventDefault();

  /* 이벤트 위임의 단점인 이벤트 범위가 커져서 부작용이 발생하는데 해결방은으로 이벤트 발생의 목표가 아니라면 return으로 방지하도록 */

  if (!e.target.closest("a")) return;
  const vidId = e.target
    .closest("article")
    .querySelector("a")
    .getAttribute("href");

  // console.log(vidId);

  let pop = document.createElement("figure");
  pop.classList.add("pop");

  pop.innerHTML = `
            <iframe src="https://www.youtube.com/embed/${vidId}" frameborder = "0" width="100%" height="100%" allowfullscreen></iframe>
            <span class="btnClose">close</span>
        `;
  vidList.append(pop);
});

//팝업창의 close를 누르면 닫히게! 이벤트 위임을 통해서 닫기를 구현. 이유는 닫기버튼은 미래시에 있는 버튼이기 때문에 이벤트 위임으로만 해결가능
vidList.addEventListener("click", (e) => {
  const pop = vidList.querySelector(".pop");
  //pop이 존재하면 if문 안으로 들어가고, 존재하지 않으면 무시된다.
  if (pop) {
    const close = pop.querySelector("span");
    /* 위의 이벤트와 이 구문의 이벤트가 충돌되는 상황. 위에서는 pop을 만들고 이 이벤트는 pop을 지우는 이벤트라서 충돌된다. */

    if (e.target == close) pop.remove();
  }
});
