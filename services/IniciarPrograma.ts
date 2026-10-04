import { TestarConexao } from "../database/ConnectionFactory.js";
import { VerificarBancoDeDados, SincronizarTabelas } from "./EtapasInicializacaoPrograma.js";

export async function IniciarPrograma() {
  const prefixo = "DB1";

  console.log('(0%) Iniciando o programa...');
  console.log('(10%) Verificando existência do banco de dados...');
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