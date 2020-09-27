package br.wandyer.heatmap.api.controller;

import br.wandyer.heatmap.api.domain.Residence;
import br.wandyer.heatmap.api.dto.ResidenceRequest;
import br.wandyer.heatmap.api.service.ResidenceService;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@CrossOrigin
@RestController
@RequestMapping("/residence")
public class ResidenceCtrl {

    private final ResidenceService service;

    public ResidenceCtrl(ResidenceService service) {
        this.service = service;
    }

    @GetMapping
    public List<Residence> findAll() {
        return service.findAll();
    }

    @PostMapping
    public Residence create(@RequestBody @Validated ResidenceRequest residenceRequest) {
        return service.create(residenceRequest);
    }
}
