package com.example.Hospital.Management.System.controller;

import org.springframework.web.bind.annotation.*;
import java.util.List;
import com.example.Hospital.Management.System.entity.Patient;
import com.example.Hospital.Management.System.service.PatientService;

@RestController
@RequestMapping("/patients")
@CrossOrigin
public class PatientController {

    private final PatientService patientService;

    public PatientController(PatientService patientService) {
        this.patientService = patientService;
    }

    @PostMapping
    public Patient addPatient(@RequestBody Patient patient) {
        return patientService.savePatient(patient);
    }

    @GetMapping
    public List<Patient> getAllPatients() {
        return patientService.getAllPatients();
    }

    @PutMapping("/{id}")
    public Patient updatePatient(@PathVariable Long id, @RequestBody Patient patient) {
        return patientService.updatePatient(id, patient);
    }
}