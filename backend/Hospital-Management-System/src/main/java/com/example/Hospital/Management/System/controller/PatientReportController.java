package com.example.Hospital.Management.System.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

import com.example.Hospital.Management.System.entity.PatientReport;
import com.example.Hospital.Management.System.service.PatientReportService;

@RestController
@RequestMapping("/patient-report")
@CrossOrigin(origins = "*")
public class PatientReportController {

    @Autowired
    private PatientReportService reportService;

    // ✅ Add report
    @PostMapping("/{patientId}")
    public PatientReport addReport(
            @PathVariable Long patientId,
            @RequestBody PatientReport report) {

        return reportService.addReport(patientId, report);
    }

    // ✅ Get all reports
    @GetMapping("/{patientId}")
    public List<PatientReport> getReports(@PathVariable Long patientId) {
        return reportService.getReports(patientId);
    }

    // ✅ Delete report
    @DeleteMapping("/{id}")
    public String deleteReport(@PathVariable Long id) {
        reportService.deleteReport(id);
        return "Report deleted successfully";
    }
}