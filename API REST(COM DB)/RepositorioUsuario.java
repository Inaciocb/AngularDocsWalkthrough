    package inacio.api.demo.inacioapi;

    import org.springframework.data.jpa.repository.JpaRepository;
    import org.springframework.data.jpa.repository.support.JpaEntityInformation;

    public interface RepositorioUsuario extends JpaRepository<Dados, Integer> {

    }
