function criaCartao (categoria, pergunta, resposta) {
      let container = document.getElementById ('container')
      let cartao = document.createElement('article')
      cartao.className = 'cartao'

      cartao.innerHTML = ` 
      <div class="cartao__conteudo">
         <h3>Charadas</h3>
           <div class="cartao__conteudo__pergunta">
              <p>O que é, o que é? Dois pontinhos cinzas no oceano?</p>
            </div>
           <div class="cartao__conteudo__resposta">
            <p>Twobarões</p>
      </div>
      </div>
      `
      container.appendChild(cartao)
      
}