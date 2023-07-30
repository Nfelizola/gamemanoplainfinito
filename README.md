# Game-Manopla do infinito
<img src="https://github.com/Nfelizola/gamemanoplainfinito/assets/55410946/7f2c275e-34a2-4c39-9ae1-10798be1cf15">
<img src="https://github.com/Nfelizola/gamemanoplainfinito/assets/55410946/172ead17-11ba-485b-8405-8a40d78f79bc">

https://nfelizola.github.io/gamemanoplainfinito/

<img src="./img/sacoroxo1.png" href=# width=400px>

# 01ª-fase do Exercício:
## (Finalizar página)
Perceba fazendo a execução da página que apenas quando o THANOS joga a carta de número 01. é que ele está fazendo uma ação mais completa, vc terá que finalizar esta ação e implementar as outras cartas, no caso do thanos e no caso do jogador humano.

O PRIMEIRO DESAFIO PROPOSTO É ANALISAR E FINALIZAR A LÓGICA DO GAME, porque ainda falta finalizar todos os casos de Switches e melhorar ao máximo o raciocínio do THANOS.

Só isto já é um grande desafio.

Quem conseguir passar por esta primeira fase, estará habilidado a executar a segunda fase.

# 02ª-fase
## (Melhorar o código implementando oo)

Depois disto vocês podem tentar (ESTA FASE NÃO É OBRIGATÓRIA) melhorar ainda mais transformando  o código fornecido em uma estrutura orientada a objetos. 

Para isso, iremos criar classes e objetos para representar os elementos do jogo, como heróis, vilões, cartas, baralhos, entre outros.

1. Classe `Card` (Carta):
   - Cada carta do jogo será representada por um objeto da classe `Card`.
   - Os atributos da carta podem ser o tipo (herói ou vilão) e o valor (identificador único da carta).

2. Classe `Deck` (Baralho):
   - Representará um baralho do jogo, seja o de heróis ou o de vilões.
   - Terá um atributo que armazena as cartas do baralho (um array de objetos da classe `Card`).
   - Terá um método para embaralhar o baralho.

3. Classe `Player` (Jogador):
   - Representará os jogadores do jogo (herói e Thanos).
   - Terá um atributo que armazena a mão do jogador (um array de objetos da classe `Card`).
   - Terá um método para receber uma carta do baralho e adicioná-la à mão do jogador.

4. Classe `Game` (Jogo):
   - Representará o jogo em si.
   - Terá um atributo para cada jogador (um objeto da classe `Player` para o herói e outro para Thanos).
   - Terá um atributo para cada baralho (um objeto da classe `Deck` para o baralho de heróis e outro para o baralho de vilões).
   - Terá métodos para iniciar o jogo, realizar ações do jogo (como escolher uma carta para Thanos e verificar os efeitos), verificar o resultado do jogo, entre outros.

Agora, vamos transformar o código original em um exemplo orientado a objetos com base nessas classes:

```javascript
class Card {
    constructor(type, value) {
        this.type = type; // 'hero' para carta de herói e 'villain' para carta de vilão
        this.value = value; // Identificador único da carta (ex: '1ha', '1se', '1ne', etc.)
    }
}

class Deck {
    constructor(cards) {
        this.cards = cards; // Array de objetos da classe Card que representa as cartas do baralho
    }

    shuffle() {
        // Implementar o algoritmo para embaralhar as cartas do baralho
    }
}

class Player {
    constructor() {
        this.hand = []; // Array de objetos da classe Card que representa a mão do jogador
    }

    receiveCard(card) {
        this.hand.push(card);
    }
}

class Game {
    constructor() {
        this.heroDeck = new Deck([...]); // Crie um array de objetos da classe Card para representar o deck de heróis
        this.villainDeck = new Deck([...]); // Crie um array de objetos da classe Card para representar o deck de vilões
        this.heroPlayer = new Player();
        this.villainPlayer = new Player();
        this.started = false;
    }

    startGame() {
        // Implemente a lógica para iniciar o jogo
    }

    playTurn() {
        // Implemente a lógica para o turno de jogo, escolhendo uma carta para Thanos e aplicando os efeitos
    }

    // Outros métodos do jogo podem ser implementados aqui
}

// Exemplo de uso
const game = new Game();
game.startGame();
game.playTurn();
```

Lembrando que esse é apenas um exemplo de como a estrutura orientada a objetos poderia ser implementada com base no código fornecido. A implementação completa depende de mais detalhes sobre as regras do jogo, a interação entre os elementos e a lógica específica que deve ser adicionada ao jogo.

Todas as imagens e caracteres usados são de propriedade da Marvel, este projeto é totalmente baseado em um jogo licenciado pela mesma e o propósito é estritamente DIDÁTICO.

Quem conseguir apresentar uma versão deste Desafio no formato Orientado a Objeto, terá suas recompensas:
<img src="https://github.com/Nfelizola/gamemanoplainfinito/assets/55410946/fa58486f-4b80-4c8c-bd47-0f1bd2b66eb0" height=400px>
<img src="https://github.com/Nfelizola/gamemanoplainfinito/assets/55410946/21e04768-26fe-4abc-b72f-5b02afeecf4c" heigth=400px>


