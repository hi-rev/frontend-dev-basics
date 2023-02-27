imageViewer = {
	init: function() {
		$(function() {
			$("#btn-change").click(this._changeImage.bind(this));
			$("#btn-slideshow").click(this._slideShow.bind(this));
			
			// 초기 이미지 선택
			this._changeImage();
		}.bind(this));
	},
	
	_changeImage: function() { // 이미지 변경 버튼 눌렀을 때 동작
		do {
				var index = Math.floor(Math.random()*this._images.length); // 랜덤 _images 배열 인덱스값
				var info = this._images[index]; // 랜덤 이미지 정보
		} while ($("img").attr("title") === info.name);
		
		$("img").attr({
			src: "images/" + info.file,
			title: info.name
		});
	},
	
	_slideShow: function() { // 슬라이드쇼 버튼 눌렀을 때 동작
		if (this._intervalId) {
			// 슬라이드 쇼 진행 중
			
			// 1. 타이머 정지
			clearInterval(this._intervalId);
			this._intervalId = null;
			
			// 2. 버튼 변경
			$("#btn-slideshow").text("슬라이드 쇼 시작");
		} else {
			// 슬라이드 쇼 멈춘 상태
			
			// 1. 타이머 시작
			this._intervalId = setInterval(function() {
				this._changeImage();
			}.bind(this), 1000);
			
			// 2. 버튼 변경
			$("#btn-slideshow").text("슬라이드 쇼 중지");
		}
	},
	
	_intervalId: null,
	
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


/* imageViewer = {
	init: function() {
		var index = this._changeImage();
		return index;
	},
	_changeImage: function() {
		var index = Math.floor(Math.random()*images.length); // 랜덤 _images 배열 인덱스값
		// console.log(index);
		return index;
	},
}

var images = [{
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
}];

$(function() {
	var checked = true;
	var interval;
	
	// 1. 이미지 변경 버튼
	$('#btn-change').click(function() {
		var currentImage = $("img").attr("title"); // 현재 이미지의 title값
		var currentIndex = images.findIndex(e => e.name == currentImage); // 현재 이미지의 배열 인덱스값
		
		// 현재 그림과 같은 이미지일 경우 다른 이미지 인덱스로 대체
		var imageIndex = imageViewer.init();
		if (imageIndex == currentIndex) {
			if (imageIndex == images.length - 1) {
				imageIndex -= 1;
			} else {
				imageIndex += 1;
			}
		}
		console.log(imageIndex);
		// 이미지 변경하기
		var imageData = images[imageIndex];
		$("img").attr("src", "images/" + imageData.file)
					  .attr("title", imageData.name);
	});
	
	// 2. 슬라이드쇼 버튼
	$('#btn-slideshow').click(function() {
		if (checked) {
			$("#btn-slideshow").text("슬라이드쇼 중지");
			checked = false;
			
			// setInterval 사용: 1초마다 이미지 변경
			interval = setInterval(function() {
				var currentImage = $("img").attr("title"); // 현재 이미지의 title값
				var currentIndex = images.findIndex(e => e.name == currentImage); // 현재 이미지의 배열 인덱스값
				
				// 현재 그림과 같은 이미지일 경우 다른 이미지 인덱스로 대체
				var imageIndex = imageViewer.init();
				if (imageIndex == currentIndex) {
					if (imageIndex == images.length - 1) {
						imageIndex -= 1;
					} else {
						imageIndex += 1;
					}
				}
				console.log(imageIndex);
				// 이미지 변경하기
				var imageData = images[imageIndex];
				$("img").attr("src", "images/" + imageData.file)
							  .attr("title", imageData.name);
			}, 1000);
		} else {
			$("#btn-slideshow").text("슬라이드쇼 시작");
			checked = true;
			clearInterval(interval);
		}
	});
}); */