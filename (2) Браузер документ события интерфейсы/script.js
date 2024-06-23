													  //Раздел: "Браузер: документ, события, интерфейсы", подраздел: "Навигация по DOM-элементам"
/*let div = document.body.firstChild;
let ul = div.nextSibling;
let secondLi = ul.lastChild;*/

/*let table = document.body.firstElementChild;

for(let i = 0; i < table.rows.length; i++) {
  for(let j = 0; j < table.rows[i].cells.length; j++) {
    if(i == j) table.rows[i].cells[j].style.backgroundColor = 'red';
  }
}*/

													//Раздел: "Браузер: документ, события, интерфейсы", подраздел: "Поиск: getElement*, querySelector*"
/*let neededTable = document.getElementById("age-table");
let label = document.querySelectorAll("#age-table label");
let td = document.querySelector("#age-table td");
let form = document.getElementsByName("search");
let firstInput = document.querySelector("form[name=search] input");
let inputs = form.querySelectorAll('input');
let lastInput = inputs[inputs.length-1];*/

												//Раздел: "Браузер: документ, события, интерфейсы", подраздел: "Свойства узлов: тип, тег и содержимое"
/*for(let li of document.querySelectorAll("li"))  {
  let name = li.firstChild.data;
  let count = li.getElementsByTagName("li").length;
  alert(`${name}: ${count}`);
}*/

															//Раздел: "Браузер: документ, события, интерфейсы", подраздел: "Атрибуты и свойства"
/*let elem = document.querySelector("[data-widget-name]");
console.log(elem.dataset.widgetName);*/

/*let listA = document.querySelectorAll("a");
for(let a of listA) {
  let href = a.getAttribute("href");

  if(href && href.includes('://') && !href.startsWith("http://internal")) {
    a.style.color = "orange";
  }
} */

														//Раздел: "Браузер: документ, события, интерфейсы", подраздел: "Изменение документа"
/*function clear(elem) {
	elem.innerHtml = "";
}*/

/*function makeList() {
	let ul = document.createElement("ul");
	document.body.append(ul);

	while(true) {
		let ans = prompt("Введите пункт списка");

		if(ans == null || ans == "")
			break;

		let li = document.createElement("li");
		li.textContent = ans;
		ul.append(li);
	}
}

makeList();*/

/*function createTree(container, data) {
	if (!Object.keys(data).length)
		return;

	let newUl = document.createElement("ul");
	container.append(newUl);

	for(let key in data) {
		let li = document.createElement("li");
		li.textContent = key;
		newUl.append(li);
		createTree(newUl, data[key]);
	}
}

let data = {
  "Рыбы": {
    "форель": {},
    "лосось": {}
  },

  "Деревья": {
    "Огромные": {
      "секвойя": {},
      "дуб": {}
    },
    "Цветковые": {
      "яблоня": {},
      "магнолия": {}
    }
  }
};

createTree(document.body, data);*/

/*document.getElementById("forTasks").innerHTML = "<ul><li>Животные<ul><li>Млекопитающие<ul><li>Коровы</li><li>Ослы</li><li>Собаки</li><li>Тигры</li></ul></li><li>Другие<ul><li>Змеи</li><li>Птицы</li><li>Ящерицы</li></ul></li></ul></li><li>Рыбы<ul><li>Аквариумные<ul><li>Гуппи</li><li>Скалярии</li></ul></li><li>Морские<ul><li>Морскаяфорель</li></ul></li></ul></li></ul>";

function countDesc() {
	let liList = document.querySelectorAll("#forTasks > ul li");

	for(let li of liList) {
		let count = li.getElementsByTagName("li").length;
		
		if(count)
			li.firstChild.data += `[${count}]`;
	}
}

countDesc();*/

/*function createCalendar(elem, year, month) {

  let date = new Date(year, month - 1);

  let head = '<table><tr><th>пн</th><th>вт</th><th>ср</th><th>чт</th><th>пт</th><th>сб</th><th>вс</th></tr><tr>';

  for (let i = 0; i < getDay(date); i++) {
    head += '<td></td>';
  }

  while (date.getMonth() == month - 1 ) {
    head += '<td>' + date.getDate() + '</td>';

    if (getDay(date) % 7 == 6) {
      head += '</tr><tr>';
    }

    date.setDate(date.getDate() + 1);
  }

  if (getDay(date) != 0) {
    for (let i = getDay(date); i < 7; i++) {
      head += '<td></td>';
    }
  }

  head += '</tr></table>';

  elem.innerHTML = head;
}

function getDay(date) {
  let day = date.getDay();
  if (day == 0) day = 7;
  return day - 1;
}

createCalendar(document.getElementById("forTasks"), 2012, 9);*/

/*document.getElementById("forTasks").innerHTML = '<input type="button" onclick="clockStart()" value="Start"><input type="button" onclick="clockStop()" value="Stop"><div id=\"clock\"><span class=\"hour\">hh</span>:<span class=\"min\">mm</span>:<span class=\"sec\">ss</span></div>';


let timer;

function update() {
	let clock = document.getElementById('clock');
  let date = new Date();

  let hours = date.getHours();
  if (hours < 10) hours = '0' + hours;
  clock.children[0].innerHTML = hours;

  let minutes = date.getMinutes();
  if (minutes < 10) minutes = '0' + minutes;
  clock.children[1].innerHTML = minutes;

  let seconds = date.getSeconds();
  if (seconds < 10) seconds = '0' + seconds;
  clock.children[2].innerHTML = seconds;
}

function clockStart() {
	if(!timer)
		timer = setInterval(update, 1000);

	update();
}

function clockStop() {
	clearInterval(timer);
	timer = null;
}*/

/*let htmlToInsert = "<li>2</li><li>3</li>";
document.getElementsById("one").insertAdjacentHTML(afterend, htmlToInsert);*/

/*document.getElementById("forTasks").innerHTML = "<table><thead><tr><th>Name</th><th>Surname</th><th>Age</th></tr></thead><tbody><tr><td>John</td><td>Smith</td><td>10</td></tr><tr><td>Pete</td><td>Brown</td><td>15</td></tr><tr><td>Ann</td><td>Lee</td><td>5</td></tr><tr><td>...</td><td>...</td><td>...</td></tr></tbody></table>";

function tableSort(table) {
	let listTr = [];

	for(let tr of table.querySelectorAll("tbody > tr")) {
		listTr.push(tr);
		tr.remove();
	}

	listTr.sort((a, b) => +a.lastChild.innerText - +b.lastChild.innerText);

	table.getElementsByTagName("tbody")[0].append(...listTr);
}

tableSort(document.getElementsByTagName("table")[0]);*/

														//Раздел: "Браузер: документ, события, интерфейсы", подраздел: "Стили и классы"
// function showNotification({top = 0, right = 0, html, className}) {
// 	let div = document.createElement("div");

// 	if(className)
// 		div.className = "notification" + ' ' + className;
// 	div.style.top = top + 'px';
// 	div.style.right = right + 'px';
// 	div.innerHTML = html;

// 	document.body.append(div);
	
// 	setTimeout(() => div.remove(), 1500);
// }

// showNotification({
//  	top: 10,
//   right: 10,
//   html: "Hello!",
//   className: "welcome"
// });

									//Раздел: "Браузер: документ, события, интерфейсы", подраздел: "Размеры и прокрутка элементов"
/*let elem = document.body;
alert(elemScrollBottom = elem.scrollHeight - elem.scrollTop - elem.clientHeight);*/

/*function scrollWidth() {
	let div = document.createElement("div");
	div.style.overflowY = 'scroll';
	div.style.width = '100px';
	div.style.height = '100px';

	document.body.append(div);
	return div.offsetWidth - div.clientLeft * 2 - div.clientWidth;
}

alert(scrollWidth());*/

/*let style = document.createElement("style");
style.innerHTML = `#field {
      width: 200px;
      border: 10px groove black;
      background-color: #00FF00;
      position: relative;
    }

    #ball {
      position: absolute;
      width: 40px;
      height: 40px;
    }`;

document.head.append(style);
document.getElementById("forTasks").innerHTML = `<div id="field">
    <img src="https://en.js.cx/clipart/ball.svg" id="ball"> . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
  </div>`;

function moveToCenter() {
	let field = document.getElementById("field");
	let ball = document.getElementById('ball');

	let left = field.clientWidth / 2 - ball.offsetWidth / 2;
	let top = field.clientHeight / 2 - ball.offsetHeight / 2;

	ball.style.left = left + 'px';
	ball.style.top = top + 'px';
}

moveToCenter();*/

											//Раздел: "Браузер: документ, события, интерфейсы", подраздел: "Координаты"
/*let elem = document.getElementById('field');
let coords = elem.getBoundingClientRec();
let topOut = {x: coords.x, y: coords.y};
let topIn = {x: coords.x + coords.width - elem.clientWidth,
  y: coords.y + coords.height - elem.clientHeight};
let botOut = {x: coords.right, y: coords.bottom};
let botIn = {x: topIn.x + coords.width, y: topIn.y + height};*/

/*function positionAt(anchor, position, elem) {
  let coords = anchor.getBoundingClientRect();
	elem.style.position = 'absolute';
  document.body.style.height = '2000px';

  switch (position) {
    case "top-out":
      elem.style.left = anchorCoords.left + "px";
      elem.style.top = anchorCoords.top - elem.offsetHeight + "px";
      break;
    case "right-out":
      elem.style.left = anchorCoords.left + anchor.offsetWidth + "px";
      elem.style.top = anchorCoords.top + "px";
      break;
    case "bottom-out":
      elem.style.left = anchorCoords.left + "px";
      elem.style.top = anchorCoords.top + anchor.offsetHeight + "px";
      break;
    case "top-in":
      elem.style.left = anchorCoords.left + "px";
      elem.style.top = anchorCoords.top + "px";
      break;
    case "right-in":
      elem.style.width = '150px';
      elem.style.left = anchorCoords.left + anchor.offsetWidth - elem.offsetWidth + "px";
      elem.style.top = anchorCoords.top + "px";
      break;
    case "bottom-in":
      elem.style.left = anchorCoords.left + "px";
      elem.style.top = anchorCoords.top + anchor.offsetHeight - elem.offsetHeight + "px";
      break;
  }
}*/

														//Раздел: "Введение в события", подраздел: "Введение в браузерные события"
/*hider.addEventListener("click", function(event) {
  text.style.display = 'none';
});*/

/*let style = document.createElement('style');
style.innerHTML =  `
    #field {
      width: 200px;
      height: 150px;
      border: 10px solid black;
      background-color: #00FF00;
      overflow: hidden;
      cursor: pointer;
    }
    #ball {
      position: absolute;
      transition: 1s;
    }`;
document.head.append(style);

forTasks.innerHTML = `Нажмите на поле для перемещения мяча.
  <br> Мяч не должен выходить за границы поля.


  <div id="field">
    <img src="https://ru.js.cx/clipart/ball.svg" id="ball"> . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
  </div>

  <script>
    let field = document.getElementById("field");
    let ball = document.getElementById('ball');

    function handler(event) {
      field.style.displey = 'none';
    }

    filed.addEventListener('click', handler);
  </script>`;

let field = document.getElementById("field");
let ball = document.getElementById('ball');

function handler(event) {
	let maxRight = window.pageXOffset + field.offsetLeft + field.offsetWidth - field.clientLeft - ball.offsetWidth;
	let maxLeft = window.pageXOffset + field.offsetLeft + field.clientLeft;
	let maxTop = window.pageYOffset + field.clientTop + field.offsetTop;
	let maxBottom = window.pageXOffset + field.offsetHeight + field.offsetTop - field.clientTop - ball.offsetHeight;

	let xClickCoords = event.clientX + window.pageXOffset - ball.offsetWidth / 2;
	let yClickCoords = event.clientY + window.pageYOffset - ball.offsetHeight / 2;

	let left = (xClickCoords < maxLeft) ? maxLeft : 
		(xClickCoords > maxRight) ? maxRight : xClickCoords;
	let top = (yClickCoords < maxTop) ? maxTop : 
		(yClickCoords > maxBottom) ? maxBottom : yClickCoords;

	ball.style.left = left + 'px';
	ball.style.top = top + 'px';

	console.log(left);
	console.log(top);
}

field.addEventListener('click', handler);*/

/*forTasks.innerHTML = `<p id="forClick">▶ Сладости (нажми меня)!</p>
  <ul>
    <li>Пирожное</li>
    <li>Пончик</li>
    <li>Мёд</li>
  </ul>`;

let style = document.createElement("style");
style.innerHTML = `
     ul {
      list-style-type: none;
    } `;
document.head.append(style);

let p = document.getElementById("forClick");
let ul = document.getElementsByTagName('ul')[0];

ul.style.display = 'none';

p.addEventListener('click', function(event) {
	this.innerText = this.innerText == '▶ Сладости (нажми меня)!' ? '▼ Сладости (нажми меня)!' : '▶ Сладости (нажми меня)!';
	ul.style.display = ul.style.display == 'none' ? '' : 'none';
});*/

/*forTasks.innerHTML = `
  <div>
    <div class="pane">
      <button class="remove-button">[x]</button>
      <h3>Лошадь</h3>
      <p>Домашняя лошадь — животное семейства непарнокопытных, одомашненный и единственный сохранившийся подвид дикой лошади, вымершей в дикой природе, за исключением небольшой популяции лошади Пржевальского.</p>
    </div>
    <div class="pane">
    <button class="remove-button">[x]</button>
      <h3>Осёл</h3>
      <p>Домашний осёл (лат. Equus asinus asinus), или ишак, — одомашненный подвид дикого осла (Equus asinus), сыгравший важную историческую роль в развитии хозяйства и культуры человека и по-прежнему широко в хозяйстве многих развивающихся стран.</p>
    </div>
    <div class="pane">
    <button class="remove-button">[x]</button>
      <h3>Кошка</h3>
      <p>Кошка, или домашняя кошка (лат. Felis silvestris catus), — домашнее животное, одно из наиболее популярных(наряду с собакой) «животных-компаньонов». Являясь одиночным охотником на грызунов и других мелких животных, кошка — социальное животное, использующее для общения широкий диапазон звуковых сигналов.</p>
    </div>
  </div>`

let style = document.createElement('style');
style.innerHTML =  `
 body {
  margin: 10px auto;
  width: 470px;
}

h3 {
  margin: 0;
  padding-bottom: .3em;
  font-size: 1.1em;
}

p {
  margin: 0;
  padding: 0 0 .5em;
}

.pane {
  background: #edf5e1;
  padding: 10px 20px 10px;
  border-top: solid 2px #c4df9b;
  position: relative;
}

.remove-button {
  font-size: 110%;
  color: darkred;
  right: 10px;
  width: 24px;
  height: 24px;
  border: none;
  background: transparent;
  cursor: pointer;
  position: absolute;
}
  `;
document.head.append(style);

let btn = document.getElementsByClassName('remove-button');
for(let b of btn) {
	b.onclick = function(event) {
		event.currentTarget.parentNode.hidden = true;
	};
}*/

																		//Раздел: "Введение в события", подраздел: "Делегирование событий"
/*document.addEventListener('click', function(event) {
  let target = event.target;
  if(!target.className) return;

  if(target.className == 'remove-button') {
    target.parentNode.hidden = true;
  }
});*/

/*forTasks.innerHTML = `  <ul class="tree" id="tree">
    <li><span>Животные</span>
      <ul>
        <li><span>Млекопитающие</span>
          <ul>
            <li><span>Коровы</span></li>
            <li><span>Ослы</span></li>
            <li><span>Собаки</span></li>
            <li><span>Тигры</span></li>
          </ul>
        </li>
        <li><span>Другие</span>
          <ul>
            <li><span>Змеи</span></li>
            <li><span>Птицы</span></li>
            <li><span>Ящерицы</span></li>
          </ul>
        </li>
      </ul>
    </li>
    <li><span>Рыбы</span>
      <ul>
        <li><span>Аквариумные</span>
          <ul>
            <li><span>Гуппи</span></li>
            <li><span>Скалярии</span></li>
          </ul>
        </li>
        <li><span>Морские</span>
          <ul>
            <li><span>Морская форель</span></li>
          </ul>
        </li>
      </ul>
    </li>
  </ul>`;

document.addEventListener('click', function(event) {
	let target = event.target;
	if(target.tagName != 'SPAN')
		return;

	if(target.parentNode.children.length == 1) return;

	target.parentNode.lastElementChild.hidden = !target.parentNode.lastElementChild.hidden;

});*/

/*forTasks.innerHTML = `<table id="grid">
  <thead>
    <tr>
      <th data-type="number">Возраст</th>
      <th data-type="string">Имя</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>5</td>
      <td>Вася</td>
    </tr>
    <tr>
      <td>10</td>
      <td>Петя</td>
    </tr>
  </tbody>
</table>`;

document.addEventListener('click', function(event) {
	let target = event.target;

	if(target.dataset.type == undefined)
		return;

	let trList = document.querySelectorAll('tbody > tr');
	let index = Array.from(target.parentNode.children).indexOf(target);
	let sorted = Array.from(trList).sort((a, b) => {
		if(target.dataset.type == 'number')
			return a.children[index].textContent - b.children[index].textContent;
		else
			return a.children[index].textContent > b.children[index].textContent ? 1 : -1;
	})

	let tbody = document.getElementsByTagName('tbody')[0];
	tbody.innerHTML = '';
	tbody.append(...sorted);
});*/

/*let tooltipElem;

document.onmouseover = function(event) {
  let target = event.target;

  let tooltipHtml = target.dataset.tooltip;
  if (!tooltipHtml) return;

  tooltipElem = document.createElement('div');
  tooltipElem.className = 'tooltip';
  tooltipElem.innerHTML = tooltipHtml;
  document.body.append(tooltipElem);

  let coords = target.getBoundingClientRect();

  let left = coords.left + (target.offsetWidth - tooltipElem.offsetWidth) / 2;
  if (left < 0) left = 0;

  let top = coords.top - tooltipElem.offsetHeight - 5;
  if (top < 0) {
    top = coords.top + target.offsetHeight + 5;
  }

  tooltipElem.style.left = left + 'px';
  tooltipElem.style.top = top + 'px';
};

document.onmouseout = function(e) {

  if (tooltipElem) {
    tooltipElem.remove();
    tooltipElem = null;
  }

};*/

																			//Раздел: "Введение в события", подраздел: "Действия браузера по умолчанию"
/*contents.onclick = function(event) {

      function handleLink(href) {
        let isLeaving = confirm(`Leave for ${href}?`);
        if (!isLeaving) return false;
      }

      let target = event.target.closest('a');

      if (target && contents.contains(target)) {
        return handleLink(target.getAttribute('href'));
      }
    };*/

/*forTasks.innerHTML = `  <p><img id="largeImg" src="https://en.js.cx/gallery/img1-lg.jpg" alt="Large image"></p>

  <ul id="thumbs">
    <!-- браузер показывает небольшую встроенную подсказку из атрибута "title" при наведении курсора на текст -->
    <li>
      <a href="https://en.js.cx/gallery/img2-lg.jpg" title="Image 2"><img src="https://en.js.cx/gallery/img2-thumb.jpg"></a>
    </li>
    <li>
      <a href="https://en.js.cx/gallery/img3-lg.jpg" title="Image 3"><img src="https://en.js.cx/gallery/img3-thumb.jpg"></a>
    </li>
    <li>
      <a href="https://en.js.cx/gallery/img4-lg.jpg" title="Image 4"><img src="https://en.js.cx/gallery/img4-thumb.jpg"></a>
    </li>
    <li>
      <a href="https://en.js.cx/gallery/img5-lg.jpg" title="Image 5"><img src="https://en.js.cx/gallery/img5-thumb.jpg"></a>
    </li>
    <li>
      <a href="https://en.js.cx/gallery/img6-lg.jpg" title="Image 6"><img src="https://en.js.cx/gallery/img6-thumb.jpg"></a>
    </li>
  </ul>`;

let style = document.createElement('style');
style.innerHTML =  `body {
  margin: 0;
  padding: 0;
  font: 75%/120% sans-serif;
}

#largeImg {
  border: solid 1px #ccc;
  width: 550px;
  height: 400px;
  padding: 5px;
}

#thumbs a {
  border: solid 1px #ccc;
  width: 100px;
  height: 100px;
  padding: 3px;
  margin: 2px;
  float: left;
}

#thumbs a:hover {
  border-color: #FF9900;
}

#thumbs li {
  list-style: none;
}

#thumbs li img {
	width: 100px;
	height: 100px;
}

#thumbs {
  margin: 0;
  padding: 0;
}`;
document.head.append(style);

thumbs.addEventListener('click', function(event) {
  let target = event.target;

  let closestA = target.closest('a');
  if(!closestA) return;

  let tempSrc = largeImg.src;
  let	tempTitle = largeImg.title;

  largeImg.src = closestA.href;
  largeImg.title = closestA.title;

  closestA.href = tempSrc;
  closestA.title =  tempTitle
  target.src = tempSrc;

  event.preventDefault();
})*/

																				//Раздел: "Интерфейсные события", подраздел: "Основы событий мыши"
/*forTasks.innerHTML = `  Кликни на элемент списка, чтобы выделить его.
  <br>

  <ul id="ul">
    <li>Кристофер Робин</li>
    <li>Винни Пух</li>
    <li>Тигра</li>
    <li>Кенга</li>
    <li>Кролик. Просто Кролик.</li>
  </ul>`;

ul.onclick = function(event) {
  let target = event.target;
  let closestLi = target.closest('li');

  if(!closestLi) return;

  if (!event.metaKey && !event.ctrlKey) {
    for(let li of ul.getElementsByTagName('li'))
      li.style.backgroundColor = '';
  }

  closestLi.style.backgroundColor = 'green';
}

ul.onmousedown = function() { return false };*/

																//Раздел: "Интерфейсные события", подраздел: "Движение мыши: mouseover/out, mouseenter/leave" 
/*forTasks.innerHTML = `<div data-tooltip="Здесь домашний интерьер" id="house">
    <div data-tooltip="Здесь крыша" id="roof"></div>

    <p>Жили-были на свете три поросенка. Три брата. Все одинакового роста, кругленькие, розовые, с одинаковыми веселыми хвостиками.</p>

    <p>Даже имена у них были похожи. Звали поросят: Ниф-Ниф, Нуф-Нуф и Наф-Наф. Все лето они кувыркались в зеленой траве, грелись на солнышке, нежились в лужах.</p>

    <p>Но вот наступила осень. Солнце уже не так сильно припекало, серые облака тянулись над пожелтевшим лесом.</p>

    <p>- Пора нам подумать о зиме, - сказал как-то Наф-Наф. <a href="https://ru.wikipedia.org/wiki/%D0%A2%D1%80%D0%B8_%D0%BF%D0%BE%D1%80%D0%BE%D1%81%D1%91%D0%BD%D0%BA%D0%B0" data-tooltip="Читать далее…">Наведи курсор на меня</a></p>

  </div>`;

let style = document.createElement('style');
style.innerHTML = `forTasks {
      height: 2000px;
    }

    .tooltip {
      position: fixed;
      z-index: 100;

      padding: 10px 20px;

      border: 1px solid #b3c9ce;
      border-radius: 4px;
      text-align: center;
      font: italic 14px/1.3 sans-serif;
      color: #333;
      background: #fff;
      box-shadow: 3px 3px 3px rgba(0, 0, 0, .3);
    }

    #house {
      margin-top: 50px;
      width: 400px;
      border: 1px solid brown;
    }

    #roof {
      width: 0;
      height: 0;
      border-left: 200px solid transparent;
      border-right: 200px solid transparent;
      border-bottom: 20px solid brown;
      margin-top: -20px;
    }

    p {
      text-align: justify;
      margin: 10px 3px;
    }`;
document.head.append(style);

let tooltip = false;

document.onmouseover = function(event) {
  let anchorElem = event.target.closest('[data-tooltip]');
  if (!anchorElem) return;
  tooltip = showTooltip(anchorElem, anchorElem.dataset.tooltip);
}

document.onmouseout = function() {
  if (tooltip) {
    tooltip.remove();
    tooltip = false;
  }
}


function showTooltip(anchor, html) {
  let tooltipElem = document.createElement('div');
  tooltipElem.className = 'tooltip';
  tooltipElem.innerHTML = html;
  document.body.append(tooltipElem);

  let coords = anchor.getBoundingClientRect();

  let left = coords.left + (anchor.offsetWidth - tooltipElem.offsetWidth) / 2;
  if (left < 0) left = 0;

  let top = coords.top - tooltipElem.offsetHeight - 5;
  if (top < 0) {
    top = coords.top + anchor.offsetHeight + 5;
  }

  tooltipElem.style.left = left + 'px';
  tooltipElem.style.top = top + 'px';

  return tooltipElem;
}*/

/*class HoverIntent {

  constructor({ sensitivity = 0.1, interval = 100, elem,over,out }) {
    this.sensitivity = sensitivity;
    this.interval = interval;
    this.elem = elem;
    this.over = over;
    this.out = out;

    this.onMouseMove = this.onMouseMove.bind(this);
    this.onMouseOver = this.onMouseOver.bind(this);
    this.onMouseOut = this.onMouseOut.bind(this);

    this.trackSpeed = this.trackSpeed.bind(this);
    elem.addEventListener("mouseover", this.onMouseOver);
    elem.addEventListener("mouseout", this.onMouseOut);
  }

  onMouseOver(event) {

    if (this.isOverElement) {
      return;
    }

    this.isOverElement = true;
    this.prevX = event.pageX;
    this.prevY = event.pageY;
    this.prevTime = Date.now();

    elem.addEventListener('mousemove', this.onMouseMove);
    this.checkSpeedInterval = setInterval(this.trackSpeed, this.interval);
  }

  onMouseOut(event) {
    if (!event.relatedTarget || !elem.contains(event.relatedTarget)) {
      this.isOverElement = false;
      this.elem.removeEventListener('mousemove', this.onMouseMove);
      clearInterval(this.checkSpeedInterval);
      if (this.isHover) {
        this.out.call(this.elem, event);
        this.isHover = false;
      }
    }
  }

  onMouseMove(event) {
    this.lastX = event.pageX;
    this.lastY = event.pageY;
    this.lastTime = Date.now();
  }

  trackSpeed() {

    let speed;
    if (!this.lastTime || this.lastTime == this.prevTime) {
     
      speed = 0;
    } else {
      speed = Math.sqrt(
        Math.pow(this.prevX - this.lastX, 2) +
        Math.pow(this.prevY - this.lastY, 2)
      ) / (this.lastTime - this.prevTime);
    }

    if (speed < this.sensitivity) {
      clearInterval(this.checkSpeedInterval);
      this.isHover = true;
      this.over.call(this.elem);
    } else {
      this.prevX = this.lastX;
      this.prevY = this.lastY;
      this.prevTime = this.lastTime;
    }
  }

  destroy() {
    elem.removeEventListener('mousemove', this.onMouseMove);
    elem.removeEventListener('mouseover', this.onMouseOver);
    elem.removeEventListener('mouseout', this.onMouseOut);
  }
}*/

																	//Раздел: "Интерфейсные события", подраздел: "Drag'n'Drop с событиями мыши"
/*forTasks.innerHTML = `  <div id="slider" class="slider">
    <div class="thumb"></div>
  </div>`;

let style = document.createElement('style');
style.innerHTML = `.slider {
  border-radius: 5px;
  background: #E0E0E0;
  background: linear-gradient(left top, #E0E0E0, #EEEEEE);
  width: 310px;
  height: 15px;
  margin: 5px;
}

.thumb {
  width: 10px;
  height: 25px;
  border-radius: 3px;
  position: relative;
  left: 10px;
  top: -5px;
  background: blue;
  cursor: pointer;
}`;

document.head.append(style);

let thumb = document.getElementsByClassName('thumb')[0];

let rigthBorder = slider.clientLeft + slider.clientWidth - 5;
let leftBorder = slider.clientLeft + 5;

thumb.onmousedown = function(event) {
	let shiftX = event.clientX - thumb.getBoundingClientRect().left;

	forTasks.style.position = 'relative';
  thumb.style.position = 'absolute';
  thumb.style.zIndex = 1000;

  moveAt(event.pageX);

  function moveAt(pageX) {
  	let nextPos = pageX - shiftX - forTasks.offsetLeft;
	  thumb.style.left = (nextPos < leftBorder) ? leftBorder :
	   (nextPos > rigthBorder) ? rigthBorder : nextPos + 'px';
 	}

 	function onMouseMove(event) {
 		moveAt(event.clientX);
 	}

 	document.addEventListener('mousemove', onMouseMove);

 	document.onmouseup = function(event) {
		document.removeEventListener('mousemove', onMouseMove);
		thumb.onmouseup = null;
	} 
}

document.ondragstart = function() {
  return false;
};*/

																		//Раздел: "Интерфейсные события", подраздел: "Клавиатура: keydown и keyup"
/*function runOnKeys(func, ...codes) {
	let pressed = new Set();

	document.onkeydown = function(event) {
		pressed.add(event.code);

		for(let code of codes){
			if(!pressed.has(code))
				return;
		}

		pressed.clear();
		func();
	}

	document.onkeyup = function(event) {
		pressed.delete(event.code);
	}
}

runOnKeys(
  () => alert("Привет!"),
  "KeyQ",
  "KeyW"
);*/

																		//Раздел: "Интерфейсные события", подраздел: "Прокрутка"
/*function insertDate() {
  while(true) {
    let windowBot = document.documentElement.getBoundingClientRect().bottom;
    if (windowBot > document.documentElement.clientHeight + 100) break;
    forTasks.insertAdjacentHTML("beforeend", `<p>${new Date()}</p>`);
  }
}

window.addEventListener('scroll', insertDate);
insertDate();

let up = document.createElement('a');
up.style.position = 'fixed';
forTasks.style.marginLeft = 30 + 'px';
up.style.left = 10 + 'px';
up.style.fontSize = 20 + 'px';
up.style.up = 10 + 'px';
up.innerHTML = '↑';
up.hidden = true;

up.onclick = function() {
	window.scrollTo(pageXOffset, 0);
}

document.body.prepend(up);

function checkDistance() {
	if(pageYOffset >= document.documentElement.clientHeight)
		up.hidden = false;
	else
		up.hidden = true;
}

window.addEventListener('scroll', checkDistance);*/

/*function isVisible(elem) {

  let coords = elem.getBoundingClientRect();
  let windowHeight = document.documentElement.clientHeight;

  let extendedTop = -windowHeight;
  let extendedBottom = 2 * windowHeight;
  let topVisible = coords.top > extendedTop && coords.top < extendedBottom;
  let bottomVisible = coords.bottom < extendedBottom && coords.bottom > extendedTop;

  return topVisible || bottomVisible;
}

function showVisible() {
  for (let img of document.querySelectorAll('img')) {
    let realSrc = img.dataset.src;
    if (!realSrc) continue;

    if (isVisible(img)) {
      realSrc += '?nocache=' + Math.random();
      img.src = realSrc;
      img.dataset.src = '';
    }
  }
}*/

																	//Раздел: "Формы, элементы управления", подраздел: "Свойства и методы формы"
// forTasks.innerHTML = `<select id="genres">
//   <option value="rock">Рок</option>
//   <option value="blues" selected>Блюз</option>
// </select>`;

// let newOpt = new Option('Классика', 'classic', true, true);
// genres.append(newOpt);
// let selected = genres.options[genres.selectedIndex];
// alert(`value: ${selected.value}, text: ${selected.text}`);

																	//Раздел: "Формы, элементы управления", подраздел: "Фокусировка: focus/blur"
/*forTasks.style.height = 500 + 'px';
forTasks.style.border = '1px solid black';
forTasks.tabIndex = 1;

forTasks.addEventListener('focusin', function(event) {
	event.target.outerHTML = '<textarea id="forTasks"></textarea>';
	forTasks.focus();
	forTasks.addEventListener('focusout', function(event) {
		event.target.outerHTML = event.target.value;
	})
});*/

/*forTasks.innerHTML = `  <p>Кликните по "изображению" мыши и перемещайте её с помощью клавиш со стрелками.</p>

  <pre><span id="mouse" style="display: block; width: min-content; position: fixed;">
 _   _
(q\\_/p)
 /. .\\
=\\_t_/=   __
 /   \\   (
((   ))   )
/\\) (/\\  /
\\  Y  /-'
 nn^nn</span>
</pre>`;

function move(event) {
	let target = mouse;
	switch(event.code) {
		case 'ArrowRight':
			target.style.left = target.offsetLeft + 100 + 'px';
			break;
		case 'ArrowLeft':
			target.style.left = target.offsetLeft - 100 + 'px';
			break;
		case 'ArrowDown':
			target.style.top = target.offsetTop + 100 + 'px';
			break;
		case 'ArrowUp':
			target.style.top = target.offsetTop - 100 + 'px';
			break;
		default:
			break;
	}
}

mouse.addEventListener('click', function(event) {
	let target = event.target;
	target.style.border = '1px solid black';
	target.focus();

	document.addEventListener('keydown', move);
});

document.addEventListener('click', function(event) {
	if(event.target.id == 'mouse')
		return;
	document.removeEventListener('keydown', move);
	mouse.style.border = '';
});*/

													//Раздел: "Формы, элементы управления", подраздел: "События: change, input, cut, copy, paste"
/*forTasks.innerHTML = `  <form name="calculator">
    <table>
      <tr>
        <td>Первоначальный депозит</td>
        <td>
          <input name="money" type="number" value="10000" required>
        </td>
      </tr>
      <tr>
        <td>Срок вклада?</td>
        <td>
          <select name="months">
            <option value="3">3 (минимум)</option>
            <option value="6">6 (полгода)</option>
            <option value="12" selected>12 (год)</option>
            <option value="18">18 (1.5 года)</option>
            <option value="24">24 (2 года)</option>
            <option value="30">30 (2.5 года)</option>
            <option value="36">36 (3 года)</option>
            <option value="60">60 (5 лет)</option>
          </select>
        </td>
      </tr>
      <tr>
        <td>Годовая процентная ставка?</td>
        <td>
          <input name="interest" type="number" value="5" required>
        </td>
      </tr>
    </table>


  </form>


  <table id="diagram">
    <tr>
      <th>Было:</th>
      <th>Станет:</th>
    </tr>
    <tr>
      <th id="money-before"></th>
      <th id="money-after"></th>
    </tr>
    <td>
      <div style="background: red;width:40px;height:100px"></div>
    </td>
    <td>
      <div style="background: green;width:40px;height:0" id="height-after"></div>
    </td>
  </table>`;

let style = document.createElement('style');
style.innerHTML = `    td select,
    td input {
      width: 150px;
    }

    #diagram td {
      vertical-align: bottom;
      text-align: center;
      padding: 10px;
    }

    #diagram div {
      margin: auto;
    }`;
document.head.append(style);

let form = document.forms.calculator;

form.money.oninput = calc;
form.months.onchange = calc;
form.interest.oninput = calc;

function calc() {
  let initial = +form.money.value;
  if (!initial) return;

  let interest = form.interest.value * 0.01;

  if (!interest) return;

  let years = form.months.value / 12;
  if (!years) return;

  let result = Math.round(initial * (1 + interest) ** years);

  let height = result / form.money.value * 100 + 'px';
  document.getElementById('height-after').style.height = height;
  document.getElementById('money-before').innerHTML = form.money.value;
  document.getElementById('money-after').innerHTML = result;
}

calc();*/

												//Раздел: "Загрузка документа и ресурсов", подраздел: "Загрузка ресурсов: onload и onerror"
/*function preloadImages(sources, callback) {
  let counter = 0;

  function onLoad() {
    counter++;
    if (counter == sources.length) callback();
  }

  for(let source of sources) {
    let img = document.createElement('img');
    img.onload = img.onerror = onLoad;
    img.src = source;
  }
}*/

