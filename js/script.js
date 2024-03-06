// Exemplo de JavaScript para interação com a página
document.addEventListener('DOMContentLoaded', function() {
    // Exemplo de alerta ao carregar a página
    alert('Bem-vindo à página ao meu portfólio!');
});


// Mostrar o botão quando o usuário rolar para baixo 20px da parte superior da página
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("btnTop").style.display = "block";
    } else {
        document.getElementById("btnTop").style.display = "none";
    }
}

// Rolar suavemente para o topo quando o botão for clicado
function topFunction() {
    document.body.scrollTop = 0; // Para browsers Safari
    document.documentElement.scrollTop = 0; // Para outros browsers
}




// Função para checar quando a seção está visível na tela
function isElementInViewport(el) {
    var rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }
  
  // Função para adicionar a classe .show quando a seção está visível
  function showOnScroll() {
    var elements = document.querySelectorAll('.tecnologia');
    elements.forEach(function(element) {
      if (isElementInViewport(element)) {
        element.classList.add('show');
      }
    });
  }
  
  // Evento de scroll para checar quando a seção está visível
  window.addEventListener('scroll', showOnScroll);
  