package com.example.Hospital.Management.System.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

import com.example.Hospital.Management.System.entity.PatientRecentActivity;
import com.example.Hospital.Management.System.service.PatientRecentActivityService;

@RestController
@RequestMapping("/patient-activity")
@CrossOrigin(origins = "*")
public class PatientRecentActivityController {

    @Autowired
    private PatientRecentActivityService activityService;

    // ✅ GET — activities (frontend)
    @GetMapping("/{patientId}")
    public List<PatientRecentActivity> getActivities(@PathVariable Long patientId) {
        return activityService.getActivities(patientId);
    }

    // ✅ DELETE (optional)
    @DeleteMapping("/{id}")
    public String deleteActivity(@PathVariable Long id) {
        activityService.deleteActivity(id);
        return "Activity deleted successfully";
    }
}