// import { v4 } from "uuid";

// // interface que implementa um contrato com as classes
// export interface GeraId {
//   generate(): string
// }

// // Gera id pelo UUID
// class IdGenerator implements GeraId {
//   // uuid
//   public generate(): string {
//     return v4();
//   }

// }

// // Gera id pelo Date.now
// export class GeraIdPeloDate implements GeraId {
//   // date.now()
//   generate(): string {
//     return Date.now().toString()
//   }

// }



// class Usuario {

//   constructor(
//     private geraId: GeraId
//   ) { }

//   criarUsuario(name: string) {

//     const id = this.geraId.generate()

//     const pessoa = {
//       id,
//       name
//     }

//     console.log(pessoa);

//   }
// }


// // Chamar a classe
// new Usuario(new GeraIdPeloDate).criarUsuario("Pablo")


// // class Pessoa {
// //   constructor(private name:string){}
// // }


// // type TipandoPessoa ={
// //   name:string
// // }

// // const novaPessoa1:TipandoPessoa = {
// //   name:"gabriel"
// // }

// // const novaPessoa2 = new Pessoa("gabriel")



// // function geraPessoa(pessoa:TipandoPessoa){
// //   console.log(pessoa);

// // }

// // geraPessoa(novaPessoa1)
// // geraPessoa(novaPessoa2)

// // paradigma funcional
// function pessoa(name: string) {

// }



// // paradigma orientado a objeto
// class Pessoa {

//   constructor(
//     private name: string
//   ) { }
// }
