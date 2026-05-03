package com.example.Hospital.Management.System.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

import com.example.Hospital.Management.System.entity.PatientReport;

public interface PatientReportRepository extends JpaRepository<PatientReport, Long> {

    List<PatientReport> findByPatientPatientId(Long patientId);
}