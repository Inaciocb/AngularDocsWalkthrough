package inacio.api.demo.inacioapi;

public class Dados {
    private int idade;
    private String nome;
    private String cargo;
    private int ID;

    public Dados() {
    }

    public Dados(int idade, String nome, String cargo, int ID) {
        this.idade = idade;
        this.nome = nome;
        this.cargo = cargo;
        this.ID = ID;
    }

    public String getNome() {
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

    public int getID(){
        return this.ID;
    }

    public void setID(int ID){
        this.ID = ID;
    }

    public void setCargo(String cargo) {
        this.cargo = cargo;
    }
}
