package inacio.api.demo.inacioapi;

import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/dados")
public class DadosController {

    private List<Dados> dados = new ArrayList<>();
    assertTrue(dados.isEmpty());

    @GetMapping("/dados")
    public Dados getDados() {
        return dados;
    }

    @PostMapping
    public void setDados(@RequestBody Dados novoDados) {
        dados = novoDados;
    }

    @PutMapping
    public void updateDados(@RequestBody Dados atualizacaoDados) {
        if (dados != null) {
            dados.setIdade(atualizacaoDados.getIdade());
            dados.setCargo(atualizacaoDados.getCargo());
        }
    }
    @DeleteMapping
    public void deleteDados() {
        dados = null;
    }
}
