document.addEventListener('DOMContentLoaded', () => {
    const produtosContainer = document.getElementById('produtos-container');

    // Carrega os produtos do arquivo JSON
    fetch('produtos.json')
        .then(response => response.json())
        .then(produtos => {
            produtos.forEach(produto => {
                const card = document.createElement('div');
                card.classList.add('produto-card');

                const imagem = document.createElement('img');
                imagem.src = produto.imagem;
                imagem.alt = produto.nome;

                const info = document.createElement('div');
                info.classList.add('produto-info');

                const nome = document.createElement('h2');
                nome.textContent = produto.nome;

                const preco = document.createElement('p');
                preco.textContent = `R$ ${produto.preco.toFixed(2)}`;

                info.appendChild(nome);
                info.appendChild(preco);

                card.appendChild(imagem);
                card.appendChild(info);

                produtosContainer.appendChild(card);
            });
        })
        .catch(error => console.error('Erro ao carregar produtos:', error));
});