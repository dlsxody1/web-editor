$(function () {
  /****************************************************
       * 버틀을 눌렀을 떄 input에 들어간 행과 열에 맞게 테이블생성
       ,크기 조절 완료
       * TODO : 마우스로 테이블 크기가 조절될 수 있도록 만들어야함,
       flow => 1. 테이블의 border를 클릭한다. (onclick) 2.끌어서 원하는 크기만큼 조절한다.
       3. 마우스를 놓는다. 4. 크기가 고정된다. 
       컬럼을 드래그 앤 드롭으로 옮길 수 있게 만들어야함.
       
       ****************************************************/

  /****************************************************
       table 생성 함수.
       input에서 받은 값을 반복문을 돌려 테이블을 생성함. 
       table_box 라는 div의 마지막 요소에 버튼을 붙힘.
       ****************************************************/
  let count = 0;
  const makeTable = () => {
    count++;
    let tableUpperTag = `<div class="table_box"><table border='1'  class='table_tag' id=${count}>`;

    for (let i = 0; i < 5; i++) {
      tableUpperTag += "<tr>";
      for (let j = 0; j < 5; j++) {
        tableUpperTag +=
          "<td  class='table_column_value'> <div class='table_inner_text' contenteditable='true'></div></td>";
      }
      tableUpperTag += "<tr/>";
    }
    tableUpperTag += "</table>";
    tableUpperTag += `<div class='add_row_hidden' contenteditable='false' data-row=${count}>행 추가하기</div> `;

    if ($(".editor_container div").length === 0) {
      console.log("ho");
      $(".editor_container div").prepend(tableUpperTag);
      $(".editor_container").append("<div>\u00a0 </div>");
    } else {
      $(".editor_container div").last().append(tableUpperTag);
      $(".editor_container").append(`<div>\u00a0</div>`);
    }
  };

  $(".table_logo").on("click", function () {
    makeTable();
  });

  $(".lili").on("dragstart", function (e) {
    $(this).addClass("dragging");
  });

  $(".lili").on("dragend", function (e) {
    $(this).removeClass("dragging");
  });

  /**
   * [x] 엘리먼트의 .draggable, .container의 배열로 선택자를 지정합니다.
   * [x] draggables를 전체를 루프하면서 dragstart, dragend를 이벤트를 발생시킵니다.
   * [x] dragstart, dragend 이벤트를 발생할때 .dragging라는 클래스를 토글시킨다.
   * [x] dragover 이벤트가 발생하는 동안 마우스 드래그하고 마지막 위치해놓은 Element를 리턴하는 함수를 만듭니다.
   */
});

// 테이블 아래 버튼은 숨어있다가 버튼쪽에 마우스 커서가 가면
// 로우를 추가 할 수 있는 버튼이 나온다.
$(document).on("mouseenter", ".add_row_hidden", function () {
  console.log("mouseIn");
  $(".add_row_hidden")
    .removeClass("add_row_hidden")
    .addClass("add_row_onmouse");
});

$(document).on("mouseout", ".add_row_onmouse", function () {
  $(".add_row_onmouse")
    .removeClass("add_row_onmouse")
    .addClass("add_row_hidden");
});

// 행 추가 버튼 이벤트

$(document).on("click", ".add_row_onmouse", function (event) {
  let row = $(this).data("row");
  //현재 누른 table에 tr이 몇개인지 세야함.
  console.log("");
  let addblock = "<tr>";

  console.log(row);
});
