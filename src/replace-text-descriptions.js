
const textField = document.querySelector(".js-text-desc");

function replaceTextDescriptions(listText) {
  console.log(listText);
  console.log(textField);
  textField.setAttribute("data-type", listText);
}

export default replaceTextDescriptions;
