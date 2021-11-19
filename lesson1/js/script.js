const $iconMenu = document.querySelector('.header_burger');
const $menuBody = document.querySelector('.header_menu');

if ($iconMenu) {
	$iconMenu.addEventListener('click', function (e) {
		document.body.classList.toggle('lock');
		$iconMenu.classList.toggle('active');
		$menuBody.classList.toggle('active');
	})
}