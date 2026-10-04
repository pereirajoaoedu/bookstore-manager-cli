import { MenuPrincipal } from "../menus/MenuPrincipal.js";
import { IniciarPrograma } from "../services/IniciarPrograma.js";

async function main() {
  await IniciarPrograma();
  await MenuPrincipal();
}

main();