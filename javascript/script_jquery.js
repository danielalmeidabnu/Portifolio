(function(){

	$('#titulo1').hover(
		function(){
			$('#titulo1').css(" text-center font-weight-bold text-success")
							.fadeOut(1000);
		}
		);
	
	$('#titulo1').exit(
		function(){
		$('#titulo1').css("text-center font-weight-bold text-muted")
						.fadeIn(1000);
		}
		);
});