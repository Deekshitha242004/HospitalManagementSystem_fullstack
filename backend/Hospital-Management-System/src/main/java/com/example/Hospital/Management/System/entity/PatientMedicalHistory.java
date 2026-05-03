package com.example.Hospital.Management.System.entity;

import jakarta.persistence.*;
import java.time.LocalDate;
import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table(name = "medical_history")
public class PatientMedicalHistory {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String disease;
    private String treatment;

    private LocalDate startDate;
    private LocalDate endDate;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "patient_id")
    @JsonIgnore   // 🔥 IMPORTANT CHANGE
    private Patient patient;

    // Getters & Setters

    public Long getId() {
        return id;
    }

    public String getDisease() {
        return disease;
    }

    public String getTreatment() {
        return treatment;
    }

    public LocalDate getStartDate() {
        return startDate;
    }

    public LocalDate getEndDate() {
        return endDate;
    }

    public Patient getPatient() {
        return patient;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public void setDisease(String disease) {
        this.disease = disease;
    }

    public void setTreatment(String treatment) {
        this.treatment = treatment;
    }

    public void setStartDate(LocalDate startDate) {
        this.startDate = startDate;
    }

    public void setEndDate(LocalDate endDate) {
        this.endDate = endDate;
    }

    public void setPatient(Patient patient) {
        this.patient = patient;
    }
}