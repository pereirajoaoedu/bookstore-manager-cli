import { IniciarConexao, FecharConexao } from "../database/ConnectionFactory.js";
import * as schemas from "../database/Schemas.js";
import { Livro } from '../models/Livro.js';

export class LivroRepository {

    public async InserirLivro(livro: Livro): Promise<void> {
        try {
            const pool = await IniciarConexao("DB1");
            await pool.query(schemas.InserirLivro, [livro.titulo, livro.idAutor, livro.dataPublicacao, livro.numeroPaginas, livro.isbn, livro.ativo]);
            await FecharConexao("DB1");

        } catch (erro) {
            console.error("Erro ao inserir livro no banco de dados. Motivo:", erro);
            throw erro;
        }
    }

    public async ListarLivros(id: number = 0): Promise<Livro[]> {
        try {
            const pool = await IniciarConexao("DB1");
            const resultado = await pool.query(id > 0 ? schemas.ListarLivroPorId : schemas.ListarLivros, id > 0 ? [id] : []);
            await FecharConexao("DB1");
            return resultado.rows.map((row: any) => new Livro(row.id, row.titulo, row.id_autor, row.nome_autor, row.data_publicacao, row.numero_paginas, row.isbn, row.ativo));

        } catch (erro) {
            console.error("Erro ao listar livros no banco de dados. Motivo:", erro);
            throw erro;
        }
    }

    public async AtualizarLivro(livro: Livro): Promise<void> {
        try {
            const pool = await IniciarConexao("DB1");
            await pool.query(schemas.AtualizarLivro, [livro.titulo, livro.idAutor, livro.dataPublicacao, livro.numeroPaginas, livro.isbn, livro.ativo, livro.id]);
            await FecharConexao("DB1");

        } catch (erro) {
            console.error("Erro ao atualizar livro no banco de dados. Motivo:", erro);
            throw erro;
        }   
    }

    public async RemoverLivro(id: number): Promise<void> {
        try {
            const pool = await IniciarConexao("DB1");
            await pool.query(schemas.RemoverLivro, [id]);
            await FecharConexao("DB1");

        } catch (erro) {
            console.error("Erro ao remover livro no banco de dados. Motivo:", erro);
            throw erro;
        }
    }
}