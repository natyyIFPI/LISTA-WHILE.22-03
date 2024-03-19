/*Calcule a quantidade de combustível que pode ser colocada em uma aeronave e verifique se a aeronave
pode levantar vôo ou não. Considere os seguintes critérios:
· O peso de decolagem da aeronave é sempre igual a 500.000 kg;
· O peso de decolagem é composto pela soma do peso do combustível, do peso da carga, do peso dos
passageiros;
· O peso do combustível é a quantidade do combustível (em litros) multiplicada pelo fator 1.5kg/l;
· A quantidade mínima de combustível para que a aeronave decole é de 10000 l;
· O peso da carga é o somatório do peso dos “containers” de cargas em quilogramas.
· O peso dos passageiros é o somatório do peso de cada passageiro e de todos os volumes da sua
bagagem; cada passageiro tem o peso estimado de 70kg e cada volume de bagagem tem o peso
estimado de 10kg.
O algoritmo deve ler o números de containers e a seguir ler o peso de cada container. A seguir devem
ser lidos os dados dos passageiros (número do bilhete, quantidade de bagagens) até que o número do
bilhete seja igual a 0. Devem ser mostrados, a quantidade de passageiros, a quantidade total de volume
de bagagem, o peso dos passageiros, o peso da carga, a quantidade possível de combustível, e uma
mensagem indicando a liberação da decolagem ou não.*/

import { get_number, print } from "./utils/io_utils.js"

function main(){ 

print(`==================================================`)

//PEDIR ENTRADA QUANTIDADE DE CONTAINERS
let quantidade_containers = get_number(`Quantidade de Containers : `)

//SOMATORIO PESO DOS CONTAINERS
const somatorio_peso_containers = calcular_somatorio_peso_containers(quantidade_containers)

print(`==================================================`)
print(`SOMATORIO PESO CONTAINERS : ${somatorio_peso_containers}`)

//CALCULAR PESO DOS PASSAGEIROS

while(true){

    print(`==================================================`)
    const numero_de_bilhetes = get_number(`Informe o NUMERO DE BILHETES : `)

    if(numero_de_bilhetes > 0 ){

        calcular_peso_passageiros()

    }else if(numero_de_bilhetes === 0 ){

        break;

    }else{

        print(` ERRO DE ENTRADA!! D:`)
        break;
    }

}
 

////FUNÇOES////

//calcular PESO CONTAINERS
function calcular_somatorio_peso_containers(qtd_containers){ 
    let numero_containers = qtd_containers
    let soma_dos_pesos_containers = 0
    while(qtd_containers > 0 ){

     let peso_containers = get_number(`Informe o peso(KG) do Containers ${numero_containers} : KG `)
     numero_containers--
     qtd_containers--
     soma_dos_pesos_containers += peso_containers

      }

      return soma_dos_pesos_containers
}

function calcular_peso_passageiros(num_bilhetes){

    let numero_de_bagagens = get_number(`Informe a QUANTIDADE DE BAGAGENS : `)

    let somatorio_peso_passageiro = 0
    let somatorio_peso_bagagens = 0

    while(num_bilhetes > 0 || numero_de_bagagens > 0 ){

        peso_de_cada_passageiro++
        peso_de_cada_bagagem++

        somatorio_peso_passageiro = peso_de_cada_passageiro
        somatorio_peso_bagagens = peso_de_cada_bagagem

        
        num_bilhetes--
        numero_de_bagagens--

    }

    let somaDosPesosDosPassageiros = somatorio_peso_passageiro + somatorio_peso_bagagens

    print(`O SOMATORIO DO PESO DOS PASSAGEIROS : ${somaDosPesosDosPassageiros} `)

}



}
main()