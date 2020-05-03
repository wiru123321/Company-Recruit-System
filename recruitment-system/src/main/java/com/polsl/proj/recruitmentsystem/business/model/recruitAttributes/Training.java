package com.polsl.proj.recruitmentsystem.business.model.recruitAttributes;


import com.polsl.proj.recruitmentsystem.business.model.people.Recruit;
import lombok.*;

import javax.persistence.*;
import java.util.Date;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@RequiredArgsConstructor
public class Training {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long trainingId;

    @NonNull
    private String name;
    @NonNull
    private String description;
    @NonNull
    private Date date;

    @ManyToOne(fetch = FetchType.LAZY)
    private Recruit recruit;
}
