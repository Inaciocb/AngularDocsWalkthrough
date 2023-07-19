    package inacio.api.demo.inacioapi;

    import org.springframework.data.jpa.repository.JpaRepository;
    import org.springframework.data.jpa.repository.Query;
    import org.springframework.data.jpa.repository.support.JpaEntityInformation;

    import java.util.List;

    public interface RepositorioUsuario extends JpaRepository<Dados, Long> {
        List<Dados> findAllByOrderByID();
    }
