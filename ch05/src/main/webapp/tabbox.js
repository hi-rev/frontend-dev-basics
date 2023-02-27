var TabBox = {
	// _: 내부에서 구현한 함수 html에 가져와 사용할 필요 X
		_onTabClicked: function() {
			$('.tab-box ul li.selected').removeClass("selected");
			$(this).addClass("selected");
		},
		
		_initialize: function() {
			$('.tab-box ul li').click(this._onTabClicked);
		},
		
		init: function() {
			// $(function() {
			//    	$('.tab-box ul li').click(this.onTabClicked);
			// }.bind(this));
			
			$(TabBox._initialize);
		}
}