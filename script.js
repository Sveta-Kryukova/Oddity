const h1Element = document.querySelector('h1');
const changeTextButton = document.getElementById('changeTextButton');

let isOddity = false;

function modifyText() {
  const text = isOddity ? 'Oddity' : 'Google';
  const characters = text.split('');

  const modifiedText = characters.map((character, index) => {
    if (index === 0 || index === 3) {
      return '<span style="color: blue;">' + character + '</span>';
    } else if (index === 1 || index === 5) {
      return '<span style="color: red;">' + character + '</span>';
    } else if (index === 2) {
      return '<span style="color: yellow;">' + character + '</span>';
    } else if (index === 4) {
      return '<span style="color: green;">' + character + '</span>';
    }
    return character;
  });

  h1Element.innerHTML = modifiedText.join('');
}

modifyText();

changeTextButton.addEventListener('click', function() {
  isOddity = !isOddity;
  modifyText();
});