export class Database {
  private static database: Database;

  private constructor(
    private host: string,
    private user: string,
    private password: string,
  ) {}

  connect(): void {
    console.log(`Conectado: ${this.host}, ${this.user}, ${this.password}`);
  }

  static getDatabase(host: string, user: string, password: string): Database {
    if (Database.database) {
      console.log('Retornando instância já criada.');
      return Database.database;
    }
    console.log('Criando nova instância.');
    Database.database = new Database(host, user, password);
    return Database.database;
  }
}

const db1 = Database.getDatabase('host', 'user', '123456');
console.log(db1);

const db2 = Database.getDatabase('host', 'user', '123456');
console.log(db2);

const db3 = Database.getDatabase('host', 'user', '123456');
console.log(db3);

console.log(db1 == db2);
