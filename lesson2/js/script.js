function qList() {
	let name;
	let age;
	let prof;
	let dish;
	let qLast;
	cycleName: {do {
		name = prompt('Как тебя зовут?')
		age = prompt('Сколько тебе лет?');
		prof = prompt('Какая тебя профессия?');
		dish = prompt('Какое твоё любимое блюдо?')
		qLast = confirm(`
		Имя: ${name},
		Возраст: ${age},
		Профессия: ${prof},
		Любимое блюдо: ${dish}
		`)
	} while (qLast == false) {
		break cycleName;
	}	} return;
}

qList();