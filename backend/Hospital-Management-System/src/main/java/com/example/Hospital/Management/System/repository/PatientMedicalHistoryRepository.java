package com.example.Hospital.Management.System.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

import com.example.Hospital.Management.System.entity.PatientMedicalHistory;

public interface PatientMedicalHistoryRepository extends JpaRepository<PatientMedicalHistory, Long> {

    List<PatientMedicalHistory> findByPatientPatientId(Long patientId);

    // 🔥 Prevent duplicate disease for same patient
    boolean existsByPatientPatientIdAndDisease(Long patientId, String disease);
}