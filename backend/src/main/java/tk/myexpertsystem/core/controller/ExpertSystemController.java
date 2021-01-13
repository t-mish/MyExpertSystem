package tk.myexpertsystem.core.controller;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import tk.myexpertsystem.core.exception.TransitionNotFoundException;
import tk.myexpertsystem.core.model.State;
import tk.myexpertsystem.core.model.Transition;
import tk.myexpertsystem.core.repository.TransitionRepository;

import java.util.List;

// TODO: Create Swagger API for this class. We are going to API first
// Part 1 https://www.youtube.com/watch?v=69P7p0_olG4
// Part 2 https://www.youtube.com/watch?v=TyWDJWatlwQ
// https://www.youtube.com/watch?v=F9iF3a1Z8Y8
@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/api")
public class ExpertSystemController {
    private final TransitionRepository transitionRepository;

    ExpertSystemController(TransitionRepository transitionRepository) {
        this.transitionRepository = transitionRepository;
    }

    @GetMapping("/state")
    List<Transition> getBeginState() {
        return transitionRepository.findAllByBeginState_Id(1)
                .orElseThrow(() -> new TransitionNotFoundException("No transitions found for that Id"));
    }

    @GetMapping("/state/{id}")
    List<Transition> getStateWithId(@PathVariable("id") Integer id) {
        return transitionRepository.findAllByBeginState_Id(id)
                .orElseThrow(() -> new TransitionNotFoundException("No transitions found for that Id"));
    }

    @GetMapping("/state/all")
    List<Transition> getAllState() {
        return transitionRepository.findAll();
    }

    @ResponseBody
    @ExceptionHandler(TransitionNotFoundException.class)
    @ResponseStatus(HttpStatus.NOT_FOUND)
    String transitionNotFoundHandler(TransitionNotFoundException ex) {
        return ex.getMessage();
    }
}
