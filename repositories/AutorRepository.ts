import { IniciarConexao, FecharConexao } from "../database/ConnectionFactory.js";
import * as schemas from "../database/Schemas.js";
import { Autor } from '../models/Autor.js';

export class AutorRepository {

    public async InserirAutor(autor: Autor): Promise<void> {
        try {
            const pool = await IniciarConexao("DB1");
            await pool.query(schemas.InserirAutor, [autor.nome, autor.dataNascimento, autor.resumo, autor.ativo]);
            await FecharConexao("DB1");

        } catch (erro) {
            console.error("Erro ao inserir autor no banco de dados. Motivo:", erro);
            throw erro;
        }
    }

    public async ListarAutores(id: number = 0): Promise<Autor[]> {
        try {
            const pool = await IniciarConexao("DB1");
            const resultado = await pool.query(id > 0 ? schemas.ListarAutorPorId : schemas.ListarAutores, id > 0 ? [id] : []);
            await FecharConexao("DB1");
            return resultado.rows.map((row: any) => new Autor(row.id, row.nome, row.data_nascimento, row.resumo, true));

        } catch (erro) {
            console.error("Erro ao listar autores no banco de dados. Motivo:", erro);
            throw erro;
        }
    }

    public async AtualizarAutor(autor: Autor): Promise<void> {
        try {
            const pool = await IniciarConexao("DB1");
            await pool.query(schemas.AtualizarAutor, [autor.nome, autor.dataNascimento, autor.resumo, autor.ativo, autor.id]);
            await FecharConexao("DB1");

        } catch (erro) {
            console.error("Erro ao atualizar autor no banco de dados. Motivo:", erro);
            throw erro;
        }   
    }

    public async RemoverAutor(id: number): Promise<void> {
        try {
            const pool = await IniciarConexao("DB1");
            await pool.query(schemas.RemoverAutor, [id]);
            await FecharConexao("DB1");

        } catch (erro) {
            console.error("Erro ao remover autor no banco de dados. Motivo:", erro);
            throw erro;
        }
    }
}