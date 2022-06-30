
var listaDePecas = ["Rotor", "Eixo traseiro", "Cabos de Alimentação", "Velas", "Carburador"]; // Declaração de um array contendo as peças a serem cadastradas.

var pesoDasPecas = 80; // armazenamento do peso na variável pesoDasPecas

var nomeDaPeca = " Velas"; // Definição da variável nomeDaPeca

if (pesoDasPecas <= 100) //Condicional 1: Verificar se o peso é inferior ou igual à 100.
    {
    console.log ("O produto não pode ser cadastrado. O peso é inferior ao valor mínimo (101 gramas) exigido");
    }else
        {
            console.log ("O produto poderá ser cadastrado no sistema.");
        }

if (listaDePecas.length > 10) // Condicional 2: Usado o comando length para analisar o comprimento do array.
    {
    console.log (" Infelizmente o limite de 10 peças cadastradas já atingiu o seu limite.");
    }else
        {
            console.log ("Peça cadastrada com sucesso.");
        }

if (nomeDaPeca.length > 3) // Condicional 3: Verificar o comprimento da variável nomeDaPeca.
    {
        console.log ("O nome da Peça é valido para cadastro");
    }else 
        {
            console.log (" O nome da Peça listada é muito pequeno.");
        }