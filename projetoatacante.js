
class Heroi {
    constructor(nome, idade, tipo) {
      this.nome = nome;
      this.idade = idade;
      this.tipo = tipo;
    }
  
   
    atacar() {
      let ataque;
  
    
      switch (this.tipo) {
        case 'mago':
          ataque = 'usou magia';
          break;
        case 'guerreiro':
          ataque = 'usou espada';
          break;
        case 'monge':
          ataque = 'usou artes marciais';
          break;
        case 'ninja':
          ataque = 'usou shuriken';
          break;
        default:
          ataque = 'realizou um ataque';
      }
  
      
      console.log(`O ${this.tipo} ${this.nome} atacou usando ${ataque}`);
    }
  }
  

  const heroiMago = new Heroi('veigar', 100, 'mago');
  const heroiGuerreiro = new Heroi('darius', 30, 'guerreiro');
  const heroiMonge = new Heroi('Lee', 40, 'monge');
  const heroiNinja = new Heroi('kennen', 25, 'ninja');
  
  heroiMago.atacar();
  heroiGuerreiro.atacar();
  heroiMonge.atacar();
  heroiNinja.atacar();