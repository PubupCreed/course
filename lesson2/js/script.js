const qList = () => {
	let qLast;
	cycleName: {do {
		let name = prompt('Как тебя зовут?')
		let age = prompt('Сколько тебе лет?');
		let prof = prompt('Какая тебя профессия?');
		let dish = prompt('Какое твоё любимое блюдо?')
		qLast = confirm(`
		Имя: ${name},
		Возраст: ${age},
		Профессия: ${prof},
		Любимое блюдо: ${dish}
		`)
	} while (!qLast) {
		break cycleName;
	}	} return;
}

qList();