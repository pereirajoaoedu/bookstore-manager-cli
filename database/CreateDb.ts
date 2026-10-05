import { IniciarConexao, FecharConexao } from "./ConnectionFactory.js";

export async function CriarBancoDeDados(): Promise<boolean> {
  try {
    const prefixo = "DB1";
    const pool = await IniciarConexao("DB2");
    await pool.query(`CREATE DATABASE ${process.env[`${prefixo}_NAME`]}`);
    await FecharConexao("DB2");
    return true;

  } catch (erro) {
    console.error("Erro ao criar o banco de dados:", erro);
    await FecharConexao("DB2");
    return false;
  }
}