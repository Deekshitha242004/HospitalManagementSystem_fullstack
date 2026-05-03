package com.example.Hospital.Management.System.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

import com.example.Hospital.Management.System.entity.Patient;
import com.example.Hospital.Management.System.entity.PatientMedicalHistory;
import com.example.Hospital.Management.System.repository.PatientMedicalHistoryRepository;
import com.example.Hospital.Management.System.repository.PatientRepository;

@Service
public class PatientMedicalHistoryService {

    @Autowired
    private PatientMedicalHistoryRepository historyRepository;

    @Autowired
    private PatientRepository patientRepository;

    @Autowired
    private PatientRecentActivityService activityService;

    // ADD History
    public PatientMedicalHistory addMedicalHistory(Long patientId, PatientMedicalHistory history) {

        Patient patient = patientRepository.findById(patientId)
                .orElseThrow(() -> new RuntimeException("Patient not found"));

        history.setPatient(patient);

        PatientMedicalHistory saved = historyRepository.save(history);

        // 🔥 AUTO ACTIVITY
        activityService.logActivity(patient, "Medical history added");

        return saved;
    }

    // GET
    public List<PatientMedicalHistory> getHistoryByPatientId(Long patientId) {
        return historyRepository.findByPatientPatientId(patientId);
    }

    // DELETE
    public void deleteHistory(Long id) {
        historyRepository.deleteById(id);
    }
}