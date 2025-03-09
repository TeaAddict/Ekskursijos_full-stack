package com.example.ekskursijos.dto.user;

import jakarta.validation.constraints.*;

public record LoginUserRequest(
        @NotNull(message = "Username cannot be null")
        @NotBlank(message = "Username cannot be empty or consist only of spaces")
        @Size(min = 8, max = 128, message = "Username must be between 8 and 128 characters")
        @Pattern(regexp = "^[a-zA-Z0-9]+$", message = "Username can only contain letters and numbers")
        String username,

        @NotNull(message = "Password cannot be null")
        @NotBlank(message = "Password cannot be empty or consist only of spaces")
        @Size(min = 8, max = 128, message = "Password must be between 8 and 128 characters")
        @Pattern(regexp = "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)[A-Za-z\\d]+$",
                message = "Password must contain at least one uppercase letter, one lowercase letter, and one number")
        String password
) {
}
