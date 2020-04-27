package com.polsl.proj.recruitmentsystem.business.model.recruitAttributes;

import com.polsl.proj.recruitmentsystem.business.model.people.Recruit;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.Date;

@Entity
@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor
public class File {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long fileId;
    private String filePath;

    @ManyToOne(fetch = FetchType.LAZY)
    private Recruit recruit;
}
