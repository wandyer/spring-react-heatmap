package br.wandyer.heatmap.api.service;

import br.wandyer.heatmap.api.domain.Residence;
import br.wandyer.heatmap.api.dto.ResidenceRequest;
import br.wandyer.heatmap.api.repository.ResidenceRepository;
import org.springframework.beans.BeanUtils;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ResidenceService {

    private final ResidenceRepository repository;

    public ResidenceService(ResidenceRepository repository) {
        this.repository = repository;
    }

    public List<Residence> findAll() {
        return repository.findAll();
    }

    public Residence create(ResidenceRequest residenceRequest) {
        Residence residence = new Residence();
        BeanUtils.copyProperties(residenceRequest, residence);
        return repository.save(residence);
    }
}
