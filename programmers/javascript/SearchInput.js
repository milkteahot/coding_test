const TEMPLATE = '<input type="text">';

class SearchInput {
  constructor({ $target, onSearch, onClick }) {
    const $searchInput = document.createElement("input");
    this.$searchInput = $searchInput;
    this.$searchInput.placeholder = "고양이를 검색해보세요.|";    

    $searchInput.className = "SearchInput";
    $target.appendChild($searchInput);
    this.$searchInput.focus();
    var btn = document.createElement("button");
    document.body.append(btn);

    btn.addEventListener('click', e => {
      console.log("btn clicked");
      onClick(e.target.value);
      
    });


    $searchInput.addEventListener("keyup", e => {
      if (e.keyCode === 13) {
        onSearch(e.target.value);
      }
    });

    console.log("SearchInput created.", this);
  }
  render() {}
}
