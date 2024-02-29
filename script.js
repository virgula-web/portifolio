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