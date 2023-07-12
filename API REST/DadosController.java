package inacio.api.demo.inacioapi;
import org.springframework.web.bind.annotation.*;
import java.util.ArrayList;
import java.util.List;
import java.util.Comparator;
import java.util.Collections;
@RestController
@RequestMapping("/dados")
public class DadosController {
    private List<Dados> usuarios = new ArrayList<>();

    @GetMapping("/dados")
    public List<Dados> getUsuarios() {
        Collections.sort(usuarios, Comparator.comparing(Dados::getNome, String.CASE_INSENSITIVE_ORDER));
        for (int i = 0; i < usuarios.size(); i++) {
            Dados usuario = usuarios.get(i);
            usuario.setID(i + 1);
        }
        return usuarios;
    }
    @PostMapping
    public List<Dados> setDados(@RequestBody Dados novoDados) {
        boolean userExists = false;
        for (Dados usuario : usuarios) {
            if (usuario.getID() == novoDados.getID()) {
                updateDados(novoDados);
                userExists = true;
                break;
            }
        }
        if (!userExists) {
            usuarios.add(novoDados);
        }
        usuarios.sort(Comparator.comparingInt(Dados::getID));
        return usuarios;
    }

    @PutMapping
    public void updateDados(@RequestBody Dados atualizacaoDados) {
        for (Dados usuario : usuarios) {
            if (usuario.getID() == atualizacaoDados.getID()) {
                usuario.setNome(atualizacaoDados.getNome());
                usuario.setIdade(atualizacaoDados.getIdade());
                usuario.setCargo(atualizacaoDados.getCargo());
                break;
            }
        }
    }

    @DeleteMapping("/{id}")
    public void deleteDados(@PathVariable Long id) {
        usuarios.removeIf(usuario -> usuario.getID() == id);
        for (int i = 0; i < usuarios.size(); i++) {
            Dados usuario = usuarios.get(i);
            usuario.setID(i + 1);
        }
        usuarios.sort(Comparator.comparingInt(Dados::getID));
    }
}
