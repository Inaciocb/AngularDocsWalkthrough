package inacio.api.demo.inacioapi;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/dados")
public class DadosController {

    @Autowired
    private RepositorioUsuario repositorioUsuario;

    @GetMapping("/dados")
    public List<Dados> getUsuarios() {
        return repositorioUsuario.findAll();
    }

    @PostMapping
    public List<Dados> setDados(@RequestBody Dados novoDados) {
        repositorioUsuario.save(novoDados);
        return repositorioUsuario.findAll();
    }

    @PutMapping
    public void updateDados(@RequestBody Dados atualizacaoDados) {
        Dados usuario = repositorioUsuario.findById(atualizacaoDados.getID()).orElse(null);
        if (usuario != null) {
            usuario.setNome(atualizacaoDados.getNome());
            usuario.setIdade(atualizacaoDados.getIdade());
            usuario.setCargo(atualizacaoDados.getCargo());
            repositorioUsuario.save(usuario);
        }
    }

    @GetMapping("/{id}")
    public Dados getUsuarioPorId(@PathVariable int id) {
        return repositorioUsuario.findById(id).orElse(null);
    }

    @DeleteMapping("/{id}")
    public void deleteDados(@PathVariable int id) {
        repositorioUsuario.deleteById(id);
    }
}
