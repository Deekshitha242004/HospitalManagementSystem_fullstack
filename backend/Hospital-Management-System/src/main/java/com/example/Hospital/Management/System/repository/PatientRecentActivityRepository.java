package com.example.Hospital.Management.System.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

import com.example.Hospital.Management.System.entity.PatientRecentActivity;

public interface PatientRecentActivityRepository extends JpaRepository<PatientRecentActivity, Long> {

    // 🔥 Get latest activities for a patient
    List<PatientRecentActivity> findByPatientPatientIdOrderByDateDesc(Long patientId);
}