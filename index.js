createList()

function createListId() {
  return 'list-' + document.getElementsByClassName('list').length;
}

function createList() {
  const listName = document.getElementById('list-name').value.toString();
  const listId = createListId();

  if (listName.trim() === "") return

  document.getElementById("lists").innerHTML += `
  <span class="col-4 my-3 list" id=${listId}>
    <div class="card p-0">
      <div class="card-header d-flex justify-content-between align-items-baseline">
        <p>${listName}</p>
        <div class="actions">
          <button class="btn btn-danger list-delete" onclick="deleteList('${listId}')">- List</button>
        </div>
      </div>
      <div class="card-body">
        <div class="d-flex mb-3">
          <input id="item-name" class="form-control w-75 me-3" name="item-name">
          <button class="btn btn-success" onclick="createItem('${listId}')">+ Item</button>
        </div>
        <ul class="items ms-0 ps-0">
        </ul>
      </div>
    </div>
  </span>`;

  document.getElementById('list-name').value = "";
}

function deleteList(listId) {
  const list = document.getElementById(listId);
  list.parentNode.removeChild(list);
}

function deleteItem(itemId) {
  const item = document.getElementById(itemId);
  item.parentNode.removeChild(item);
}

function createItemId(listId) {
  return `${listId}-item-` + document.querySelector("#" + listId + " .items").childElementCount;
}

function createItem(listId) {
  const itemName = document.querySelector(`#${listId} input`).value;
  const itemId = createItemId(listId);

  if (itemName.trim() === "") return

  document.querySelector("#" + listId + " .items").innerHTML += `
  <li id="${itemId}" class="d-flex justify-content-between my-1 me-1">
    <p>${itemName}</p>
    <button class="btn btn-danger" onclick="deleteItem('${itemId}')">- Item</button>
  </li>`;
  document.querySelector(`#${listId} input`).value = "";
}
