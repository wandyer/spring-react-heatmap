package br.wandyer.heatmap.api.dto;

import lombok.Data;

import javax.persistence.Column;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

@Data
public class ResidenceRequest {

    @NotBlank(message = "CEP is required")
    @Size(min = 8, max = 8, message = "CEP must have 8 characters")
    private String cep;

    @NotNull(message = "Number is required")
    private Integer number;

    @NotNull(message = "Quantity Residents is required")
    @Column(name = "QT_RESIDENTS")
    private Integer qtResidents;
    private float latitude;
    private float longitude;
}
