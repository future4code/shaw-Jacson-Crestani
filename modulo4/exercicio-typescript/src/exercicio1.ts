import { isJSDocAllType } from "typescript";

function person(nome: string, date: string) {
    const dateArray = date.split(" ");
    console.log(`Olá me chamo ${nome}, nasci no dia ${dateArray[1]} do mês de ${dateArray[2]} do ano de ${dateArray[3]} `);
}

    console.log(person("João", "10 de janeiro de 2000"))