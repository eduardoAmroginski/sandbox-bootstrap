const formulario = document.getElementById("form-contato");

formulario.addEventListener("submit", (event) => {
    event.preventDefault();
    const nomeCompleto = event.target.fullname.value;
    const email = event.target.email.value;
    const mensagem = event.target.mensagem.value;

    alert("Contato enviado com sucesso!");
    alert(`Dados enviados: \n
           E-mail: ${email} \n
           Nome Completo: ${nomeCompleto} \n
           Mensagem: ${mensagem}
           `);
})