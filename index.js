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
  console.log($("img").data("center"));
});
