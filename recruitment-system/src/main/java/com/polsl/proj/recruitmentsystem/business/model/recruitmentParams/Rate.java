package com.polsl.proj.recruitmentsystem.business.model.recruitmentParams;

import com.polsl.proj.recruitmentsystem.business.model.DTO.OutputDTO.RateOutDTO;
import lombok.*;

import javax.persistence.*;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@RequiredArgsConstructor// RequiredArgs działają tylko z annotacją @NotNull
public class Rate {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long rateId;
    @NonNull
    private String rate;

    @OneToOne
    @NonNull
    private JobApplication jobApplication;

    public Rate(String rate) {
        this.rate=rate;
    }


    public RateOutDTO dto() {
        return RateOutDTO.builder()
                .rate(this.rate)
                .build();
    }


}
