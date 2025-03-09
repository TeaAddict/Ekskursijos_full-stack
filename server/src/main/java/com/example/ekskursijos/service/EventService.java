package com.example.ekskursijos.service;

import com.example.ekskursijos.model.Event;
import com.example.ekskursijos.repository.EventRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class EventService {

  private final EventRepository eventRepository;

  @Autowired
  public EventService(EventRepository eventRepository) {
    this.eventRepository = eventRepository;
  }

  public List<Event> findAllEvents() {
    return eventRepository.findAll();
  }

}
