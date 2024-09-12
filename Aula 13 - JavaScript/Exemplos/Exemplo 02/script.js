try {
    const valor = 10 / 0;
    console.log("valor:");
} catch {
    console.error("ocorreu um erro:", erro.message);
}finally {
    console.log("este código é executado independentemente de exceções")
}