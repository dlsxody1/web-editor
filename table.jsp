<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"
%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt"%>
<link rel="stylesheet" type="text/css"
	href="../../resource/css/common/table.css"
/>
<link rel="stylesheet"
	href="//code.jquery.com/ui/1.13.2/themes/base/jquery-ui.css"
>

<style>
  #sortable { list-style-type: none; margin: 0; padding: 0; width: 60%; }
  #sortable li { margin: 0 3px 3px 3px; padding: 0.4em; padding-left: 1.5em; font-size: 1.4em; height: 18px; }
  #sortable li span { position: absolute; margin-left: -1.3em; }
  </style>
<script src="https://code.jquery.com/jquery-3.6.0.js"></script>
<script src="https://code.jquery.com/ui/1.13.2/jquery-ui.js"></script>
 <script>
  $( function() {
    $( "#sortable" ).sortable();
  } );
  </script>
<script>
	$(function() {

		$(document).on("mouseover", ".table_tag td", function() {
			$(this).addClass("ui-resizable");
			$(this).resizable({
				aspectRatio : 16 / 9
			});

		});
		$(document).on("mouseleave", ".table_tag td", function() {
			$(this).removeClass("ui-resizable");
		});
	});
</script>
<script>
	
</script>
<div class="table-wrapper">
	<form class="table_form">
		<p>행</p>
		<input class="table_row" type="text" />
		<p>렬</p>
		<input class="table_column" type="text" />
		<button class="table_button">누르면 테이블 생성</button>
	</form>
	<div class="table_insert"></div>
</div>

<div class="list_box">
    <ul id="sortable">
  <li class="ui-state-default"><span class="ui-icon ui-icon-arrowthick-2-n-s"></span>Item 1</li>
  <li class="ui-state-default"><span class="ui-icon ui-icon-arrowthick-2-n-s"></span>Item 2</li>
  <li class="ui-state-default"><span class="ui-icon ui-icon-arrowthick-2-n-s"></span>Item 3</li>
  <li class="ui-state-default"><span class="ui-icon ui-icon-arrowthick-2-n-s"></span>Item 4</li>
  <li class="ui-state-default"><span class="ui-icon ui-icon-arrowthick-2-n-s"></span>Item 5</li>
  <li class="ui-state-default"><span class="ui-icon ui-icon-arrowthick-2-n-s"></span>Item 6</li>
  <li class="ui-state-default"><span class="ui-icon ui-icon-arrowthick-2-n-s"></span>Item 7</li>
</ul>
 
</div>

<div class="web_edi" contenteditable='true' >
1
</div>

