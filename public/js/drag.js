$(function() {
	$('#box').bind('mousedown', function(mde) {
		mde.preventDefault();
		
		var mdeX = mde.pageX;
		var mdeY = mde.pageY;
		
		var $this = $(this);		
		var $temp = $this.clone();		
		$('body').append($temp);
		
		var halfHeight = $temp.outerHeight() / 2;
		var halfWidth = $temp.outerWidth() / 2;
		
		var top = mdeY - halfHeight;
		var left = mdeX - halfWidth;
		
		$temp.css({
			position: 'absolute',
			top: top + 'px',
			left: left + 'px',
			opacity: '0.8'
		}).show();
		
		$('body').bind('mousemove', function(mme) {
			var mmeX = mme.pageX;
			var mmeY = mme.pageY;
			
			var mTop = mmeY - halfHeight;
			var mLeft = mmeX - halfWidth;
			
			$temp.css({
				top: mTop + 'px',
				left: mLeft + 'px'
			});
		});
		
		$temp.bind('mouseup', function(mue) {
			mue.preventDefault();
			
			$this.css({
				position: 'absolute',
				top: $temp.css('top'),
				left: $temp.css('left')
			});
			
			$('body').unbind('mousemove');			
			$temp.unbind('mouseup');
			$temp.remove();
		});
	});
});
