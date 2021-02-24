import "./styles.css";

const onClickAdd = () => {
  // テキストボックスの値取得 & 初期化
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = " ";

  // div生成
  const div = document.createElement("div");
  div.className = "list-row";

  // liタグ生成
  const li = document.createElement("li");
  li.innerText = inputText;

  //　完了、削除buttonタグ生成
  const compleatButton = document.createElement("button");
  compleatButton.innerText = "完了";
  compleatButton.addEventListener("click", () => {
    alert("完了");
  });

  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    // 削除ボタンを押したらdiv（親タグ）を未完了リストから削除
    const deleteTarget = deleteButton.parentNode;
    document.getElementById("incomp-list").removeChild(deleteTarget);
  });

  // divタグの子要素に各要素を設定
  div.appendChild(li);
  div.appendChild(compleatButton);
  div.appendChild(deleteButton);

  // 未完了リストへ追加
  document.getElementById("incomp-list").appendChild(div);
};

document
  .getElementById("add-but")
  .addEventListener("click", () => onClickAdd());
