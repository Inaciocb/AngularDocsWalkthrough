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
        usuarios.sort((u1, u2) -> Integer.compare(u1.getID(), u2.getID()));
        return usuarios;
    }

    @PostMapping
    public List<Dados> setDados(@RequestBody Dados novoDados) {
        usuarios.add(novoDados); // Add the new user to the list
        usuarios.sort(Comparator.comparingInt(Dados::getID)); // Sort the list based on ID

        for (int i = 0; i < usuarios.size(); i++) {
            Dados usuario = usuarios.get(i);
            usuario.setID(i + 1);
        }
        return usuarios;
    }
    @PutMapping
    public void updateDados(@RequestBody Dados atualizacaoDados) {
        for (Dados usuario : this.usuarios) {
            if (usuario.getID() == atualizacaoDados.getID()) {
                usuario.setIdade(atualizacaoDados.getIdade());
                usuario.setCargo(atualizacaoDados.getCargo());
                break;
            }
        }
    }
    @DeleteMapping("/{id}")
    public void deleteDados(@PathVariable Long id) {
        usuarios.removeIf(usuario -> usuario.getID() == id);
    }
}
