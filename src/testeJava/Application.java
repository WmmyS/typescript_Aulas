package testeJava;

public class Application {

    private String nome;
    private String versao;
    private String descricao;

    public Application(String nome, String versao, String descricao) {
        this.nome = nome;
        this.versao = versao;
        this.descricao = descricao;
    };

    public String getNome() {
        return this.nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

}

