````function calculaSalario(qtdeCarrosVendidos, valorTotalVendas) {
  let salario = 2000
  let porcentagem = 0.05
  let aumento = valorTotalVendas * porcentagem
  let salarioAlmento = salario + aumento
  let bonus = 100 * qtdeCarrosVendidos
  let novoSalario = salarioAlmento + bonus
  return novoSalario
}```

````
