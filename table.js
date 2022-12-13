$(function () {
  /****************************************************
     * 버튼 눌렀을 때 전송되는 부분 막기위함.
     !!! 참고
     this 의 scope 떄문에 화살표 함수는 쓰지말 것.
     ****************************************************/
  $(".table_form").on("submit", (e) => {
    e.preventDefault();
  });

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
  const makeTable = (row, col) => {
    count++;
    let tableUpperTag = `<div class="table_box"><table border='1'  class='table_tag' id=${count}>`;

    for (let i = 0; i < row; i++) {
      tableUpperTag += "<tr>";
      for (let j = 0; j < col; j++) {
        tableUpperTag +=
          "<td  class='table_column_value'> <div class='table_inner_text' contenteditable='true'></div></td>";
      }
      tableUpperTag += "<tr/>";
    }
    tableUpperTag += "</table>";

    $(".table_insert").append(tableUpperTag);
    $(".table_box")
      .last()
      .append(
        `<div class="add_column_hidden"><button name="btnAddColumn" data-col="${count}">okok</button></div>`
      );
    $(".table_insert")
      .last()
      .append(
        `<div class="add_row_hidden"><button name="btnAddRow" data-row="${count}">++++</button></div>
                                
                `
      );
  };

  $(".table_button").on("click", (e) => {
    e.preventDefault();
    console.log($(".table_tag").rows);
    let rowValue = Number($(".table_row").val());
    let columnValue = Number($(".table_column").val());

    console.log(columnValue, rowValue);
    if (isNaN(rowValue && columnValue) || rowValue === 0 || columnValue === 0)
      return alert("숫자를 입력해주세요 !");

    makeTable(rowValue, columnValue);

    $(".table_tag").attr("name", count);
  });

  $(document).on("mouseenter", "#testt", function () {
    $(this).append("<button>ok</button>");
  });

  $(document).on("mouseenter", "add_row_hidden", function () {
    console.log($(this));
    $(".add_row_hidden")
      .removeClass("add_row_hidden")
      .addClass("add_row_onmouse");
    $(".add_column_hidden")
      .removeClass("add_column_hidden")
      .addClass("add_column_onmouse");
  });

  $(document).on("mouseleave", ".add_row_onmouse", function () {
    $(".add_row_onmouse")
      .removeClass("add_row_onmouse")
      .addClass("add_row_hidden");
    $(".add_column_onmouse")
      .removeClass("add_column_onmouse")
      .addClass("add_column_hidden");
  });

  $(document).on("click", "button[name='btnAddColumn']", function (event) {
    event.preventDefault();

    let colData = $(this).data("col");
    let rowValue = Number($(".table_column").val());

    let addBlock =
      "<td  class='table_column_value'> <div class='table_inner_text' contenteditable='true'></div></td>";
    for (let i = 0; i < rowValue; i++) {
      addBlock += addBlock;
    }
    $(`#${colData}`).append(addBlock);
  });

  //동적으로 생성된 element는 document로 관리해야한다.
  $(document).on("click", "button[name=btnAddRow]", function (event) {
    event.preventDefault();
    let abvd = $(this).data("row");
    console.log($(this));
    console.log(abvd);
    //console.log($(this));
    let columnValue = Number($(".table_column").val());
    let addBlock = "<tr>";
    for (let i = 0; i < columnValue; i++) {
      addBlock +=
        "<td  class='table_column_value'> <div class='table_inner_text' contenteditable='true'></div></td>";
    }
    addBlock += "<tr/>";
    //console.log(this.dataset);

    $(`#${abvd}`).append(addBlock);
  });
  //$('.add_column_hidden').on("click", (e) => {

  //console.log('dd');
  //});
});
