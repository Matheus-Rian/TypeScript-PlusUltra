// Singleton - GoF | Factory Method;
// Singleton - É permitido ter apenas uma instância da classe. Caso você tente criar uma instância, mas já tenha uma. Vai ser retornado ela.
// Factory Method - Method dentro da classe que cria um novo objeto/instância
export class DataBase {
    private static dataBase: DataBase;

    // Quando declarado um private no constructor, não tem mais acesso ao new. - Singleton
    private constructor(
        private host: string,
        private user: string,
        private password: string
    ) {}

    connect(): void {
        console.log(`Conectado: ${this.host}, ${this.user}, ${this.password}`);
    }

    // Factory Method
    static getDataBase(host: string, user: string, password: string): DataBase {
        if(DataBase.dataBase) {
            console.log('Retornando instância já criada');
            return DataBase.dataBase;
        }
        console.log('Criando nova instância');
        DataBase.dataBase = new DataBase(host, user, password);
        return DataBase.dataBase;
    }
}

const dataBase1 = DataBase.getDataBase('localhost', 'Matheus', '12345');
dataBase1.connect();

const dataBase2 = DataBase.getDataBase('localhost', 'Matheus', '12345');
dataBase2.connect();