import list from "./actions/list";
import add from "./actions/add";
import remove from "./actions/remove";
import update from "./actions/update";

const picturesGridElement = document.getElementById("pictures-grid");
const pictureInputElement = document.getElementById("picture-url-input");
const pictureInputElementUpdate = document.getElementById("picture-url-input-update");
const pictureAddButtonElement = document.getElementById("picture-add-button");

const pictureItemTemplate = document.getElementById("picture-item-template");

const getInputContents = () => pictureInputElement.value;
const getInputContentsUpdate = () => pictureInputElementUpdate.value;
const clearInputContents = () => (pictureInputElement.value = "");

const addPictureHandler = () => {
  const url = getInputContents();
  if (url.length !== 0)
    add(url);
  // FIXED: use your actions functions to add a new picture
  // FIXME: bonus, trim eventual whitespaces and validate content

  clearInputContents();
};

const refreshGrid = () => {
  // FIXED: use your functions to get all the elements
  const items = list();

  const fragment = document.createDocumentFragment();

  items.forEach((element, i) => {
    const clone = document.importNode(pictureItemTemplate.content, true);

    const imgElement = clone.querySelector(".picture-item-image");

    // FIXED: set the URL from your Picture model.
    imgElement.src = element;

    const deleteButtonElement = clone.querySelector(
      ".picture-item-delete-button"
    );

    const UpdateButtonElement = clone.querySelector(
      ".picture-item-update-button"
    );

    // FIXED: use your functions to delete the selected element
    deleteButtonElement.addEventListener("click", () => {
      remove(i);
      refreshGrid();
    });

    UpdateButtonElement.addEventListener("click", () => {
      const url = getInputContentsUpdate();
      update(url, i);
      refreshGrid();
    });

    fragment.appendChild(clone);
  });

  picturesGridElement.innerHTML = "";
  picturesGridElement.appendChild(fragment);
};

refreshGrid();

pictureAddButtonElement.addEventListener("click", () => {
  addPictureHandler(); refreshGrid();
});
