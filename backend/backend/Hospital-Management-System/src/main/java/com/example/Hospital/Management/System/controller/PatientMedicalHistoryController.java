package com.example.Hospital.Management.System.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

import com.example.Hospital.Management.System.entity.PatientMedicalHistory;
import com.example.Hospital.Management.System.service.PatientMedicalHistoryService;

@RestController
@RequestMapping("/patient-history")
@CrossOrigin(origins = "*")
public class PatientMedicalHistoryController {

    @Autowired
    private PatientMedicalHistoryService historyService;

    // ✅ Add medical history
    @PostMapping("/{patientId}")
    public PatientMedicalHistory addHistory(
            @PathVariable Long patientId,
            @RequestBody PatientMedicalHistory history) {

        return historyService.addMedicalHistory(patientId, history);
    }

    // ✅ Get all history for a patient
    @GetMapping("/{patientId}")
    public List<PatientMedicalHistory> getHistory(@PathVariable Long patientId) {
        return historyService.getHistoryByPatientId(patientId);
    }

    // ✅ Delete history
    @DeleteMapping("/{id}")
    public String deleteHistory(@PathVariable Long id) {
        historyService.deleteHistory(id);
        return "Medical history deleted successfully";
    }
}
