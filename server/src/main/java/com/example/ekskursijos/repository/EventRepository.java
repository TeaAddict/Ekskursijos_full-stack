package com.example.ekskursijos.repository;

import com.example.ekskursijos.model.Event;
import org.springframework.data.jpa.repository.JpaRepository;

public interface EventRepository extends JpaRepository<Event, Long> {
}
