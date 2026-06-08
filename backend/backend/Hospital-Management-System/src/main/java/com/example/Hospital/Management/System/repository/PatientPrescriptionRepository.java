package com.example.Hospital.Management.System.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;
import com.example.Hospital.Management.System.entity.PatientPrescription;

public interface PatientPrescriptionRepository extends JpaRepository<PatientPrescription, Long> {

    List<PatientPrescription> findByPatientPatientId(Long patientId);

}
