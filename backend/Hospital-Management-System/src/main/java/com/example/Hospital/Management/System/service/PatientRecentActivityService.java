package com.example.Hospital.Management.System.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;

import com.example.Hospital.Management.System.entity.Patient;
import com.example.Hospital.Management.System.entity.PatientRecentActivity;
import com.example.Hospital.Management.System.repository.PatientRecentActivityRepository;

@Service
public class PatientRecentActivityService {

    @Autowired
    private PatientRecentActivityRepository activityRepository;

    // 🔥 AUTO LOG ACTIVITY
    public void logActivity(Patient patient, String description) {

        PatientRecentActivity activity = new PatientRecentActivity();
        activity.setPatient(patient);
        activity.setDescription(description);
        activity.setDate(LocalDateTime.now());

        activityRepository.save(activity);
    }

    // GET activities
    public List<PatientRecentActivity> getActivities(Long patientId) {
        return activityRepository.findByPatientPatientIdOrderByDateDesc(patientId);
    }

    // DELETE
    public void deleteActivity(Long id) {
        activityRepository.deleteById(id);
    }
}
