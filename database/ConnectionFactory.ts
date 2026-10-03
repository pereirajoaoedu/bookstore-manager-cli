import "dotenv/config";
import { Pool } from "pg";

export async function IniciarConexao(prefixo: string): Promise<Pool> {
    const pool = new Pool({
        host: process.env[`${prefixo}_HOST`],
        port: Number(process.env[`${prefixo}_PORT`]),
        user: process.env[`${prefixo}_USER`],
        password: process.env[`${prefixo}_PASSWORD`],
        database: process.env[`${prefixo}_NAME`],
    });
    return pool;
}

export async function FecharConexao(prefixo: string): Promise<void> {

  try {
    const pool = await IniciarConexao(prefixo);
    await pool.end();

  } catch (erro) {
    console.error("Erro ao fechar a conexão com o banco de dados:", erro);
  }
}

export async function TestarConexao(prefixo: string): Promise<string> {
    let msg = "";

  try {
    const pool = await IniciarConexao(prefixo);
    await pool.query("SELECT NOW()");
    msg = `Conexão com o banco de dados ${process.env[`${prefixo}_NAME`]} estabelecida com sucesso!`;
    return msg;

  } catch (erro: unknown) {
    const mensagemErro = erro instanceof Error ? erro.message : String(erro);

    if (mensagemErro.includes("n�o existe") || mensagemErro.includes("does not exist") || mensagemErro.includes("não existe")) {
        msg = `Banco de dados ${process.env[`${prefixo}_NAME`]} não existe.`;
    }

    if (mensagemErro.includes("password authentication failed") || mensagemErro.includes("senha incorreta")) {
        msg = `Senha incorreta para o usuário ${process.env[`${prefixo}_USER`]}.`;
    }

    return msg;
  }
}