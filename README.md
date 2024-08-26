# Simple Notes
Este projeto é uma aplicação web que permite aos usuários gerenciar suas anotações de forma prática e organizada. Os usuários podem adicionar, visualizar e remover notas com facilidade. As anotações são separadas por áreas de trabalho
para facilitar o seu gerenciamento.

### Como executar
Clone o repositório do projeto utilizando o Git e, em seguida, acesse a pasta de distribuição dist, onde estão todos os componentes finais do projeto. Para visualizar a plataforma, basta abrir o arquivo index.html no navegador.

A pasta src contém o diretório script, onde está localizado o arquivo de script principal em TypeScript.

### Como usar
Após acessar a plataforma, você será direcionado à página inicial, que apresenta uma barra lateral, um título (personalizável para a área de trabalho atual, digite o título e pressione "Enter") e uma barra de texto localizada na parte inferior para que você possa criar suas anotações. Para adicionar uma nova nota, basta digitar o conteúdo desejado e, em seguida, pressionar "Enter" ou clicar no botão de envio ao lado da barra de digitação. A nota será exibida automaticamente na área de trabalho, contendo o texto inserido e um ícone de lixeira que permite excluir a nota quando desejado.

### Tecnologias utilizadas
Foi utilizado HTML para a estruturação, CSS para a estilização e TypeScript para dar dinamismo à página. Além disso, foram usadas as APIs Font Awesome para a implementação dos ícones e Google Fonts para a aplicação das fontes.

### Melhorias futuras
* Possibilidade de criar áreas de trabalhos;
* Áreas de trabalho com notas temporizadas personalizados pelo o usuário para que suma em um período de tempo, possibilitando o foco do usuário;
* Possibilidade de personalização das cores, texto e fonte das notas ja criadas;
* Possibilidade de adicionar mais elementos nas notas como títulos, listas, imagens, links, vídeos e etc;
* Melhorias no layout e design da página;
* Notas com tamanhos personalizados de acordo com quantidade do seu conteúdo;
* Modo escuro;
* Armazenamento das notas utilizando banco de dados;
* Botão para deletar todas as notas de uma vez só.