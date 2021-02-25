import "./styles.css";

const onClickAdd = () => {
  // テキストボックスの値取得 & 初期化
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = " ";

  createIncompleteList(inputText);
};

// 未完了リストから指定の要素を削除
const deleteFromIncompList = (target) => {
  document.getElementById("incomp-list").removeChild(target);
};

// 未完了リストに追加する関数
const createIncompleteList = (text) => {
  // div生成
  const div = document.createElement("div");
  div.className = "list-row";

  // liタグ生成
  const li = document.createElement("li");
  li.innerText = text;

  //　完了、削除buttonタグ生成
  const compleatButton = document.createElement("button");
  compleatButton.innerText = "完了";
  compleatButton.addEventListener("click", () => {
    // 完了ボタンを押したらdivタグ削除
    deleteFromIncompList(deleteButton.parentNode);

    // 完了リストに要素を追加
    const addTarget = compleatButton.parentNode;

    // TODO内容をテキストとして取得
    const text = addTarget.firstElementChild.innerText;

    // div以下を初期化
    addTarget.textContent = null;

    // liタグ生成
    const li = document.createElement("li");
    li.innerText = text;

    // buttonタグ生成
    const backButton = document.createElement("button");
    backButton.innerText = "戻す";
    backButton.addEventListener("click", () => {
      // 戻すボタンのdivタグを完了リストから削除
      const deleteTarget = backButton.parentNode;
      document.getElementById("comp-list").removeChild(deleteTarget);

      // テキスト取得
      const text = backButton.parentNode.firstElementChild.innerText;
      createIncompleteList(text);
    });

    // divタグの子要素に要素を設定
    addTarget.appendChild(li);
    addTarget.appendChild(backButton);

    // 完了リストに追加
    document.getElementById("comp-list").appendChild(addTarget);
  });

  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    // 削除ボタンを押したらdiv（親タグ）を未完了リストから削除
    deleteFromIncompList(deleteButton.parentNode);
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
