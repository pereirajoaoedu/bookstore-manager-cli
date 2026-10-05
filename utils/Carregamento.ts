export function AtualizarProgresso(percentual: number, mensagem: string): void {
    const tamanhoBarra = 30;
    
    const blocosPreenchidos = Math.floor((percentual / 100) * tamanhoBarra);
    const blocosVazios = tamanhoBarra - blocosPreenchidos;
    const barra = '█'.repeat(blocosPreenchidos) + '░'.repeat(blocosVazios);

    if (percentual === 0) process.stdout.write('\x1B[?25l'); 

    process.stdout.write(`\r[${barra}] ${percentual.toString().padStart(3, ' ')}% | ${mensagem}\x1b[K`);

    if (percentual >= 100) {
        process.stdout.write('\x1B[?25h\n'); 
    }
}