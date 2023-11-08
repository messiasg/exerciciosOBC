    // Início funções calculos
    
    function areaTriangulo() {
    let base = parseFloat(prompt("Digite a base do triângulo:"))
    let altura = parseFloat(prompt("Digite a altura do triângulo:"))
    return (base * altura) / 2;
    }

    function areaRetangulo() {
        let base = parseFloat(prompt("Digite a base do retângulo:"))
        let altura = parseFloat(prompt("Digite a altura do retângulo:"))
        return base * altura;
    }

    function areaQuadrado() {
        let lado = parseFloat(prompt("Digite o lado do quadrado:"))
        return lado * lado;
    }

    function areaTrapezio() {
        let baseMaior = parseFloat(prompt("Digite a base maior do trapézio:"))
        let baseMenor = parseFloat(prompt("Digite a base menor do trapézio:"))
        let altura = parseFloat(prompt("Digite a altura do trapézio:"))
        return (baseMaior + baseMenor) * altura / 2;
    }

    function areaCirculo() {
        let raio = parseFloat(prompt("Digite o raio do cículo:"))
        var pi = 3.14;
        return pi * raio * raio;
     }

    //  Fim funções calculos

    //  Função menu interativo

     function menuInterativo () {
        return prompt (
            "Bem-vindo a calculadora de áreas geométricas, selecione a opção abaixo para o que você deseja calcular!" +
            "\n\n1.área do triângulo" +
            "\n2.área do retângulo" +
            "\n3.área do quadrado" +
            "\n4.área do trapézio" +
            "\n5.área do círculo" +
            "\n6.Sair"
        )
     }

    //  Inicio função para execução do programa
     
     function executarPrograma() {
        let opcao = "";

        do {
           opcao = menuInterativo()
           let resultado

            switch(opcao) {
                case "1":
                resultado = areaTriangulo()
                break

                case "2":
                resultado = areaRetangulo()
                break

                case "3":
                resultado = areaQuadrado()
                break

                case "4":
                resultado = areaTrapezio()
                break

                case "5":
                resultado = areaCirculo()
                break

                case "6":
                alert("Programa encerrando!")
                break

                default:
                alert("Opção inválida, tente novamente.")

                
            }

            if (resultado) {
                alert("Resultado: " + resultado)
            }

        } while (opcao !== "6")
     }

    //  Fim execução programa
executarPrograma()
