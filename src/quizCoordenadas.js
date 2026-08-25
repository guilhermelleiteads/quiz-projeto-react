const quizCoordenadas = [

    {
      question:
        "Qual é o padrão correto para definir o número de identificação de um programa no comando Fanuc?",
      options: [
        "A letra O seguida de quatro dígitos (ex: O1000)",
        "Apenas quatro dígitos numéricos sem letra inicial",
        "A letra N seguida de quatro dígitos (ex: N1000)",
        "A letra P seguida de quatro dígitos (ex: P1000)"
      ],
      answer: 0
    },
    {
      question:
        "No bloco de segurança, qual a finalidade da função G21?",
      options: [
        "Definir que as informações programadas sejam em milímetros",
        "Ativar o plano de trabalho X e Y",
        "Definir o avanço em milímetros por minuto",
        "Determinar a programação em coordenadas absolutas"
      ],
      answer: 0
    },
    {
      question:
        "Em máquinas equipadas com trocador do tipo carrossel, qual coordenada de eixo Z deve ser utilizada no bloco de afastamento G53?",
      options: [
        "Z110",
        "Z-5",
        "Z-110",
        "Z0"
      ],
      answer: 2
    },
    {
      question:
        "Após selecionar a ferramenta com a função T, qual código deve ser inserido obrigatoriamente na linha posterior para executar a troca?",
      options: [
        "M5",
        "M6",
        "M3",
        "M30"
      ],
      answer: 1
    },
    {
      question:
        "Para ativar a compensação de altura da ferramenta e o seu respectivo corretor, quais funções devem ser programadas?",
      options: [
        "G40 e a função H",
        "G43 e a função H",
        "G54 e a função S",
        "G41 e a função D"
      ],
      answer: 1
    },
    {
      question:
        "De acordo com o vídeo, qual é a fórmula correta para calcular a rotação (RPM)?",
      options: [
        "RPM = Vc / D × 320",
        "RPM = (Vc × 320) / D",
        "RPM = Vc × 1000",
        "RPM = Vc × fz × n"
      ],
      answer: 1
    },
    {
      question:
        "Como se calcula o avanço de trabalho (F) após encontrar o RPM?",
      options: [
        "F = RPM × D",
        "F = (320 × RPM) / Vc",
        "F = RPM × fz × n",
        "F = RPM / (fz × n)"
      ],
      answer: 2
    },
    {
      question:
        "Qual a recomendação para o preenchimento dos números dos corretores H e D para evitar colisões?",
      options: [
        "Deixar os valores H e D em zero",
        "Utilizar sempre o corretor H1",
        "Utilizar o mesmo número da ferramenta (T10 usa H10 e D10)",
        "Somar 100 ao número da ferramenta"
      ],
      answer: 2
    },
    {
      question:
        "Sobre o trocador do tipo randômico, qual procedimento otimiza o tempo de processo?",
      options: [
        "Desligar o spindle (M5) durante o deslocamento",
        "Programar uma ferramenta em espera no magazine",
        "Retornar sempre a Z-110",
        "Utilizar apenas o corretor G54"
      ],
      answer: 1
    },
    {
      question:
        "O que deve ser feito para finalizar corretamente um bloco de comando e permitir que o CNC o interprete?",
      options: [
        "Digitar FIM ao final de cada linha",
        "Pressionar RESET após cada linha",
        "Utilizar parênteses ao final de cada código",
        "Inserir o ponto e vírgula através da tecla EOB"
      ],
      answer: 3
    }
  ]

export default quizCoordenadas;