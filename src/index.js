const button = document.createElement('button');
button.innerText = 'Click Me';
button.onclick = () => {
  System.import('./image_viewer')
  .then(module => {
    console.log(1, module);
    module.default()
  })
}

document.body.appendChild(button)
