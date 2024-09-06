function pesquisar() {
  
  // Seleciona a seção onde os resultados serão exibidos
  let section = document.getElementById("resultados-pesquisa");

  // Obtém o valor do campo de pesquisa e o converte para minúsculas
  let campoPesquisa = document.getElementById("campo-pesquisa").value.toLowerCase();

  // Inicializa uma string vazia para armazenar os resultados da pesquisa
  let resultados = "";

  // Verifica se o campo de pesquisa está vazio
  if (!campoPesquisa) {
    // Se estiver vazio, exibe uma mensagem indicando que nenhum piloto foi encontrado
    section.innerHTML = "<p>Nenhum piloto foi encontrado.</p>";
    return; // Interrompe a função
  }

  // Itera sobre cada elemento do array de dados
  for (let dado of dados) {
    // Converte o nome e a descrição do piloto para minúsculas para facilitar a comparação
    let nome = dado.nome.toLowerCase();
    let descricao = dado.descricao.toLowerCase();

    // Verifica se o nome ou a descrição do piloto contém a string de pesquisa
    if (nome.includes(campoPesquisa) || descricao.includes(campoPesquisa)) {
      // Se a string de pesquisa for encontrada, adiciona um novo elemento HTML à string de resultados
      resultados += `
        <div class="item-resultado">
          <h2>${dado.nome}<h2>
          <p class="descricao-meta">${dado.descricao}</p>
          <a href=${dado.link} target="_blank">Mais informações</a>
        </div>
      `;
    }
  }

  // Verifica se algum resultado foi encontrado
  if (!resultados) {
    // Se nenhum resultado for encontrado, exibe uma mensagem indicando que nenhum piloto foi encontrado
    resultados = "<p>Nenhum piloto foi encontrado.</p>";
  }

  // Atualiza o conteúdo da seção de resultados com a string final de resultados
  section.innerHTML = resultados;
}