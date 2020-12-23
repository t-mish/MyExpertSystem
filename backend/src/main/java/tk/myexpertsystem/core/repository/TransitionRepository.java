package tk.myexpertsystem.core.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;
import tk.myexpertsystem.core.model.State;
import tk.myexpertsystem.core.model.Transition;

import java.util.List;
import java.util.Optional;

public interface TransitionRepository extends JpaRepository<Transition, Integer> {
    Optional<List<Transition>> findAllByBeginState_Id(Integer stateId);
}
