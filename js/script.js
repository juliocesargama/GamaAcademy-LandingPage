const form = document.getElementById('form')

form.addEventListener('submit', (e) => {
  e.preventDefault();
  let nome = document.getElementById('txtNome').value;
  let email = document.getElementById('txtEmail').value;
  let data = {
    nome,
    email,
  }
  let convertData = JSON.stringify(data);

  localStorage.setItem('lead', convertData)

  let content = document.getElementById('content')

  let carregando = `<div class="image-load">
  <img src="/assets/loader.gif" alt="Imagem de vários pontos em círculo piscando um de cada vez, simulando a espera do envio de informações.">
  <p>Aguarde...</p>
</div>`

  let pronto = `<div class="image-load">
  <img id="img-cart" src="/assets/cart.png" alt="Imagem de um carrinho de compras tradicional de supermercado.">
  <p>Obrigade,<b> ${data.nome}!</b></p>
  <p>Em breve você receberá nossas principais ofertas!</p>
  <br>
  <p>Até lá!</p></div>
  `
  
  content.innerHTML = carregando


  setTimeout(() => {
    content.innerHTML = pronto
  }, 1000)

})