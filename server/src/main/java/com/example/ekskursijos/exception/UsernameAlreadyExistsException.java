package com.example.ekskursijos.exception;

import lombok.Getter;

@Getter
public class UsernameAlreadyExistsException extends RuntimeException {
  private final String key = "username";

  public UsernameAlreadyExistsException(String message) {
    super(message);
  }
}
