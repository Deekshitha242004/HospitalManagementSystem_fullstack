package com.example.Hospital.Management.System.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

import com.example.Hospital.Management.System.entity.Patient;
import com.example.Hospital.Management.System.entity.PatientReport;
import com.example.Hospital.Management.System.repository.PatientReportRepository;
import com.example.Hospital.Management.System.repository.PatientRepository;

@Service
public class PatientReportService {

    @Autowired
    private PatientReportRepository reportRepository;

    @Autowired
    private PatientRepository patientRepository;

    @Autowired
    private PatientRecentActivityService activityService;

    // ADD Report
    public PatientReport addReport(Long patientId, PatientReport report) {

        Patient patient = patientRepository.findById(patientId)
                .orElseThrow(() -> new RuntimeException("Patient not found"));

        report.setPatient(patient);

        PatientReport saved = reportRepository.save(report);

        // 🔥 AUTO ACTIVITY
        activityService.logActivity(patient, "Report added");

        return saved;
    }

    // GET
    public List<PatientReport> getReports(Long patientId) {
        return reportRepository.findByPatientPatientId(patientId);
    }

    // DELETE
    public void deleteReport(Long id) {
        reportRepository.deleteById(id);
    }
}