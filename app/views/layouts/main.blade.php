<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Document</title>
	<link rel="stylesheet" href="css/style.css">
</head>
<body>
	<div class="outer">
		@section("body")
			@include("layouts.inc.header")
		@show 
		@section("footer")
			@include("layouts.inc.footer")
		@show
	</div>
</body>
</html>