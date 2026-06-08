package com.example.Hospital.Management.System.service;

import org.springframework.stereotype.Service;
import java.util.List;
import com.example.Hospital.Management.System.entity.Patient;
import com.example.Hospital.Management.System.repository.PatientRepository;

@Service
public class PatientService {

    private final PatientRepository patientRepository;

    public PatientService(PatientRepository patientRepository) {
        this.patientRepository = patientRepository;
    }

    // Save new patient
    public Patient savePatient(Patient patient) {
        return patientRepository.save(patient);
    }

    // Get all patients
    public List<Patient> getAllPatients() {
        return patientRepository.findAll();
    }

    // Update patient
    public Patient updatePatient(Long id, Patient patient) {

        Patient existing = patientRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Patient not found"));

        existing.setPatientName(patient.getPatientName());
        existing.setPatientAge(patient.getPatientAge());
        existing.setPatientGender(patient.getPatientGender());

        return patientRepository.save(existing);
    }
}
