import { IniciarConexao, FecharConexao } from "./ConnectionFactory.js";
import * as schemas from "./Schemas.js";

export async function CriarTabelaAutor(): Promise<boolean> {
    try {
        const pool = await IniciarConexao("DB1");
        await pool.query(schemas.CriarTabelaAutor);
        await FecharConexao("DB1");
        return true;
    }
    catch (erro) {
        console.error("Erro ao criar a tabela autor:", erro);
        return false;
    }
}

export async function CriarTabelaLivro(): Promise<boolean> {
    try {
        const pool = await IniciarConexao("DB1");
        await pool.query(schemas.CriarTabelaLivro);
        await FecharConexao("DB1");
        return true;
    }
    catch (erro) {
        console.error("Erro ao criar a tabela livro:", erro);
        return false;
    }
}

export async function CriarTabelaCliente(): Promise<boolean> {
    try {
        const pool = await IniciarConexao("DB1");
        await pool.query(schemas.CriarTabelaCliente);
        await FecharConexao("DB1");
        return true;
    }
    catch (erro) {
        console.error("Erro ao criar a tabela cliente:", erro);
        return false;
    }
}

export async function CriarTabelaEmprestimo(): Promise<boolean> {
    try {
        const pool = await IniciarConexao("DB1");
        await pool.query(schemas.CriarTabelaEmprestimo);
        await FecharConexao("DB1");
        return true;
    }
    catch (erro) {
        console.error("Erro ao criar a tabela empréstimo:", erro);
        return false;
    }
}