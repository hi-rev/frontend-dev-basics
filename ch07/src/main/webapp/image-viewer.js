imageViewer = {
	init: function() {
		var index = this._changeImage();
		return this._images[index];
	},
	_changeImage: function() {
		var index = Math.floor(Math.random()*this._images.length); // 랜덤 _images 배열 인덱스값
		// console.log(index);
		return index;
	},
	_images: [{
		name: '국화', 
		file: 'Chrysanthemum.jpg'
	}, {
		name: '사막', 
		file: 'Desert.jpg'
	}, {
		name: '수국', 
		file: 'Hydrangeas.jpg'
	}, {
		name: '젤리피쉬', 
		file: 'Jellyfish.jpg'
	}, {
		name: '코알라', 
		file: 'Koala.jpg'
	}, {
		name: '등대', 
		file: 'Lighthouse.jpg'
	}, {
		name: '펭귄', 
		file: 'Penguins.jpg'
	}, {
		name: '튤립', 
		file: 'Tulips.jpg'
	}]
}