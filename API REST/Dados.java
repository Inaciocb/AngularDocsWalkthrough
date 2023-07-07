package inacio.api.demo.inacioapi;
public class Dados {
    private int idade;
    private String nome;
    private String cargo;

    public Dados(){  }
    public Dados(int idade, String nome, String cargo) {
        this.idade = idade;
        this.nome = nome;
        this.cargo = cargo;
    }

    public String getNome(){
        return this.nome;
    }
    public int getIdade() {
        return idade;
    }
    public void setIdade(int idade) {
        this.idade = idade;
    }
    public String getCargo() {
        return cargo;
    }
    public void setCargo(String cargo) {
        this.cargo = cargo;
    }
}
