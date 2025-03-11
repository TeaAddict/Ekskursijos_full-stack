package com.example.ekskursijos.dto.user;

import jakarta.validation.constraints.*;

public record LoginUserRequest(
        @NotNull(message = "Email cannot be null")
        @NotBlank(message = "Email cannot be empty or consist only of spaces")
        @Size(min = 8, max = 128, message = "Email must be between 8 and 128 characters")
        @Pattern(regexp = "[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?", message = "Invalid email format")
        String email,

        @NotNull(message = "Password cannot be null")
        @NotBlank(message = "Password cannot be empty or consist only of spaces")
        @Size(min = 8, max = 128, message = "Password must be between 8 and 128 characters")
        @Pattern(regexp = "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)[A-Za-z\\d]+$",
                message = "Password must contain at least one uppercase letter, one lowercase letter, and one number")
        String password
) {
}
