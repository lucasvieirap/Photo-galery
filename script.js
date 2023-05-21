const form = document.querySelector(".submitImageForm");
const submit = document.querySelector(".submitImage");
const photoParent = document.querySelector(".photos");
const fileInput = document.querySelector("#uploadFile");

let imagesSrcs = [];

loadExampleFiles();

getImages();
function getImages() {
	submit.addEventListener("click", () => {
		const file = fileInput.files;
		console.log(file);
		imagesSrcs.push(file[0]);
		drawImages();
	})	
}

function drawImages() {
	clearImages();
	loadExampleFiles();
	imagesSrcs.forEach((image, index) => {
		let images = "";
		images = `<img src="${URL.createObjectURL(image)}" alt="image" class="photo">`;	
		console.log(URL.createObjectURL(image));
		photoParent.innerHTML += images;
	})
}

function clearImages() {
	photoParent.innerHTML = "";
}

function loadExampleFiles() {
	let images = "";
	for (let i = 0; i < 4; i++) {
		images = `<img src="res/photoExample${i+1}.jpg" alt="image" class="photo">`
		photoParent.innerHTML += images;
	}
}
