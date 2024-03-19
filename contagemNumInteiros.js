import { get_number_inteiro, print } from "./utils/io_utils.js"


function main() {

  //entrada
  print(` >>>> CONTAGEM NUMEROS INTEIROS <<<<`)
  print(`--------------------------------------------`)
  const N = get_number_inteiro(`Informe o numero (inicio da contagem) : `)
  const M = get_number_inteiro(`Informe outro numero (fim da contagem) : `)

  //processamento e saida
  print(`----------------------------------------`)

   contagem_numeros_inteiros(N,M)

  
}

main()


function contagem_numeros_inteiros(Num_inicio,Num_fim){

   let contador = Num_inicio

   if(Num_inicio >= Num_fim){

     while(contador >= Num_fim ){

      print(`${contador}`)
      
      contador--
      
     }
   }
   
   if(Num_inicio <= Num_fim){

     while(contador <= Num_fim){

        print(`${contador}`)
       
        contador++
     }
   }

   

}

