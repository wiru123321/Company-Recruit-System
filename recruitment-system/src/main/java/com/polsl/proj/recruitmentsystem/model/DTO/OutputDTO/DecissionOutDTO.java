package com.polsl.proj.recruitmentsystem.model.DTO.OutputDTO;


import lombok.*;

@Getter
@Setter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class DecissionOutDTO {

    private Integer result; // TODO podmienić na enum
    private String description;
}
