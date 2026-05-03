package com.example.Hospital.Management.System.entity;

import jakarta.persistence.*;
import java.time.LocalDate;
import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table(name = "reports")
public class PatientReport {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String reportName;
    private String result;

    private LocalDate date;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "patient_id")
    @JsonIgnore   // 🔥 IMPORTANT CHANGE
    private Patient patient;

    // Getters & Setters

    public Long getId() {
        return id;
    }

    public String getReportName() {
        return reportName;
    }

    public String getResult() {
        return result;
    }

    public LocalDate getDate() {
        return date;
    }

    public Patient getPatient() {
        return patient;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public void setReportName(String reportName) {
        this.reportName = reportName;
    }

    public void setResult(String result) {
        this.result = result;
    }

    public void setDate(LocalDate date) {
        this.date = date;
    }

    public void setPatient(Patient patient) {
        this.patient = patient;
    }
}

