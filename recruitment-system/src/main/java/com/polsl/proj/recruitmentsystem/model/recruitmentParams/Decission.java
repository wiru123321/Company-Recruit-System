package com.polsl.proj.recruitmentsystem.model.recruitmentParams;


import com.polsl.proj.recruitmentsystem.model.DTO.OutputDTO.DecissionOutDTO;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Decission {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long decissionId;

    private Integer result; // TODO podmienić na enum
    private String description;

    Decission(Integer result){
        this.result=result;
    }

    @OneToOne
    private JobApplication jobApplication;

    public DecissionOutDTO dto() {
        return DecissionOutDTO.builder()
                .result(this.result)
                .description(this.description)
                .build();
    }
}

enum Result {
    positive, negative, undefinied
}
