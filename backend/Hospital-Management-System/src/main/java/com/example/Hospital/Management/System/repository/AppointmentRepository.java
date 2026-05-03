package com.example.Hospital.Management.System.repository;



import org.springframework.data.jpa.repository.JpaRepository;
import com.example.Hospital.Management.System.entity.Appointment;

public interface AppointmentRepository extends JpaRepository<Appointment, Long> {
}

