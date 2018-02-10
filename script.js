$(document).ready(function() {

	let images = [{
		src: './assets/img/background1.jpg'
	}, {
		src: './assets/img/background2.jpg'
	}, {
		src: './assets/img/background3.jpg'
	}, {
		src: './assets/img/background1.jpg'
	}, {
		src: './assets/img/background2.jpg'
	}, {
		src: './assets/img/background3.jpg'
	}];

	let renderImages = () => {
		let slider = $('#preview-content');
		$(slider).empty();
		let main = $('#body-main-image');
		main.css({
			'background-image': 'url(' + images[0].src + ')'
		});
		for (var i = 0; i < images.length; i++) {
			let info = images[i];
			let node = $('<div class="image-preview"></div>');
			let image = $('<div class="image"></div>');
			image.data('name', info.src);
			image.click(changeMainImage);
			image.css({
				'background-image': 'url(' + info.src + ')'
			});
			node.append(image);
			slider.append(node);
		}
	};

	let changeMainImage = (event) => {
		let image = $('#body-main-image');
		let path = $(event.target).data('name');
		image.css({
			'background-image': 'url(' + path + ')'
		});
	};

	let changeMain = (event) => {
		let width = $(event.target).width();
		let x = event.clientX;
		if (x > width) {
			let element = images[0];
			images.shift();
			images.push(element);
			renderImages();
		} else {
			let actual = images.pop();
			images.unshift(actual);
			renderImages();
		}
	};


	let init = () => {
		renderImages();
		let image = $('#image-body').click(changeMain);
		setInterval(() => {
			let element = images[0];
			images.shift();
			images.push(element);
			renderImages();
		}, 5000);
	};

	init();
});