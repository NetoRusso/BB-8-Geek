// armazenamento de valores 
let produtos = [
  {
    id: 1,
    name: "CAMISA FULL PRINT",
    url: "https://lh3.googleusercontent.com/u/0/drive-viewer/AKGpihbKJijTa0O8onXVzNZSXGmu6DXgxiqrLaG_yGznRztW556oD4zx9hGekG7fyyGJER4x0-48SEuJXt2PfrfgndSOcR5OvIypex4",
    descricao: "BLUE MANGÁ KIMETSU NO YAIBA - OBANAI IGURO",
    valor: 59.9,
    qtd: 0,
  },
  {
    id: 2,
    name: "CAMISA SILK",
    url: "https://lh3.googleusercontent.com/u/0/drive-viewer/AKGpihaGYb5OsGiPisxRPLPy6ss84YIKwtGGt_QNRJTTLM-pvYgXMNir-SH1MBt8SJIAteQyYTUlQukBfYDeAQE8k2uQ2YpehZkmvUU",
    descricao: "Doctor Who Tardis Daleks Davros Cybermen Séries",
    valor: 49.9,
    qtd: 0,
  },
  {
    id: 3,
    name: "CAMISA SILK",
    url: "https://lh3.googleusercontent.com/u/0/drive-viewer/AKGpihZ1YElc10nnbFcmjhyuznURAusEa1jpNGJrFkvvgJIQvjwlgVdezC4hqmapF0drq5KH-LoYjZ-OMreJIOvHwIiVKKUvfGUDsVw",
    descricao: "Game of Thrones- 3 Brasões das casas!",
    valor: 69.9,
    qtd: 0,
  },
  {
    id: 4,
    name: "CAMISA SILK",
    url: "https://lh3.googleusercontent.com/u/0/drive-viewer/AKGpihYDJE_UcNOI0kRdGJcO2Kn541MuGguBCCMdZ2kx4lHgA4KxvzrQfFsyRR0sP9HUFJPGsyf2FGosiPQyTepujRqlehbweHll2l0",
    descricao: "Big bang Theory",
    valor: 69.9,
    qtd: 0,
  },
  {
    id: 5,
    name: "Chapéu de Palha",
    url: "https://lh3.googleusercontent.com/u/0/drive-viewer/AKGpihYoeoXnE7iXBaCGeIZtQ6wGSY5huvlDgqQLkDWVWQTvhFJik1VzXyJGvt5-00Q4lngK4Eh3pbptLzOeP4V_IgiEgtarAaG_STQ",
    descricao:
      "Maedack Luffy Chapéu de palha protetor solar- chapéu de palha cosplay chapéu de sol para adultos",
    valor: 69.9,
    qtd: 0,
  },
  {
    id: 6,
    name: "Canecas Personalizadas",
    url: "https://lh3.googleusercontent.com/u/0/drive-viewer/AKGpihYFf8K8bOyVgQa84icbjR5bcm2ZYArR-1gtJCJndYgboC5zfhuwVO2mvxnhLVrFAA-qe5xUMknZ6jjdzenluCGYjm0qCaAn3w",
    descricao:
      "Caneca personalizada: presenteie quem você ama com um toque especial!",
    valor: 44.9,
    qtd: 0,
  },
  {
    id: 7,
    name: "Action Figure",
    url: "https://lh3.googleusercontent.com/u/0/drive-viewer/AKGpihZ_uh6GpYRqnC3MeKFKuB7oCgbEp9n7lTaUVZ-O5ogISQlqswxVuq3Sf_UyNUtOtaiADVGy84skFs23Y9WXbxNQyfMosWFGzBg",
    descricao:
      "Star Wars Hasbro The Vintage Collection: OBI-WAN Kenobi - Darth Vader (The Dark Times)",
    valor: 232.9,
    qtd: 0,
  },
  {
    id: 8,
    name: "Action Figure",
    url: "https://lh3.googleusercontent.com/u/0/drive-viewer/AKGpihaCuxOPWhlBIJeo_pW_RkxyVEEbZvGydk9Bmafqd_d_YuEQTB_-D3F9X93X97JW86UJroArP8Tq85niyPyMF8ZRcy7ygOh-bpM",
    descricao:
      "DEADPOOL - GALLERY-Um lançamento da Diamond Select! O Merc With a Mouth é agora um Merc of Art!",
    valor: 519.9,
    qtd: 0,
  },
  {
    id: 9,
    name: "Funko Pop!",
    url: "https://lh3.googleusercontent.com/u/0/drive-viewer/AKGpihbFVC9TXdxQ5ipge0wS8nX1GBIUl6ciVArkohe7YvaKKQfclwJPfpPTInm1Y4I3Ct7wPeebRF9Pd2V1H97dy1tDKfWAoKnWB0Q",
    descricao:
      "Funko Pop - 02 Batman Comic Cover Vinyl Figure Batman como POP! Capa de banda desenhada da Funko.",
    valor: 127.9,
    qtd: 0,
  },
  {
    id: 10,
    name: "Funko Pop!",
    url: "https://lh3.googleusercontent.com/u/0/drive-viewer/AKGpihYIS8PGEvBu8YjVYqcwlyCc3qrRKuX__pK4edhbp3No8ch_t8L54-TqzYw4-ObR936EN42xx2pidYnzR0D4csHVcm0OGi1IEBQ",
    descricao: "Funko Pop-206 Wonder Woman Justice League Figura colecionável",
    valor: 127.9,
    qtd: 0,
  },
  {
    id: 11,
    name: "Funko Pop!",
    url: "https://lh3.googleusercontent.com/u/0/drive-viewer/AKGpihaeg4gi2W9UM6DRJQbPsSIUw2yEo-9snjmdMsGEOlppBYsGVVVeXCzFqdWBHDLOFX7x4MjdNwFreoPGGrkKI0YMMZ5iHmfXKw",
    descricao:
      "Funko Pop -1123 Justice League Superman (First Flight) Figure (AAA Anime Exclusive)",
    valor: 198.9,
    qtd: 0,
  },
  {
    id: 12,
    name: "Funko Pop!",
    url: "https://lh3.googleusercontent.com/u/0/drive-viewer/AKGpihZQhtiDOs-_rRLLVsAQV3Q9wA9o35ms-UgCS0yBaZDqhOk5W-aMeAKx3pG9nFrsgR6KwGVQ6QJ4TzsqPWzBrF9bZesjENT1lA",
    descricao:
      "Baby with Dean - Funko Pop Rides - Supernatural - 32 - SDCC 2017 Exclusivo",
    valor: 479.9,
    qtd: 0,
  },
];
let itensCarinhos = 0;


// chamada de tag quanto inicia o javasript 
const buttons = document.querySelectorAll(".itenProdutos button");
const caixa = document.getElementById('botao-caixa');


function adicionarOuRemoverIconDoCarrinho() {
  const icon = document.getElementById('alertaIconCarrinho');

  if (itensCarinhos > 0) {
    icon.classList.remove('ocultarIcon');
  } else {
    icon.classList.add('ocultarIcon');
  }
}

function diminuirItemDoCarrinho(numeroId) {
  produtos = produtos.map(({ id, descricao, name, qtd, url, valor }) => {
    if (numeroId === id) {
      return { id, descricao, name, url, valor, qtd: (qtd - 1) };
    }
    return { id, descricao, name, url, valor, qtd };
  });

  itensCarinhos--;
  adicionarOuRemoverIconDoCarrinho();
  modificarTabelaInserindoHtml();
  somaTotalDoCarrinho();
}

function deletarItemDoCarrinho(numeroId) {
  produtos = produtos.map(({ id, descricao, name, qtd, url, valor }) => {
    if (numeroId === id) {
      return { id, descricao, name, url, valor, qtd: 0 };
    }
    return { id, descricao, name, url, valor, qtd };
  });

  console.log(produtos);

  itensCarinhos--;
  adicionarOuRemoverIconDoCarrinho();
  modificarTabelaInserindoHtml();
  somaTotalDoCarrinho();
}

function somarItemDoCarrinho(numeroId) {
  produtos = produtos.map(({ id, descricao, name, qtd, url, valor }) => {
    if (numeroId === id) {
      return { id, descricao, name, url, valor, qtd: (qtd + 1) };
    }
    return { id, descricao, name, url, valor, qtd };
  });


  itensCarinhos++;
  adicionarOuRemoverIconDoCarrinho();
  modificarTabelaInserindoHtml();
  somaTotalDoCarrinho();
}

function criarHtmlParaUmItemDoCarrinho(produto) {
  return `
      <tr>
        <th scope="row">
          <div class="card card-tablet">
            <img
              class="card-img-top card-image"
              src=${produto.url}
              alt="Card image cap"
            />
            <div class="card-body">
              <h5 class="card-title card-image-titulo">
                ${produto.name}
              </h5>
              <p class="card-text card-image-texto">
                ${produto.descricao}
              </p>
            </div>
          </div>
        </th>
        <td>
          <div
            class="d-flex align-items-center justify-content-center"
          >
            <button type="button" class="btn btn-success btn-sm soma ${produto.id}">
              +
            </button>
            <p class="texto-qtd">${produto.qtd}</p>
            <button type="button" class="btn btn-danger btn-sm subtrair ${produto.id}">
              -
            </button>
          </div>
        </td>
        <td>
          <p>${produto.valor.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</p>
        </td>
        <td>
          <button type="button" class="btn icon lixeira ${produto.id}">
            <svg id="Layer_1" height="512" viewBox="0 0 512 512" width="512" xmlns="http://www.w3.org/2000/svg" data-name="Layer 1"><path d="m256 0c-141.158 0-256 114.842-256 256s114.839 256 256 256 256-114.841 256-256-114.84-256-256-256zm-49.921 114.329a8.325 8.325 0 0 1 8.32-8.324h83.2a8.341 8.341 0 0 1 8.322 8.334v20.577h-99.842zm136.8 279.759a12.745 12.745 0 0 1 -12.812 11.912h-149.1a12.873 12.873 0 0 1 -12.807-11.963l-12.753-186.637h201.081l-13.614 186.688zm33.141-203.588h-240.04v-19.339a19.357 19.357 0 0 1 19.339-19.341l201.359-.006a19.365 19.365 0 0 1 19.338 19.348v19.336zm-158.67 171.008v-118.508a8.449 8.449 0 0 1 16.9.006v118.502a8.451 8.451 0 1 1 -16.9 0zm60.292 0v-118.508a8.451 8.451 0 0 1 16.9.006v118.507a8.452 8.452 0 1 1 -16.9 0z" fill="#fc0005" fill-rule="evenodd"/></svg>
          </button>
        </td>
      </tr>
    `;
}

function inserirTagsDentroDoCarrinhos() {
  let html = ``;

  produtos.map((produto) => {
    if (produto.qtd > 0) {
      html = html + criarHtmlParaUmItemDoCarrinho(produto)
    }
  })

  return html;
}

function inseridoAsFunçõesSomaSubtracaoDelete() {
  const somas = document.querySelectorAll(".soma");
  const subtrair = document.querySelectorAll(".subtrair");
  const deletes = document.querySelectorAll(".lixeira");

  somas.forEach((soma) => {
    soma.addEventListener('click', (e) => {
      const idRecebido = Number(e.currentTarget.classList[4]);
      const produto = produtos.find(({ id }) => id === idRecebido);
      if (produto.qtd < 99) {
        console.log('aqui', produto.qtd < 99)
        somarItemDoCarrinho(idRecebido);
      }
    });
  });

  subtrair.forEach((subtrai) => {
    subtrai.addEventListener('click', (e) => {
      const idRecebido = Number(e.currentTarget.classList[4]);
      diminuirItemDoCarrinho(idRecebido);
    });
  });

  deletes.forEach((apagar) => {
    apagar.addEventListener('click', (e) => {
      const idRecebido = Number(e.currentTarget.classList[3]);
      deletarItemDoCarrinho(idRecebido);
    });
  });
}

function modificarTabelaInserindoHtml() {
  const html = inserirTagsDentroDoCarrinhos();

  $('#exampleModal').find('#corpoTabela').html(html);

  inseridoAsFunçõesSomaSubtracaoDelete();
}

function somaTotalDoCarrinho() {
  const valor = document.getElementById('valor');
  let soma = 0

  produtos.map(({ qtd, valor }) => {
    if (qtd > 0) {
      soma += (qtd * valor)
    }
  })

  valor.innerText = soma.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })
}


// adicionado as tag chamadas no inicio o evento addeventlist para as funções 
buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    const idButton = e.currentTarget.id;
    somarItemDoCarrinho(Number(idButton));
  });
});

caixa.addEventListener('click', (e) => {
  const novo = [
    {
      id: 1,
      name: "CAMISA FULL PRINT",
      url: "https://lh3.googleusercontent.com/u/0/drive-viewer/AKGpihbKJijTa0O8onXVzNZSXGmu6DXgxiqrLaG_yGznRztW556oD4zx9hGekG7fyyGJER4x0-48SEuJXt2PfrfgndSOcR5OvIypex4",
      descricao: "BLUE MANGÁ KIMETSU NO YAIBA - OBANAI IGURO",
      valor: 59.9,
      qtd: 0,
    },
    {
      id: 2,
      name: "CAMISA SILK",
      url: "https://lh3.googleusercontent.com/u/0/drive-viewer/AKGpihaGYb5OsGiPisxRPLPy6ss84YIKwtGGt_QNRJTTLM-pvYgXMNir-SH1MBt8SJIAteQyYTUlQukBfYDeAQE8k2uQ2YpehZkmvUU",
      descricao: "Doctor Who Tardis Daleks Davros Cybermen Séries",
      valor: 49.9,
      qtd: 0,
    },
    {
      id: 3,
      name: "CAMISA SILK",
      url: "https://lh3.googleusercontent.com/u/0/drive-viewer/AKGpihZ1YElc10nnbFcmjhyuznURAusEa1jpNGJrFkvvgJIQvjwlgVdezC4hqmapF0drq5KH-LoYjZ-OMreJIOvHwIiVKKUvfGUDsVw",
      descricao: "Game of Thrones- 3 Brasões das casas!",
      valor: 69.9,
      qtd: 0,
    },
    {
      id: 4,
      name: "CAMISA SILK",
      url: "https://lh3.googleusercontent.com/u/0/drive-viewer/AKGpihYDJE_UcNOI0kRdGJcO2Kn541MuGguBCCMdZ2kx4lHgA4KxvzrQfFsyRR0sP9HUFJPGsyf2FGosiPQyTepujRqlehbweHll2l0",
      descricao: "Big bang Theory",
      valor: 69.9,
      qtd: 0,
    },
    {
      id: 5,
      name: "Chapéu de Palha",
      url: "https://lh3.googleusercontent.com/u/0/drive-viewer/AKGpihYoeoXnE7iXBaCGeIZtQ6wGSY5huvlDgqQLkDWVWQTvhFJik1VzXyJGvt5-00Q4lngK4Eh3pbptLzOeP4V_IgiEgtarAaG_STQ",
      descricao:
        "Maedack Luffy Chapéu de palha protetor solar- chapéu de palha cosplay chapéu de sol para adultos",
      valor: 69.9,
      qtd: 0,
    },
    {
      id: 6,
      name: "Canecas Personalizadas",
      url: "https://lh3.googleusercontent.com/u/0/drive-viewer/AKGpihYFf8K8bOyVgQa84icbjR5bcm2ZYArR-1gtJCJndYgboC5zfhuwVO2mvxnhLVrFAA-qe5xUMknZ6jjdzenluCGYjm0qCaAn3w",
      descricao:
        "Caneca personalizada: presenteie quem você ama com um toque especial!",
      valor: 44.9,
      qtd: 0,
    },
    {
      id: 7,
      name: "Action Figure",
      url: "https://lh3.googleusercontent.com/u/0/drive-viewer/AKGpihZ_uh6GpYRqnC3MeKFKuB7oCgbEp9n7lTaUVZ-O5ogISQlqswxVuq3Sf_UyNUtOtaiADVGy84skFs23Y9WXbxNQyfMosWFGzBg",
      descricao:
        "Star Wars Hasbro The Vintage Collection: OBI-WAN Kenobi - Darth Vader (The Dark Times)",
      valor: 232.9,
      qtd: 0,
    },
    {
      id: 8,
      name: "Action Figure",
      url: "https://lh3.googleusercontent.com/u/0/drive-viewer/AKGpihaCuxOPWhlBIJeo_pW_RkxyVEEbZvGydk9Bmafqd_d_YuEQTB_-D3F9X93X97JW86UJroArP8Tq85niyPyMF8ZRcy7ygOh-bpM",
      descricao:
        "DEADPOOL - GALLERY-Um lançamento da Diamond Select! O Merc With a Mouth é agora um Merc of Art!",
      valor: 519.9,
      qtd: 0,
    },
    {
      id: 9,
      name: "Funko Pop!",
      url: "https://lh3.googleusercontent.com/u/0/drive-viewer/AKGpihbFVC9TXdxQ5ipge0wS8nX1GBIUl6ciVArkohe7YvaKKQfclwJPfpPTInm1Y4I3Ct7wPeebRF9Pd2V1H97dy1tDKfWAoKnWB0Q",
      descricao:
        "Funko Pop - 02 Batman Comic Cover Vinyl Figure Batman como POP! Capa de banda desenhada da Funko.",
      valor: 127.9,
      qtd: 0,
    },
    {
      id: 10,
      name: "Funko Pop!",
      url: "https://lh3.googleusercontent.com/u/0/drive-viewer/AKGpihYIS8PGEvBu8YjVYqcwlyCc3qrRKuX__pK4edhbp3No8ch_t8L54-TqzYw4-ObR936EN42xx2pidYnzR0D4csHVcm0OGi1IEBQ",
      descricao: "Funko Pop-206 Wonder Woman Justice League Figura colecionável",
      valor: 127.9,
      qtd: 0,
    },
    {
      id: 11,
      name: "Funko Pop!",
      url: "https://lh3.googleusercontent.com/u/0/drive-viewer/AKGpihaeg4gi2W9UM6DRJQbPsSIUw2yEo-9snjmdMsGEOlppBYsGVVVeXCzFqdWBHDLOFX7x4MjdNwFreoPGGrkKI0YMMZ5iHmfXKw",
      descricao:
        "Funko Pop -1123 Justice League Superman (First Flight) Figure (AAA Anime Exclusive)",
      valor: 198.9,
      qtd: 0,
    },
    {
      id: 12,
      name: "Funko Pop!",
      url: "https://lh3.googleusercontent.com/u/0/drive-viewer/AKGpihZQhtiDOs-_rRLLVsAQV3Q9wA9o35ms-UgCS0yBaZDqhOk5W-aMeAKx3pG9nFrsgR6KwGVQ6QJ4TzsqPWzBrF9bZesjENT1lA",
      descricao:
        "Baby with Dean - Funko Pop Rides - Supernatural - 32 - SDCC 2017 Exclusivo",
      valor: 479.9,
      qtd: 0,
    },
  ];

  produtos = novo;

  itensCarinhos = 0;

  adicionarOuRemoverIconDoCarrinho();
  modificarTabelaInserindoHtml();
  somaTotalDoCarrinho();
})
