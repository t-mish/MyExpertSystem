package tk.myexpertsystem.core.model;

import lombok.Data;
import org.hibernate.annotations.GenericGenerator;

import javax.persistence.*;

@Entity
@Data
public class Transition {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY, generator = "native")
    @GenericGenerator(name = "native", strategy = "native")
    private Integer id;

    @OneToOne
    private State beginState;

    @OneToOne
    private State endState;

    private Boolean isFinish;

    private String answer;
}
