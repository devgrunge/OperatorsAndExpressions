/*
- Expressions
- Operators
  Binary
  Unary
  Ternary
  Exercicio 1 Expressões e operadores

  let julia = 10
  let junin = 7
  
  console.log()
  
  */

/* 
Exercicio 2 New

   NEW
  
  * left-hand-side expression
  * criar um novo objeto  
   
   let name = String('mayk')
   let age =  Number(23)
   
   console.log(name , age)
   */
   
/* 
Exercicio 3 Typeof delete

const person = {
  name: 'julinha',
  age: 25,
  
}
delete person.age
console.log(person)
*/

/*
Exercicio 4 Operadores aritiméticos

//* Multiplicação *
console.log(5 * 5)
//* Divisão /
console.log(8.2 / 2)
//* Soma +
console.log(34 + 32)
* Subtração -
consle.log(34 - 23)
* Resto da divisão %
let remainder
remainder = 11 % 3
console.log(remainder)
* Incremento ++
let increment = 0
increment++
console.log(increment)
* Decremento -- 
let decrement
decrement--
console.log(decrement)
* Exponencial ** 
console.log(3 ** 3)
*/

/* 
Grouping operator ( )

let total = (2 + 3) *5

console.log(total)
*/
/* Operadores de comparação 
Irá comparar valores  e retornar um boolean como resposta à comparação == ou === 
console.log(num1 === num2)

Diferente de !=


console.log(num1 != num2)
console.log(num1 != 1)
console.log(num1 != "1")

Igual a --> ==
Estritamente igual a --> ===
Diferente de --> !=
Estritamente diferente de --> !==
Maior que --> >
Menor que --> <
Maior ou igual a --> >=
Menor ou igual a --> <=
let num1 = 1
let num2 = 2
console.log(num2 >= 1)

Operadores de atribuição (Assignment) 
let x
//Assignment
x = 1
// Adition assignment
// x = x + 2
x += 2
//Subtraction assignment
// x = x - 1
x -= 1
//Multiplication assignment
// x = x * 2
x *= 2
//Division assignment
// x = x / 2
x /= 2
//Remainder , exponetiation
//  x %= 2
x **= 2
console.log(x)


Operadors Lógicos (Logical operators)
2 Valores booleanos , quando verificados , resultará em verdadeiro ou falso

// E = AND &&
//console.log(pao && queijo ) 

// OU = OR ||  
//console.log(pao || queijo)

// Não = NOT ! *Operador de negação
//console.log(!pao)

//Operador condicional (Ternário)
//Dependendo da condição , nós recebemos valores diferentes 
// EX: condição então valor 1 se não valor 2
// condition ? value1 : value2

//Exemplos 
// café da manhã top
let pao = false
let queijo = true
const niceBreakfast = pao || queijo ? 'cafézin top' : 'cafézin ruim'
console.log(niceBreakfast)
//Maior de 18
let age = 16
const canDrive = age >= 18 ? 'can drive' : "can't drive"
console.log(canDrive)

String Operator 
//comparison (comparação)

//console.log( 'a' == 'A')

//concatenation (concatenação)
let alpha = 'alpha'
alpha += 'bet'
console.log(alpha)
//retorna a união de de duas strings


Type conversion (typecasting) vs Type coersion 

Falsy 
Quando um valor é considerado false em contextos onde um booleano é obrigatório (condicionais e loops)

false 
0
-0
""
null
undefined 
NaN
console.log( 0 ? 'verdadeiro' : 'falso' )



Truthy 
Quando um valor é considerado true em contextos onde um booleano é obrigatório (condicionais e loops)

true
{}
[]
1
3.23
"0"
"false"
-1
Infinity
//console.log( 3.23 ? 'verdadeiro' : 'falso' )

Operator precedence (Precedência de operadores)


* Grouping  (  )
* Negação e incremento            ! ++ --
* Multiplição e divisão           * /
* Adição e subtração              + -
* Relacional                      < <= > >=c
* Igualdade                       == != === !==
* AND                             &&
* OR                              ||
* Condicional                     ?:
* Assignment (atribuição)         = -= += *=


console.log( 3 < 2 || 2 < 1  )
*/





