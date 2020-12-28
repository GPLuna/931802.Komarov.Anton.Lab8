const addLine = () => {
  const line = document.createElement('div');
  line.className = 'line';
  line.innerHTML = `
    <input type="text">
    <input type="text">
    <button onclick="swapUp(this)" type="button">↑</button>
    <button onclick="swapDown(this)" type="button">↓</button>
    <button onclick="removeLine(this)" type="button">⨉</button>
  `;

  const container = document.getElementById('container');
  container.appendChild(line);
};

const removeLine = (context) => context.parentElement.remove();

const swapUp = (context) => {
  const upperElement = context.parentElement.previousElementSibling;
  if(upperElement)
    context.parentElement.after(upperElement);
};

const swapDown = (context) => {
  const bottomElement = context.parentElement.nextElementSibling;
  if(bottomElement)
    context.parentElement.before(bottomElement);
};

const save = () => {
  let summary = [];
  const lines = document.querySelectorAll('#container > div.line > input');
  for(let i = 0; i < lines.length; i += 2) {
    summary.push(`${lines[i].value} : ${lines[i+1].value}`)
  }

  let string = JSON.stringify(summary);
  string = string.substring(1, string.length - 1);

  let text = document.getElementById('text');
  if(text)
    text.innerHTML = `{${string}}`;
  else{
    text = document.createElement('p');
    text.id = 'text';
    text.innerHTML = `{${string}}`;
    document.body.appendChild(text)
  }
};