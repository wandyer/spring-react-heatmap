package br.wandyer.heatmap.api.repository;

import br.wandyer.heatmap.api.abstractions.IBaseRepository;
import br.wandyer.heatmap.api.domain.Residence;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface ResidenceRepository extends IBaseRepository<Residence> {

    @Query("SELECT r FROM Residence r WHERE (?1 < ?3 AND r.latitude BETWEEN ?1 AND ?3) OR (?3 < ?1 " +
            "AND r.latitude BETWEEN ?3 AND ?1) AND (?2 < ?4 AND r.longitude BETWEEN ?2 AND ?4) " +
            "OR (?4 < ?2 AND r.longitude BETWEEN ?4 AND ?2)")
    List<Residence> filterByBounds(float swLat, float swLng, float neLat, float neLng);
}
