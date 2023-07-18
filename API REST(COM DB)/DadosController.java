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
    public Dados setDados(@RequestBody Dados novoDados) {
        return repositorioUsuario.save(novoDados);
    }

    @PutMapping
    public void updateDados(@RequestBody Dados atualizacaoDados) {
        Long userID = atualizacaoDados.getID();
        Dados usuario = repositorioUsuario.findById(userID)
                .orElseThrow(() -> new IllegalArgumentException("Usuario nao encontrado, id: " + userID));
        if (usuario != null) {
            usuario.setNome(atualizacaoDados.getNome());
            usuario.setIdade(atualizacaoDados.getIdade());
            usuario.setCargo(atualizacaoDados.getCargo());
            repositorioUsuario.save(usuario);
        }
    }

    @GetMapping("/{id}")
    public Dados getUsuarioPorId(@PathVariable Long id) {
        return repositorioUsuario.findById(id).orElse(null);
    }


    @DeleteMapping("/{id}")
    public void deleteDados(@PathVariable Long id) {
        repositorioUsuario.deleteById(id);
    }
}
