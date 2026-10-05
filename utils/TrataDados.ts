export async function TrataData(dataString: string): Promise<Date> {
    const partes = dataString.split('/');
    const [diaString, mesString, anoString] = partes;

    if (!diaString || !mesString || !anoString) {
        throw new Error(`Data inválida: ${dataString}`);
    }

    const dia = parseInt(diaString, 10);
    const mes = parseInt(mesString, 10) - 1;
    const ano = parseInt(anoString, 10);

    return new Date(ano, mes, dia);
}