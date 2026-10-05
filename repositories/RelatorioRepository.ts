import { IniciarConexao, FecharConexao } from "../database/ConnectionFactory.js";
import * as schemas from "../database/Schemas.js";
import { Livro } from '../models/Livro.js';
import { Cliente } from '../models/Cliente.js'

export class RelatorioRepository {

    public async ExibirRelatorio(tipoRelatorio: number): Promise<Livro[]> {
        try {
            const pool = await IniciarConexao("DB1");

            switch (tipoRelatorio) {
                case 1:
                    const resultadoDisponiveis = await pool.query(schemas.ListaLivrosDisponiveis);
                    await FecharConexao("DB1");
                    return resultadoDisponiveis.rows.map((row: any) => new Livro(row.id, row.titulo, row.id_autor, row.nome_autor, row.data_publicacao, row.numero_paginas, row.isbn, row.quantidade_disponivel, row.ativo));
                case 2:
                    const resultadoEmprestimos = await pool.query(schemas.ListaLivrosEmprestados);
                    await FecharConexao("DB1");
                    return resultadoEmprestimos.rows.map((row: any) => new Livro(row.id, row.titulo, null, row.nome_autor, row.data_publicacao, row.numero_paginas, row.isbn, null, true));
                case 3:
                    const resultadolLivrosPorAutor = await pool.query(schemas.ListarLivrosPorAutor);
                    await FecharConexao("DB1");
                    return resultadolLivrosPorAutor.rows.map((row: any) => new Livro(row.id, row.titulo, row.id_autor, row.nome_autor, null, null, null, null, true));
                case 4:
                    const resultadoLivrosEmprestados = await pool.query(schemas.ListarQuantidadeEmprestimosLivro);
                    await FecharConexao("DB1");
                    return resultadoLivrosEmprestados.rows.map((row: any) => new Livro(row.id, row.titulo, null, null, null, null, null, row.quantidade, true));
                default:
                    return [];
            }

        } catch (erro) {
            console.error("Erro ao listar relatorios. Motivo:", erro);
            throw erro;
        }
    }

    public async ExibirRelatorioClientes() : Promise<Cliente[]> {

        try {
            const pool = await IniciarConexao("DB1");
            const resultadoClientesEmprestimosAtivos = await pool.query(schemas.ListarClientesComEmprestimosAtivos);
            await FecharConexao("DB1");
            return resultadoClientesEmprestimosAtivos.rows.map((row: any) => new Cliente(row.id, row.nome, null, null, null, true, row.quantidade));

        } catch (erro) {
            console.error("Erro ao listar relatorios. Motivo:", erro);
            throw erro;
        }
    }
}