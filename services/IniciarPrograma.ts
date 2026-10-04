import { TestarConexao } from "../database/ConnectionFactory.js";
import { VerificarBancoDeDados, SincronizarTabelas } from "./EtapasInicializacaoPrograma.js";
import { AtualizarProgresso } from "../utils/Carregamento.js";

export async function IniciarPrograma() {
  const prefixo = "DB1";

  AtualizarProgresso(0, "Verificando existência do banco de dados...");
  AtualizarProgresso(10, "Banco de dados não existe. Criando banco de dados...");
  const retornoBanco = await TestarConexao(prefixo);

  const bancoVerificado = await VerificarBancoDeDados(retornoBanco);

  if (bancoVerificado) {
    const tabelasSincronizadas = await SincronizarTabelas();

    if (tabelasSincronizadas) {
      console.log('Programa iniciado com sucesso!');
    }
    else {
      console.error('Erro ao sincronizar tabelas. Finalizando o programa.');
      close();
    }
  }
  else {
    console.error('Erro ao validar banco de dados. Finalizando o programa.');
    close();
  }
}