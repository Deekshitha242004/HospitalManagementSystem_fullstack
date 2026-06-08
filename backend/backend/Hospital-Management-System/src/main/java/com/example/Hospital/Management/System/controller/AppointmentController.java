package com.example.Hospital.Management.System.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.example.Hospital.Management.System.dto.AppointmentRequest;
import com.example.Hospital.Management.System.dto.AppointmentResponse;
import com.example.Hospital.Management.System.service.AppointmentService;

@RestController
@RequestMapping("/appointments")
@CrossOrigin(origins = "*")
public class AppointmentController {

    @Autowired
    private AppointmentService appointmentService;

    // Create a new appointment
    @PostMapping
    public AppointmentResponse addAppointment(@RequestBody AppointmentRequest request) {
        return appointmentService.createAppointment(request);
    }

    // Get all appointments as DTOs
    @GetMapping
    public List<AppointmentResponse> getAllAppointments() {
        return appointmentService.getAllAppointmentsDTO();
    }
}



