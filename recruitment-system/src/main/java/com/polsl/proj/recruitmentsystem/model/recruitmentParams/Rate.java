package com.polsl.proj.recruitmentsystem.model.recruitmentParams;

import com.polsl.proj.recruitmentsystem.model.DTO.OutputDTO.RateOutDTO;
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
