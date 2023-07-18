package inacio.api.demo.inacioapi;

import jakarta.persistence.*;

@Entity
public class Dados {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long ID;

    private int idade;
    private String nome;
    private String cargo;

    public Dados() {
    }

    public Dados(int idade, String nome, String cargo) {
        this.idade = idade;
        this.nome = nome;
        this.cargo = cargo;
    }

    public Long getID() {
        return ID;
    }

    public void setID(Long ID) {
        this.ID = ID;
    }

    public int getIdade() {
        return idade;
    }

    public void setIdade(int idade) {
        this.idade = idade;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getCargo() {
        return cargo;
    }

    public void setCargo(String cargo) {
        this.cargo = cargo;
    }

    @Override
    public String toString() {
        return "Dados{" +
                "ID=" + ID +
                ", idade=" + idade +
                ", nome='" + nome + '\'' +
                ", cargo='" + cargo + '\'' +
                '}';
    }
}
