const quiz3 = [
 
    {
      question:
        "Qual é a principal finalidade do código G0 (ou G00) em centros de usinagem com comando Fanuc?",
      options: [
        "Controlar a rotação do fuso de acordo com o diâmetro da ferramenta utilizada",
        "Compensar automaticamente o raio da ferramenta durante o contato com a peça",
        "Executar a usinagem de acabamento em superfícies planas com alta precisão",
        "Realizar o deslocamento linear com o maior avanço disponível para aproximação ou afastamento"
      ],
      answer: 3
    },
    {
      question:
        "Ao utilizar o código G1, como é determinado o avanço do deslocamento da máquina?",
      options: [
        "Através do diâmetro da ferramenta multiplicado pela profundidade de corte",
        "Pela média aritmética entre os avanços de aproximação e afastamento",
        "Pela velocidade máxima permitida pelos motores de passo do equipamento",
        "Através do comando F, geralmente expresso em mm/min"
      ],
      answer: 3
    },
    {
      question:
        "O que caracteriza um código como sendo modal no contexto da programação Fanuc?",
      options: [
        "O código altera automaticamente sua função dependendo da ferramenta selecionada",
        "O comando exige confirmação do operador a cada bloco",
        "O código só pode ser executado uma única vez por programa",
        "A instrução permanece ativa até que outro código da mesma natureza a substitua"
      ],
      answer: 3
    },
    {
      question:
        "No exemplo de faceamento, para uma ferramenta de 50 mm de diâmetro e um afastamento de segurança de 5 mm, por que a coordenada inicial X é -30?",
      options: [
        "Porque deve-se posicionar o centro da ferramenta exatamente na face lateral da peça",
        "Porque o diâmetro total da ferramenta é subtraído da folga de 20 mm",
        "Porque soma-se o raio da ferramenta (25 mm) com o afastamento desejado (5 mm)",
        "Porque -30 é o valor padrão de segurança definido no comando Fanuc"
      ],
      answer: 2
    },
    {
      question:
        "Para remover 40 mm de material no eixo Y com uma ferramenta de raio 25 mm, qual o raciocínio para definir a coordenada Y15?",
      options: [
        "Subtrai-se o afastamento de segurança de 5 mm da profundidade total",
        "Divide-se a área total de usinagem pela metade",
        "Soma-se o diâmetro da ferramenta ao incremento de profundidade e divide-se por dois",
        "O raio de 25 mm já cobriria parte da usinagem se estivesse em Y0, restando 15 mm para atingir os 40 mm"
      ],
      answer: 3
    },
    {
      question:
        "Por que o deslocamento entre as posições 2 e 3 no exemplo de faceamento pode ser realizado com o código G0?",
      options: [
        "Porque a máquina ajusta automaticamente para G0 quando não há esforço no fuso",
        "Porque o avanço F é sempre ignorado nos movimentos laterais",
        "Porque o código G0 garante melhor qualidade superficial",
        "Porque a ferramenta não está em contato com a peça nesse trajeto"
      ],
      answer: 3
    }
]
export default quiz3;
