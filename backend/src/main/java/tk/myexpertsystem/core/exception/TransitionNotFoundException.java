package tk.myexpertsystem.core.exception;

public class TransitionNotFoundException extends RuntimeException {
    public TransitionNotFoundException(String message) {
        super(message);
    }

    public TransitionNotFoundException(String message, Throwable cause) {
        super(message, cause);
    }
}
