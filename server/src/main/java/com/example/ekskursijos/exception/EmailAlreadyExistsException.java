package com.example.ekskursijos.exception;

import lombok.Getter;

@Getter
public class EmailAlreadyExistsException extends RuntimeException {
  private final String key = "email";

  public EmailAlreadyExistsException(String message) {
    super(message);
  }
}
