/* globals Gator, alert */

if (console) {
	console.log("It's %csoftware-related%c, though, in case you were wondering.", 'color: red', 'color:black');
}

Gator(document).on('click', '#trigger-train', function(e) {
	var line = document.getElementById('main-train-line');
	line.toggleClass('animating');
});