package com.example.Hospital.Management.System.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

import com.example.Hospital.Management.System.entity.PatientPrescription;
import com.example.Hospital.Management.System.service.PatientPrescriptionService;

@RestController
@RequestMapping("/patient-prescription")
@CrossOrigin(origins = "*")
public class PatientPrescriptionController {

    @Autowired
    private PatientPrescriptionService prescriptionService;

    // ✅ Add prescription
    @PostMapping("/{patientId}")
    public PatientPrescription addPrescription(
            @PathVariable Long patientId,
            @RequestBody PatientPrescription prescription) {

        return prescriptionService.addPrescription(patientId, prescription);
    }

    // ✅ Get prescriptions
    @GetMapping("/{patientId}")
    public List<PatientPrescription> getPrescriptions(@PathVariable Long patientId) {
        return prescriptionService.getPrescriptions(patientId);
    }

    // ✅ Delete prescription
    @DeleteMapping("/{id}")
    public String deletePrescription(@PathVariable Long id) {
        prescriptionService.deletePrescription(id);
        return "Prescription deleted successfully";
    }
}