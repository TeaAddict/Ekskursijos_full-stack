package com.example.ekskursijos.dto.user;

import java.time.LocalDateTime;

public record UserResponse(
        long id,
        String email,
        String username
) {
}
