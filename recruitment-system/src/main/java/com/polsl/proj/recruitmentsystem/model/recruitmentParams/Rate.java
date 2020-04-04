package com.polsl.proj.recruitmentsystem.model.recruitmentParams;

import com.polsl.proj.recruitmentsystem.model.DTO.OutputDTO.RateOutDTO;
import lombok.*;

import javax.persistence.*;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor    // RequiredArgs działają tylko z annotacją @NotNull
public class Rate {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long rateId;
    private String rate;

    @OneToOne
    private JobApplication jobApplication;

    public RateOutDTO dto() {
        return RateOutDTO.builder()
                .rate(this.rate)
                .build();
    }
}
