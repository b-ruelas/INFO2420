
var imgArray = new Array(
	'DogTrick2Lg.jpg',
	'HuntingDogsLg.jpg',
	'HamsterLg.jpg',
	'BirdDogLg.jpg'
);

var titleArray = new Array(
	'Dog Performing a Trick',
	'Hunting Dogs',
	'Hamster',
	'Bird Dog'
);

var imgPath = "Images/Fullsize/fullsize/";

function swapImage(imgID) {

	var theImage = document.getElementById('theImage');
	var textDiv = document.getElementById('bottomText');

	var newImg = imgArray[imgID];
	theImage.src = imgPath + newImg;

	var textTitle = titleArray[imgID];
	textDiv.innerHTML = textTitle;
}

function preloadImages() {
	for (var i = 0; i < imgArray.length; i++) {
		var tmpImg = new Image();
		tmpImg.src = imgPath + imgArray[i];
	}

	
	var tmpLogo = new Image();
	tmpLogo.src = "Images/logo2.jpg";
}
