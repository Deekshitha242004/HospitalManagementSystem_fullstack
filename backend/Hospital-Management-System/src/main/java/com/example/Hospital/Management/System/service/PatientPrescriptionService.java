package com.example.Hospital.Management.System.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

import com.example.Hospital.Management.System.entity.Patient;
import com.example.Hospital.Management.System.entity.PatientPrescription;
import com.example.Hospital.Management.System.repository.PatientPrescriptionRepository;
import com.example.Hospital.Management.System.repository.PatientRepository;

@Service
public class PatientPrescriptionService {

    @Autowired
    private PatientPrescriptionRepository prescriptionRepository;

    @Autowired
    private PatientRepository patientRepository;

    @Autowired
    private PatientRecentActivityService activityService;

    // ADD Prescription
    public PatientPrescription addPrescription(Long patientId, PatientPrescription prescription) {

        Patient patient = patientRepository.findById(patientId)
                .orElseThrow(() -> new RuntimeException("Patient not found"));

        prescription.setPatient(patient);

        PatientPrescription saved = prescriptionRepository.save(prescription);

        // 🔥 AUTO ACTIVITY
        activityService.logActivity(patient, "Prescription added");

        return saved;
    }

    // GET
    public List<PatientPrescription> getPrescriptions(Long patientId) {
        return prescriptionRepository.findByPatientPatientId(patientId);
    }

    // DELETE
    public void deletePrescription(Long id) {
        prescriptionRepository.deleteById(id);
    }
}