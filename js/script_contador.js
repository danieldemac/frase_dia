        // Função para atualizar o contador
        function atualizarContador() {
            var agora = new Date(); // Horário atual
            var proximaAtualizacao = new Date(); // Horário da próxima atualização
            proximaAtualizacao.setHours(0, 0, 0, 0); // Definindo a próxima atualização para o início do próximo dia
            proximaAtualizacao.setDate(proximaAtualizacao.getDate() + 1); // Incrementando para o próximo dia
            var diferenca = proximaAtualizacao - agora; // Calculando a diferença em milissegundos

            // Convertendo milissegundos para horas, minutos e segundos
            var horas = Math.floor(diferenca / 1000 / 60 / 60);
            var minutos = Math.floor((diferenca / 1000 / 60) % 60);
            var segundos = Math.floor((diferenca / 1000) % 60);

            // Exibindo o contador no elemento HTML
            var contadorElemento = document.getElementById("contador");
            contadorElemento.textContent = "Frase nova em " + horas + " horas, " + minutos + " minutos e " + segundos + " segundos.";

            // Atualizando o contador a cada segundo
            setTimeout(atualizarContador, 1000);
        }

        // Chamando a função para iniciar o contador
        atualizarContador();