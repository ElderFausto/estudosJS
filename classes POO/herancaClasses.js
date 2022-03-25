class DispositivoEletronico {
  constructor(nome) {
    this.nome = nome;
    this.ligado = false;
  }

  ligar () {
    if (this.ligado) {
      console.log(this.nome + ' já ligado');
      return;
    }

    this.ligado = true;
  }

  desligar() {
    if(!this.ligado) {
      console.log(this.nome + ' ja desligado');
      return;
    }

    this.ligado = false;
  }
}

class Smartphone extends DispositivoEletronico {
  constructor(nome, cor, modelo) {
    super(nome);
    this.cor = cor;
    this.modelo = modelo;
  }
}

const s1 = new Smartphone('Samsung', 'branco', 'galaxy s21');
console.log(s1);