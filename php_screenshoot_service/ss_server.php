<?php
	$im = imagegrabscreen();
	imagepng($im, "screen-server.png");
	imagedestroy($im);
?>