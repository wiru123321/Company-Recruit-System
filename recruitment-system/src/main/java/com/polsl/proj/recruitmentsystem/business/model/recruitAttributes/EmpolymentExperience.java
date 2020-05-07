package com.polsl.proj.recruitmentsystem.business.model.recruitAttributes;

import com.polsl.proj.recruitmentsystem.business.model.people.Recruit;
import lombok.*;

import javax.persistence.*;
import java.util.Date;

@Entity
@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor
@RequiredArgsConstructor
public class EmpolymentExperience {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long employmentId;
    @NonNull
    private Date dateFrom;
    @NonNull
    private Date dateTo;
    @NonNull
    private String position;

    @NonNull
    @ManyToOne(fetch = FetchType.LAZY)
    private Recruit recruit;
}
