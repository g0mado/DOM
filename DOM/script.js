document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("tarefaForm");
    const input = document.getElementById("tarefaInput");
    const lista = document.getElementById("listaTarefas");
    const mensagemErro = document.getElementById("mensagemErro");
  
    form.addEventListener("submit", (event) => {
      event.preventDefault();
  
      const tarefaTexto = input.value.trim();
      if (tarefaTexto === "") {
        mensagemErro.textContent = "Digite uma tarefa antes de adicionar!";
        return;
      }
  
      mensagemErro.textContent = "";
  
      const li = document.createElement("li");
      li.textContent = tarefaTexto;
  
      const botaoExcluir = document.createElement("button");
      botaoExcluir.textContent = "Excluir";
      botaoExcluir.style.marginLeft = "10px";
  
      botaoExcluir.addEventListener("click", () => {
        lista.removeChild(li);
      });
  
      li.appendChild(botaoExcluir);
      li.addEventListener("click", () => {
        li.classList.toggle("concluida");
      });
  
      lista.appendChild(li);
      input.value = "";
    });
  });
  