/* Pdf Yukleme */
$(document).ready(function(){
			$('#upload form input').change(function () {
			$('#upload form p').text(this.files.length + " dosya secildi.");
		});
	});


