let textArea = document.createElement('textarea');
textArea.style = "width: 200px; height: 100px";
document.body.append(textArea);

textArea.value = localStorage.getItem('textArea');
textArea.oninput = () => {
  localStorage.setItem('textArea', textArea.value)
};