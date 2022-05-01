export class Empresa {
  public readonly nome: string; // public não necessário
  private readonly colaboradores: Colaborador[] = [];
  protected readonly cnpj: string;

  // Constructor menos rápido
  constructor(nome: string, cnpj: string) {
    this.nome = nome;
    this.cnpj = cnpj;
  }

  adicionaColaborador(colaborador: Colaborador): void {
    this.colaboradores.push(colaborador);
  }
  // public pode ser implícito
  public mostrarColaboradores(): void {
    for (const colaborador of this.colaboradores) {
      console.log(colaborador);
    }
  }
}

export class Colaborador {
  //Constructor mais rápido
  constructor(
    // Aqui o public não é redundante
    public readonly nome: string,
    public readonly sobrenome: string,
  ) {}
}

// Instanciando as classes
const empresa = new Empresa('WWWSolucoes', '11.111.111/0001-11');
const colaborador1 = new Colaborador('Wesley', 'Santos');
const colaborador2 = new Colaborador('Walyson', 'Santos');
const colaborador3 = new Colaborador('Wedson', 'Santos');

//Utilizando métodos públicos para adicionar elementos
empresa.adicionaColaborador(colaborador1);
empresa.adicionaColaborador(colaborador2);
empresa.adicionaColaborador(colaborador3);

// Adicionar elemento utilizando o structure type
// json?
empresa.adicionaColaborador({ nome: 'Nubia', sobrenome: 'Pires' });

empresa.mostrarColaboradores();
