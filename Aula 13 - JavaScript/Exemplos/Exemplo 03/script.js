function validarIdade(idade) {
    if (typeof idade !=='number' || idade < 0) {
        throw "a idade deve ser um número positivo";
    }
    if (idade < 18) {
        throw "Você é menor de idade e não pode acessar este conteúdo";
    }
    console.log("acesso permitido. Bem-vindo!");
}
try { 
    validarIdade(15);
} catch (erro) {
    console.error("Ocorreu um erro:", erro.message);
}