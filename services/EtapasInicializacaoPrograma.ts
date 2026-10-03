import { CriarBancoDeDados } from "../database/CreateDb.js";
import * as createTables from "../database/CreateTables.js";

export async function VerificarBancoDeDados(retorno: string) : Promise<boolean> {
    if (retorno.includes("does not exist") || retorno.includes("não existe") || retorno.includes("n�o existe")) {
        console.log('(10%) Banco de dados não existe. Criando banco de dados...');

        try {
            const resultado = await CriarBancoDeDados();
            console.log('(20%) Banco de dados criado com sucesso. Continuando...');
        }
        catch (erro) {
            console.error("Erro ao criar o banco de dados:", erro);
            return false;
        }
        
    } else if (retorno.includes("sucesso")) {
        console.log('(20%) Banco de dados existente. Continuando...');
    }
    return true;
}

export async function SincronizarTabelas() : Promise<boolean> {
    console.log('(30%) Verificando tabela autor...');
    const tabelaAutor = await createTables.CriarTabelaAutor();

    if (tabelaAutor) {
        console.log('(40%) Tabela autor verificada com sucesso. Continuando...');
    }
    else {
        console.error("Erro ao verificar a tabela autor. Encerrando o progarama.");
        close();
    }

    console.log('(50%) Verificando tabela livro...');
    const tabelaLivro = await createTables.CriarTabelaLivro();

    if (tabelaLivro) {
        console.log('(60%) Tabela livro verificada com sucesso. Continuando...');
    }
    else {
        console.error("Erro ao verificar a tabela livro. Encerrando o progarama.");
        close();
    }

    console.log('(70%) Verificando tabela cliente...');
    const tabelaCliente = await createTables.CriarTabelaCliente();

    if (tabelaCliente) {
        console.log('(80%) Tabela cliente verificada com sucesso. Continuando...');
    }
    else {
        console.error("Erro ao verificar a tabela cliente. Encerrando o progarama.");
        close();
    }

    console.log('(90%) Verificando tabela empréstimo...');
    const tabelaEmprestimo = await createTables.CriarTabelaEmprestimo();

    if (tabelaEmprestimo) {
        console.log('(100%) Tabela empréstimo verificada com sucesso. Inicialização completa.');
    }
    else {
        console.error("Erro ao verificar a tabela empréstimo. Encerrando o progarama.");
        close();
    }

    return true;
}