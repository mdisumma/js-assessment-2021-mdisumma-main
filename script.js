var DateTime = luxon.DateTime;

const today = new Date();
const todayDay = today.getDate();
const todayMonth = today.getMonth();
const todayYear = today.getFullYear();
console.log(`${todayDay} ${todayMonth} ${todayYear}`);

fetch("roadmap.json")
	.then(function (response) {
		return response.json();
	})
	.then(function (response) {
		console.log(response);
		const orderDays = response.events.reverse();
		console.log(orderDays);
		document.querySelector("button").addEventListener("click", function (e) {
			console.log(e);

			for (let value of response.events) {
				const formatDay = DateTime.fromISO(value.date).toFormat("d");
				const formatMonth = DateTime.fromISO(value.date).toFormat("L");
				const formatYear = DateTime.fromISO(value.date).toFormat("y");
				const roadmapData = document.querySelector(".elements");
				roadmapData.innerHTML += `<ul>
            <li>Date:${formatDay} - ${formatMonth} - ${formatYear}</li>
            <li>Event:${value.event}</li>
            <li>Today:${todayDay} - ${todayMonth} - ${todayYear}</li>
            </ul>`;
			}
		});
	});
