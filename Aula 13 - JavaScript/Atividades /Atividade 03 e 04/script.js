


try {
    const nome = document.getElementById("nome").value
    nomeEmpresa(nome)
}catch (erro) {
    console.log("Ocorreu um erro", message);
}finally {
    console.log("Dado Salvo");
}
try {
    const cidade = document.getElementById("cidade").value
    cidadeEmpresa(cidade)
}catch (erro) {
    console.log("Ocorreu um erro", message);
}finally {
    console.log("Dado Salvo");
}
try {
    const valor = document.getElementById("valor").value
    valorEmpresa(valor)
}catch (erro) {
    console.log("Ocorreu um erro", message);
}finally {
    console.log("Dado Salvo");
}