package com.example.ekskursijos.exception;

import lombok.Getter;

@Getter
public class EmailAlreadyExistsException extends RuntimeException {
  private final String key;

  public EmailAlreadyExistsException(String key, String message) {
    super(message);
    this.key = key;
  }

  public EmailAlreadyExistsException(String message) {
    this("error", message);
  }
}
