package com.polsl.proj.recruitmentsystem.business.model.recruitmentParams;


import com.polsl.proj.recruitmentsystem.business.model.DTO.OutputDTO.DecissionOutDTO;
import lombok.*;

import javax.persistence.*;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@RequiredArgsConstructor
public class Decission {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long decissionId;

    @NonNull
    private Integer result; // TODO podmienić na enum
    @NonNull
    private String description;

    Decission(Integer result){
        this.result=result;
    }

    @OneToOne
    @NonNull
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
