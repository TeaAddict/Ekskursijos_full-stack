package com.example.ekskursijos.exception;

import lombok.Getter;

@Getter
public class UsernameAlreadyExistsException extends RuntimeException {
  private final String key;

  public UsernameAlreadyExistsException(String key, String message) {
    super(message);
    this.key = key;
  }

  public UsernameAlreadyExistsException(String message) {
    this("error", message);
  }
}
