 document.addEventListener("DOMContentLoaded", onLoad);

let selectedDates;
let selectedCount = 0;
let mastersList = masters.masters;
let prevData;
let selectedCellId;

function onLoad() {
	let inputDate = document.querySelector('input[type="date"]');
	inputDate.value = formatDate(new Date());
	prevData = inputDate.value;

	selectedDates = new Map();
	selectedDates.set(inputDate.value, []);

	fillMasters(mastersList);

	document.addEventListener('click', function(event) {
		if(event.target.tagName == 'INPUT' && event.target.parentNode.className == 'master-card') {
			showSchedule(event.target)
		}
	});

	inputDate.addEventListener('input', function(event) {
		changeElems(event);
	});

	document.addEventListener('click', function(event) {
		let target = event.target;
		let modalWindow = document.getElementById('add-sign');

		if(target.className == 'btn-close') {
			modalWindow.style.display = 'none';
		}

		if(target.className == "time-card") {
			selectedCellId = target.id;
			modalWindow.style.display = 'flex';

			let parentSchedule = target.parentNode.parentNode;
			document.getElementById('input-date').value = parentSchedule.querySelector('.dateHeader').innerText;
			document.getElementById('input-time').value = target.innerText;
			document.getElementById('input-master').value = parentSchedule.querySelector('.nameHeader').innerText;
		}

		if(target.className == 'btn-sign') {
			let inputName = document.getElementById('input-patient');
			if(inputName.value != '') {
				let selectedCell = document.getElementById(selectedCellId);
				selectedCell.classList.add('occupied');
				selectedCell.innerText = inputName.value;

				let connectedSchedule = document.getElementById(selectedCellId).parentNode.parentNode;

				localStorage[selectedCellId] = inputName.value;
				
				modalWindow.style.display = 'none';
				inputName.value = '';
			}
		}
	});
}

function changeElems(event) {
	selectedCount = 0;
	let shedulesList = document.getElementById('schedules-list');
		let list = shedulesList.children
	for(let i = 0; i < list.length; i++) {
		if(list[i].id != 'scheduleForCopy') {
			console.log(`remove: ${list[i].id}`);
			list[i].remove();
			i--;
		}
	}

	let prevCheckboxes = selectedDates.get(prevData);
	for(let item of prevCheckboxes) {
		let checkbox = document.getElementById(item.id.split('-')[0]);
		checkbox.checked = false;
	}

	if(!selectedDates.get(event.target.value)) {
		selectedDates.set(event.target.value, []);
	} else {
		let mas = selectedDates.get(event.target.value);
		
		for(let item of mas) {
			shedulesList.append(item.cloneNode(true));
			selectedCount++;
			let currentShedule = shedulesList.lastChild;

			for(let id in localStorage) {

				if (!localStorage.hasOwnProperty(id)) {
    				continue;
  				}

				let elems = currentShedule.querySelector('#time-list').children;
				let timeCard = Array.from(elems).find(item => item.id == id);
				if(timeCard) {
					timeCard.classList.add('occupied');
					timeCard.innerText = localStorage.getItem(id);
				}
			}
		}
	}

	let curCheckboxes = selectedDates.get(event.target.value);
	for(let item of curCheckboxes) {
		let checkbox = document.getElementById(item.id.split('-')[0]);
		checkbox.checked = true;
	}

	prevData = event.target.value;

	updateSpan();
}

function formatDate(date) {

  var dd = date.getDate();
  if (dd < 10) dd = '0' + dd;

  var mm = date.getMonth() + 1;
  if (mm < 10) mm = '0' + mm;

  var yyyy = date.getFullYear();

  return yyyy + '-' + mm + '-' + dd;
}

function fillMasters(masterList) {
	let templateMaster = document.getElementById('masterForCopy');
	for(let i = 0; i < masterList.length; i++) {
		let newMaster = templateMaster.cloneNode(true);
		newMaster.removeAttribute('id');
		let newId = `master${i}`;

		let input = newMaster.querySelector('input');
		let label = newMaster.querySelector('label');

		input.id = newId;
		label.setAttribute('for', newId);

		label.innerText = masterList[i].fullName;

		document.getElementById('masters-list').append(newMaster);
	}
	updateSpan();
}

function updateSpan() {
	let span = document.getElementById('count-info');
	span.innerText = `(${selectedCount}/${mastersList.length})`;
}

function showSchedule(target) {
	let templateSchedule = document.getElementById('scheduleForCopy');
	let inputDate = document.querySelector('input[type="date"]');
	if(target.checked) {
		selectedCount++;
		let newSchedule = templateSchedule.cloneNode(true);
		newSchedule.id = target.id + '-' + inputDate.value;

		let divDate = newSchedule.querySelector('.dateHeader');
		let divName = newSchedule.querySelector('.nameHeader');

		let index = +target.id.slice(6);
		divDate.innerText = inputDate.value;
		divName.innerText = mastersList[index].fullName;

		let startDate = mastersList[index].workStart.split(':');
		let endDate = mastersList[index].workEnd.split(':');
		let startDateTr = +startDate[0] * 60 + +startDate[1];
		let endDateTr = +endDate[0] * 60 + +endDate[1];

		for(let i = startDateTr; i <= endDateTr; i += 10) {
			let templateTime = document.getElementById('timeForCopy');
			let newTime = templateTime.cloneNode(true);
			newTime.innerText = `${Math.floor(i / 60)}:${i % 60 == 0 ? '00' : i % 60}`;
			newTime.id = newSchedule.id + '-' + newTime.innerText.split(':')[0] + newTime.innerText.split(':')[1];
			let timeList = newSchedule.querySelector('#time-list');

			if(localStorage.getItem(newTime.id) !== null) {
				newTime.classList.add("occupied");
				newTime.innerText = localStorage.getItem(newTime.id);
			}

			timeList.append(newTime);
		}

		document.getElementById('schedules-list').append(newSchedule);
		selectedDates.get(inputDate.value).push(newSchedule.cloneNode(true));
		updateSpan();

	} else {
		selectedCount--;
		let mas = selectedDates.get(inputDate.value);
		let forRemove = mas.find(item => item.id == target.id + '-' + inputDate.value);
		mas.splice(mas.indexOf(forRemove), 1);
		document.getElementById(target.id + '-' + inputDate.value).remove();
		updateSpan();
	}
}


